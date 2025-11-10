"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function DataIntelligenceSection() {
  const [squares, setSquares] = useState([]);

  // 🔹 Animirani kvadrati (plave nijanse)
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

  const features = [
    {
      title: "Network Science",
      desc: "We analyze relationships, influence, and structures within teams and organizations — turning invisible connections into visual stories that reveal how collaboration really works.",
    },
    {
      title: "Data-Driven Design",
      desc: "Our design process doesn’t stop at aesthetics. We use behavioral and interaction data to shape experiences that are not only intuitive but meaningful and measurable.",
    },
    {
      title: "Organizational Intelligence",
      desc: "We help organizations understand themselves through data — mapping communication, identifying key nodes, and finding ways to improve flow and transparency.",
    },
    {
      title: "Human Insights Through Systems",
      desc: "By connecting data with human context, we build tools that make sense of complexity — helping teams make better, more human decisions.",
    },
  ];

  return (
    <section
      id="data-intelligence"
      aria-label="Data Intelligence and Network Science Section"
      className="px-2"
    >
      {/* ✅ JSON-LD structured data for Data Intelligence section */}
      <Script
        id="data-intelligence-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Data Intelligence and Network Science",
            url: "https://www.peoplet.com/about#data-intelligence",
            description:
              "Peoplet Lab explores how data, network science, and design reveal human patterns in organizations — combining analytics and empathy to improve collaboration and transparency.",
            creator: {
              "@type": "Organization",
              name: "Peoplet Studio",
              url: "https://www.peoplet.com",
              logo: "https://www.peoplet.com/logo.png",
            },
            hasPart: features.map((item) => ({
              "@type": "DefinedTerm",
              name: item.title,
              description: item.desc,
            })),
          }),
        }}
      />

      <div className="relative w-full bg-[#0066ff] text-white py-32 px-6 overflow-hidden rounded-[30px] lg:rounded-[80px] max-w-[1920px] mx-auto">
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

        {/* 🔹 Naslov i uvod */}
        <div className="relative z-10 text-center max-w-[900px] mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold mb-8"
          >
            Data Meets <span className="italic">Human Systems</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg leading-relaxed"
          >
            Peoplet Lab explores how data and human behavior intersect — using
            network science and design to visualize relationships, reveal
            inefficiencies, and guide smarter collaboration.
          </motion.p>
        </div>

        {/* 🔸 Grid značajki */}
        <div className="relative z-10 grid gap-10 md:grid-cols-2 max-w-[1200px] mx-auto">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white/10 border border-white/30 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all"
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-neutral-100 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 💬 Zaključna poruka */}
        <div className="relative z-10 text-center max-w-[900px] mx-auto mt-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed"
          >
            Data is more than numbers — it’s a mirror of how people connect,
            create, and grow.  
            Our mission is to make those patterns visible, useful, and human.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
