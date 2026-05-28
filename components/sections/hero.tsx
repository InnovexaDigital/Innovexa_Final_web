"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Activity, Shield, Rocket } from "lucide-react";
import type { ComponentType } from "react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/site-data";
import { Logo } from "@/components/common/logo";
import { useCountUp } from "@/hooks/use-count-up";

function MetricCard({
  end,
  suffix,
  label,
  Icon,
  delay
}: {
  end: number;
  suffix: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const value = useCountUp(ref, end, 1300);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className="group relative min-h-[118px] overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(11,16,30,.78),rgba(7,12,22,.55))] p-4 shadow-[0_18px_50px_rgba(0,0,0,.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-glow/30 hover:shadow-[0_20px_60px_rgba(0,217,255,.1)]"
    >
      <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-cyan-glow/12 blur-2xl transition group-hover:bg-cyan-glow/22" />
      <div className="relative mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-cyan-glow">
        <Icon className="h-4 w-4" />
      </div>
      <div className="relative font-display text-2xl font-semibold tracking-tight text-white">{value}{suffix}</div>
      <div className="relative mt-1 text-xs leading-5 text-white/54">{label}</div>
    </motion.div>
  );
}

const HeroScene = dynamic(() => import("@/three/hero-scene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-full bg-cyan-glow/10" />
});

export function Hero() {
  return (
    <section id="home" className="section-band relative min-h-screen overflow-hidden bg-luxury-radial pb-16 pt-20 sm:pt-24 lg:pt-20">
      <div className="absolute inset-0 bg-mesh-grid bg-[size:58px_58px] opacity-[0.09]" />
      <div className="absolute left-[10%] top-20 h-72 w-72 rounded-full bg-[#00D4FF]/20 blur-[120px]" />
      <div className="absolute right-[8%] top-28 h-96 w-96 rounded-full bg-[#6D28D9]/18 blur-[140px]" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#040712]/92 via-[#040712]/65 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(56,189,248,.12),transparent_34%),radial-gradient(circle_at_82%_30%,rgba(139,92,246,.14),transparent_40%),radial-gradient(circle_at_55%_72%,rgba(56,189,248,.09),transparent_36%)]" />

      <div className="section-shell grid min-h-[calc(100vh-6.5rem)] items-center justify-between gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,.98fr)] lg:gap-16 xl:gap-20">
        <div className="relative z-10 max-w-[42rem]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.45 }}
            className="mb-5 flex flex-col items-start"
          >
            <Logo src="/logo/innovexa-logo.png" className="w-[150px] sm:w-[172px] md:w-[184px]" />
            <span className="mt-2 inline-flex items-center gap-2 rounded-full border border-cyan-glow/20 bg-white/[0.055] px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-100 backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5 text-cyan-glow" />
              {company.tagline}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1.75 }}
            className="max-w-[12ch] font-display text-4xl font-semibold leading-[0.97] tracking-tight text-white sm:text-5xl sm:leading-[0.96] md:text-[4.45rem] md:leading-[0.94] xl:text-[5rem] xl:leading-[0.92]"
          >
            Transforming Business Through <span className="premium-text">Technology &amp; Creativity</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.92 }}
            className="mt-6 max-w-[33.75rem] text-base leading-8 text-white/62 sm:text-lg md:text-xl"
          >
            We engineer premium digital experiences, AI automation systems, growth campaigns, and enterprise-grade products.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.08 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <Button asChild size="lg" variant="premium" className="shadow-[0_0_48px_rgba(59,130,246,.4)]">
              <a href="#contact">Start Your Project <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" /></a>
            </Button>
            <Button asChild size="lg" variant="glass" className="border border-white/10 bg-white/[0.045]">
              <a href="#services"><Play className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" /> Explore Services</a>
            </Button>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            <MetricCard end={25} suffix="+" label="Projects Delivered" Icon={Rocket} delay={2.18} />
            <MetricCard end={10} suffix="+" label="AI Automations" Icon={Activity} delay={2.26} />
            <MetricCard end={98} suffix="%" label="Client Satisfaction" Icon={Shield} delay={2.34} />
            <MetricCard end={24} suffix="/7" label="Support" Icon={Sparkles} delay={2.42} />
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[640px] items-center justify-center" data-parallax="-4">
          <div className="absolute inset-[-8%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,216,255,.18),transparent_38%),radial-gradient(circle_at_50%_50%,rgba(109,40,217,.16),transparent_52%)] blur-3xl" />
          <div className="absolute inset-[-12%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,.18),transparent_56%)] blur-[90px]" />
          <div className="absolute inset-[-2%] rounded-full border border-cyan-glow/12" />
          <div className="absolute inset-[8%] rounded-full border border-white/6" />
          <div className="relative aspect-square w-full max-w-[640px] overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(7,15,31,.95),rgba(2,6,16,.95))] shadow-[0_0_80px_rgba(0,0,0,.35)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(34,216,255,.1),transparent_25%),radial-gradient(circle_at_55%_58%,rgba(120,92,255,.12),transparent_28%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,.05),transparent_38%)]" />
            <HeroScene />
          </div>
        </div>
      </div>
      <div className="section-shell mt-8 overflow-hidden border-y border-white/10 py-5 sm:mt-10">
        <div className="flex min-w-max auto-marquee items-center gap-12 text-sm font-semibold uppercase tracking-[0.24em] text-white/34">
          {[company.name, "Web Development", "AI Automation", "Mobile Apps", "Digital Marketing", "Creative Content", company.tagline, company.name, "Web Development", "AI Automation"].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
