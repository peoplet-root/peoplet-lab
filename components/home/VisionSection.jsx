"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function VisionSection() {
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    const newSquares = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 50) + 20,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      color:
        Math.random() > 0.5
          ? "rgba(255,255,255,0.2)"
          : "rgba(0,230,184,0.2)",
    }));
    setSquares(newSquares);
  }, []);

  return (
    <section
      id="vision"
      aria-label="Peoplet Studio Vision and Philosophy"
      className="px-2"
    >
      <div className="relative w-full bg-[#0066ff] py-32 px-6 overflow-hidden rounded-[30px] lg:rounded-[80px] max-w-[1920px] mx-auto mb-20 text-white">
        {/* Dekorativna pozadina */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
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
                duration: 6 + Math.random() * 4,
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

        {/* Glavni sadržaj */}
        <div className="relative z-10 max-w-[1100px] mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold mb-10"
          >
            Where <span className="italic">Ideas</span> and{" "}
            <span className="italic">People</span> Connect
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-100 max-w-3xl mx-auto mb-8 text-lg leading-relaxed"
          >
            At Peoplet, we believe that the best digital products come from a
            deep understanding of people and the systems they create together.
            Our vision is to build tools, interfaces, and strategies that make
            human connections visible — transforming data into empathy,
            complexity into clarity, and ideas into action.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-200 max-w-2xl mx-auto text-base"
          >
            Through design, development, and data-driven insight, Peoplet aims
            to create digital spaces that inspire collaboration, curiosity, and
            smarter decision-making.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
