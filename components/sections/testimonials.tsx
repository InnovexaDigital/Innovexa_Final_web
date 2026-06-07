"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useRef } from "react";
import { testimonials } from "@/lib/site-data";
import { SectionHeading } from "@/components/common/section-heading";
import { useCountUp } from "@/hooks/use-count-up";

const proofStats = [
  { end: 20, suffix: "+", label: "Happy Clients" },
  { end: 6, suffix: "+", label: "Industries Served" },
  { end: 100, suffix: "%", label: "On-Time Delivery" }
];

function CountStat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const value = useCountUp(ref, end, 1400);
  return (
    <div ref={ref} className="gradient-border glass-dark rounded-2xl px-5 py-6 text-center">
      <div className="font-display text-3xl font-semibold text-white sm:text-4xl">
        {value}
        {suffix}
      </div>
      <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/50">{label}</p>
    </div>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section id="testimonials" className="section-band py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Social Proof"
          title="Real businesses. Real results. Real reviews."
          copy="Verified feedback from clients we have partnered with across web, commerce, education, and creative projects."
        />

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="gradient-border glass-dark flex flex-col items-center justify-center rounded-2xl px-5 py-6 text-center">
            <div className="flex items-center gap-1 text-cyan-glow">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <div className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">5.0</div>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/50">Average Rating</p>
          </div>
          {proofStats.map((stat) => (
            <CountStat key={stat.label} {...stat} />
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-dark relative flex h-full flex-col overflow-hidden rounded-[1.5rem] p-7 transition duration-300 hover:-translate-y-1.5 hover:border-cyan-glow/30 hover:shadow-[0_24px_70px_rgba(0,217,255,.12)]"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-glow/10 blur-3xl transition group-hover:bg-cyan-glow/20" />
              <Quote className="relative h-7 w-7 text-cyan-glow/70" />
              <div className="relative mt-4 flex items-center gap-1 text-cyan-glow">
                {Array.from({ length: item.rating ?? 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="relative mt-4 flex-1 text-base leading-7 text-white/75">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="relative mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#00A3FF,#7A5CFF)] text-sm font-semibold text-white">
                  {initials(item.name)}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-white">{item.name}</span>
                  <span className="block truncate text-xs text-white/55">
                    {item.role}
                    {item.company ? ` · ${item.company}` : ""}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
