import { processSteps } from "@/lib/site-data";
import { SectionHeading } from "@/components/common/section-heading";

export function Process() {
  return (
    <section className="relative py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Process"
          title="From discovery to scale, every step is designed to reduce guesswork."
          copy="A clear execution path for businesses that need strategy, design, development, automation, launch, and measurable improvement."
        />
        <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="absolute left-[12.5%] right-[12.5%] top-14 hidden h-px bg-gradient-to-r from-transparent via-cyan-glow/45 to-transparent lg:block" />
          {processSteps.map(({ title, icon: Icon, detail }, index) => (
            <div
              key={title}
              data-gsap-reveal
              data-tilt
              className="glass-dark relative z-10 min-h-[21rem] rounded-[1.35rem] p-6"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-glow/10 bg-[#0b2b34] text-cyan-glow shadow-[0_0_24px_rgba(18,231,255,.08)]">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-display text-3xl font-semibold text-white/20">0{index + 1}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/58">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
