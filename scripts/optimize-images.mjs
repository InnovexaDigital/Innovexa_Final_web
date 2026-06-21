// Converts oversized source PNGs to optimized WebP to cut LCP weight, repo size, and
// the on-the-fly image-optimizer cost. Run: node scripts/optimize-images.mjs
import sharp from "sharp";
import fs from "fs";
import path from "path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\//, "")), "..");

const tasks = [
  // Hero is the LCP element — displayed at <=620 CSS px (so <=1240 px @2x).
  { src: "public/hero/innovexa-growth-logo-cutout.png", out: "public/hero/innovexa-growth-logo-cutout.webp", width: 1240, quality: 86, alpha: true },
  // Portfolio cards render at <=380 px (so <=760 px @2x) but keep some headroom.
  { src: "public/portfolio/kl-stall.png", out: "public/portfolio/kl-stall.webp", width: 900, quality: 80 },
  { src: "public/portfolio/siva-sakthi-printers.png", out: "public/portfolio/siva-sakthi-printers.webp", width: 900, quality: 80 },
  { src: "public/portfolio/export-demo.png", out: "public/portfolio/export-demo.webp", width: 900, quality: 80 },
  { src: "public/portfolio/danny-stationary.png", out: "public/portfolio/danny-stationary.webp", width: 900, quality: 80 },
  { src: "public/portfolio/galaxy-beauty-academy.png", out: "public/portfolio/galaxy-beauty-academy.webp", width: 900, quality: 80 }
];

let savedTotal = 0;
for (const t of tasks) {
  const srcPath = path.join(root, t.src);
  const outPath = path.join(root, t.out);
  if (!fs.existsSync(srcPath)) {
    console.log(`SKIP (missing): ${t.src}`);
    continue;
  }
  const before = fs.statSync(srcPath).size;
  await sharp(srcPath)
    .resize({ width: t.width, withoutEnlargement: true })
    .webp({ quality: t.quality, alphaQuality: t.alpha ? 100 : 80, effort: 6 })
    .toFile(outPath);
  const after = fs.statSync(outPath).size;
  savedTotal += before - after;
  console.log(`${t.out}  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
}
console.log(`Total saved: ${(savedTotal / 1024 / 1024).toFixed(2)} MB`);
