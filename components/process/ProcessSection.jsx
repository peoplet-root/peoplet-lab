"use client";

import { motion } from "framer-motion";
import { FiSearch, FiPenTool, FiCode, FiTrendingUp } from "react-icons/fi";

const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description:
      "We dive deep into understanding your goals, audience, and business challenges — turning insights into clear digital direction.",
    icon: <FiSearch />,
    color: "from-[#0066ff] to-[#3399ff]",
  },
  {
    id: 2,
    title: "Design",
    description:
      "From brand systems to interactive prototypes, we design with empathy — every detail has purpose, clarity, and rhythm.",
    icon: <FiPenTool />,
    color: "from-[#0066ff] to-[#3399ff]",
  },
  {
    id: 3,
    title: "Development",
    description:
      "We transform ideas into scalable, high-performance products that feel smooth, intuitive, and delightfully human.",
    icon: <FiCode />,
    color: "from-[#0066ff] to-[#3399ff]",
  },
  {
    id: 4,
    title: "Growth",
    description:
      "We measure, improve, and evolve. From user feedback to analytics — your digital product grows with your business.",
    icon: <FiTrendingUp />,
    color: "from-[#0066ff] to-[#3399ff]",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative w-full py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold mb-16"
        >
          How <span className="italic text-[#0066ff]">Peoplet</span> Build Apps
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-10">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="relative group bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Ikona */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} text-white text-2xl mb-6 group-hover:scale-110 transition-transform`}
              >
                {step.icon}
              </div>

              {/* Naslov */}
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {step.title}
              </h3>

              {/* Opis */}
              <p className="text-gray-600 leading-relaxed text-base">
                {step.description}
              </p>

              {/* Broj */}
              <div className="absolute top-6 right-8 text-5xl font-black text-gray-200 opacity-20 select-none group-hover:opacity-30 transition">
                {step.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
