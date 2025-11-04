import About from "@/components/home/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/home/Hero";
import ScrollServices from "@/components/home/ScrollServices";
import PeopletApp from "@/components/home/PeopletApp";
import ProcessSection from "@/components/home/ProcessSection";
import ExeprimentsSection from "@/components/home/ExperimentsSection";

export default function Home() {
  return (
    <>
      <main className="pt-2">
        <Hero />
        <About />
        <ScrollServices />
        <ExeprimentsSection />
        <ProcessSection />
        <PeopletApp />
        <Contact />
      </main>
    </>
  );
}
