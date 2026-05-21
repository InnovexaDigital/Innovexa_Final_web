import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "min-h-32 w-full resize-none rounded-xl border border-white/10 bg-white/[0.055] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/38 focus:border-cyan-glow/70 focus:bg-white/[0.075] focus:ring-2 focus:ring-cyan-glow/20",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
