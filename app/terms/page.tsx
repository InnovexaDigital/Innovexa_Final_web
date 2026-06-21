import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, pageGraph, webPageSchema } from "@/lib/structured-data";

const pageTitle = "Terms of Service";
const pageDescription = "Terms and conditions governing the use of INNOVEXA DIGITAL services.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/terms" },
  openGraph: {
    title: `${pageTitle} | INNOVEXA DIGITAL`,
    description: pageDescription,
    url: "/terms",
    type: "article"
  }
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Terms of Service", path: "/terms" }
];

export default function TermsPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <JsonLd
        data={pageGraph([
          webPageSchema({ path: "/terms", name: pageTitle, description: pageDescription }),
          breadcrumbSchema(crumbs)
        ])}
      />
      <div className="mx-auto max-w-2xl">
        <Breadcrumbs crumbs={crumbs} />

        <h1 className="font-display text-4xl font-semibold text-white">Terms of Service</h1>
        <p className="mt-3 text-sm text-white/40">Last updated: June 2026</p>

        <div className="mt-10 space-y-8 text-base leading-8 text-white/65">
          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Services</h2>
            <p>INNOVEXA DIGITAL provides website development, mobile app development, AI automation, digital marketing, and creative content services. Specific deliverables, timelines, and pricing are defined in individual project agreements or proposals.</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Payments</h2>
            <p>Payment terms are agreed upon per project. We typically require a deposit before work begins, with the balance due at agreed milestones or project completion. All fees are non-refundable once the corresponding work phase is delivered.</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Intellectual Property</h2>
            <p>Upon full payment, clients receive ownership of final deliverables. INNOVEXA DIGITAL retains the right to showcase completed work in its portfolio unless otherwise agreed in writing.</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Limitation of Liability</h2>
            <p>Our liability is limited to the amount paid for the specific service in question. We are not liable for indirect or consequential damages arising from the use of our deliverables.</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Contact</h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a href="mailto:innovexa.digitalservices@gmail.com" className="text-cyan-400 hover:underline">
                innovexa.digitalservices@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
