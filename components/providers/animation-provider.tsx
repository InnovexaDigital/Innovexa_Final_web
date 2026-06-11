"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export function AnimationProvider() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let raf = 0;

    const onPointerMove = (event: PointerEvent) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);

        const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-tilt]");
        if (!target) return;
        const rect = target.getBoundingClientRect();
        const rx = ((event.clientY - rect.top) / rect.height - 0.5) * -7;
        const ry = ((event.clientX - rect.left) / rect.width - 0.5) * 7;
        target.style.setProperty("--tilt-x", `${rx}deg`);
        target.style.setProperty("--tilt-y", `${ry}deg`);
      });
    };

    const onPointerOut = (event: PointerEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-tilt]");
      if (!target) return;
      target.style.setProperty("--tilt-x", "0deg");
      target.style.setProperty("--tilt-y", "0deg");
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerout", onPointerOut, { passive: true });

    document.documentElement.classList.add("gsap-ready");

    const ctx = gsap.context(() => {
      ScrollTrigger.batch("[data-gsap-reveal]", {
        interval: 0.12,
        batchMax: 6,
        start: "top 92%",
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.72,
            stagger: 0.06,
            ease: "power2.out",
            overwrite: true
          });
        }
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: 0 },
          {
            yPercent: Number(el.dataset.parallax || -6),
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.35
            }
          }
        );
      });
    });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerout", onPointerOut);
      document.documentElement.classList.remove("gsap-ready");
      ctx.revert();
    };
  }, []);

  return <div className="cursor-glow" />;
}
