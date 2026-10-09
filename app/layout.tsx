import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteUrl } from "@/lib/site-config";
import { globalGraph } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/json-ld";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["500", "600", "700"]
});

const title = "INNOVEXA DIGITAL — Web, Mobile App & AI Automation Agency in Chennai";
const description =
  "Chennai-based digital agency building high-converting websites, mobile apps, AI automation, SEO and digital marketing. Build. Automate. Scale.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | INNOVEXA DIGITAL"
  },
  description,
  applicationName: "INNOVEXA DIGITAL",
  category: "technology",
  keywords: [
    "INNOVEXA DIGITAL",
    "digital agency Chennai",
    "web development Chennai",
    "website development company",
    "mobile app development",
    "AI automation agency",
    "agentic AI products",
    "billing software development",
    "digital marketing Chennai",
    "Meta ads agency",
    "SEO services Chennai",
    "branding and content"
  ],
  authors: [{ name: "INNOVEXA DIGITAL", url: siteUrl }],
  creator: "INNOVEXA DIGITAL",
  publisher: "INNOVEXA DIGITAL",
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "INNOVEXA DIGITAL",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@innovexa_digital",
    site: "@innovexa_digital"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined
};

export const viewport: Viewport = {
  themeColor: "#02040a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <JsonLd data={globalGraph()} />
      </head>
      <body className="noise antialiased">
        {children}
        <WhatsAppFloat /><Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
