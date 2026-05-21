"use client";

import emailjs from "@emailjs/browser";
import { Mail, Phone, Send, Sparkles, Zap } from "lucide-react";
import { FormEvent, useState } from "react";
import { contactServices } from "@/lib/site-data";
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
            eyebrow="Start"
            title="Let's build the digital growth system your market remembers."
            copy="Tell us what you are building, improving, or automating. Innovexa will respond with the cleanest next move."
          />
          <div data-gsap-reveal data-tilt className="glass-dark relative min-h-96 overflow-hidden rounded-[1.75rem] p-8 shadow-[0_24px_100px_rgba(0,0,0,.32)]">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-glow/20 blur-[70px]" />
            <div className="absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-violet-glow/20 blur-[80px]" />
            <div className="relative flex items-center justify-between gap-4">
              <InnovexaLogo compactText />
              <div className="grid h-16 w-16 place-items-center rounded-full bg-cyan-glow/10 text-cyan-glow ring-1 ring-cyan-glow/25">
                <Sparkles className="h-7 w-7" />
              </div>
            </div>
            <p className="relative mt-12 max-w-sm font-display text-3xl font-semibold leading-tight text-white">
              Strategy, interface, automation, launch, and scale under one roof.
            </p>
            <div className="relative mt-8 grid gap-3">
              {[
                [Zap, "AI roadmap within 24 hours"],
                [Mail, "Premium proposal and scope"],
                [Phone, "Free strategy call"]
              ].map(([Icon, text]) => (
                <div key={text as string} data-tilt className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-sm text-white/68">
                  <Icon className="h-4 w-4 text-cyan-glow" />
                  {text as string}
                </div>
              ))}
            </div>
          </div>
        </div>
        <form data-gsap-reveal data-tilt onSubmit={handleSubmit} className="gradient-border glass relative overflow-hidden rounded-[1.75rem] p-5 shadow-[0_30px_120px_rgba(0,217,255,.1)] md:p-8">
          <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-cyan-glow/15 blur-[60px]" />
          <div className="relative mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-100/70">Project Intake</p>
              <h3 className="mt-2 font-display text-3xl font-semibold text-white">Start with clarity</h3>
            </div>
            <InnovexaLogo showText={false} />
          </div>
          <div className="relative grid gap-4 md:grid-cols-2">
            <Input name="name" placeholder="Name" required />
            <Input name="email" type="email" placeholder="Email" required />
            <Input name="phone" placeholder="Phone" />
            <Input name="business" placeholder="Business" />
            <select
              name="service"
              className="h-12 w-full rounded-xl border border-white/10 bg-[#111827] px-4 text-sm text-white outline-none focus:border-cyan-glow/70 focus:ring-2 focus:ring-cyan-glow/20"
              defaultValue=""
              required
            >
              <option value="" disabled>Service interested</option>
              {contactServices.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
            <select
              name="budget"
              className="h-12 w-full rounded-xl border border-white/10 bg-[#111827] px-4 text-sm text-white outline-none focus:border-cyan-glow/70 focus:ring-2 focus:ring-cyan-glow/20"
              defaultValue=""
              required
            >
              <option value="" disabled>Project budget</option>
              <option>$2.5k - $7.5k</option>
              <option>$7.5k - $18k</option>
              <option>$18k - $50k</option>
              <option>$50k+</option>
            </select>
          </div>
          <Textarea name="message" placeholder="Tell us about the opportunity" className="mt-4" required />
          <Button type="submit" variant="premium" size="lg" className="mt-6 w-full">
            {status === "sending" ? "Sending..." : status === "sent" ? "Request Sent" : "Let's Build Together"}
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </section>
  );
}
