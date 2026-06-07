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
  const [scrolled, setScrolled] = useState(false);

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
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [anchors]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="mx-auto w-full max-w-[78rem]">
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className={`relative grid grid-cols-[auto_1fr_auto] items-center gap-4 overflow-hidden rounded-[1.35rem] border px-4 backdrop-blur-2xl backdrop-saturate-150 transition-[height,background,box-shadow,border-color] duration-300 sm:px-5 lg:px-6 ${
            scrolled
              ? "h-16 border-white/[0.14] bg-[linear-gradient(115deg,rgba(7,13,25,.94),rgba(12,18,33,.88),rgba(8,10,22,.92))] shadow-[0_20px_60px_rgba(0,0,0,.46),0_0_0_1px_rgba(18,231,255,.07),inset_0_1px_0_rgba(255,255,255,.1)]"
              : "h-[4.5rem] border-white/[0.12] bg-[linear-gradient(115deg,rgba(9,18,33,.82),rgba(14,19,35,.72),rgba(10,11,25,.8))] shadow-[0_18px_55px_rgba(0,0,0,.34),0_0_40px_rgba(18,231,255,.05),inset_0_1px_0_rgba(255,255,255,.09)]"
          }`}
        >
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/60 to-transparent" />
          <div className="pointer-events-none absolute -left-16 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-cyan-glow/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

          <a href="#home" className="group flex h-full items-center transition" aria-label="INNOVEXA DIGITAL home">
            <Logo src="/logo/innovexa-logo.png" className="relative h-11 w-auto transition-transform duration-300 group-hover:scale-[1.03] sm:h-12" />
          </a>

          <div className="hidden items-center justify-center lg:flex">
            <div className="relative flex items-center gap-0.5 rounded-full border border-white/[0.09] bg-black/20 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,.06),0_8px_24px_rgba(0,0,0,.18)]">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={hrefFor(item)}
                  onClick={() => setActiveItem(item)}
                  className="group relative rounded-full px-4 py-2 text-[13px] font-semibold tracking-[0.01em] text-white/66 transition hover:text-white"
                >
                  {activeItem === item && (
                    <motion.span
                      layoutId="active-pill"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                      className="absolute inset-0 -z-10 rounded-full border border-white/[0.1] bg-[linear-gradient(135deg,rgba(255,255,255,.14),rgba(255,255,255,.06))] shadow-[0_6px_20px_rgba(0,0,0,.2),inset_0_1px_0_rgba(255,255,255,.12)]"
                    />
                  )}
                  {item}
                  <span className="absolute inset-x-4 bottom-1.5 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-cyan-glow to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Button asChild variant="glass" className="border-white/[0.12] bg-white/[0.045]">
              <a href="#contact">Book Consultation</a>
            </Button>
            <Button asChild variant="premium" className="shadow-[0_8px_30px_rgba(34,216,255,.3)]">
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
            className="mx-auto mt-2 w-full max-w-[78rem] md:hidden"
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
