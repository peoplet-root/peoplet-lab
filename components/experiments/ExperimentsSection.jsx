"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Peoplet Platform",
    desc: "A social intelligence platform that maps how people and ideas connect — blending data, visualization, and human insight.",
  },
  {
    title: "Graph Interface System",
    desc: "An interactive environment for exploring relationships through dynamic, force-based visualizations and network analysis.",
  },
  {
    title: "Design Language Toolkit",
    desc: "A growing system of reusable design patterns, colors, and motion principles — shaping the visual identity of Peoplet products.",
  },
];

export default function ExperimentsSection() {
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    const newSquares = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 60) + 30,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      color:
        Math.random() > 0.5 ? "rgba(255,255,255,0.25)" : "rgba(0,230,184,0.25)",
    }));
    setSquares(newSquares);
  }, []);

  return (
    <section className="px-2">
      <div className="relative w-full bg-[#0066ff] py-32 px-6 overflow-hidden rounded-[30px] lg:rounded-[80px] max-w-[1920px] mx-auto mb-20">
        {/* ✅ Animirani kvadrati (vidljivi) */}
        <div className="absolute inset-0 z-0">
          {squares.map((sq) => (
            <motion.div
              key={sq.id}
              initial={{ y: 0, opacity: 0.4 }}
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
              className="absolute rounded-md blur-[0.5px]"
              style={{
                backgroundColor: sq.color,
                width: `${sq.size}px`,
                height: `${sq.size}px`,
                top: `${sq.top}%`,
                left: `${sq.left}%`,
              }}
            />
          ))}
        </div>

        {/* ✅ Glavni sadržaj (iznad kvadrata) */}
        <div className="relative z-10 max-w-[1100px] mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold mb-10"
          >
            What We're <span className="italic text-[#fff]">Building</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-100 max-w-2xl mx-auto mb-16 text-lg"
          >
            Inside Peoplet Lab, we’re building products and systems that connect
            people, organizations, and data — exploring how design and
            technology can make collaboration more visible and meaningful.
          </motion.p>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="border border-white/70 rounded-3xl p-8 text-left bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all relative z-20"
              >
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {proj.title}
                </h3>
                <p className="text-white/90 leading-relaxed">{proj.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
