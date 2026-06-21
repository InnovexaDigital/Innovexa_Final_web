import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";
import { locationPageSlug, servicePageSlugs } from "@/lib/landing-pages";

// Stable, content-derived dates. Bump these only when the page content actually changes
// so <lastmod> stays trustworthy for crawlers (don't use new Date() / build time).
const HOME_LAST_MODIFIED = new Date("2026-06-20");
const LANDING_LAST_MODIFIED = new Date("2026-06-20");
const LEGAL_LAST_MODIFIED = new Date("2026-06-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages: MetadataRoute.Sitemap = servicePageSlugs.map((slug) => ({
    url: `${siteUrl}/services/${slug}`,
    lastModified: LANDING_LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  return [
    {
      url: `${siteUrl}/`,
      lastModified: HOME_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
      images: [`${siteUrl}/og.png`]
    },
    {
      url: `${siteUrl}/${locationPageSlug}`,
      lastModified: LANDING_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9
    },
    ...servicePages,
    {
      url: `${siteUrl}/privacy`,
      lastModified: LEGAL_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: LEGAL_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${siteUrl}/security`,
      lastModified: LEGAL_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3
    }
  ];
}
