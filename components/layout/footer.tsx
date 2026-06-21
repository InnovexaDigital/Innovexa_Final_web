import Link from "next/link";
import { company, navItems, services, socialLinks } from "@/lib/site-data";
import { serviceSlugByTitle } from "@/lib/landing-pages";
import { Logo } from "@/components/common/logo";

// "/#section" so footer links resolve correctly from landing pages too (LenisProvider
// smooth-scrolls them on the homepage).
const hrefFor = (item: string) => (item === "Home" ? "/" : `/#${item.toLowerCase()}`);
const serviceHref = (title: string) =>
  serviceSlugByTitle[title] ? `/services/${serviceSlugByTitle[title]}` : "/#services";

export function Footer() {
  const phoneHref = `tel:${company.phone.replaceAll(" ", "")}`;
  const socialFooterLinks = socialLinks.filter(({ label }) =>
    ["WhatsApp", "Instagram", "LinkedIn", "GitHub"].includes(label)
  );

  return (
    <footer className="section-band border-t border-white/10 py-12 md:py-16">
      <div className="section-shell">
        <div className="glass-dark grid gap-8 rounded-[1.5rem] p-6 sm:p-8 lg:grid-cols-[1.3fr_.9fr_1fr_1fr_1fr] lg:p-10">
          <div>
            <Logo className="w-[210px] md:w-[240px]" />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/36">Quick Links</p>
            <div className="grid gap-1">
              {navItems.map((item) => (
                <Link key={item} href={hrefFor(item)} className="py-1.5 text-sm text-white/54 transition hover:text-cyan-glow">
                  {item}
                </Link>
              ))}
              <Link href="/digital-agency-chennai" className="py-1.5 text-sm text-white/54 transition hover:text-cyan-glow">
                Digital Agency in Chennai
              </Link>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/36">Services</p>
            <div className="grid gap-1">
              {services.slice(0, 6).map((service) => (
                <Link key={service.title} href={serviceHref(service.title)} className="py-1.5 text-sm text-white/54 transition hover:text-cyan-glow">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/36">Contact</p>
            <div className="grid gap-1 text-sm text-white/54">
              <a href={phoneHref} className="py-1.5 transition hover:text-cyan-glow">{company.phone}</a>
              <a href={`mailto:${company.email}`} className="break-words py-1.5 transition hover:text-cyan-glow">{company.email}</a>
              <address className="py-1.5 not-italic leading-6">
                {company.address.street},<br />
                {company.address.locality}, {company.address.region} {company.address.postalCode}
              </address>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/36">Social</p>
            <div className="flex items-center gap-3 sm:gap-4">
              {socialFooterLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.05] text-white/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 ${
                    label === "WhatsApp"
                      ? "hover:border-emerald-300/50 hover:text-emerald-200 hover:shadow-[0_0_22px_rgba(52,211,153,.3)]"
                      : label === "Instagram"
                        ? "hover:border-fuchsia-300/50 hover:text-fuchsia-200 hover:shadow-[0_0_22px_rgba(236,72,153,.35)]"
                        : label === "LinkedIn"
                          ? "hover:border-sky-300/50 hover:text-sky-200 hover:shadow-[0_0_22px_rgba(56,189,248,.34)]"
                          : "hover:border-white/45 hover:text-white hover:shadow-[0_0_22px_rgba(226,232,240,.32)]"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/34 md:flex-row md:items-center">
          <span>(c) 2026 {company.name}. All rights reserved.</span>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer" className="py-1.5 transition hover:text-white/55">{company.website}</a>
            <a href="/privacy" className="py-1.5 transition hover:text-white/55">Privacy</a>
            <a href="/terms" className="py-1.5 transition hover:text-white/55">Terms</a>
            <a href="/security" className="py-1.5 transition hover:text-white/55">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
