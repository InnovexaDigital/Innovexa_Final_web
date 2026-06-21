"use client";

import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { company } from "@/lib/site-data";

const whatsappNumber = company.whatsapp.replaceAll(" ", "").replace("+", "");

export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      const nearContact = contact
        ? contact.getBoundingClientRect().top < window.innerHeight * 0.9
        : false;
      // Show after the hero, hide once the contact form is on screen.
      setVisible(window.scrollY > 560 && !nearContact);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 md:hidden transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="mx-3 mb-3 flex items-center gap-2 rounded-2xl border border-white/12 bg-[#070d1b]/92 p-2 shadow-[0_18px_50px_rgba(0,0,0,.5)] backdrop-blur-xl">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 transition active:scale-95"
        >
          <FaWhatsapp className="h-5 w-5" />
        </a>
        <a
          href="#contact"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[linear-gradient(110deg,#1D9BF0,#3B82F6)] text-sm font-bold uppercase tracking-[0.12em] text-white transition active:scale-[0.99]"
        >
          Start Your Project
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
