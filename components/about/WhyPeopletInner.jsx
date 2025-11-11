"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function WhyPeopletInner() {
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    const newSquares = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 60) + 30, // 30–90px
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 5 + Math.random() * 5,
    }));
    setSquares(newSquares);
  }, []);

  return (
    <section
      id="why-peoplet"
      aria-label="Why Peoplet Exists – Our Mission and Philosophy"
      className="relative flex items-center justify-center w-full bg-[#0e0e0e] overflow-hidden px-4 lg:py-60 py-20"
    >
      {/* ✅ JSON-LD Schema for About/Mission */}
      <Script
        id="peoplet-about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Why Peoplet Exists",
            description:
              "Peoplet Studio designs digital systems that connect people, data, and ideas. Our mission is to create human-centered tools that enhance collaboration, creativity, and transparency.",
            mainEntity: {
              "@type": "Organization",
              name: "Peoplet Studio",
              url: "https://www.peoplet.com",
              logo: "https://www.peoplet.com/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/peoplet",
                "https://www.instagram.com/peoplet.io",
              ],
            },
          }),
        }}
      />

      {/* 🔷 Animirani kvadrati */}
      <div className="absolute inset-0 opacity-25" aria-hidden="true">
        {squares.map((sq) => (
          <motion.div
            key={sq.id}
            initial={{ y: 0, opacity: 0.3 }}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: sq.duration,
              repeat: Infinity,
              delay: sq.delay,
              ease: "easeInOut",
            }}
            className="absolute bg-[#0066ff]/40 rounded-md"
            style={{
              width: `${sq.size}px`,
              height: `${sq.size}px`,
              top: `${sq.top}%`,
              left: `${sq.left}%`,
            }}
          />
        ))}
      </div>

      {/* 🌈 Dekorativni gradient slojevi */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#0066ff] to-[#00e6b8] blur-[160px] opacity-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#00e6b8] to-[#0066ff] blur-[160px] opacity-10"
        aria-hidden="true"
      />

      {/* 🧠 Glavni sadržaj */}
      <div className="relative z-10 max-w-[900px] text-center flex flex-col items-center justify-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold mb-10 text-white"
        >
          Why <span className="italic text-[#0066ff]">Peoplet</span> Exists
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white text-lg leading-relaxed mb-8"
        >
          At <span className="text-[#0066ff] font-bold">Peoplet </span>,
          we believe that technology should connect, not isolate.  
          Our mission is to design digital systems that enhance collaboration,
          creativity, and shared intelligence — empowering people to create and
          communicate more effectively.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-lg leading-relaxed"
        >
          Every product we design begins with empathy and evolves through
          strategy and design thinking.  
          By combining aesthetics, logic, and data, we build tools that make
          organizations more transparent, innovative, and human-centered.
        </motion.p>
      </div>
    </section>
  );
}
