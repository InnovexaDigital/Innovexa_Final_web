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
        <div className="relative grid gap-4 lg:grid-cols-7">
          <div className="absolute left-0 right-0 top-14 hidden h-px bg-gradient-to-r from-transparent via-cyan-glow/40 to-transparent lg:block" />
          {processSteps.map(({ title, icon: Icon, detail }, index) => (
            <div key={title} data-gsap-reveal data-tilt className="glass-dark relative rounded-[1.35rem] p-5">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-glow/10 text-cyan-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-display text-3xl font-semibold text-white/14">0{index + 1}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/52">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
