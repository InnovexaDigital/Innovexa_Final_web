import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow focus-visible:ring-offset-2 focus-visible:ring-offset-[#040712] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[linear-gradient(110deg,#1D9BF0,#3B82F6)] text-white shadow-[0_0_20px_rgba(59,130,246,.18)] hover:bg-[linear-gradient(110deg,#38BDF8,#2563EB)] hover:shadow-[0_0_26px_rgba(59,130,246,.24)]",
        premium:
          "bg-[linear-gradient(110deg,#1D9BF0_0%,#3B82F6_100%)] text-white shadow-[0_0_21px_rgba(59,130,246,.18)] hover:bg-[linear-gradient(110deg,#38BDF8_0%,#2563EB_100%)] hover:shadow-[0_0_32px_rgba(59,130,246,.22)]",
        glass:
          "glass text-white hover:border-cyan-glow/40 hover:bg-cyan-glow/10 hover:shadow-[0_0_18px_rgba(18,231,255,.09)]",
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
