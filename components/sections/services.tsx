"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/site-data";
import { SectionHeading } from "@/components/common/section-heading";

export function Services() {
  return (
    <section id="services" className="section-band relative py-28">
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Capabilities"
          title="One integrated studio for product, AI, brand, and growth."
          copy="Every service is designed to connect strategy, premium experience design, engineering, automation, and measurable acquisition."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 12).map(({ title, detail, icon: Icon }, index) => (
            <motion.a
              key={title}
              href="#contact"
              data-gsap-reveal
              data-tilt
              whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="gradient-border glass-dark group block rounded-[1.5rem] p-6 shadow-[0_18px_70px_rgba(0,0,0,.18)]"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="service-icon grid h-12 w-12 place-items-center rounded-2xl bg-cyan-glow/10 text-cyan-glow ring-1 ring-cyan-glow/20 transition group-hover:bg-cyan-glow group-hover:text-slate-950">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-display text-sm text-white/24">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 min-h-20 text-sm leading-6 text-white/54">{detail}</p>
              <span className="mt-6 block h-px w-12 bg-gradient-to-r from-cyan-glow to-violet-glow transition-all duration-300 group-hover:w-24" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
