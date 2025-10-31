import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import ScrollServices from "@/components/scrollservices/ScrollServices";
import Pricing from "@/components/pricing/Pricing";
import PeopletApp from "@/components/peopletapp/PeopletApp";
import BentoGrid from "@/components/bentogrid/BentoGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-2">
        <Hero />
        <About />
        <ScrollServices />
        <PeopletApp />
        <BentoGrid />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
