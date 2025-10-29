import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import ScrollServices from "@/components/scrollservices/ScrollServices";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import Services from "@/components/services/Services";
import PeopletApp from "@/components/peopletapp/PeopletApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ScrollServices />
      <PeopletApp />
      <Services />
      <ProjectsSection />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
