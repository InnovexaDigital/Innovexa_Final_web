import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/landing/landing-page";
import { getLandingPage, servicePageSlugs } from "@/lib/landing-pages";

// Only the known service slugs are valid; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return servicePageSlugs.map((slug) => ({ slug }));
}

function brandless(title: string) {
  return title.replace(/\s*\|\s*innovexa.*$/i, "").trim();
}

function shortName(h1: string) {
  return h1.replace(/\s*(Company\s*)?in Chennai.*$/i, "").trim();
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return {};
  const path = `/services/${page.slug}`;
  return {
    title: brandless(page.metaTitle),
    description: page.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: path,
      type: "website"
    }
  };
}

export default async function ServiceLandingPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();

  const path = `/services/${page.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: shortName(page.h1), path }
  ];

  return <LandingPage page={page} path={path} crumbs={crumbs} isService />;
}
