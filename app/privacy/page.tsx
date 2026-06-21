import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, pageGraph, webPageSchema } from "@/lib/structured-data";

const pageTitle = "Privacy Policy";
const pageDescription =
  "How INNOVEXA DIGITAL collects, uses, and protects your personal information.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: `${pageTitle} | INNOVEXA DIGITAL`,
    description: pageDescription,
    url: "/privacy",
    type: "article"
  }
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy" }
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <JsonLd
        data={pageGraph([
          webPageSchema({ path: "/privacy", name: pageTitle, description: pageDescription }),
          breadcrumbSchema(crumbs)
        ])}
      />
      <div className="mx-auto max-w-2xl">
        <Breadcrumbs crumbs={crumbs} />

        <h1 className="font-display text-4xl font-semibold text-white">Privacy Policy</h1>
        <p className="mt-3 text-sm text-white/40">Last updated: June 2026</p>

        <div className="mt-10 space-y-8 text-base leading-8 text-white/65">
          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Information We Collect</h2>
            <p>When you submit a project inquiry or contact form on our website, we collect your name, company name, email address, phone number, and project details you voluntarily provide. We do not collect data through cookies or analytics beyond what is strictly necessary.</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">How We Use Your Information</h2>
            <p>Information you submit is used solely to respond to your inquiry and discuss your project. We do not sell, trade, or share your personal data with third parties except service providers (such as email platforms) required to deliver our communication.</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Data Retention</h2>
            <p>We retain your contact details only for as long as needed to serve your project or respond to your inquiry. You may request deletion of your data at any time by contacting us directly.</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Contact</h2>
            <p>
              For any privacy-related questions, reach us at{" "}
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
