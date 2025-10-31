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
    <section
      id="services"
      ref={ref}
      className="relative mx-auto w-full max-w-[1300px] bg-white px-4 py-24 sm:px-6 md:py-32 lg:h-[300vh]"
    >
      <div>
        <Reveal>
          <h1 className="mb-8 text-3xl font-bold md:mb-10 md:text-6xl">
            Things which we do best
          </h1>
        </Reveal>
      </div>
      {/* Mobile & tablet layout */}
      <div className="flex flex-col gap-8 lg:hidden">
        {slides.map((slide) => (
          <div
            key={slide.title}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-[#0066ff] sm:p-8"
          >
            <p className="text-sm uppercase tracking-widest text-gray-500">Peoplet Lab</p>
            <h2 className="mt-3 text-3xl font-semibold text-neutral-900">{slide.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">{slide.desc}</p>
            <div className="mt-6 flex items-center justify-center">
              <div className="relative flex h-64 w-full max-w-sm items-center justify-center overflow-hidden rounded-3xl bg-[#0e0e0e]">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  width={280}
                  height={280}
                  className="z-10 h-48 w-48 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#00ffcc1a] to-[#0066ff1a] blur-2xl opacity-60"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden lg:flex lg:sticky lg:top-24 lg:h-screen lg:items-center lg:justify-between lg:gap-12 lg:px-6">
        {/* Left side: Text */}
        <div className="relative flex h-[320px] w-full max-w-xl flex-col justify-center text-black">
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
        <div className="relative flex h-[500px] w-full max-w-xl items-center justify-center">
          {slides.map((s, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 flex items-center justify-center"
              style={{ opacity: opacities[i] }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="relative flex h-[420px] w-full max-w-[420px] items-center justify-center overflow-hidden rounded-[40px] bg-[#0e0e0e] shadow-2xl">
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
