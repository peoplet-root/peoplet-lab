import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ProjectsSection />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
