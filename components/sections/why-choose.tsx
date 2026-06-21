import { reasons } from "@/lib/site-data";
import { SectionHeading } from "@/components/common/section-heading";

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="absolute inset-x-0 top-24 h-80 bg-gradient-to-r from-cyan-glow/10 via-violet-glow/10 to-transparent blur-3xl" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Premium design, serious engineering, and business growth thinking in one place."
          copy="Innovexa Digital is built for founders and businesses that want more than a pretty website. We build systems with strategy, automation, and measurable outcomes."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, icon: Icon, detail }) => (
            <div key={title} data-gsap-reveal data-tilt className="gradient-border glass-dark rounded-[1.5rem] p-6">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-cyan-glow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/55">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
