import { stats } from "@/lib/site-data";

export function TrustStats() {
  return (
    <section className="relative py-14">
      <div className="section-shell grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} data-gsap-reveal className="gradient-border glass-dark rounded-[1.25rem] p-5">
            <div className="font-display text-3xl font-semibold text-white">{stat.value}</div>
            <p className="mt-3 text-sm leading-6 text-white/52">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
