import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import ScrollServices from "@/components/scrollservices/ScrollServices";
import Pricing from "@/components/pricing/Pricing";
import PeopletApp from "@/components/peopletapp/PeopletApp";
import BentoGrid from "@/components/bentogrid/BentoGrid";
import ProcessSection from "@/components/process/ProcessSection";
import WhyPeoplet from "@/components/whypeoplet/WhyPeoplet";
import ExeprimentsSection from "@/components/experiments/ExperimentsSection";
import TeamSection from "@/components/team/TeamSection";

export default function Home() {
  return (
    <>
      <main className="pt-2">
        <Hero />
        <About />
        <ScrollServices />
        <ProcessSection />
        <ExeprimentsSection />
        <PeopletApp />
        <BentoGrid />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
