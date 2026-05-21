"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/lib/store";
import { InnovexaLogo } from "@/components/common/innovexa-logo";

const hrefFor = (item: string) => `#${item === "AI Solutions" ? "solutions" : item.toLowerCase()}`;

export function Navbar() {
  const menuOpen = useUIStore((state) => state.menuOpen);
  const setMenuOpen = useUIStore((state) => state.setMenuOpen);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="glass mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full px-4 md:px-6">
        <a href="#home" className="group flex items-center gap-3" aria-label="INNOVEXA home">
          <InnovexaLogo compactText />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div key={item} className="group relative">
              <a href={hrefFor(item)} className="flex items-center gap-1 rounded-full px-3 py-2 text-sm text-white/68 transition hover:text-white">
                {item}
              </a>
              <span className="absolute bottom-0 left-3 right-3 h-px scale-x-0 bg-cyan-glow transition group-hover:scale-x-100" />
            </div>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="premium">
            <a href="#contact">Book Free Strategy Call</a>
          </Button>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="glass mx-auto mt-3 max-w-7xl rounded-3xl p-4 lg:hidden"
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
              <Button asChild variant="premium" className="mt-3">
                <a href="#contact" onClick={() => setMenuOpen(false)}>Book Free Strategy Call</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
