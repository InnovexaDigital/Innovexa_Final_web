import { cn } from "@/lib/utils";

type InnovexaLogoProps = {
  showText?: boolean;
  compactText?: boolean;
  className?: string;
};

export function InnovexaLogo({ showText = true, compactText = false, className }: InnovexaLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span className="relative grid h-12 w-12 shrink-0 place-items-center">
        <svg viewBox="0 0 96 96" className="h-12 w-12 drop-shadow-[8px_10px_10px_rgba(0,0,0,.55)]" aria-hidden="true">
          <defs>
            <linearGradient id="innovexa-mark-gradient" x1="25" x2="74" y1="82" y2="13" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B017FF" />
              <stop offset=".5" stopColor="#654BFF" />
              <stop offset="1" stopColor="#22D8FF" />
            </linearGradient>
            <linearGradient id="innovexa-edge-gradient" x1="18" x2="78" y1="84" y2="10" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A1173" />
              <stop offset=".45" stopColor="#2131B8" />
              <stop offset="1" stopColor="#63F3FF" />
            </linearGradient>
          </defs>
          <path
            d="M38.5 82.2c-8.6-5.1-11.8-16.3-7.4-25.3 1.2-2.5 2.9-4.8 4.8-6.7L61.2 25H48.8l-8.4-8.4h36.4v36.3l-8.4-8.4L43.5 69.4c-2.7 2.7-2.2 7.2 1 9.2-1.9 2.1-3.9 3.2-6 3.6Z"
            fill="#15161B"
            opacity=".7"
          />
          <path
            d="M35 77.7c-8.1-5.1-10.9-15.8-6.6-24.4 1.1-2.3 2.6-4.3 4.4-6.1L58.5 21.5H46.1l-7.9-7.9h35.3v35.3l-7.9-7.9L39.9 66.6c-3.2 3.2-.9 8.7 3.7 8.7h14.1c10.6 0 19.2-8.6 19.2-19.2 5.7 7.6 4.3 18.4-3.2 24.3-3.5 2.7-7.8 4.2-12.2 4.2H46.4c-4.1 0-8.1-1.2-11.4-3.5v-3.4Z"
            fill="url(#innovexa-mark-gradient)"
          />
          <path
            d="M35 77.7c3.3 2.3 7.3 3.5 11.4 3.5h15.1c4.4 0 8.7-1.5 12.2-4.2 3.8-3 6.1-7.3 6.7-11.8-2.8 11.2-11.8 20.1-26.3 20.1H40c-6.7 0-12.5-3.1-15.9-8 1.3 4.9 4.7 9.4 10.3 12.3 4.2 2.1 9 3.1 13.7 3.1h10.2c10.1 0 18.7-4.2 23.8-11.5 3.8-5.5 5.1-12.2 3.5-18.5-1.4-5.4-4.4-10-8.7-13.3v6.7c0 10.6-8.6 19.2-19.2 19.2H43.6c-2.4 0-4.3-1.5-5-3.5-1.1 1.6-2.3 3.5-3.6 5.9Z"
            fill="url(#innovexa-edge-gradient)"
            opacity=".58"
          />
          <path d="M16.2 45.5h8.3v8.3h-8.3v-8.3Zm10.5-12.8h8.8v8.8h-8.8v-8.8Zm12.1-13.4h10.6v10.6H38.8V19.3Z" fill="#7A35FF" />
          <path d="M18.2 45.5h6.3v6.3h-6.3v-6.3Zm10.7-12.8h6.6v6.6h-6.6v-6.6Zm12.2-13.4h8.3v8.3h-8.3v-8.3Z" fill="#8C42FF" opacity=".9" />
        </svg>
      </span>
      {showText && (
        <span className="leading-none">
          <span className={cn(
            "block font-display font-black tracking-[0.18em] text-transparent [background:linear-gradient(180deg,#fff_0%,#d7d7d7_42%,#8c8f95_100%)] bg-clip-text drop-shadow-[3px_5px_4px_rgba(0,0,0,.55)]",
            compactText ? "text-base md:text-lg" : "text-2xl md:text-3xl"
          )}>
            INNOVEXA
          </span>
          <span className={cn(
            "mt-1 block font-semibold uppercase tracking-[0.52em] text-transparent [background:linear-gradient(180deg,#f2f2f2,#71757d)] bg-clip-text drop-shadow-[2px_4px_3px_rgba(0,0,0,.6)]",
            compactText ? "text-[0.48rem] md:text-[0.52rem]" : "text-[0.66rem]"
          )}>
            Digital
          </span>
        </span>
      )}
    </span>
  );
}
