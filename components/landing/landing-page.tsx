import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Sparkles } from "lucide-react";
import { LandingHeader } from "@/components/landing/landing-header";
import { Footer } from "@/components/layout/footer";
import { Breadcrumbs, type Crumb } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbSchema,
  faqPageSchema,
  pageGraph,
  serviceSchema,
  webPageSchema
} from "@/lib/structured-data";
import { siteUrl } from "@/lib/site-config";
import { landingPages, type LandingPage as LandingPageData } from "@/lib/landing-pages";

type Props = {
  page: LandingPageData;
  /** URL path of this page, e.g. "/services/website-development" or "/digital-agency-chennai". */
  path: string;
  /** Breadcrumb trail (last item = current page). */
  crumbs: Crumb[];
  /** When true, emit Service schema (service pages); the location page is a WebPage only. */
  isService?: boolean;
};

const relatedLinks = landingPages
  .filter((p) => p.slug !== "digital-agency-chennai")
  .map((p) => ({
    label: p.h1.replace(/ in Chennai.*$/i, "").replace(/ Company$/i, "").trim(),
    href: p.slug === "digital-agency-chennai" ? `/${p.slug}` : `/services/${p.slug}`
  }));

export function LandingPage({ page, path, crumbs, isService = true }: Props) {
  const pageUrl = `${siteUrl}${path}`;
  const nodes = [
    webPageSchema({ path, name: page.metaTitle, description: page.metaDescription }),
    breadcrumbSchema(crumbs),
    faqPageSchema(page.faqs, pageUrl)
  ];
  if (isService) {
    nodes.splice(1, 0, serviceSchema({ name: page.h1, description: page.intro, path }));
  }

  return (
    <>
      <JsonLd data={pageGraph(nodes)} />
      <LandingHeader />

      <main className="overflow-x-clip pt-28 sm:pt-32">
        {/* Hero */}
        <section className="section-band relative pb-12">
          <div className="absolute left-[12%] top-10 h-64 w-64 rounded-full bg-[#00D4FF]/15 blur-[120px]" />
          <div className="absolute right-[10%] top-16 h-72 w-72 rounded-full bg-[#6D28D9]/15 blur-[140px]" />
          <div className="section-shell">
            <Breadcrumbs crumbs={crumbs} />
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-glow/25 bg-cyan-glow/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100">
              <Sparkles className="h-3.5 w-3.5 text-cyan-glow" />
              INNOVEXA DIGITAL
            </span>
            <h1 className="mt-5 max-w-4xl text-balance font-display text-[2.1rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl sm:leading-[1.03] lg:text-6xl">
              {page.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/64 sm:text-lg sm:leading-8">
              {page.heroSubhead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[linear-gradient(110deg,#1D9BF0,#3B82F6)] px-6 text-sm font-semibold text-white transition hover:bg-[linear-gradient(110deg,#38BDF8,#2563EB)]"
              >
                Get a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#portfolio"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-6 text-sm font-semibold text-white/80 transition hover:text-white"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="relative py-10 sm:py-14">
          <div className="section-shell">
            <p className="max-w-3xl text-base leading-8 text-white/70 sm:text-lg">{page.intro}</p>
          </div>
        </section>

        {/* Sections + features */}
        <section className="relative pb-6">
          <div className="section-shell grid gap-6 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
            <div className="grid gap-4">
              {page.sections.map((section) => (
                <article key={section.heading} className="glass-dark rounded-[1.4rem] p-6 sm:p-7">
                  <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                    {section.heading}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-white/60">{section.body}</p>
                </article>
              ))}
            </div>

            <aside className="glass-dark h-fit rounded-[1.4rem] p-6 sm:p-7 lg:sticky lg:top-28">
              <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                What you get
              </h2>
              <ul className="mt-5 grid gap-3">
                {page.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-white/70">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan-glow/15 text-cyan-glow">
                      <Check className="h-3 w-3" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative py-14 sm:py-20">
          <div className="section-shell mx-auto max-w-3xl">
            <h2 className="text-center font-display text-2xl font-semibold text-white sm:text-3xl">
              Frequently asked questions
            </h2>
            <div className="mt-8 grid gap-4">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="glass-dark group rounded-[1.25rem] p-5 sm:p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-white sm:text-lg [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <ChevronDown className="h-5 w-5 shrink-0 text-cyan-glow transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-white/56">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-10">
          <div className="section-shell">
            <div className="glass-dark relative overflow-hidden rounded-[1.6rem] p-8 text-center sm:p-12">
              <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-cyan-glow/15 blur-[80px]" />
              <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-violet-glow/15 blur-[80px]" />
              <h2 className="relative font-display text-2xl font-semibold text-white sm:text-3xl">
                {page.ctaHeading}
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-sm leading-7 text-white/64 sm:text-base">
                {page.ctaText}
              </p>
              <Link
                href="/#contact"
                className="relative mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[linear-gradient(110deg,#1D9BF0,#3B82F6)] px-7 text-sm font-semibold text-white transition hover:bg-[linear-gradient(110deg,#38BDF8,#2563EB)]"
              >
                Start your project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Related services (internal linking) */}
        <section className="relative pb-16 pt-4 sm:pb-24">
          <div className="section-shell">
            <h2 className="font-display text-lg font-semibold text-white/80">Explore more services</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {relatedLinks
                .filter((link) => link.href !== path)
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70 transition hover:border-cyan-glow/30 hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
