"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Fish } from "lucide-react";
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
    <section id="portfolio" className="section-band py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="Real Innovexa Digital projects built for modern business workflows."
          copy="A curated view of websites, storefronts, mobile applications, booking systems, export pages, and software solutions."
        />
        <div data-gsap-reveal className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={cn(
                "rounded-full border px-4 py-2.5 text-sm transition",
                active === category
                  ? "border-sky-400/60 bg-[linear-gradient(110deg,#1D9BF0,#3B82F6)] text-white shadow-[0_0_18px_rgba(59,130,246,.2)]"
                  : "border-white/10 bg-white/5 text-white/60 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((item) => (
              <motion.article
                layout
                key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] text-left shadow-[0_22px_80px_rgba(0,0,0,.24)] transition-colors duration-300 hover:border-sky-400/30"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={`${item.title} homepage screenshot`}
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className={cn("absolute inset-0 bg-gradient-to-br", item.gradient)}>
                      <div className="absolute inset-0 bg-mesh-grid bg-[size:42px_42px] opacity-20" />
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="grid h-24 w-24 place-items-center rounded-[1.75rem] border border-white/25 bg-black/25 p-4 shadow-[0_18px_55px_rgba(0,0,0,.28)] backdrop-blur-xl">
                          {item.title === "Mr. Fish Kitchen" ? (
                            <Fish className="h-10 w-10 text-orange-100" />
                          ) : (
                            <span className="font-display text-xl font-bold tracking-tight text-white/85">
                              {item.logoLabel}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />

                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur">
                      {item.category}
                    </span>
                    {isComingSoonProject(item) && (
                      <span className="rounded-full border border-amber-300/45 bg-amber-400/20 px-3 py-1 text-xs font-semibold text-amber-100 backdrop-blur">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-black/45 text-white backdrop-blur transition duration-300 hover:bg-sky-500/80 group-hover:rotate-45"
                      aria-label={`Open ${item.title} live site`}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </a>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200/70">{item.type}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-white/55">{item.description}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
                    {item.features.slice(0, 3).map((feature) => (
                      <span key={feature} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] text-white/60">
                        {feature}
                      </span>
                    ))}
                  </div>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-sky-300 transition hover:text-sky-200"
                    >
                      View live project
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
