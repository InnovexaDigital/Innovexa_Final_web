"use client";

import emailjs from "@emailjs/browser";
import { Mail, MapPin, MessageCircle, Phone, Send, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";
import { company, contactServices } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/common/section-heading";
import { InnovexaLogo } from "@/components/common/innovexa-logo";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
    }

    window.setTimeout(() => {
      setStatus("sent");
      form.reset();
    }, 650);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-primary/12 to-transparent" />
      <div className="section-shell grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Contact"
            title="Start with a conversation. Leave with a clear digital growth direction."
            copy="Tell us what you want to build, improve, automate, or scale. Innovexa Digital will help define the cleanest next move."
          />
          <div data-gsap-reveal data-tilt className="glass-dark relative overflow-hidden rounded-[1.5rem] p-8">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-glow/20 blur-[70px]" />
            <div className="relative flex items-center justify-between gap-4">
              <InnovexaLogo compactText />
              <div className="grid h-16 w-16 place-items-center rounded-full bg-cyan-glow/10 text-cyan-glow ring-1 ring-cyan-glow/25">
                <Sparkles className="h-7 w-7" />
              </div>
            </div>
            <div className="relative mt-10 grid gap-3">
              {[
                [Phone, company.phone],
                [Mail, company.email],
                [MapPin, company.location],
                [MessageCircle, `WhatsApp ${company.whatsapp}`]
              ].map(([Icon, text]) => (
                <a key={text as string} href={text === company.email ? `mailto:${company.email}` : text === company.phone ? `tel:${company.phone.replaceAll(" ", "")}` : "#contact"} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-sm text-white/68 transition hover:border-cyan-glow/30 hover:text-white">
                  <Icon className="h-4 w-4 text-cyan-glow" />
                  {text as string}
                </a>
              ))}
            </div>
          </div>
        </div>
        <form data-gsap-reveal data-tilt onSubmit={handleSubmit} className="gradient-border glass relative overflow-hidden rounded-[1.5rem] p-5 shadow-[0_30px_120px_rgba(0,217,255,.1)] md:p-8">
          <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-cyan-glow/15 blur-[60px]" />
          <div className="relative mb-6">
            <p className="text-sm uppercase tracking-[0.22em] text-cyan-100/70">Project Intake</p>
            <h3 className="mt-2 font-display text-3xl font-semibold text-white">Get a premium proposal</h3>
          </div>
          <div className="relative grid gap-4 md:grid-cols-2">
            <Input name="name" placeholder="Name" required />
            <Input name="email" type="email" placeholder="Email" required />
            <Input name="phone" placeholder="Phone" required />
            <Input name="business_type" placeholder="Business Type" />
            <select name="service" className="h-12 w-full rounded-xl border border-white/10 bg-[#111827] px-4 text-sm text-white outline-none focus:border-cyan-glow/70 focus:ring-2 focus:ring-cyan-glow/20" defaultValue="" required>
              <option value="" disabled>Service Interested</option>
              {contactServices.map((service) => <option key={service} value={service}>{service}</option>)}
            </select>
            <select name="budget" className="h-12 w-full rounded-xl border border-white/10 bg-[#111827] px-4 text-sm text-white outline-none focus:border-cyan-glow/70 focus:ring-2 focus:ring-cyan-glow/20" defaultValue="" required>
              <option value="" disabled>Project Budget</option>
              <option>Under ₹25,000</option>
              <option>₹25,000 - ₹75,000</option>
              <option>₹75,000 - ₹2,00,000</option>
              <option>₹2,00,000+</option>
            </select>
          </div>
          <Textarea name="message" placeholder="Message" className="mt-4" required />
          <Button type="submit" variant="premium" size="lg" className="mt-6 w-full">
            {status === "sending" ? "Sending..." : status === "sent" ? "Request Sent" : "Get Proposal"}
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </section>
  );
}
