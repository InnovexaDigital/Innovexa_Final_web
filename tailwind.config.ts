import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        13: "3.25rem"
      },
      fontFamily: {
        display: ["var(--font-space)", "Inter", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"]
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1f7aff",
          foreground: "#f8fbff"
        },
        cyan: {
          glow: "#12e7ff"
        },
        violet: {
          glow: "#9d5cff"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      boxShadow: {
        glow: "0 0 50px rgba(18, 231, 255, 0.25)",
        violet: "0 0 60px rgba(157, 92, 255, 0.3)"
      },
      backgroundImage: {
        "luxury-radial":
          "radial-gradient(circle at 54% 18%, rgba(0,217,255,.12), transparent 26%), radial-gradient(circle at 36% 28%, rgba(122,92,255,.16), transparent 28%), linear-gradient(135deg, #08090c 0%, #171a1f 46%, #07080b 100%)",
        "mesh-grid":
          "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)"
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: ".5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" }
        }
      },
      animation: {
        shimmer: "shimmer 2.5s infinite",
        pulseGlow: "pulseGlow 5s ease-in-out infinite"
      }
    }
  },
  plugins: [animate]
};

export default config;
