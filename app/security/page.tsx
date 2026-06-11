import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security",
  description: "How INNOVEXA DIGITAL keeps your data and communications secure."
};

export default function SecurityPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-white/50 hover:text-cyan-400">
          ← Back to home
        </Link>

        <h1 className="font-display text-4xl font-semibold text-white">Security</h1>
        <p className="mt-3 text-sm text-white/40">Last updated: June 2026</p>

        <div className="mt-10 space-y-8 text-base leading-8 text-white/65">
          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Data Transmission</h2>
            <p>All communication between your browser and our website is encrypted via HTTPS/TLS. Form submissions are transmitted securely and not stored on our web servers.</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Third-Party Services</h2>
            <p>We use trusted third-party services (such as EmailJS for form delivery) that maintain their own security standards. We do not store credit card numbers or sensitive financial data.</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Vulnerability Reporting</h2>
            <p>
              If you discover a security issue with our website or services, please report it responsibly to{" "}
              <a href="mailto:innovexa.digitalservices@gmail.com" className="text-cyan-400 hover:underline">
                innovexa.digitalservices@gmail.com
              </a>
              . We will acknowledge and address all valid reports promptly.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Access Controls</h2>
            <p>Project files and client communications are accessible only to relevant team members. We do not share client project details or data with outside parties.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
