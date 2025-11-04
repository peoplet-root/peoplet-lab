"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductsSection() {
  const [squares, setSquares] = useState([]);

  // 🔹 Generiramo animirane kvadrate (plave nijanse)
  useEffect(() => {
    const shades = [
      "rgba(0, 102, 255, 0.15)",
      "rgba(0, 102, 255, 0.25)",
      "rgba(0, 102, 255, 0.35)",
      "rgba(0, 102, 255, 0.45)",
    ];

    const newSquares = Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 70) + 30,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      color: shades[Math.floor(Math.random() * shades.length)],
    }));

    setSquares(newSquares);
  }, []);

  // 🔸 Primjeri aplikacija / projekata
  const products = [
    {
      name: "Peoplet App",
      desc: "A data visualization platform that maps relationships between people, projects, and ideas. It helps uncover hidden connections, enhance collaboration, and reveal patterns within complex networks of information. Designed to make data exploration intuitive and interactive, it provides an insightful way to understand how individuals and initiatives are interconnected.",
      image: "/assets/products/graph.png",
      tag: "Network Intelligence",
    },
    {
      name: "Peoplet Stat",
      desc: "An intelligent workspace for managing and analyzing data from the Peoplet platform. It functions like a dynamic spreadsheet — flexible, familiar, and collaborative — but powered by live data connections to people, projects, and ideas. Instead of manually inputting information, it automatically pulls structured and relational data from the main system, allowing teams to explore insights, measure performance, and make data-driven decisions with clarity and precision.",
      image: "/assets/products/cms.png",
      tag: "Data Management",
    },
  ];

  return (
    <section className="px-2">
      <div className="relative w-full bg-[#0066ff] text-white py-32 px-6 overflow-hidden rounded-[30px] lg:rounded-[80px] max-w-[1920px] mx-auto mt-10">
        {/* 🔹 Animirani kvadrati */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          {squares.map((sq) => (
            <motion.div
              key={sq.id}
              initial={{ y: 0, opacity: 0.3 }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.2, 0.5, 0.2],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 5,
                repeat: Infinity,
                delay: sq.delay,
                ease: "easeInOut",
              }}
              className="absolute rounded-md"
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

        {/* 🔸 Naslov i opis */}
        <div className="relative z-10 text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold mb-6"
          >
              <span className="italic text-white">Peoplet</span> Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl mx-auto text-white/90 text-lg"
          >
            Tools and systems built inside <span className="text-white font-medium">Peoplet Lab</span> — 
            from internal prototypes to full-scale digital platforms.
          </motion.p>
        </div>

        {/* 🧩 Grid proizvoda */}
        <div className="relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-[1200px] mx-auto">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white/10 border border-white/30 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all"
            >
              <div className="relative h-40 mb-6 overflow-hidden rounded-2xl bg-[#0e0e0e]/20 flex items-center justify-center">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={300}
                  height={200}
                  className="object-contain w-40 h-40"
                />
              </div>
              <p className="text-sm uppercase tracking-widest text-white/70 mb-2">
                {p.tag}
              </p>
              <h3 className="text-2xl font-semibold mb-3">{p.name}</h3>
              <p className="text-white/80 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
