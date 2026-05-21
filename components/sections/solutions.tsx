import { aiSolutions } from "@/lib/site-data";
import { SectionHeading } from "@/components/common/section-heading";

export function Solutions() {
  return (
    <section id="ai" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,212,255,.13),transparent_28%),radial-gradient(circle_at_72%_64%,rgba(139,92,246,.14),transparent_30%)]" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="AI Solutions"
          title="Automation that thinks through the work, not just around it."
          copy="We build practical AI systems for lead capture, WhatsApp flows, CRM updates, content pipelines, dashboards, and agentic business operations."
        />
        <div className="grid gap-6 lg:grid-cols-[.92fr_1.08fr]">
          <div data-gsap-reveal data-tilt className="gradient-border glass-dark relative min-h-[520px] overflow-hidden rounded-[2rem] p-6">
            <div className="absolute inset-8 rounded-full border border-cyan-glow/20" />
            <div className="absolute inset-20 rounded-full border border-violet-glow/25" />
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-glow/20 blur-3xl" />
            <div className="relative grid h-full place-items-center">
              <div className="relative h-72 w-72">
                <div className="absolute inset-0 rounded-full border border-cyan-glow/35 bg-cyan-glow/5 shadow-glow animate-pulseGlow" />
                <div className="absolute inset-12 rounded-full border border-violet-glow/35 bg-violet-glow/10 shadow-violet" />
                <div className="absolute inset-24 rounded-full bg-white text-slate-950 grid place-items-center font-display text-3xl font-black">
                  AI
                </div>
                {["Lead", "CRM", "WhatsApp", "Reports", "Content", "Sales"].map((node, index) => {
                  const angle = (index / 6) * Math.PI * 2;
                  const x = Math.cos(angle) * 132;
                  const y = Math.sin(angle) * 132;
                  return (
                    <span
                      key={node}
                      className="absolute rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs text-white/78 backdrop-blur"
                      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: "translate(-50%, -50%)" }}
                    >
                      {node}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {aiSolutions.map(({ title, icon: Icon, detail }) => (
              <div key={title} data-gsap-reveal data-tilt className="glass-dark rounded-[1.35rem] p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-glow/10 text-cyan-glow">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/54">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
