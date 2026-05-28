"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navItems } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/lib/store";
import { Logo } from "@/components/common/logo";

const hrefFor = (item: string) => `#${item.toLowerCase()}`;

export function Navbar() {
  const menuOpen = useUIStore((state) => state.menuOpen);
  const setMenuOpen = useUIStore((state) => state.setMenuOpen);
  const [activeItem, setActiveItem] = useState("Home");

  const anchors = useMemo(() => navItems.map((item) => ({ item, selector: hrefFor(item) })), []);

  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY + 140;
      let current = "Home";

      anchors.forEach(({ item, selector }) => {
        const section = document.querySelector<HTMLElement>(selector);
        if (!section) return;
        if (section.offsetTop <= offset) current = item;
      });

      setActiveItem(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [anchors]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 pt-1.5 sm:pt-2">
      <div className="mx-auto w-full max-w-[74rem] px-3 sm:px-5 lg:px-6">
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="grid h-13 grid-cols-[auto_1fr_auto] items-center rounded-full border border-white/[0.08] bg-[linear-gradient(135deg,rgba(10,18,34,.62),rgba(6,10,18,.5))] px-2.5 shadow-[0_16px_50px_rgba(0,0,0,.28)] backdrop-blur-xl sm:px-3 lg:px-3.5"
      >
        <a href="#home" className="group flex items-center rounded-full py-0.5 transition" aria-label="INNOVEXA DIGITAL home">
          <Logo src="/logo/innovexa-logo.png" className="w-[120px] sm:w-[132px] lg:w-[140px]" />
        </a>

        <div className="hidden items-center justify-center lg:flex">
          <div className="relative flex items-center gap-0.5 rounded-full bg-white/[0.03] px-1 py-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={hrefFor(item)}
                onClick={() => setActiveItem(item)}
                className="group relative rounded-full px-2.5 py-1.5 text-sm text-white/70 transition hover:text-white"
              >
                {activeItem === item && (
                  <motion.span
                    layoutId="active-pill"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.08]"
                  />
                )}
                {item}
                <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-cyan-glow/85 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-1 md:flex">
          <Button asChild variant="glass">
            <a href="#contact">Book Consultation</a>
          </Button>
          <Button asChild variant="premium" className="shadow-[0_0_36px_rgba(34,216,255,.34)]">
            <a href="#contact">Start Project</a>
          </Button>
        </div>

        <button
          className="grid h-9 w-9 place-items-center justify-self-end rounded-full border border-white/10 bg-white/[0.08] text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.26, ease: "easeOut" }}
            className="mx-auto mt-2 w-full max-w-[74rem] px-3 sm:px-5 lg:px-6 md:hidden"
          >
            <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-[#070d1b]/90 p-4 shadow-[0_20px_56px_rgba(0,0,0,.36)] backdrop-blur-xl">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={hrefFor(item)}
                  onClick={() => {
                    setActiveItem(item);
                    setMenuOpen(false);
                  }}
                  className="rounded-2xl px-4 py-3 text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  {item}
                </a>
              ))}
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <Button asChild variant="glass">
                  <a href="#contact" onClick={() => setMenuOpen(false)}>Book Consultation</a>
                </Button>
                <Button asChild variant="premium" className="shadow-[0_0_30px_rgba(34,216,255,.3)]">
                  <a href="#contact" onClick={() => setMenuOpen(false)}>Start Project</a>
                </Button>
              </div>
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
