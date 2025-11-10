"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function ServicesProcessSection() {
  const [squares, setSquares] = useState([]);

  // 🔹 Generiranje plavih animiranih kvadrata
  useEffect(() => {
    const shades = [
      "rgba(0, 102, 255, 0.15)",
      "rgba(0, 102, 255, 0.25)",
      "rgba(0, 102, 255, 0.35)",
      "rgba(0, 102, 255, 0.45)",
    ];

    const newSquares = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 60) + 30,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      color: shades[Math.floor(Math.random() * shades.length)],
    }));

    setSquares(newSquares);
  }, []);

  const steps = [
    {
      title: "1. Discover",
      desc: "We start by understanding your challenges, goals, and the people behind them. Through research, workshops, and conversations — we define what really matters.",
    },
    {
      title: "2. Design",
      desc: "We turn insights into structure — building design systems, interfaces, and workflows that make complex ideas simple, elegant, and human.",
    },
    {
      title: "3. Develop",
      desc: "Our team transforms concepts into real digital products using modern technologies. Every line of code supports clarity, speed, and flexibility.",
    },
    {
      title: "4. Deliver & Evolve",
      desc: "We launch, learn, and iterate. Each project is built to adapt — improving with feedback, analytics, and new ideas.",
    },
  ];

  return (
    <section
      id="services-process"
      aria-label="Peoplet Studio Process Section"
      className="relative w-full bg-white text-black py-32 px-6 overflow-hidden rounded-[30px] lg:rounded-[80px] max-w-[1920px] mx-auto"
    >
      {/* ✅ JSON-LD structured data for Process section */}
      <Script
        id="services-process-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Peoplet Studio Process",
            url: "https://www.peoplet.com/services#process",
            description:
              "Peoplet Studio’s creative process follows four phases — Discover, Design, Develop, and Deliver & Evolve — blending design, data, and technology.",
            totalTime: "P1M", // roughly one month average lifecycle
            supply: [
              {
                "@type": "HowToSupply",
                name: "Design Thinking, Development, Research Workshops",
              },
            ],
            tool: [
              {
                "@type": "HowToTool",
                name: "Next.js, React, Django, Neo4j, Design Systems",
              },
            ],
            step: steps.map((step) => ({
              "@type": "HowToStep",
              name: step.title.replace(/^\d+\.\s*/, ""), // remove numbering for clean schema
              text: step.desc,
            })),
            performer: {
              "@type": "Organization",
              name: "Peoplet Studio",
              url: "https://www.peoplet.com",
              logo: "https://www.peoplet.com/logo.png",
            },
          }),
        }}
      />

      {/* 🔷 Animirani kvadrati */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        {squares.map((sq) => (
          <motion.div
            key={sq.id}
            initial={{ y: 0, opacity: 0.3 }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 5,
              repeat: Infinity,
              delay: sq.delay,
              ease: "easeInOut",
            }}
            className="absolute rounded-[6px]"
            style={{
              width: `${sq.size}px`,
              height: `${sq.size}px`,
              top: `${sq.top}%`,
              left: `${sq.left}%`,
              backgroundColor: sq.color,
            }}
          />
        ))}
      </div>

      {/* 🔹 Naslov sekcije */}
      <div className="relative z-10 text-center max-w-[900px] mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold mb-8"
        >
          Our <span className="italic text-[#0066ff]">Process</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-neutral-700 text-lg leading-relaxed"
        >
          Every project we take on follows a thoughtful, iterative journey — from
          understanding and ideation to design, development, and long-term
          partnership.
        </motion.p>
      </div>

      {/* 🔸 Timeline / Steps */}
      <div className="relative z-10 flex flex-col md:flex-row items-start justify-center gap-12 max-w-[1200px] mx-auto mt-16">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="relative flex-1 bg-white border border-[#0066ff]/40 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <div className="absolute -top-4 left-6 bg-[#0066ff] text-white w-10 h-10 flex items-center justify-center rounded-full font-semibold">
              {i + 1}
            </div>
            <h3 className="text-2xl font-semibold text-[#0066ff] mb-3 mt-4">
              {step.title}
            </h3>
            <p className="text-neutral-600 leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
