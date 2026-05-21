"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/lib/store";
import { Logo } from "@/components/common/logo";

const hrefFor = (item: string) => `#${item.toLowerCase()}`;

export function Navbar() {
  const menuOpen = useUIStore((state) => state.menuOpen);
  const setMenuOpen = useUIStore((state) => state.setMenuOpen);
  const { scrollY } = useScroll();
  const navHeight = useTransform(scrollY, [0, 130], [72, 60]);
  const navWidth = useTransform(scrollY, [0, 130], ["min(1280px, calc(100vw - 32px))", "min(1110px, calc(100vw - 32px))"]);

  

  return (
    <header className="fixed left-0 right-0 top-3 z-50 px-3 sm:top-4 sm:px-4">
      <motion.nav
        style={{ height: navHeight, width: navWidth }}
        className="glass mx-auto flex items-center justify-between rounded-full px-3 py-2.5 shadow-[0_18px_60px_rgba(0,0,0,.28)] transition-colors md:px-5"
      >
          <a href="#home" className="group flex items-center gap-3" aria-label="INNOVEXA DIGITAL home">
          <Logo src="/logo/Asset 3 (1).png" compactText className="w-[190px] md:w-[210px]" />
        </a>

        <div className="hidden items-center rounded-full border border-white/10 bg-white/[0.035] p-1.5 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={hrefFor(item)} className="group relative rounded-full px-4 py-2 text-sm text-white/68 transition hover:text-white">
              {item}
              <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-cyan-glow transition group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="glass">
            <a href="#contact">Book Consultation</a>
          </Button>
          <Button asChild variant="premium">
            <a href="#contact">Get Proposal</a>
          </Button>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/10 text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            className="glass mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.5rem] p-4 lg:hidden"
          >
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={hrefFor(item)}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-white/75 hover:bg-white/10 hover:text-white"
                >
                  {item}
                </a>
              ))}
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <Button asChild variant="glass">
                  <a href="#contact" onClick={() => setMenuOpen(false)}>Book Consultation</a>
                </Button>
                <Button asChild variant="premium">
                  <a href="#contact" onClick={() => setMenuOpen(false)}>Get Proposal</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
