import { AiOutlineArrowRight } from "react-icons/ai";
import Reveal from "../util/Reveal";
import { Stats } from "./Stats";
import MyLinks from "./MyLinks";
import Link from "next/link";
import { SiBehance, SiDribbble, SiGithub, SiLinkedin, SiTiktok } from "react-icons/si";

export default function About() {
  return (
    <section id="about" className="section-wrapper max-w-[1300px] mx-auto pt-40">
      <div className="mx-6">
        <h1 className="md:text-6xl text-4xl mb-10 font-bold">About Peoplet Lab</h1>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
          <div className="space-y-4">
            <Reveal>
              <p className="leading-relaxed">
                At Peoplet Ltd., we believe that great ideas grow where people and technology connect. We're a digital studio focused on helping companies transform ideas into meaningful digital experiences — through strategy, design, and development.
              </p>
            </Reveal>
            <Reveal>
              <p className="leading-relaxed">
                We combine design thinking, modern development, and network-science insights to help businesses understand and visualize how they grow and interact. Every project we take on is a partnership — we listen, adapt, and build solutions that last.
              </p>
            </Reveal>
            <Reveal>
              <p className="leading-relaxed">
                Outside of work, I love playing football and go to gym. I love to travel and I am currently learning a new language. Maybe weird but as designer I don't have favorite color.
              </p>
            </Reveal>
            <Reveal>
              <p className="leading-relaxed">
                I&apos;m passively looking for new positions where I can merge my
                love for code and graphic design. If you think
                you&apos;ve got an opening that I might like, let&apos;s connect!
              </p>
            </Reveal>
            <Reveal>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 text-sm">
                  <span>My links</span>
                  <AiOutlineArrowRight />
                </div>
                <div className="flex items-center text-lg gap-4">
                  <Link
                    className="hover:text-neutral-500"
                    href="https://www.linkedin.com/in/robertino-puhanic/"
                    target="_blank"
                    rel="nofollow"
                  >
                    <SiLinkedin />
                  </Link>
                  <Link
                    className="hover:text-neutral-500"
                    href="https://github.com/Robertino2809"
                    target="_blank"
                    rel="nofollow"
                  >
                    <SiGithub />
                  </Link>
                  <Link
                    className="hover:text-neutral-500"
                    href="https://dribbble.com/Robertino_2809"
                    target="_blank"
                    rel="nofollow"
                  >
                    <SiDribbble />
                  </Link>
                  <Link
                    className="hover:text-neutral-500"
                    href="https://www.behance.net/robertinopuhani1"
                    target="_blank"
                    rel="nofollow"
                  >
                    <SiBehance />
                  </Link>
                  <Link
                    className="hover:text-neutral-500"
                    href="https://www.tiktok.com/@robertino2809"
                    target="_blank"
                    rel="nofollow"
                  >
                    <SiTiktok />
                  </Link>
                </div>
                <MyLinks />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
