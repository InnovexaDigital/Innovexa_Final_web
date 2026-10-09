import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { company } from "@/lib/site-data";

const benefits = [
  "Website speed, design and mobile experience, reviewed end to end",
  "Google Business Profile and local search visibility check",
  "A clear, prioritised action list — no jargon and no obligation"
];

export function FreeAuditSection() {
  const phone = company.whatsapp.replace(/\D/g, "");
  const whatsappHref =
    "https://wa.me/" +
    phone +
    "?text=" +
    encodeURIComponent(
      "Hi Innovexa Digital, I would like a free website and Google presence audit for my business."
    );

  return (
    <section
      aria-label="Free website and Google presence audit"
      className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#050914]/85 px-6 py-10 shadow-[0_30px_80px_-40px_rgba(2,6,23,0.9)] sm:px-10 lg:px-14 lg:py-14"
          data-reveal
        >
          <div
            className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl"
            aria-hidden
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-sky-200 uppercase">
                Free Audit
              </p>
              <h2 className="font-display mt-5 text-3xl leading-tight font-semibold text-white sm:text-4xl lg:text-[2.75rem]">
                Get a Free Website &amp;{" "}
                <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                  Google Presence Audit
                </span>
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                Find out what is helping, and what is quietly costing you enquiries. We review your
                website and Google presence and send you a simple, honest report within 24-48 hours.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(110deg,#38bdf8,#2563eb_55%,#7c3aed)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-16px_rgba(37,99,235,0.8)] transition hover:brightness-110"
                >
                  Request My Free Audit
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25d366]/40 bg-[#25d366]/10 px-6 py-3.5 text-sm font-semibold text-[#4be07f] transition hover:bg-[#25d366]/20"
                >
                  <FaWhatsapp className="text-lg" aria-hidden />
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                    <Check className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="text-sm leading-6 text-slate-200">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
