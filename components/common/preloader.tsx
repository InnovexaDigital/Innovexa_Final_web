"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { InnovexaLogo } from "@/components/common/innovexa-logo";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const started = performance.now();
    const timer = window.setInterval(() => {
      const elapsed = performance.now() - started;
      setProgress(Math.min(100, Math.round((elapsed / 1850) * 100)));
    }, 40);

    const hide = window.setTimeout(() => setLoading(false), 2150);
    return () => {
      window.clearInterval(timer);
      window.clearTimeout(hide);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#02040a]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-luxury-radial" />
          <motion.div
            className="absolute h-[540px] w-[540px] rounded-full border border-cyan-glow/20"
            animate={{ rotate: 360, scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          />
          <div className="relative z-10 w-[min(420px,82vw)] text-center">
            <motion.div
              className="flex justify-center"
              initial={{ y: 28, opacity: 0, letterSpacing: "0.42em" }}
              animate={{ y: 0, opacity: 1, letterSpacing: "0.18em" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <InnovexaLogo className="scale-125" />
            </motion.div>
            <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary via-cyan-glow to-violet-glow"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-4 text-xs uppercase tracking-[0.38em] text-white/45">
              Initializing growth architecture
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
