import { ArrowRight, CheckCircle2 } from "lucide-react";
import { pricing } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/common/section-heading";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="section-band py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Engagements"
          title="Enterprise-grade outcomes with clear paths to start."
          copy="Choose the launch path that fits your growth stage. Every engagement starts with strategy and ends with a measurable system."
        />
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {pricing.map((plan) => (
            <article
              key={plan.name}
              data-gsap-reveal
              data-tilt
              className={cn(
                "gradient-border rounded-[1.75rem] p-6 transition hover:-translate-y-2 hover:shadow-glow",
                plan.featured ? "glass shadow-glow" : "glass-dark"
              )}
            >
              {plan.featured && (
                <span className="mb-5 inline-flex rounded-full bg-cyan-glow px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-950">
                  Recommended
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-4 font-display text-4xl font-bold text-white">{plan.price}</p>
              <p className="mt-4 min-h-14 text-sm leading-6 text-white/52">{plan.detail}</p>
              <div className="my-6 h-px bg-white/10" />
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-white/68">
                    <CheckCircle2 className="h-4 w-4 text-cyan-glow" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild variant={plan.featured ? "premium" : "glass"} className="mt-8 w-full">
                <a href="#contact">Start {plan.name} <ArrowRight className="h-4 w-4" /></a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
