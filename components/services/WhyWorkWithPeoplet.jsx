"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function WhyWorkWithPeoplet() {
  const [squares, setSquares] = useState([]);

  // 🔹 Animirani kvadrati
  useEffect(() => {
    const shades = [
      "rgba(0, 102, 255, 0.15)",
      "rgba(0, 102, 255, 0.25)",
      "rgba(0, 102, 255, 0.35)",
      "rgba(0, 102, 255, 0.45)",
    ];

    const newSquares = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 70) + 30,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      color: shades[Math.floor(Math.random() * shades.length)],
    }));

    setSquares(newSquares);
  }, []);

  const values = [
    {
      title: "Human-Centered Design",
      desc: "We don’t start with technology — we start with people. Every product and service we build begins with understanding how humans think, work, and connect.",
    },
    {
      title: "Transparent Collaboration",
      desc: "We work with you, not just for you. Our process is open, structured, and built around shared understanding and creative partnership.",
    },
    {
      title: "Design-Led Thinking",
      desc: "We believe design is strategy — not decoration. It shapes clarity, consistency, and how your product feels from day one.",
    },
    {
      title: "Long-Term Vision",
      desc: "We don’t chase trends. We build systems that evolve — sustainable, scalable, and ready for what’s next.",
    },
  ];

  return (
    <section
      id="why-work-with-peoplet"
      aria-label="Why Work With Peoplet Section"
      className="relative w-full bg-white text-black py-32 px-6 overflow-hidden rounded-[30px] lg:rounded-[80px] max-w-[1920px] mx-auto"
    >
      {/* ✅ JSON-LD structured data for company philosophy */}
      <Script
        id="why-work-with-peoplet-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Why Work With Peoplet",
            url: "https://www.peoplet.com/about#why-work-with-peoplet",
            description:
              "Peoplet Studio builds long-term partnerships through design-led thinking, human-centered development, and transparent collaboration.",
            creator: {
              "@type": "Organization",
              name: "Peoplet Studio",
              url: "https://www.peoplet.com",
              logo: "https://www.peoplet.com/logo.png",
            },
            hasPart: values.map((value) => ({
              "@type": "DefinedTerm",
              name: value.title,
              description: value.desc,
            })),
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
              opacity: [0.2, 0.6, 0.2],
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
          Why Work With <span className="italic text-[#0066ff]">Peoplet</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-neutral-700 text-lg leading-relaxed"
        >
          We believe that meaningful digital experiences are built through
          curiosity, empathy, and shared purpose. Our work blends creative
          thinking with technical precision — making products that feel as good
          as they perform.
        </motion.p>
      </div>

      {/* 🔸 Grid vrijednosti */}
      <div className="relative z-10 grid gap-10 md:grid-cols-2 max-w-[1200px] mx-auto">
        {values.map((value, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white/60 backdrop-blur-md border border-[#0066ff]/30 rounded-3xl p-10 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <h3 className="text-2xl font-semibold text-[#0066ff] mb-4">
              {value.title}
            </h3>
            <p className="text-neutral-600 leading-relaxed">{value.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
