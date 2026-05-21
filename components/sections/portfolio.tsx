"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useMemo, useState } from "react";
import { portfolio, type PortfolioProject } from "@/lib/site-data";
import { SectionHeading } from "@/components/common/section-heading";
import { cn } from "@/lib/utils";

const categories = ["All", ...Array.from(new Set(portfolio.map((item) => item.category)))];

export function Portfolio() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<PortfolioProject | null>(null);
  const visible = useMemo(
    () => (active === "All" ? portfolio : portfolio.filter((item) => item.category === active)),
    [active]
  );

  return (
    <section id="portfolio" className="section-band py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="Real Innovexa Digital projects built for modern business workflows."
          copy="A curated view of websites, storefronts, mobile applications, booking systems, export pages, and software solutions."
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
              <motion.button
                type="button"
                layout
                key={item.title}
                onClick={() => setSelected(item)}
                data-tilt
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                whileHover={{ y: -8 }}
                className="group block overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] text-left shadow-[0_22px_80px_rgba(0,0,0,.24)]"
              >
                <div className={cn("relative h-64 bg-gradient-to-br", item.gradient)}>
                  <div className="absolute inset-0 bg-mesh-grid bg-[size:42px_42px] opacity-20" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,.34),transparent_18%),linear-gradient(to_top,rgba(0,0,0,.62),transparent_55%)] transition duration-500 group-hover:scale-110" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="rounded-full bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur">{item.category}</span>
                    {item.status && <span className="ml-2 rounded-full bg-cyan-glow/20 px-3 py-1 text-xs text-cyan-100 backdrop-blur">{item.status}</span>}
                    <h3 className="mt-4 font-display text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/62">{item.type}</p>
                  </div>
                  <div className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-7 text-white/55">{item.description}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-4 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div initial={{ y: 32, scale: 0.96 }} animate={{ y: 0, scale: 1 }} exit={{ y: 32, scale: 0.96 }} className="gradient-border glass-dark max-w-2xl rounded-[1.5rem] p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-cyan-100">{selected.type}</p>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-white">{selected.title}</h3>
                </div>
                <button onClick={() => setSelected(null)} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white" aria-label="Close project preview">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-5 leading-8 text-white/62">{selected.description}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {selected.features.map((feature) => (
                  <div key={feature} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/68">
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
