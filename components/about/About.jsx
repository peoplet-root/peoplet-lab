import { AiOutlineArrowRight } from "react-icons/ai";
import Reveal from "../util/Reveal";
import { Stats } from "./Stats";
import MyLinks from "./MyLinks";
import Link from "next/link";
import { SiBehance, SiDribbble, SiGithub, SiLinkedin, SiTiktok } from "react-icons/si";

export default function About() {
  return (
    <section id="about" className="section-wrapper mx-auto w-full max-w-[1300px] px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto w-full">
        <h1 className="mb-8 text-3xl font-bold md:mb-10 md:text-6xl">About <span className="italic text-[#0066ff]">Peoplet Lab</span></h1>
        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-4">
            <Reveal>
              <p className="leading-relaxed">
                At Peoplet Lab, we believe that great ideas grow where people and technology connect. We're a digital studio focused on helping companies transform ideas into meaningful digital experiences — through strategy, design, and development.
              </p>
            </Reveal>
            <Reveal>
              <p className="leading-relaxed">
                We combine design thinking, modern development, and network-science insights to help businesses understand and visualize how they grow and interact. Every project we take on is a partnership — we listen, adapt, and build solutions that last.
              </p>
            </Reveal>
            <Reveal>
              <p className="leading-relaxed">
                Our flagship product, the Peoplet App, transforms complex data into interactive network visualizations — making invisible relationships visible.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
