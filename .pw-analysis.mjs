import { chromium } from "playwright-core";
import fs from "fs";
import path from "path";

const OUT = path.resolve(".playwright-analysis");
fs.mkdirSync(OUT, { recursive: true });

const URL = process.env.PW_URL || "http://localhost:3000/";
const CHROME =
  process.env.PW_CHROME || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const viewports = [
  { name: "desktop", width: 1440, height: 900, dsf: 1 },
  { name: "tablet", width: 768, height: 1024, dsf: 2 },
  { name: "mobile", width: 390, height: 844, dsf: 2 }
];

const report = {};

const browser = await chromium.launch({
  executablePath: CHROME,
  headless: true,
  args: [
    "--enable-webgl",
    "--ignore-gpu-blocklist",
    "--use-gl=angle",
    "--use-angle=swiftshader",
    "--enable-unsafe-swiftshader"
  ]
});

for (const vp of viewports) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: vp.dsf
  });
  const page = await context.newPage();

  const consoleMsgs = [];
  const pageErrors = [];
  const failedRequests = [];
  page.on("console", (m) => {
    const t = m.type();
    if (t === "error" || t === "warning") consoleMsgs.push(`[${t}] ${m.text()}`.slice(0, 300));
  });
  page.on("pageerror", (e) => pageErrors.push(String(e).slice(0, 300)));
  page.on("requestfailed", (r) =>
    failedRequests.push(`${r.failure()?.errorText || "failed"} ${r.url()}`.slice(0, 200))
  );

  const start = Date.now();
  await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 90000 });
  await page.waitForTimeout(2600); // allow hero entrance animations + fonts + canvas

  // Fold (above-the-fold) capture — fast, viewport-sized.
  await page.screenshot({
    path: path.join(OUT, `${vp.name}-01-fold.png`),
    animations: "disabled",
    timeout: 60000
  });

  const overflow = await page.evaluate(() => {
    const de = document.documentElement;
    const docW = de.clientWidth;
    const scrollW = Math.max(de.scrollWidth, document.body.scrollWidth);
    const offenders = [];
    document.querySelectorAll("body *").forEach((el) => {
      const r = el.getBoundingClientRect();
      // Real offenders push the page wider AND start inside the viewport (decorative
      // blobs with negative offsets are clipped, so we skip left < -1).
      if (r.right > docW + 2 && r.left >= -1 && r.width > 0 && r.width < window.innerWidth * 2) {
        offenders.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.className?.toString?.() || "").slice(0, 70),
          right: Math.round(r.right),
          width: Math.round(r.width)
        });
      }
    });
    return {
      viewportWidth: docW,
      scrollWidth: scrollW,
      hasHorizontalScroll: scrollW > docW + 2,
      offenders: offenders.slice(0, 10)
    };
  });

  const checks = await page.evaluate(() => {
    const text = document.body.innerText;
    const imgs = Array.from(document.images);
    return {
      logos: document.querySelectorAll('img[alt="Innovexa Digital"]').length,
      headlinePresent: /Transforming Businesses Through/.test(text),
      ctaPrimary: /Get Free Consultation/.test(text),
      ctaSecondary: /View Our Work/.test(text),
      trustSection: /Trusted capabilities/i.test(text),
      socialProof: /Real businesses\. Real results/i.test(text),
      h1Count: document.querySelectorAll("h1").length,
      h2Count: document.querySelectorAll("h2").length,
      canvasPresent: document.querySelectorAll("canvas").length,
      totalImages: imgs.length,
      imagesNoAlt: imgs.filter((i) => i.getAttribute("alt") === null).length,
      linksNoName: Array.from(document.querySelectorAll("a")).filter(
        (a) => !(a.innerText.trim() || a.getAttribute("aria-label") || a.querySelector("img,svg"))
      ).length,
      buttonsNoName: Array.from(document.querySelectorAll("button")).filter(
        (b) => !(b.innerText.trim() || b.getAttribute("aria-label"))
      ).length
    };
  });

  const perf = await page.evaluate(() => {
    const nav = performance.getEntriesByType("navigation")[0] || {};
    const res = performance.getEntriesByType("resource");
    const byType = {};
    let totalBytes = 0;
    res.forEach((r) => {
      const t = r.initiatorType || "other";
      byType[t] = (byType[t] || 0) + 1;
      totalBytes += r.transferSize || 0;
    });
    return {
      domContentLoadedMs: Math.round(nav.domContentLoadedEventEnd || 0),
      loadMs: Math.round(nav.loadEventEnd || 0),
      resourceCount: res.length,
      transferKB: Math.round(totalBytes / 1024),
      byType
    };
  });

  // Section captures: scroll each major section into view (triggers GSAP reveals)
  // and take a viewport-sized screenshot. Avoids the slow full-page WebGL stitch.
  const sections = [
    ["#services", "02-services"],
    ["#portfolio", "03-portfolio"],
    ["#testimonials", "04-social-proof"],
    ["#contact", "05-contact"]
  ];
  for (const [selector, label] of sections) {
    const el = await page.$(selector);
    if (!el) continue;
    await page.evaluate((sel) => {
      const node = document.querySelector(sel);
      if (node) node.scrollIntoView({ block: "start", behavior: "instant" });
    }, selector);
    await page.waitForTimeout(900); // let reveals + lazy content settle
    await page
      .screenshot({
        path: path.join(OUT, `${vp.name}-${label}.png`),
        animations: "disabled",
        timeout: 45000
      })
      .catch((e) => console.error(`screenshot ${vp.name}-${label} failed: ${e.message}`));
  }
  await page.evaluate(() => window.scrollTo(0, 0));

  report[vp.name] = {
    measuredLoadMs: Date.now() - start,
    overflow,
    checks,
    perf,
    consoleMsgs,
    pageErrors,
    failedRequests
  };
  await context.close();
  // Persist incrementally so a later viewport failure can't lose earlier results.
  fs.writeFileSync(path.join(OUT, "report.json"), JSON.stringify(report, null, 2));
}

await browser.close();
console.log(JSON.stringify(report, null, 2));
