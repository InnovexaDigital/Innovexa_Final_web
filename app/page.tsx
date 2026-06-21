import { AnimationProvider } from "@/components/providers/animation-provider";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileCta } from "@/components/layout/mobile-cta";
import { Hero } from "@/components/sections/hero";
import { TrustStats } from "@/components/sections/trust-stats";
import { Services } from "@/components/sections/services";
import { Solutions } from "@/components/sections/solutions";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { WhyChoose } from "@/components/sections/why-choose";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { JsonLd } from "@/components/seo/json-ld";
import { faqPageSchema, pageGraph, webPageSchema } from "@/lib/structured-data";

export default function Home() {
  const graph = pageGraph([
    webPageSchema({
      path: "/",
      name: "INNOVEXA DIGITAL — Web, Mobile App & AI Automation Agency in Chennai",
      description:
        "Premium websites, mobile apps, AI automation, billing software, SEO, and digital marketing that help businesses build, automate, and scale."
    }),
    faqPageSchema()
  ]);

  return (
    <LenisProvider>
      <JsonLd data={graph} />
      <AnimationProvider />
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <TrustStats />
        <Services />
        <Solutions />
        <Portfolio />
        <Process />
        <About />
        <WhyChoose />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <MobileCta />
      <Footer />
    </LenisProvider>
  );
}
