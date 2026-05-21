import { testimonials } from "@/lib/site-data";
import { SectionHeading } from "@/components/common/section-heading";

export function Testimonials() {
  return (
    <section className="section-band py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="Client stories will be added with verified project feedback."
          copy="We keep this section honest: no fake company data, no invented client quotes. Verified stories can be added as projects go live."
        />
        <div className="mx-auto grid max-w-3xl gap-4">
          {testimonials.map((item) => (
            <figure key={item.name} data-gsap-reveal className="glass-dark rounded-[1.5rem] p-8 text-center">
              <blockquote className="font-display text-3xl font-semibold text-white">{item.quote}</blockquote>
              <figcaption className="mt-6 text-sm text-white/50">
                {item.name} / {item.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
