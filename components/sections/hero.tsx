import Image from "next/image";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/site-data";

const marqueeItems = [
  company.name,
  "Web Development",
  "AI Automation",
  "Mobile Apps",
  "Digital Marketing",
  "Creative Content",
  company.tagline
];

export function Hero() {
  return (
    <section
      id="home"
      className="section-band relative min-h-screen overflow-hidden bg-luxury-radial pb-12 pt-24 sm:pt-28 lg:pt-24"
    >
      <div className="absolute inset-0 bg-mesh-grid bg-[size:58px_58px] opacity-[0.09]" />
      <div className="absolute left-[10%] top-20 hidden h-72 w-72 rounded-full bg-[#00D4FF]/20 blur-[120px] sm:block" />
      <div className="absolute right-[8%] top-28 hidden h-96 w-96 rounded-full bg-[#6D28D9]/18 blur-[140px] sm:block" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#040712]/92 via-[#040712]/65 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(56,189,248,.12),transparent_34%),radial-gradient(circle_at_82%_30%,rgba(139,92,246,.14),transparent_40%),radial-gradient(circle_at_55%_72%,rgba(56,189,248,.09),transparent_36%)]" />

      <div className="section-shell grid min-h-[calc(100vh-12rem)] w-full items-center justify-between gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:gap-16 xl:gap-20">
        <div className="relative z-10 flex max-w-[42rem] flex-col items-start">
          <span
            className="reveal-up inline-flex items-center gap-2 rounded-full border border-cyan-glow/25 bg-white/[0.055] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100 shadow-[0_0_28px_rgba(0,217,255,.14)] backdrop-blur-xl"
            style={{ animationDelay: "0.05s" }}
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-glow" />
            {company.tagline}
          </span>

          <h1 className="rise-up mt-6 text-balance font-display text-[2.35rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl sm:leading-[1.03] md:text-[3.5rem] md:leading-[1] lg:text-[4rem] lg:leading-[0.98] xl:text-[4.6rem] xl:leading-[0.96]">
            Web, Mobile App &amp; <span className="premium-text">AI Automation</span> Agency in Chennai
          </h1>

          <p
            className="reveal-up mt-6 max-w-[34rem] text-base leading-7 text-white/64 sm:text-lg sm:leading-8 md:text-xl"
            style={{ animationDelay: "0.12s" }}
          >
            INNOVEXA DIGITAL is a Chennai-based digital agency engineering premium websites, mobile apps, AI automation systems, billing software, and growth campaigns that help businesses build, automate, and scale — locally and worldwide.
          </p>

          <div
            className="reveal-up mt-9 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
            style={{ animationDelay: "0.2s" }}
          >
            <Button asChild size="lg" variant="premium" className="group w-full sm:w-auto">
              <a href="#contact">
                Get Free Consultation
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="glass" className="group w-full border border-white/12 bg-white/[0.05] sm:w-auto">
              <a href="#portfolio">
                <Play className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                View Our Work
              </a>
            </Button>
          </div>
        </div>

        <div
          className="reveal-scale relative mx-auto flex w-full max-w-[420px] items-center justify-center sm:max-w-[520px] lg:max-w-[620px]"
          style={{ animationDelay: "0.15s" }}
          data-parallax="-4"
        >
          <div className="hero-float relative aspect-square w-full">
            <Image
              src="/hero/innovexa-growth-logo-cutout.webp"
              alt="INNOVEXA DIGITAL — web, mobile app and AI automation agency in Chennai"
              fill
              priority
              sizes="(min-width: 1024px) 620px, (min-width: 640px) 520px, 420px"
              className="object-contain drop-shadow-[0_30px_70px_rgba(18,231,255,.2)]"
            />
          </div>
        </div>
      </div>

      <div className="section-shell mt-10 overflow-hidden border-y border-white/10 py-4">
        <div className="flex min-w-max auto-marquee items-center gap-12 pr-12 text-sm font-semibold uppercase tracking-[0.24em] text-white/30">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
