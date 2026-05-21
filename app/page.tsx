import { AnimationProvider } from "@/components/providers/animation-provider";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Preloader } from "@/components/common/preloader";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Solutions } from "@/components/sections/solutions";
import { Portfolio } from "@/components/sections/portfolio";
import { WhyChoose } from "@/components/sections/why-choose";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { About } from "@/components/sections/about";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <LenisProvider>
      <Preloader />
      <AnimationProvider />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <Portfolio />
        <WhyChoose />
        <Testimonials />
        <Pricing />
        <About />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </LenisProvider>
  );
}
