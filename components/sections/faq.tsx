import { faqs } from "@/lib/site-data";
import { SectionHeading } from "@/components/common/section-heading";

export function FAQ() {
  return (
    <section className="relative py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="FAQ"
          title="Clear answers before we build."
          copy="A quick view of how Innovexa Digital thinks about projects, AI, design, development, and growth."
        />
        <div className="mx-auto grid max-w-4xl gap-4">
          {faqs.map((item) => (
            <details key={item.question} data-gsap-reveal className="glass-dark group rounded-[1.25rem] p-6">
              <summary className="cursor-pointer list-none font-display text-xl font-semibold text-white">
                {item.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-white/56">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
