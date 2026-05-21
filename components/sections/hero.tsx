"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { chatPills, partners, stats } from "@/lib/site-data";

const HeroScene = dynamic(() => import("@/components/three/hero-scene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-full bg-cyan-glow/10" />
});

export function Hero() {
  return (
    <section id="home" className="section-band relative min-h-screen overflow-hidden bg-luxury-radial pb-20 pt-32">
      <div className="absolute inset-0 bg-mesh-grid bg-[size:64px_64px] opacity-[0.09]" />
      <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-glow/20 blur-[120px]" />
      <div className="section-shell grid min-h-[calc(100vh-10rem)] items-center gap-10 lg:grid-cols-[1.02fr_.98fr]">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm text-cyan-100 backdrop-blur-xl"
          >
            <ShieldCheck className="h-4 w-4 text-cyan-glow" />
            AI-Powered Growth Studio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 2.22 }}
            className="premium-text font-display text-5xl font-semibold leading-[0.96] md:text-7xl xl:text-[5.7rem]"
          >
            Engineering Digital Growth With AI, Design & Innovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.36 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl"
          >
            Innovexa helps brands scale with high-performance websites, AI systems, automation, digital marketing, and premium creative execution.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Button asChild size="lg" variant="premium">
              <a href="#contact">Start Project <ArrowRight className="h-5 w-5" /></a>
            </Button>
            <Button asChild size="lg" variant="glass">
              <a href="#portfolio"><Play className="h-5 w-5" /> View Portfolio</a>
            </Button>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 2.6 + index * 0.08 }}
              className="glass-dark rounded-2xl p-4 ring-1 ring-cyan-glow/5"
              >
                <div className="font-display text-2xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-xs leading-5 text-white/48">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative h-[520px] min-h-[420px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-glow/15 via-violet-glow/20 to-primary/10 blur-3xl" />
          <HeroScene />
          <div className="pointer-events-none absolute left-2 top-10 space-y-3 md:left-8">
            {chatPills.map(({ icon: Icon, text }, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.7 + index * 0.16 }}
                className="glass flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/78"
              >
                <Icon className="h-4 w-4 text-cyan-glow" />
                {text}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-shell mt-4 overflow-hidden border-y border-white/10 py-5">
        <div className="flex min-w-max animate-[shimmer_22s_linear_infinite] items-center gap-12 text-sm font-semibold uppercase tracking-[0.24em] text-white/34">
          {[...partners, ...partners].map((partner, index) => (
            <span key={`${partner}-${index}`}>{partner}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
