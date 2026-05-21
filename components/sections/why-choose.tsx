import { Check, Gauge, Layers3, LineChart, Shield, WandSparkles } from "lucide-react";
import { reasons } from "@/lib/site-data";
import { SectionHeading } from "@/components/common/section-heading";

const icons = [WandSparkles, Gauge, Layers3, LineChart, Shield, Check];

export function WhyChoose() {
  return (
    <section className="section-band py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Why INNOVEXA"
          title="Why modern businesses choose Innovexa"
          copy="Strategy, design, engineering, AI, and growth are treated as one operating system so every touchpoint compounds."
        />
        <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
          <div data-gsap-reveal data-tilt className="gradient-border glass rounded-[2rem] p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason, index) => {
                const Icon = icons[index];
                return (
                  <a key={reason} href="#contact" data-tilt className="block rounded-3xl border border-white/10 bg-white/[0.055] p-5 transition hover:-translate-y-1 hover:bg-cyan-glow/10">
                    <Icon className="mb-8 h-6 w-6 text-cyan-glow" />
                    <h3 className="font-display text-xl font-semibold text-white">{reason}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/50">
                      Built with measurable outcomes, premium craft, and long-term maintainability in mind.
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
          <div data-gsap-reveal className="space-y-5">
            {[
              ["Speed to market", "43% faster launch cycles"],
              ["Automation depth", "12+ connected systems"],
              ["Design quality", "Boardroom-ready brand trust"]
            ].map(([label, value]) => (
              <div key={label} data-tilt className="glass-dark rounded-[2rem] p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-white/35">{label}</p>
                <p className="mt-4 font-display text-3xl font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
