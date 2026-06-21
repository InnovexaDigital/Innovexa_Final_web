/**
 * Canonical site URL used for metadata, Open Graph, robots, and sitemap.
 *
 * Resolution order:
 *  1. NEXT_PUBLIC_SITE_URL — set this in Vercel Project Settings for the production domain.
 *  2. VERCEL_PROJECT_PRODUCTION_URL — auto-provided by Vercel for the production deployment.
 *  3. Fallback to the known production domain.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return "https://innovexadigital.in";
}

export const siteUrl = resolveSiteUrl();
