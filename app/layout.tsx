import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://innovexa.vercel.app"),
  title: {
    default: "INNOVEXA | AI, Design and Digital Growth Systems",
    template: "%s | INNOVEXA"
  },
  description:
    "INNOVEXA builds enterprise-grade websites, applications, AI automations, growth systems, and digital experiences that transform businesses.",
  keywords: [
    "INNOVEXA",
    "AI automation",
    "website development",
    "app development",
    "digital marketing",
    "enterprise software"
  ],
  openGraph: {
    title: "INNOVEXA | Engineering Digital Growth",
    description:
      "Enterprise-grade AI, design, automation, and digital growth systems.",
    url: "https://innovexa.vercel.app",
    siteName: "INNOVEXA",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#02040a",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="noise antialiased">
        {children}
      </body>
    </html>
  );
}
