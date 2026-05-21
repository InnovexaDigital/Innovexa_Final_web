import { SectionHeading } from "@/components/common/section-heading";

const timeline = [
  ["Discover", "Audit the market, audience, funnel, product requirements, and operational friction before design begins."],
  ["Build", "Create the interface, automation layer, integrations, content, and creative system with production-grade execution."],
  ["Launch", "Ship fast with analytics, QA, performance tuning, SEO basics, and campaign-ready conversion paths."],
  ["Scale", "Iterate through data, automation expansion, ad systems, CRM workflows, and compounding content."]
];

export function About() {
  return (
    <section id="about" className="section-band relative py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Process"
          title="Built for businesses that want the future today."
          copy="INNOVEXA is a premium digital growth studio delivering websites, software, automation, creative systems, and AI products for ambitious teams."
        />
        <div className="grid gap-5 lg:grid-cols-4">
          {timeline.map(([title, copy], index) => (
            <article key={title} data-gsap-reveal data-tilt className="glass-dark relative overflow-hidden rounded-[1.75rem] p-7">
              <span className="absolute left-7 top-0 h-16 w-px bg-gradient-to-b from-cyan-glow to-transparent" />
              <span className="font-display text-5xl font-bold text-white/12">0{index + 1}</span>
              <h3 className="mt-8 font-display text-2xl font-semibold text-white">{title}</h3>
              <p className="mt-4 leading-7 text-white/58">{copy}</p>
            </article>
          ))}
        </div>
        <div data-gsap-reveal className="mt-6 grid gap-5 md:grid-cols-3">
          {["Strategy Directors", "Product Engineers", "AI Automation Architects"].map((role) => (
            <div key={role} data-tilt className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-6">
              <div className="mb-12 h-24 rounded-3xl bg-gradient-to-br from-cyan-glow/25 via-primary/20 to-violet-glow/25" />
              <p className="font-display text-xl font-semibold text-white">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
