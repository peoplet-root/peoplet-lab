import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import ScrollServices from "@/components/scrollservices/ScrollServices";
import ProjectsSection from "@/components/projects/ProjectsSection";
import Pricing from "@/components/pricing/Pricing";
import PeopletApp from "@/components/peopletapp/PeopletApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-2">
        <Hero />
        <About />
        <ScrollServices />
        <PeopletApp />
        <Pricing />
        <ProjectsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
