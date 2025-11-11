"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Script from "next/script";

// 🎨 Lucide Icons
import {
  Globe,
  PenTool,
  Network,
  BarChart3,
} from "lucide-react";

export default function ServicesSection() {
  const [squares, setSquares] = useState([]);

  // 🔹 Animirani kvadrati
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

  const services = [
    {
      title: "Web Development",
      desc: "We build fast, scalable, and human-centered web platforms using modern frameworks. Every product is designed to look great, perform smoothly, and adapt to real human needs.",
      icon: <Globe size={52} strokeWidth={1.5} className="text-[#0066ff]" />,
    },
    {
      title: "Graphic Design & Branding",
      desc: "We craft visual systems that tell your story with clarity and emotion — from brand identity and logo design to complete digital ecosystems that feel cohesive and memorable.",
      icon: <PenTool size={52} strokeWidth={1.5} className="text-[#0066ff]" />,
    },
    {
      title: "Network Science & Consulting",
      desc: "We help organizations understand their internal connections — mapping communication, influence, and collaboration patterns to design smarter, more connected teams.",
      icon: <Network size={52} strokeWidth={1.5} className="text-[#0066ff]" />,
    },
    {
      title: "Data Analysis & Visualization",
      desc: "We turn data into meaning. Through interactive visuals and analytical tools, we uncover insights that guide better decisions and reveal hidden opportunities.",
      icon: <BarChart3 size={52} strokeWidth={1.5} className="text-[#0066ff]" />,
    },
  ];

  return (
    <section
      id="services"
      aria-label="Peoplet Studio Services Section"
      className="relative w-full text-black md:py-32 py-24 px-6 overflow-hidden rounded-[30px] lg:rounded-[80px] max-w-[1920px] mx-auto"
    >
      {/* ✅ JSON-LD structured data for services */}
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            provider: {
              "@type": "Organization",
              name: "Peoplet Studio",
              url: "https://www.peoplet.com",
              logo: "https://www.peoplet.com/logo.png",
            },
            serviceType: "Digital Design and Development",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Peoplet Studio Services",
              itemListElement: services.map((service) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service.title,
                  description: service.desc,
                },
              })),
            },
          }),
        }}
      />

      {/* 🔷 Animirani kvadrati */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        {squares.map((sq) => (
          <motion.div
            key={sq.id}
            initial={{ y: 0, opacity: 0.3 }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
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

      {/* 🔹 Uvod */}
      <div className="relative z-10 text-center max-w-[900px] mx-auto mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold mb-8"
        >
          What <span className="italic text-[#0066ff]">Peoplet</span> Does
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-neutral-700 text-lg leading-relaxed"
        >
          <span className="text-[#0066ff] font-bold">Peoplet </span> connects design, technology, and data into one process —
          helping teams and organizations create systems that make collaboration
          and decision-making more meaningful.
        </motion.p>
      </div>

      {/* 🔸 Grid s uslugama */}
      <div className="relative z-10 grid gap-10 md:grid-cols-2 max-w-[1200px] mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white/60 backdrop-blur-md border border-[#0066ff]/30 rounded-3xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 mb-6 p-2 flex items-center justify-center bg-[#0066ff]/10 rounded-2xl">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#0066ff]">
                {service.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 💬 Approach */}
      <div className="relative z-10 text-center max-w-[900px] mx-auto mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold mb-6"
        >
          Our <span className="italic text-[#0066ff]">Approach</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-neutral-600 text-lg leading-relaxed"
        >
          We start with understanding — people, context, and goals.  
          Then we explore possibilities through design and iteration.  
          Every project is a collaboration between technology and empathy,  
          turning abstract ideas into real, working systems.
        </motion.p>
      </div>
    </section>
  );
}
