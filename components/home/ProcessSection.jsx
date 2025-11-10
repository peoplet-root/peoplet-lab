"use client";

import { motion } from "framer-motion";
import { FiSearch, FiPenTool, FiCode, FiTrendingUp } from "react-icons/fi";
import Script from "next/script";

const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description:
      "Every collaboration starts with understanding. We analyze your goals, audience, and digital ecosystem — turning insights into a clear creative and technical direction.",
    icon: <FiSearch />,
    color: "from-[#0066ff] to-[#3399ff]",
  },
  {
    id: 2,
    title: "Design",
    description:
      "We shape ideas into visual and interactive systems. Every layout, color, and animation is designed to communicate purpose and emotion, not just aesthetics.",
    icon: <FiPenTool />,
    color: "from-[#0066ff] to-[#3399ff]",
  },
  {
    id: 3,
    title: "Development",
    description:
      "We craft digital experiences through clean, scalable code. From web platforms to interactive interfaces — every project is built for performance and long-term growth.",
    icon: <FiCode />,
    color: "from-[#0066ff] to-[#3399ff]",
  },
  {
    id: 4,
    title: "Growth",
    description:
      "We monitor, learn, and evolve. Through analytics, data, and iteration — we help your digital product adapt and thrive in a connected world.",
    icon: <FiTrendingUp />,
    color: "from-[#0066ff] to-[#3399ff]",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      aria-label="Peoplet Studio Design and Development Process"
      className="relative w-full py-32 px-6 overflow-hidden"
    >
      {/* ✅ Schema markup for SEO */}
      <Script
        id="process-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Peoplet Studio Process",
            description:
              "How Peoplet Studio transforms ideas into web applications, designs, and digital platforms — from discovery to growth.",
            totalTime: "P30D",
            step: processSteps.map((step, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: step.title,
              text: step.description,
            })),
          }),
        }}
      />

      <div className="absolute inset-0 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold mb-16"
        >
          How <span className="italic text-[#0066ff]">Peoplet</span> Builds
          Digital Experiences
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
              <div className="absolute top-6 right-8 text-5xl font-black text-gray-200 opacity-50 select-none group-hover:opacity-30 transition">
                {step.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
