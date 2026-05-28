"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Fish, Smartphone } from "lucide-react";
import { useMemo, useState } from "react";
import { portfolio, type PortfolioProject } from "@/lib/site-data";
import { SectionHeading } from "@/components/common/section-heading";
import { cn } from "@/lib/utils";

const categories = ["All", ...Array.from(new Set(portfolio.map((item) => item.category)))];

export function Portfolio() {
  const [active, setActive] = useState("All");
  const visible = useMemo(
    () => (active === "All" ? portfolio : portfolio.filter((item) => item.category === active)),
    [active]
  );

  const isComingSoonProject = (item: PortfolioProject) => item.status?.toLowerCase() === "coming soon";

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
              <motion.article
                layout
                key={item.title}
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

                  {isComingSoonProject(item) && (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_30%,rgba(251,146,60,.35),transparent_42%),radial-gradient(circle_at_70%_70%,rgba(255,99,71,.24),transparent_44%)]" />
                  )}

                  {item.title === "Mr. Fish Kitchen" && (
                    <div className="absolute right-6 top-16 grid place-items-center">
                      <div className="relative grid h-36 w-20 place-items-center rounded-[1.25rem] border border-white/35 bg-black/30 shadow-[0_0_45px_rgba(251,146,60,.2)] backdrop-blur">
                        <div className="absolute top-2 h-1 w-7 rounded-full bg-white/40" />
                        <Fish className="h-7 w-7 text-orange-200" />
                        <Smartphone className="absolute -bottom-4 h-6 w-6 text-orange-100/85" />
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="rounded-full bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur">{item.category}</span>
                    {item.status && (
                      <span className={cn(
                        "ml-2 rounded-full px-3 py-1 text-xs backdrop-blur",
                        isComingSoonProject(item)
                          ? "border border-amber-300/45 bg-amber-400/15 text-amber-100 shadow-[0_0_24px_rgba(251,191,36,.34)]"
                          : "bg-cyan-glow/20 text-cyan-100"
                      )}>
                        {item.status}
                      </span>
                    )}
                    <h3 className="mt-4 font-display text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/62">{item.type}</p>
                  </div>
                  {item.url ? (
                    <>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition group-hover:rotate-45"
                        aria-label={`Open ${item.title}`}
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                      <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 text-xs text-white/90 backdrop-blur">
                        <span className="text-[11px]">Live Project</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </div>
                    </>
                  ) : (
                    <div className="absolute right-5 top-5 rounded-full border border-amber-300/45 bg-amber-400/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-amber-100 shadow-[0_0_26px_rgba(251,191,36,.35)]">
                      Coming Soon
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-sm leading-7 text-white/55">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal preview removed — cards open live projects in a new tab */}
    </section>
  );
}
