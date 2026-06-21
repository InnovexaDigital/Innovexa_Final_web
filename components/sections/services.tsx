import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site-data";
import { serviceSlugByTitle } from "@/lib/landing-pages";
import { SectionHeading } from "@/components/common/section-heading";

const accents = [
  "from-cyan-400/80 to-blue-500/80",
  "from-violet-400/80 to-fuchsia-500/80",
  "from-sky-400/80 to-indigo-500/80",
  "from-cyan-300/80 to-violet-500/80"
];

const cardClass =
  "group gradient-border glass-dark relative flex min-h-72 flex-col overflow-hidden rounded-[1.5rem] p-6";

export function Services() {
  return (
    <section id="services" className="section-band py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Services"
          title="One premium team for technology, AI, growth, and creative execution."
          copy="From our base in Chennai, Innovexa Digital combines strategy, design, engineering, AI automation, marketing, and content into systems that help businesses scale with clarity — across India and worldwide."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map(({ title, icon: Icon, detail }, index) => {
            const accent = accents[index % accents.length];
            const slug = serviceSlugByTitle[title];
            const inner = (
              <>
                <span
                  className={`absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r ${accent} opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100`}
                />
                <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-cyan-glow/10 blur-3xl transition group-hover:bg-cyan-glow/20" />
                <div className="relative grid h-13 w-13 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-cyan-glow shadow-[inset_0_1px_0_rgba(255,255,255,.12)] transition group-hover:border-cyan-glow/30">
                  <span className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${accent} opacity-0 transition-opacity duration-500 group-hover:opacity-20`} />
                  <Icon className="service-icon relative h-6 w-6" />
                </div>
                <h3 className="relative mt-8 font-display text-2xl font-semibold leading-tight text-white">{title}</h3>
                <p className="relative mt-4 flex-1 text-sm leading-7 text-white/55">{detail}</p>
                <div className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100">
                  {slug ? "Explore service" : "Discuss project"}
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </>
            );

            return slug ? (
              <Link key={title} href={`/services/${slug}`} data-gsap-reveal data-tilt className={cardClass}>
                {inner}
              </Link>
            ) : (
              <a key={title} href="#contact" data-gsap-reveal data-tilt className={cardClass}>
                {inner}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
