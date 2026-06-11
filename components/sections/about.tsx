import { company } from "@/lib/site-data";
import { SectionHeading } from "@/components/common/section-heading";

export function About() {
  return (
    <section id="about" className="section-band py-28">
      <div className="section-shell grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <SectionHeading
          align="left"
          eyebrow="About"
          title="A technology and creative partner for businesses ready to modernize."
          copy={`${company.name} transforms businesses through technology, automation, AI, and creative digital experiences. From websites to AI-powered automation, we deliver solutions that combine technology with measurable business growth.`}
        />
        <div data-gsap-reveal className="grid gap-4 sm:grid-cols-2">
          {[
            ["Startups", "Launch polished websites, apps, storefronts, and content systems with strong technical foundations."],
            ["Local Businesses", "Upgrade inquiries, WhatsApp flows, booking journeys, ads, SEO, and operational software."],
            ["Growing Brands", "Scale with AI automation, CRM workflows, dashboards, campaigns, and premium creative direction."],
            ["Enterprise Mindset", "Build clean, maintainable systems that are fast, accessible, secure, and ready to evolve."]
          ].map(([title, copy]) => (
            <div key={title} data-tilt className="glass-dark rounded-[1.5rem] p-6">
              <h3 className="font-display text-2xl font-semibold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/55">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
