import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-white text-slate-950 shadow-[0_0_40px_rgba(18,231,255,.2)] hover:bg-cyan-100",
        premium:
          "glow-ring bg-[linear-gradient(110deg,#00A3FF_0%,#00D9FF_38%,#7A5CFF_72%,#B315FF_100%)] text-white shadow-[0_0_42px_rgba(0,217,255,.35)] hover:shadow-[0_0_58px_rgba(179,21,255,.38)]",
        glass:
          "glass text-white hover:border-cyan-glow/35 hover:bg-cyan-glow/10",
        ghost:
          "text-white/78 hover:bg-white/10 hover:text-white"
      },
      size: {
        default: "h-11 px-5",
        lg: "h-13 px-7 py-4 text-base",
        icon: "h-11 w-11"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), "magnetic")}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
