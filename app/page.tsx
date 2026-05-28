import { AnimationProvider } from "@/components/providers/animation-provider";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TrustStats } from "@/components/sections/trust-stats";
import { Services } from "@/components/sections/services";
import { Solutions } from "@/components/sections/solutions";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { WhyChoose } from "@/components/sections/why-choose";
import { Testimonials } from "@/components/sections/testimonials";
import { About } from "@/components/sections/about";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <LenisProvider>
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
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </LenisProvider>
  );
}
