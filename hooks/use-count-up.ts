"use client";

import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import type { RefObject } from "react";

export function useCountUp(ref: RefObject<HTMLElement | null>, end: number, duration = 1600) {
  const [value, setValue] = useState(0);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration, end, isInView]);

  return value;
}
