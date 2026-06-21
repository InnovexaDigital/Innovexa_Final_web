"use client";

import Lenis from "lenis";
import { useEffect } from "react";

type IdleHandle = number;
const onIdle = (cb: () => void): IdleHandle =>
  typeof window.requestIdleCallback === "function"
    ? window.requestIdleCallback(cb, { timeout: 600 })
    : (window.setTimeout(cb, 200) as unknown as IdleHandle);
const cancelIdle = (h: IdleHandle) =>
  typeof window.cancelIdleCallback === "function" ? window.cancelIdleCallback(h) : clearTimeout(h);

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: Lenis | undefined;
    let rafId = 0;

    const onAnchorClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        "a[href^='#'], a[href^='/#']"
      );
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href === "#" || href === "/#") return;
      const isRootHash = href.startsWith("/#");
      if (isRootHash && window.location.pathname !== "/") return;
      const targetId = isRootHash ? href.slice(1) : href;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, { offset: -96, duration: 0.9 });
      } else {
        // Lenis not initialized yet (very early click) — fall back to native smooth scroll.
        const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };

    document.addEventListener("click", onAnchorClick);

    // Defer Lenis (continuous rAF loop) until idle so it doesn't add to load-time TBT.
    const idle = onIdle(() => {
      lenis = new Lenis({ duration: 0.95, lerp: 0.11, smoothWheel: true });
      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelIdle(idle);
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchorClick);
      lenis?.destroy();
    };
  }, []);

  return children;
}
