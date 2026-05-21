import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-12 w-full rounded-xl border border-white/10 bg-white/[0.055] px-4 text-sm text-white outline-none transition placeholder:text-white/38 focus:border-cyan-glow/70 focus:bg-white/[0.075] focus:ring-2 focus:ring-cyan-glow/20",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
