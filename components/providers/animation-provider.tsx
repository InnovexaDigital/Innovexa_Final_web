"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

type IdleHandle = number;
const onIdle = (cb: () => void): IdleHandle =>
  typeof window.requestIdleCallback === "function"
    ? window.requestIdleCallback(cb, { timeout: 600 })
    : (window.setTimeout(cb, 200) as unknown as IdleHandle);
const cancelIdle = (h: IdleHandle) =>
  typeof window.cancelIdleCallback === "function" ? window.cancelIdleCallback(h) : clearTimeout(h);

export function AnimationProvider() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Hide reveal targets immediately so there is no flash before GSAP initializes.
    document.documentElement.classList.add("gsap-ready");

    // Pointer-driven cursor glow + card tilt are desktop-only; don't attach on touch.
    const finePointer = window.matchMedia("(pointer: fine)").matches;
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

    if (finePointer) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerout", onPointerOut, { passive: true });
    }

    // Defer the (heavier) ScrollTrigger setup until the main thread is idle so it
    // doesn't compete with hydration during the initial load window.
    let ctx: gsap.Context | undefined;
    const idle = onIdle(() => {
      ctx = gsap.context(() => {
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
              scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.35 }
            }
          );
        });
      });
    });

    return () => {
      cancelIdle(idle);
      if (raf) cancelAnimationFrame(raf);
      if (finePointer) {
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerout", onPointerOut);
      }
      document.documentElement.classList.remove("gsap-ready");
      ctx?.revert();
    };
  }, []);

  return <div className="cursor-glow" />;
}
