import { ArrowUpRight } from "lucide-react";
import { posts } from "@/lib/site-data";
import { SectionHeading } from "@/components/common/section-heading";

export function Blog() {
  return (
    <section id="blog" className="section-band py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Insights"
          title="Signals for leaders building smarter digital businesses."
          copy="Ideas across AI, marketing, automation, design, and business growth from the Innovexa operating lens."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {posts.map((post) => (
            <a key={post.title} href="#contact" data-gsap-reveal data-tilt className="glass-dark group flex min-h-72 flex-col justify-between rounded-[1.75rem] p-6 transition hover:-translate-y-2 hover:shadow-glow">
              <div>
                <span className="rounded-full border border-cyan-glow/20 bg-cyan-glow/10 px-3 py-1 text-xs text-cyan-100">
                  {post.tag}
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold leading-tight text-white">{post.title}</h3>
              </div>
              <div className="mt-8 flex items-center justify-between text-sm text-white/45">
                <span>{post.read}</span>
                <ArrowUpRight className="h-5 w-5 transition group-hover:rotate-45 group-hover:text-cyan-glow" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
