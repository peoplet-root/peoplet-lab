import React from "react";
import Reveal from "../util/Reveal";
import { Chip } from "../util/Chip";

const experience = [
  {
    title: "Peoplet.io",
    position: "Full-stack Developer & Graphic Designer",
    time: "May 2025 - Present",
    location: "Remote",
    description:
      "Building an app that makes complex networks easy to explore and understand through interactive visualizations. Application combines network science, AI, and data visualization to help people and businesses make smarter decisions.",
    tech: [
      "Typescript",
      "React.js",
      "Next.js",
      "Python",
      "Django",
      "TailwindCSS",
      "Postgres",
      "Neo4j",
      "Figma",
    ],
  },
  {
    title: "Family Graphic Design company",
    position: "Graphic Designer",
    time: "2018 - Present",
    location: "Slatina, Croatia",
    description:
      "Creating compelling visual designs, digital assets and creative suites. Skilled in crafting brand identities and marketing materials. Actively participating in print production processes to ensure high-quality printed materials.",
    tech: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe Premiere",
      "CorelDRAW"
    ],
  },
];


export default function Experience() {
  return (
    <section className="section-wrapper max-w-[1200px] mx-auto py-40" id="experience">
      <div className="mx-6">
        <h1 className="md:text-6xl text-4xl mb-10">Experience</h1>
          {experience.map((experience, index) => (
            <div className="mb-6 border-b pb-6 border-zinc-700" key={index}>
              <div className="flex items-center justify-between mb-2">
                <Reveal>
                  <span className="font-bold md:text-3xl text-xl">{experience.title}</span>
                </Reveal>
                <Reveal>
                  <span>{experience.time}</span>
                </Reveal>
              </div>

              <div className="flex items-center justify-between mb-4">
                <Reveal>
                  <span className="text-neutral-600 text-lg">{experience.position}</span>
                </Reveal>
                <Reveal>
                  <span>{experience.location}</span>
                </Reveal>
              </div>
              <Reveal>
                <p className="mb-6 text-zinc-600 leading-relaxed">{experience.description}</p>
              </Reveal>
              <Reveal>
                <div className="flex flex-wrap gap-2">
                  {experience.tech.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
      </div>
    </section>
  );
};

