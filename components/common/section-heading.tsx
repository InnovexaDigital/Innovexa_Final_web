import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, copy, align = "center" }: SectionHeadingProps) {
  return (
    <div
      data-gsap-reveal
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <div
        className={cn(
          "mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-glow/25 bg-cyan-glow/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100",
          align === "center" ? "justify-center" : ""
        )}
      >
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="font-display text-[1.9rem] font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-white/62 sm:leading-8 md:text-lg">{copy}</p>
    </div>
  );
}
