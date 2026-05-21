import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  compactText?: boolean;
  src?: string;
  priority?: boolean;
};

export function Logo({ className, compactText = false, src, priority = true }: LogoProps) {
  return (
    <Image
      src={src ?? "/logo/innovexa-logo.png"}
      alt="Innovexa Digital"
      width={3239}
      height={2558}
      priority={priority}
      className={cn(
        "block h-auto w-[180px] max-w-none object-contain sm:w-[200px] md:w-[220px]",
        compactText && "w-[172px] sm:w-[188px] md:w-[206px]",
        className
      )}
    />
  );
}