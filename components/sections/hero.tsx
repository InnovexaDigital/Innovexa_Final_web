"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Layers3, Play, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, heroMetrics } from "@/lib/site-data";

const HeroScene = dynamic(() => import("@/three/hero-scene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-full bg-cyan-glow/10" />
});

export function Hero() {
  return (
    <section id="home" className="section-band relative min-h-screen overflow-hidden bg-luxury-radial pb-16 pt-32">
      <div className="absolute inset-0 bg-mesh-grid bg-[size:58px_58px] opacity-[0.08]" />
      <div className="absolute left-[12%] top-24 h-72 w-72 rounded-full bg-[#00D4FF]/20 blur-[120px]" />
      <div className="absolute right-[8%] top-32 h-96 w-96 rounded-full bg-[#6D28D9]/20 blur-[140px]" />
      <div className="section-shell grid min-h-[calc(100vh-9rem)] items-center gap-10 lg:grid-cols-[1.02fr_.98fr]">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm text-cyan-100 backdrop-blur-xl"
          >
            <ShieldCheck className="h-4 w-4 text-cyan-glow" />
            {company.tagline}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1.75 }}
            className="premium-text font-display text-5xl font-semibold leading-[0.96] md:text-7xl xl:text-[5.65rem]"
          >
            Transforming Business Through Technology & Creativity
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.92 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl"
          >
            We engineer premium digital experiences, AI automation systems, growth campaigns, and enterprise-grade products.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.08 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Button asChild size="lg" variant="premium">
              <a href="#contact">Start Your Project <ArrowRight className="h-5 w-5" /></a>
            </Button>
            <Button asChild size="lg" variant="glass">
              <a href="#services"><Play className="h-5 w-5" /> Explore Services</a>
            </Button>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {heroMetrics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 2.18 + index * 0.08 }}
                className="glass-dark rounded-2xl p-4 ring-1 ring-cyan-glow/5"
              >
                <div className="font-display text-2xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-xs leading-5 text-white/48">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative h-[540px] min-h-[420px]" data-parallax="-4">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-glow/15 via-violet-glow/20 to-primary/10 blur-3xl" />
          <HeroScene />
          <div className="pointer-events-none absolute left-0 top-10 space-y-3 md:left-8">
            {["AI strategy mapped", "Automation-ready architecture", "Growth systems connected"].map((text, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.4 + index * 0.16 }}
                className="glass flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/78"
              >
                <Layers3 className="h-4 w-4 text-cyan-glow" />
                {text}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-shell mt-4 overflow-hidden border-y border-white/10 py-5">
        <div className="flex min-w-max auto-marquee items-center gap-12 text-sm font-semibold uppercase tracking-[0.24em] text-white/34">
          {[company.name, "Web Development", "AI Automation", "Mobile Apps", "Digital Marketing", "Creative Content", company.tagline, company.name, "Web Development", "AI Automation"].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
