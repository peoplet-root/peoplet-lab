"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamSection() {
  return (
    <section className="relative w-full bg-[#0e0e0e] py-32 px-6 overflow-hidden rounded-[30px] lg:rounded-[80px] max-w-[1920px] mx-auto">
      {/* Pozadinski kvadrati */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0.3 }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{
              duration: 6 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            className="absolute bg-[#0066ff]/40 rounded-md"
            style={{
              width: `${30 + Math.random() * 70}px`,
              height: `${30 + Math.random() * 70}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Glavni sadržaj */}
      <div className="relative z-10 max-w-[1100px] mx-auto text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold mb-10"
        >
          The Team Behind <span className="italic text-[#0066ff]">Peoplet</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg"
        >
          A small creative lab built around a single mindset — design and
          technology should work together to make human experiences better.
        </motion.p>

        {/* Član tima */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#0066ff]/50 mb-6">
            <Image
              src="/assets/team/robertino.jpg"
              alt="Robertino Puhanić"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Robertino Puhanić</h3>
          <p className="text-[#0066ff] font-medium mb-4">
            Full-stack Developer & Designer
          </p>
          <p className="text-gray-400 max-w-md">
            Passionate about human-centered technology, systems thinking, and
            crafting digital experiences that bridge creativity and data.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {["Design Systems", "Prototyping", "Data Visualization", "AI Tools"].map(
              (skill, i) => (
                <span
                  key={i}
                  className="text-sm bg-[#0066ff]/20 text-[#00e6b8] px-4 py-1.5 rounded-full border border-[#0066ff]/40"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
