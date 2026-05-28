import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://innovexa.digital"),
  title: {
    default: "INNOVEXA DIGITAL | Build. Automate. Scale.",
    template: "%s | INNOVEXA DIGITAL"
  },
  description:
    "Innovexa Digital transforms businesses through websites, mobile apps, AI automation, digital marketing, and creative content solutions.",
  keywords: [
    "INNOVEXA DIGITAL",
    "AI automation",
    "website development",
    "mobile app development",
    "billing software",
    "digital marketing",
    "Chennai digital agency"
  ],
  openGraph: {
    title: "INNOVEXA DIGITAL | Build. Automate. Scale.",
    description:
      "Premium websites, mobile apps, AI automation systems, growth campaigns, and creative digital experiences.",
    url: "https://innovexa.digital",
    siteName: "INNOVEXA DIGITAL",
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
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "INNOVEXA DIGITAL",
    url: "https://innovexa.digital",
    email: "innovexa.digitalservices@gmail.com",
    telephone: "+91 95660 61075",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressCountry: "IN"
    },
    sameAs: [
      "https://instagram.com/innovexa_digital",
      "https://linkedin.com/company/innovexa-digital",
      "https://github.com/innovexa-digital"
    ],
    description:
      "Innovexa Digital transforms businesses through technology, automation, AI, and creative digital experiences."
  };

  return (
    <html lang="en" className="dark">
      <body className="noise antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
