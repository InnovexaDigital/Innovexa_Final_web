# Deploy INNOVEXA DIGITAL to Vercel + Get Ranked on Google

This is the full, step-by-step playbook: deploy the site to production, then get it
indexed and ranking on Google. Follow the parts in order.

---

## PART A — Deploy to Vercel

### Step 0 — Push the latest code to GitHub
Vercel deploys from GitHub, so the newest code must be pushed first.
`.env.local` is git-ignored, so your secrets are **not** uploaded.

```bash
git add -A
git commit -m "Production-ready: responsive UI, SEO, landing pages, Google Sheets form"
git push origin main
```

### Step 1 — Create a Vercel account
1. Go to <https://vercel.com/signup>.
2. Click **Continue with GitHub** and sign in with the account that owns
   `InnovexaDigital/Innovexa_Final_web`.
3. Authorize Vercel to access your repositories.

### Step 2 — Import the project
1. Vercel dashboard → **Add New… → Project**.
2. Find **Innovexa_Final_web** → **Import**.
3. Vercel auto-detects **Next.js**. Leave **Framework Preset**, **Build Command**
   (`next build`), and **Output** at their defaults. **Root Directory** = `./`.
4. **Do not deploy yet** — add the environment variables first (next step).

### Step 3 — Add Environment Variables (do this before the first deploy)
On the import screen open **Environment Variables** and add the following
(or later under **Settings → Environment Variables**). Set each for **Production**
(and Preview if you want previews to work too):

| Name | Value | Notes |
|---|---|---|
| `GOOGLE_SHEET_WEBHOOK_URL` | your `…/exec` URL | The Apps Script Web App URL. Server-side only. |
| `NEXT_PUBLIC_SITE_URL` | `https://innovexadigital.in` | Your final domain. Drives canonical tags, sitemap, OG. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | *(leave blank for now)* | Fill in during Part B, Step 1. |

> If you don't have the custom domain connected yet, you can temporarily leave
> `NEXT_PUBLIC_SITE_URL` blank — Vercel will use the deployment URL. **Set it to the
> real domain and redeploy once the domain is live** so Google sees the correct
> canonical URLs.

### Step 4 — Deploy
1. Click **Deploy**. The build takes ~2–3 minutes.
2. You'll get a live URL like `https://innovexa-final-web.vercel.app`. Open it and
   confirm the site loads.

### Step 5 — Connect your GoDaddy domain (`innovexadigital.in`)
**In Vercel first:**
1. **Settings → Domains → Add** → enter `innovexadigital.in` → Add. Add `www.innovexadigital.in` too.
2. Vercel will say "Invalid Configuration" and show the exact **A** and **CNAME** values it
   wants. Keep this tab open.

**Then in GoDaddy:**
3. Sign in → **My Products** → next to the domain click **DNS** (or **Manage DNS**).
4. Under **DNS Records**, set these (edit the existing record if one already exists, else **Add**):
   | Type | Name | Value | TTL |
   |---|---|---|---|
   | `A` | `@` | the IP Vercel shows (commonly `76.76.21.21`) | 600 sec |
   | `CNAME` | `www` | `cname.vercel-dns.com` | 1 Hour |
   - ⚠️ Use the **exact** A-record IP Vercel displays for you — don't assume.
   - Delete GoDaddy's default **parked** `A @` record and any **Domain Forwarding** so they
     don't conflict.
5. Save. Back in Vercel the domain flips to **Valid Configuration** within minutes (sometimes
   up to a few hours). Vercel auto-issues the free HTTPS certificate.
6. In Vercel set `innovexadigital.in` as the **Primary** domain (redirects `www` → apex).
7. Confirm `NEXT_PUBLIC_SITE_URL=https://innovexadigital.in` is set, then **redeploy**
   (Deployments → ⋯ → Redeploy) so all canonical/sitemap URLs use the real domain.

> *Tip:* `.in` domains sometimes need DNS Sec / parking removed in GoDaddy first. If Vercel
> still shows "Invalid" after an hour, double-check there's no leftover `A @` parking record.

### Step 6 — Smoke-test production
Open these and confirm they work on the **live domain**:
- `https://innovexadigital.in/` — homepage
- `https://innovexadigital.in/services/ai-automation` — a service landing page
- `https://innovexadigital.in/digital-agency-chennai` — location page
- `https://innovexadigital.in/sitemap.xml` — should list all pages with the real domain
- `https://innovexadigital.in/robots.txt` — should reference the sitemap
- Submit the **contact form** → confirm a new row appears in your Google Sheet.

Future updates auto-deploy: every `git push` to `main` triggers a new production build.

---

## PART B — Get Indexed & Rank on Google

### Step 1 — Verify the site in Google Search Console (GSC)
1. Go to <https://search.google.com/search-console> → **Add property**.
2. Easiest with this site: choose **URL prefix**, enter `https://innovexadigital.in`.
3. Pick the **HTML tag** method → copy the `content="…"` token.
4. Paste it into Vercel env var `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` →
   **redeploy** → back in GSC click **Verify**. (The site auto-emits the meta tag.)
   - *Alternative (more robust):* use a **Domain** property and add the TXT record
     Google gives you at your registrar — this covers all subdomains and protocols.

### Step 2 — Submit your sitemap
GSC → **Sitemaps** → enter `sitemap.xml` → **Submit**.
(Full URL: `https://innovexadigital.in/sitemap.xml`.) This hands Google every page at once.

### Step 3 — Request indexing for the important pages
GSC → **URL Inspection** → paste a URL → **Request Indexing**. Do this for:
- The homepage
- Each service page (`/services/website-development`, `/mobile-app-development`,
  `/ai-automation`, `/billing-software-development`, `/seo`)
- `/digital-agency-chennai`

This nudges Google to crawl them within hours–days instead of waiting weeks.

### Step 4 — Add Bing (free extra traffic, also feeds AI search)
<https://www.bing.com/webmasters> → **Import from Google Search Console** (one click) →
submit the sitemap. Covers Bing, DuckDuckGo, and some AI assistants.

### Step 5 — Create a Google Business Profile (biggest local-ranking lever)
Schema markup alone **cannot** put you in the Google "map pack." A verified Google
Business Profile can. This is the #1 thing for ranking on *"digital agency Chennai"*.
1. <https://business.google.com> → create/claim **INNOVEXA DIGITAL**.
2. Category: *Website designer* (+ *Marketing agency*, *Software company*).
3. Address: **New Mettu Street, Thirukkazhukundram – 603109** (or set as a
   *service-area business* if you don't take walk-ins).
4. Phone: **+91 95660 61075**, Website: `https://innovexadigital.in`, hours, photos.
5. **Verify** (postcard/phone/email). Keep the Name/Address/Phone **identical** to the
   site footer — consistency is a ranking signal.

### Step 6 — Build authority (what actually moves rankings over time)
- **Reviews:** ask happy clients to leave Google reviews — huge for local ranking + trust.
- **Backlinks & citations:** list the business (same NAP) on Justdial, Sulekha, IndiaMART,
  Clutch, GoodFirms, LinkedIn company page, Instagram bio link.
- **Fresh content:** publish case studies / blog posts targeting real queries
  ("billing software for retail shops in Chennai", etc.). Fresh, relevant content wins long-tail.
- **Social signals:** keep Instagram/LinkedIn active and linked to the site.

### Step 7 — Monitor & improve
- GSC → **Performance**: see the queries you appear for, impressions, clicks, average
  position. Improve pages sitting on page 2 (positions 11–20) first — quickest wins.
- GSC → **Pages**: confirm pages are *Indexed*; fix anything marked "not indexed."
- GSC → **Core Web Vitals** and <https://pagespeed.web.dev>: keep performance healthy.

---

## Realistic expectations
- **Indexing:** a few days to ~2 weeks after submitting the sitemap.
- **Brand term** ("Innovexa Digital"): usually ranks #1 within days–weeks.
- **Competitive terms** ("web development Chennai", "AI automation agency"): months of
  work — driven by **backlinks, reviews, Google Business Profile, and fresh content**, not
  just on-page SEO. The site's technical/on-page SEO is already maxed (Lighthouse SEO 100/100);
  the rest is authority you build over time. No tool or agency can *guarantee* #1, but this
  is the complete, correct foundation to compete for it.

---

## Quick reference — environment variables
| Variable | Where used | Required |
|---|---|---|
| `GOOGLE_SHEET_WEBHOOK_URL` | Contact form → Google Sheet (server-side) | **Yes** |
| `NEXT_PUBLIC_SITE_URL` | Canonical, sitemap, robots, Open Graph | Recommended |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console meta-tag verification | Optional |
