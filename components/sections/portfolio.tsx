"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/lib/site-data";
import { SectionHeading } from "@/components/common/section-heading";
import { useUIStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const categories = ["All", "Web", "Mobile", "AI", "Marketing", "Branding"];

export function Portfolio() {
  const active = useUIStore((state) => state.activePortfolioCategory);
  const setActive = useUIStore((state) => state.setActivePortfolioCategory);
  const visible = active === "All" ? portfolio : portfolio.filter((item) => item.category === active);

  return (
    <section id="portfolio" className="section-band py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Case Studies"
          title="Cinematic systems built to perform in the real world."
          copy="A curated view of web, mobile, AI, marketing, and brand work designed for growth, not gallery applause."
        />
        <div data-gsap-reveal className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition",
                active === category
                  ? "border-cyan-glow bg-cyan-glow text-slate-950"
                  : "border-white/10 bg-white/5 text-white/60 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((item) => (
              <motion.a
                layout
                key={item.title}
                href="#contact"
                data-tilt
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                whileHover={{ y: -8 }}
                className="group block overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] shadow-[0_22px_80px_rgba(0,0,0,.24)]"
              >
                <div className={cn("relative h-64 bg-gradient-to-br", item.color)}>
                  <div className="absolute inset-0 bg-mesh-grid bg-[size:42px_42px] opacity-20" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,.34),transparent_18%),linear-gradient(to_top,rgba(0,0,0,.55),transparent_55%)] transition duration-500 group-hover:scale-110" />
                  <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-white/10 blur-[1px] transition duration-500 group-hover:scale-125" />
                  <div className="absolute inset-x-5 top-5 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="rounded-full bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur">{item.category}</span>
                    <h3 className="mt-4 font-display text-3xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <div className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-5">
                  <p className="text-sm text-white/55">Measured outcome</p>
                  <p className="font-display text-lg font-semibold text-cyan-100">{item.metric}</p>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
