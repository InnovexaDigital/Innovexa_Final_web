import { navItems, services, socialLinks } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { InnovexaLogo } from "@/components/common/innovexa-logo";

const hrefFor = (item: string) => `#${item === "AI Solutions" ? "solutions" : item.toLowerCase()}`;
const socialIcons = {
  LinkedIn: Linkedin,
  Instagram,
  X: Twitter,
  YouTube: Youtube
};

export function Footer() {
  return (
    <footer className="section-band border-t border-white/10 py-12">
      <div className="section-shell">
        <div className="glass-dark grid gap-10 rounded-[2rem] p-6 md:grid-cols-[1.1fr_.7fr_.9fr_.8fr] md:p-8">
          <div>
            <InnovexaLogo />
            <p className="mt-4 max-w-md leading-7 text-white/52">
              Enterprise-grade websites, applications, AI automations, growth systems, and digital experiences.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link as keyof typeof socialIcons];
                return (
                  <a key={link} href="#contact" aria-label={link} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/58 transition hover:border-cyan-glow/40 hover:bg-cyan-glow/10 hover:text-cyan-glow">
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/36">Quick Links</p>
            <div className="grid gap-3">
              {navItems.map((item) => (
                <a key={item} href={hrefFor(item)} className="text-sm text-white/54 hover:text-cyan-glow">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/36">Services</p>
            <div className="grid grid-cols-2 gap-3">
              {services.slice(0, 10).map((service) => (
                <a key={service.title} href="#services" className="text-sm text-white/54 hover:text-cyan-glow">
                  {service.title}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/36">Newsletter</p>
            <div className="flex gap-2">
              <input className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-white outline-none" placeholder="Email address" />
              <Button variant="glass">Join</Button>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/42">
              Insights on AI automation, premium websites, brand systems, and growth architecture.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/34 md:flex-row">
          <span>(c) 2026 INNOVEXA. All rights reserved.</span>
          <span>Privacy Policy / Terms / Security</span>
        </div>
      </div>
    </footer>
  );
}
