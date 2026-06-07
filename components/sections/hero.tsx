"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Activity, Shield, Rocket, Users } from "lucide-react";
import type { ComponentType } from "react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/site-data";
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
      className="group relative min-h-[112px] overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(11,16,30,.78),rgba(7,12,22,.55))] p-4 shadow-[0_18px_50px_rgba(0,0,0,.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-glow/30 hover:shadow-[0_20px_60px_rgba(0,217,255,.12)]"
    >
      <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-cyan-glow/12 blur-2xl transition group-hover:bg-cyan-glow/22" />
      <div className="relative mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-cyan-glow transition group-hover:scale-110">
        <Icon className="h-4 w-4" />
      </div>
      <div className="relative font-display text-2xl font-semibold tracking-tight text-white">{value}{suffix}</div>
      <div className="relative mt-1 text-xs leading-5 text-white/54">{label}</div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="section-band relative min-h-screen overflow-hidden bg-luxury-radial pb-12 pt-24 sm:pt-28 lg:pt-24"
    >
      <div className="absolute inset-0 bg-mesh-grid bg-[size:58px_58px] opacity-[0.09]" />
      <div className="absolute left-[10%] top-20 h-72 w-72 rounded-full bg-[#00D4FF]/20 blur-[120px]" />
      <div className="absolute right-[8%] top-28 h-96 w-96 rounded-full bg-[#6D28D9]/18 blur-[140px]" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#040712]/92 via-[#040712]/65 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(56,189,248,.12),transparent_34%),radial-gradient(circle_at_82%_30%,rgba(139,92,246,.14),transparent_40%),radial-gradient(circle_at_55%_72%,rgba(56,189,248,.09),transparent_36%)]" />

      <div className="section-shell grid min-h-[calc(100vh-12rem)] w-full items-center justify-between gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:gap-16 xl:gap-20">
        <div className="relative z-10 flex max-w-[42rem] flex-col items-start">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-glow/25 bg-white/[0.055] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100 shadow-[0_0_28px_rgba(0,217,255,.14)] backdrop-blur-xl"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-glow" />
            {company.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-6 text-balance font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl sm:leading-[1.01] md:text-[4rem] md:leading-[0.98] xl:text-[4.6rem] xl:leading-[0.96]"
          >
            Transforming Businesses Through{" "}
            <span className="premium-text">Technology, Automation &amp; Creativity</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-6 max-w-[34rem] text-base leading-8 text-white/64 sm:text-lg md:text-xl"
          >
            We engineer premium digital experiences, AI automation systems, growth campaigns, and enterprise-grade products that help businesses build, automate, and scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Button asChild size="lg" variant="premium" className="group shadow-[0_0_48px_rgba(59,130,246,.4)]">
              <a href="#contact">
                Get Free Consultation
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="glass" className="group border border-white/12 bg-white/[0.05]">
              <a href="#portfolio">
                <Play className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                View Our Work
              </a>
            </Button>
          </motion.div>

          <div className="mt-11 grid w-full grid-cols-2 gap-3 md:grid-cols-4">
            <MetricCard end={50} suffix="+" label="Projects Delivered" Icon={Rocket} delay={0.75} />
            <MetricCard end={20} suffix="+" label="Happy Clients" Icon={Users} delay={0.83} />
            <MetricCard end={98} suffix="%" label="Client Satisfaction" Icon={Shield} delay={0.91} />
            <MetricCard end={24} suffix="/7" label="Support" Icon={Activity} delay={0.99} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative mx-auto flex w-full max-w-[560px] items-center justify-center lg:max-w-[620px]"
          data-parallax="-4"
        >
          <div className="hero-float relative aspect-square w-full">
            <Image
              src="/hero/innovexa-growth-logo-cutout.png"
              alt="Innovexa growth emblem"
              fill
              priority
              sizes="(min-width: 1024px) 620px, 90vw"
              className="object-contain drop-shadow-[0_30px_70px_rgba(18,231,255,.2)]"
            />
          </div>
        </motion.div>
      </div>

      <div className="section-shell mt-10 overflow-hidden border-y border-white/10 py-4">
        <div className="flex min-w-max auto-marquee items-center gap-12 text-sm font-semibold uppercase tracking-[0.24em] text-white/30">
          {[company.name, "Web Development", "AI Automation", "Mobile Apps", "Digital Marketing", "Creative Content", company.tagline, company.name, "Web Development", "AI Automation"].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
