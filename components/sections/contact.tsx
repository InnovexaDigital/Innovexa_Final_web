"use client";

import emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Building2, CheckCircle2, Mail, Phone, Send, ShieldCheck, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";
import { company, contactServices, socialLinks } from "@/lib/site-data";

const PremiumSelectField = dynamic(() => import("@/components/ui/premium-select-field"), {
  ssr: false,
  loading: () => <div className="h-[5.25rem] w-full rounded-xl border border-white/10 bg-[#0b1327]/55" />
});

const inputClassName =
  "peer h-14 w-full rounded-xl border border-white/10 bg-[#0b1327]/70 px-4 pt-6 text-sm text-white shadow-[inset_0_1px_0_rgba(255,255,255,.05)] outline-none transition placeholder:text-transparent focus:border-cyan-glow/60 focus:bg-[#0c1830]/80 focus:ring-2 focus:ring-cyan-glow/20";

const labelClassName =
  "pointer-events-none absolute left-4 top-4 text-xs uppercase tracking-[0.16em] text-white/50 transition-all duration-200 peer-placeholder-shown:top-[1.1rem] peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-[0.08em] peer-placeholder-shown:text-white/36 peer-focus:top-4 peer-focus:text-xs peer-focus:tracking-[0.16em] peer-focus:text-cyan-100";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serviceNeeded, setServiceNeeded] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [timeline, setTimeline] = useState("");

  const compactPhone = company.phone.replaceAll(" ", "");
  const whatsappNumber = company.whatsapp.replaceAll(" ", "").replace("+", "");
  const instagramUrl = `https://instagram.com/${company.instagram}`;
  const linkedinUrl = `https://linkedin.com/company/${company.linkedin}`;
  const githubUrl = `https://github.com/${company.github}`;

  const WhatsAppIcon = socialLinks.find((item) => item.label === "WhatsApp")?.icon;
  const InstagramIcon = socialLinks.find((item) => item.label === "Instagram")?.icon;
  const LinkedInIcon = socialLinks.find((item) => item.label === "LinkedIn")?.icon;
  const GitHubIcon = socialLinks.find((item) => item.label === "GitHub")?.icon;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!serviceNeeded || !budgetRange.trim() || !timeline) {
      return;
    }

    const form = event.currentTarget;

    // Honeypot: bots fill hidden fields, humans never see them.
    if ((form.elements.namedItem("company_website") as HTMLInputElement | null)?.value) {
      return;
    }

    setStatus("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      }

      setStatus("sent");
      form.reset();
      setServiceNeeded("");
      setBudgetRange("");
      setTimeline("");
    } catch (error) {
      console.error("Contact form submission failed", error);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-band relative overflow-hidden py-20 sm:py-24 lg:py-26">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(34,216,255,.14),transparent_28%),radial-gradient(circle_at_80%_22%,rgba(109,40,217,.17),transparent_34%),radial-gradient(circle_at_58%_80%,rgba(14,165,233,.1),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#030712]/80 to-transparent" />

      <div className="section-shell grid gap-8 lg:grid-cols-[1fr_1.04fr] lg:gap-12 xl:gap-16">
        <motion.div
          data-gsap-reveal
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative text-center lg:text-left"
        >
          <div className="absolute -left-8 top-24 h-44 w-44 rounded-full bg-cyan-glow/18 blur-[80px]" />
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-violet-glow/18 blur-[85px]" />

          <div className="relative mx-auto max-w-xl lg:mx-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-glow/20 bg-cyan-glow/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.23em] text-cyan-100">
              <Sparkles className="h-3.5 w-3.5" />
              Project Intake
            </span>

            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
              Let&apos;s build something extraordinary.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-8 text-white/64 sm:text-lg">
              Designed for founders and teams ready to ship premium digital products, AI automations, and growth systems with speed and precision.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 text-left">
              {[
                { value: "24h", label: "First response time" },
                { value: "10+", label: "Projects Delivered" },
                { value: "98%", label: "Client satisfaction" },
                { value: "End-to-end", label: "Strategy to deployment" }
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                  <p className="font-display text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/44">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3 text-left">
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-white/72 transition hover:border-cyan-glow/35 hover:text-white"
              >
                <Mail className="h-4 w-4 text-cyan-glow" />
                {company.email}
              </a>
              <a
                href={`tel:${compactPhone}`}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-white/72 transition hover:border-cyan-glow/35 hover:text-white"
              >
                <Phone className="h-4 w-4 text-cyan-glow" />
                {company.phone}
              </a>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-white/74 transition hover:scale-105 hover:border-emerald-400/50 hover:text-emerald-300 hover:shadow-[0_0_22px_rgba(52,211,153,.3)]"
                aria-label="Chat on WhatsApp"
              >
                {WhatsAppIcon && <WhatsAppIcon className="h-5 w-5" />}
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-white/74 transition hover:scale-105 hover:border-pink-400/50 hover:text-pink-300 hover:shadow-[0_0_22px_rgba(244,114,182,.34)]"
                aria-label="Instagram"
              >
                {InstagramIcon && <InstagramIcon className="h-5 w-5" />}
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-white/74 transition hover:scale-105 hover:border-sky-400/50 hover:text-sky-300 hover:shadow-[0_0_22px_rgba(56,189,248,.34)]"
                aria-label="LinkedIn"
              >
                {LinkedInIcon && <LinkedInIcon className="h-5 w-5" />}
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-white/74 transition hover:scale-105 hover:border-slate-300/50 hover:text-slate-100 hover:shadow-[0_0_22px_rgba(148,163,184,.32)]"
                aria-label="GitHub"
              >
                {GitHubIcon && <GitHubIcon className="h-5 w-5" />}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          data-gsap-reveal
          data-tilt
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(130deg,rgba(8,16,35,.78),rgba(7,13,27,.62))] p-5 shadow-[0_35px_130px_rgba(4,14,30,.8)] backdrop-blur-xl sm:p-7 lg:p-8"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-white/10" />
          <div className="pointer-events-none absolute -right-14 top-2 h-44 w-44 rounded-full bg-cyan-glow/20 blur-[72px]" />
          <div className="pointer-events-none absolute -left-20 bottom-4 h-48 w-48 rounded-full bg-violet-glow/20 blur-[86px]" />

          <div className="relative flex items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.23em] text-cyan-100/70">Project Intake</p>
              <h3 className="mt-2 font-display text-3xl font-semibold text-white">Start your next build</h3>
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-cyan-glow">
              <ShieldCheck className="h-6 w-6" />
            </div>
          </div>

          <div className="relative mt-7 grid gap-5 sm:grid-cols-2">
            <div className="relative">
              <input id="full_name" name="full_name" placeholder="Full Name" className={inputClassName} required />
              <label htmlFor="full_name" className={labelClassName}>Full Name</label>
            </div>

            <div className="relative">
              <input id="company_brand" name="company_brand" placeholder="Company / Brand" className={inputClassName} required />
              <label htmlFor="company_brand" className={labelClassName}>Company / Brand</label>
            </div>

            <div className="relative">
              <input id="email" name="email" type="email" placeholder="Email" className={inputClassName} required />
              <label htmlFor="email" className={labelClassName}>Email</label>
            </div>

            <div className="relative">
              <input id="phone" name="phone" type="tel" placeholder="Phone" className={inputClassName} required />
              <label htmlFor="phone" className={labelClassName}>Phone</label>
            </div>

            <PremiumSelectField
              id="service"
              name="service"
              label="Service Needed"
              value={serviceNeeded}
              onValueChange={setServiceNeeded}
              placeholder="Select service"
              options={contactServices.map((service) => ({ value: service, label: service }))}
            />

            <div className="relative">
              <input
                id="budget"
                name="budget"
                placeholder="Budget"
                className={inputClassName}
                value={budgetRange}
                onChange={(event) => setBudgetRange(event.target.value)}
                required
              />
              <label htmlFor="budget" className={labelClassName}>Budget (e.g. ₹50,000)</label>
            </div>

            <div className="sm:col-span-2">
              <PremiumSelectField
                id="timeline"
                name="timeline"
                label="Timeline"
                value={timeline}
                onValueChange={setTimeline}
                placeholder="Preferred timeline"
                options={[
                  { value: "ASAP (within 2 weeks)", label: "ASAP (within 2 weeks)" },
                  { value: "2 to 4 weeks", label: "2 to 4 weeks" },
                  { value: "1 to 2 months", label: "1 to 2 months" },
                  { value: "2+ months", label: "2+ months" }
                ]}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.16em] text-white/54">Project Details</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Share your goals, scope, and what success looks like."
                className="h-36 w-full resize-none rounded-xl border border-white/10 bg-[#0b1327]/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/38 focus:border-cyan-glow/60 focus:bg-[#0c1830]/80 focus:ring-2 focus:ring-cyan-glow/20"
                required
              />
            </div>

            {/* Honeypot — hidden from humans, catches spam bots. */}
            <input
              type="text"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />

            <input type="hidden" name="instagram" value={instagramUrl} />
            <input type="hidden" name="linkedin" value={linkedinUrl} />
            <input type="hidden" name="github" value={githubUrl} />
            <input type="hidden" name="whatsapp" value={`https://wa.me/${whatsappNumber}`} />
          </div>

          {!serviceNeeded || !budgetRange.trim() || !timeline ? (
            <p className="mt-4 text-xs text-amber-200/75">Choose a service and timeline, and enter your budget to submit.</p>
          ) : null}

          <motion.button
            type="submit"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
            disabled={!serviceNeeded || !budgetRange.trim() || !timeline || status === "sending"}
            className="relative mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[linear-gradient(110deg,#1D9BF0,#3B82F6)] text-sm font-bold uppercase tracking-[0.15em] text-white shadow-[0_10px_28px_rgba(59,130,246,.2)] transition hover:bg-[linear-gradient(110deg,#38BDF8,#2563EB)] hover:shadow-[0_12px_34px_rgba(37,99,235,.26)] disabled:opacity-60"
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
                ? "Request Sent"
                : status === "error"
                  ? "Try Again"
                  : "Start Your Project"}
            <Send className="h-4 w-4" />
          </motion.button>

          {status === "sent" ? (
            <p className="mt-3 text-sm text-emerald-300/90" role="status">
              Thanks — your request has been received. We&apos;ll reply within 24 hours.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="mt-3 text-sm text-rose-300/90" role="alert">
              Something went wrong sending your request. Please try again or email us at {company.email}.
            </p>
          ) : null}

          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/48">
            <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-cyan-glow" /> NDA-friendly process</span>
            <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-cyan-glow" /> Strategy-first approach</span>
            <span className="inline-flex items-center gap-1"><Building2 className="h-3.5 w-3.5 text-cyan-glow" /> Built for scale</span>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
