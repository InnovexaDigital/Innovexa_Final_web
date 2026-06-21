import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/landing/landing-page";
import { getLandingPage, locationPageSlug } from "@/lib/landing-pages";

const page = getLandingPage(locationPageSlug);
const path = `/${locationPageSlug}`;

export const metadata: Metadata = page
  ? {
      title: page.metaTitle.replace(/\s*\|\s*innovexa.*$/i, "").trim(),
      description: page.metaDescription,
      alternates: { canonical: path },
      openGraph: {
        title: page.metaTitle,
        description: page.metaDescription,
        url: path,
        type: "website"
      }
    }
  : {};

export default function DigitalAgencyChennaiPage() {
  if (!page) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Digital Agency in Chennai", path }
  ];

  return <LandingPage page={page} path={path} crumbs={crumbs} isService={false} />;
}
