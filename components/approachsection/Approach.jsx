"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ApproachSection() {
  const [squares, setSquares] = useState([]);

  // 🔹 Generiramo samo plave kvadrate u različitim nijansama
  useEffect(() => {
    const blueShades = [
      "rgba(0, 102, 255, 0.15)", // svijetlija
      "rgba(0, 102, 255, 0.25)",
      "rgba(0, 102, 255, 0.35)", // srednja
      "rgba(0, 102, 255, 0.45)", // tamnija
    ];

    const newSquares = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 70) + 30,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      color: blueShades[Math.floor(Math.random() * blueShades.length)],
    }));

    setSquares(newSquares);
  }, []);

  return (
    <section className="relative flex items-center justify-center bg-white text-black overflow-hidden rounded-[30px] lg:rounded-[80px] py-32 px-6 max-w-[1920px] mx-auto">
      {/* 🔷 Animirani kvadrati */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {squares.map((sq) => (
          <motion.div
            key={sq.id}
            initial={{ y: 0, opacity: 0.3, scale: 1 }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.25, 0.6, 0.25],
              scale: [1, 1.08, 1],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 5,
              repeat: Infinity,
              delay: sq.delay,
              ease: "easeInOut",
            }}
            className="absolute rounded-[6px] blur-[0.5px]"
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

      {/* 🧠 Glavni sadržaj */}
      <div className="relative z-10 max-w-[900px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold mb-8"
        >
          How We <span className="italic text-[#0066ff]">Think</span>.{" "}
          How We <span className="italic text-[#0066ff]">Build</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-neutral-700 text-lg leading-relaxed mb-6"
        >
          At <span className="text-[#0066ff] font-medium">Peoplet Lab</span>, we blend
          design and data into a shared language. Every project begins with
          curiosity — understanding people, systems, and the invisible connections
          between them.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-neutral-700 text-lg leading-relaxed"
        >
          We believe good technology should feel intuitive, respectful, and alive —
          something that enhances how people think, create, and connect.
        </motion.p>
      </div>
    </section>
  );
}
