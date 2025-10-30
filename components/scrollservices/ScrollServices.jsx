"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Reveal from "../util/Reveal";

export default function ScrollServices() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const slides = [
    {
      title: "Web Development",
      desc: "We build modern, high-performance web apps and platforms using React, Next.js, Django, and Neo4j. Every project is crafted for scalability, performance, and seamless user experience.",
      img: "/images/webdev.png",
    },
    {
      title: "Graphic Design & Branding",
      desc: "We create logos, visual systems, and digital identities that communicate clearly and look stunning. From color and typography to UI/UX, your brand stays consistent and memorable.",
      img: "/images/branding.png",
    },
    {
      title: "Consulting & Network Science",
      desc: "Using our network visualization platform, we map how people, teams, and decisions connect. We combine network science and strategy to improve collaboration and growth.",
      img: "/assets/consulting.png",
    },
  ];

  // Opacity intervals for smooth fade transitions
  const opacity1 = useTransform(scrollYProgress, [0.0, 0.15, 0.33], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.33, 0.5, 0.66], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.66, 0.85, 1.0], [0, 1, 1]);
  const opacities = [opacity1, opacity2, opacity3];

  return (
    <section ref={ref} className="relative h-[300vh] bg-white py-10 max-w-[1300px] mx-auto pt-40">
      <div className="">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-semibold text-center mb-2">
            Things which we do best
          </h1>
        </Reveal>
      </div>
      <div className="sticky top-0 flex flex-col md:flex-row items-center justify-between h-screen max-w-[1300px] mx-auto px-6 py-16 gap-1">
        {/* Left side: Text */}
        <div className="relative w-full md:w-1/2 h-[250px] md:h-[300px] flex flex-col justify-center text-black">
          {slides.map((s, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{ opacity: opacities[i] }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <p className="text-sm uppercase text-gray-500 tracking-widest mb-3">
                Peoplet Lab
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4">
                {s.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right side: Image */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center h-[350px] md:h-[500px]">
          {slides.map((s, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 flex items-center justify-center"
              style={{ opacity: opacities[i] }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="relative bg-[#0e0e0e] rounded-[40px] w-[90%] md:w-[450px] h-[450px] flex items-center justify-center shadow-2xl overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  width={350}
                  height={350}
                  className="object-contain z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#00ffcc1a] to-[#0066ff1a] blur-2xl opacity-60"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
