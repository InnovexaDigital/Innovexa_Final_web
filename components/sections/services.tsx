import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site-data";
import { SectionHeading } from "@/components/common/section-heading";

export function Services() {
  return (
    <section id="services" className="section-band py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Services"
          title="One premium team for technology, AI, growth, and creative execution."
          copy="Innovexa Digital combines strategy, design, engineering, automation, marketing, and content into systems that help businesses scale with clarity."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map(({ title, icon: Icon, detail }) => (
            <a
              key={title}
              href="#contact"
              data-gsap-reveal
              data-tilt
              className="group gradient-border glass-dark relative min-h-72 overflow-hidden rounded-[1.5rem] p-6"
            >
              <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-cyan-glow/10 blur-3xl transition group-hover:bg-cyan-glow/20" />
              <div className="relative grid h-13 w-13 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-cyan-glow">
                <Icon className="service-icon h-6 w-6" />
              </div>
              <h3 className="relative mt-8 font-display text-2xl font-semibold leading-tight text-white">{title}</h3>
              <p className="relative mt-4 text-sm leading-7 text-white/55">{detail}</p>
              <div className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100">
                Discuss project <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
