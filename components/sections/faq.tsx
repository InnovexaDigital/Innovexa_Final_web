import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site-data";
import { SectionHeading } from "@/components/common/section-heading";

export function FAQ() {
  return (
    <section id="faq" className="relative py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="FAQ"
          title="Clear answers before we build."
          copy="A quick view of how Innovexa Digital thinks about projects, AI, design, development, and growth."
        />
        <div className="mx-auto grid max-w-4xl gap-4">
          {faqs.map((item) => (
            <details key={item.question} data-gsap-reveal className="glass-dark group rounded-[1.25rem] p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-white sm:text-xl [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown className="h-5 w-5 shrink-0 text-cyan-glow transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm leading-7 text-white/56">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
