"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/site-data";
import { SectionHeading } from "@/components/common/section-heading";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-band overflow-hidden py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Client Signal"
          title="Trusted by founders, operators, and growth teams with ambitious roadmaps."
          copy="Premium work only matters when it earns trust and moves business metrics. That is the Innovexa standard."
        />
      </div>
      <div data-gsap-reveal className="hide-scrollbar overflow-hidden px-[max(1rem,calc((100vw-1220px)/2))] py-2">
        <div className="auto-marquee flex w-max gap-5">
          {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((item, index) => (
            <motion.article
              key={`${item.name}-${index}`}
              data-tilt
              whileHover={{ y: -6 }}
              className="glass-dark min-w-[320px] max-w-[420px] rounded-[2rem] p-6 md:min-w-[410px]"
            >
              <div className="mb-8 flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-cyan-glow via-primary to-violet-glow font-display text-lg font-bold text-white shadow-[0_0_34px_rgba(0,217,255,.28)]">
                  {item.name.split(" ").map((part) => part[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-white/45">{item.role}</p>
                </div>
              </div>
              <div className="mb-5 text-cyan-glow">★★★★★</div>
              <p className="text-lg leading-8 text-white/72">&ldquo;{item.quote}&rdquo;</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
