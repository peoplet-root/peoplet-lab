"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function TeamSection() {
  const [squares, setSquares] = useState([]);

  // Generiranje animiranih kvadrata
  useEffect(() => {
    const newSquares = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 70) + 30,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setSquares(newSquares);
  }, []);

  // Array s članovima tima
  const team = [
    {
      name: "Dino Pitoski",
      role: "CEO & Data Scientist",
      desc: "Merges design and development into one creative process. Believes that good technology should feel simple, emotional, and honest — transforming ideas into experiences that people actually enjoy using.",
      image: "/assets/webp/dino.webp",
      skills: ["Network Science", "Prototyping", "Data Visualization", "AI Tools"],
    },
    {
      name: "Robertino Puhanić",
      role: "Full-stack Developer & Designer",
      desc: "Merges design and development into one creative process. Believes that good technology should feel simple, emotional, and honest — transforming ideas into experiences that people actually enjoy using.",
      image: "/assets/webp/robertino.webp",
      skills: ["Web Applications", "Web Design", "UI/UX Design", "Graphic Design",],
    },
  ];

  return (
    <section
      id="team"
      aria-label="Peoplet Studio Team Section"
      className="px-2"
    >
      {/* ✅ JSON-LD structured data for Team section */}
      <Script
        id="team-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Peoplet Studio",
            url: "https://www.peoplet.com",
            logo: "https://www.peoplet.com/logo.png",
            description:
              "Peoplet Studio is a creative digital agency specializing in web development, design, and data-driven consulting. Meet the core team behind Peoplet.",
            member: team.map((member) => ({
              "@type": "Person",
              name: member.name,
              jobTitle: member.role,
              description: member.desc,
              image: `https://www.peoplet.com${member.image}`,
              knowsAbout: member.skills,
              worksFor: {
                "@type": "Organization",
                name: "Peoplet Studio",
              },
            })),
          }),
        }}
      />

      <div className="relative w-full bg-[#0066ff] py-32 px-6 overflow-hidden rounded-[30px] lg:rounded-[80px] max-w-[1920px] mx-auto mt-20">
        {/* Pozadinski kvadrati */}
        <div className="absolute inset-0 opacity-20">
          {squares.map((sq) => (
            <motion.div
              key={sq.id}
              initial={{ y: 0, opacity: 0.3 }}
              animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
              transition={{
                duration: 6 + Math.random() * 5,
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

        {/* Glavni sadržaj */}
        <div className="relative z-10 max-w-[1100px] mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold mb-10"
          >
            The Team Behind <span className="italic">Peoplet</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-200 max-w-2xl mx-auto mb-16 text-lg"
          >
            A small creative lab built around a single mindset — design and
            technology should work together to make human experiences better.
          </motion.p>

          {/* Wrapper za članove tima */}
          <div className="flex flex-col items-center justify-center gap-y-32">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#0066ff]/50 mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-[#00e6b8] font-medium mb-4">{member.role}</p>
                <p className="text-gray-100 max-w-md">{member.desc}</p>

                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  {member.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="text-sm bg-[#fff] text-[#000] px-4 py-1.5 rounded-full border border-[#0066ff]/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
