"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Brush, Film, Globe2, Megaphone, Workflow } from "lucide-react";

const capabilities = [
  { label: "Web Development", icon: Globe2 },
  { label: "AI Automation", icon: Workflow },
  { label: "Digital Marketing", icon: Megaphone },
  { label: "Branding", icon: Brush },
  { label: "Video Editing", icon: Film }
];

export function TrustStats() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="section-shell">
        <p className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.28em] text-white/40">
          Trusted capabilities across the full digital stack
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {capabilities.map(({ label, icon: Icon }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="group gradient-border glass-dark relative flex items-center gap-3 overflow-hidden rounded-2xl p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-glow/30 hover:shadow-[0_18px_50px_rgba(0,217,255,.12)]"
            >
              <div className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-cyan-glow/10 blur-2xl transition group-hover:bg-cyan-glow/20" />
              <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-cyan-glow transition group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </span>
              <div className="relative min-w-0">
                <p className="truncate text-sm font-semibold text-white">{label}</p>
                <span className="mt-0.5 inline-flex items-center gap-1 text-[11px] font-medium text-cyan-100/70">
                  <BadgeCheck className="h-3.5 w-3.5 text-cyan-glow" /> Available
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
