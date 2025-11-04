"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const SQUARE_COUNT = 25;

const generateSquares = () =>
  Array.from({ length: SQUARE_COUNT }, (_, index) => {
    const size = 30 + Math.random() * 70;

    return {
      id: index,
      size,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: 0.1 + Math.random() * 0.1, // 🔹 viša prozirnost (0.2 – 0.4)
      duration: 4 + Math.random() * 3, // 🔹 brža animacija (4–7s)
      delay: Math.random() * 2, // 🔹 kraće kašnjenje
      rotate: (Math.random() - 0.5) * 6,
    };
  });

export default function FloatingSquares() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const squares = useMemo(() => (mounted ? generateSquares() : []), [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      {squares.map(({ id, size, left, top, opacity, duration, delay, rotate }) => (
        <motion.div
          key={id}
          className="absolute rounded-sm bg-[#0066ff]"
          style={{
            width: size,
            height: size,
            left: `${left}%`,
            top: `${top}%`,
            opacity,
          }}
          animate={{
            y: [0, -35, 0], // 🔹 malo veći raspon pokreta
            opacity: [opacity * 0.2, opacity, opacity * 0.2],
            rotate: [0, rotate, 0],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
