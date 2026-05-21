import { BrainCircuit, CheckCircle2 } from "lucide-react";
import { solutions } from "@/lib/site-data";
import { SectionHeading } from "@/components/common/section-heading";

export function Solutions() {
  return (
    <section id="solutions" className="section-band relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(18,231,255,.1),transparent_32%)]" />
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <SectionHeading
          align="left"
          eyebrow="AI Operating Layer"
          title="Holographic workflows that move leads, teams, and revenue."
          copy="Innovexa maps your business process, then builds AI workflows that connect forms, CRM, WhatsApp, chat, voice, analytics, and fulfillment."
        />
        <div data-gsap-reveal data-tilt className="gradient-border glass relative min-h-[560px] overflow-hidden rounded-[2rem] p-4 shadow-[0_30px_120px_rgba(0,217,255,.1)] md:p-6">
          <div className="absolute inset-x-8 top-6 flex justify-between opacity-60">
            {Array.from({ length: 9 }).map((_, index) => (
              <span key={index} className="h-1 w-1 rounded-full bg-cyan-glow shadow-[0_0_16px_rgba(0,217,255,.9)]" />
            ))}
          </div>
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-glow/20 blur-[90px]" />
          <div className="absolute inset-0 bg-mesh-grid bg-[size:44px_44px] opacity-[0.06]" />
          <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 760 560" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="workflow-line" x1="0" x2="1">
                <stop stopColor="#00D9FF" stopOpacity=".05" />
                <stop offset=".5" stopColor="#00D9FF" />
                <stop offset="1" stopColor="#7A5CFF" stopOpacity=".08" />
              </linearGradient>
            </defs>
            {[
              "M380 280 C240 250 178 142 90 102",
              "M380 280 C244 270 170 220 78 220",
              "M380 280 C238 310 174 374 92 438",
              "M380 280 C302 152 302 96 380 56",
              "M380 280 C518 248 584 140 670 102",
              "M380 280 C520 270 590 220 682 220",
              "M380 280 C522 314 590 374 670 438",
              "M380 280 C462 154 462 96 380 56"
            ].map((path) => (
              <path key={path} d={path} stroke="url(#workflow-line)" strokeWidth="1.4" strokeDasharray="7 9">
                <animate attributeName="stroke-dashoffset" from="80" to="0" dur="4s" repeatCount="indefinite" />
              </path>
            ))}
          </svg>
          <div className="relative grid min-h-[520px] place-items-center">
            <div className="absolute grid h-44 w-44 place-items-center rounded-full border border-cyan-glow/35 bg-cyan-glow/10 shadow-[0_0_100px_rgba(0,217,255,.25)]">
              <div className="absolute inset-3 rounded-full border border-violet-glow/35 animate-pulseGlow" />
              <BrainCircuit className="mb-16 h-8 w-8 text-cyan-glow" />
              <div className="absolute font-display text-center text-3xl font-bold text-white">AI<br />CORE</div>
            </div>
            {solutions.map((item, index) => (
              <WorkflowNode key={item} label={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowNode({ label, index }: { label: string; index: number }) {
  const positions = [
    "left-4 top-8 md:left-8",
    "left-4 top-[34%] md:left-10",
    "left-4 bottom-12 md:left-8",
    "left-1/2 top-2 -translate-x-1/2",
    "right-4 top-8 md:right-8",
    "right-4 top-[34%] md:right-10",
    "right-4 bottom-12 md:right-8",
    "left-1/2 bottom-2 -translate-x-1/2"
  ];

  return (
    <div data-tilt className={`glass-dark absolute flex w-[min(230px,42vw)] items-center gap-3 rounded-2xl p-4 ${positions[index]}`}>
      <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-glow" />
      <span className="text-sm font-medium text-white/76">{label}</span>
    </div>
  );
}
