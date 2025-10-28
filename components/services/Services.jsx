import React from "react";
import Reveal from "../util/Reveal";

const services = [
  {
    title: "Graphic Design",
    description:
      "From logos, modern graphics, banners, visit cards, social media posts to visual identity packages and even package design. I am designing some visuals that would narrate your story in a very beautiful way. Every element is crafted with due consideration to the personality of your brand and the target audience.",
  },
  {
    title: "Web Development",
    description:
      "Working with modern technologies like React, Next.js, Tailwind, MongoDB, PostgreSQL, Prisma. Crafting responsive, dynamic websites and web applications performing exquisitely across all devices. Ensuring clean code with modern frameworks means I provide a fast, secure, and user-friendly online presence.",
  },
  {
    title: "UI/UX Design",
    description:
      "I design intuitive and user-centered interfaces that enhance usability and elevate the user experience. The core of my attention is the creation of seamless interactions that will keep users both engaged and delighted. Experience with design softwares Figma, Adobe Photoshop and Illustrator.",
  },
];

export default function Services() {
  return (
    <section className="section-wrapper max-w-[1200px] mx-auto py-40" id="services">
      <div className="mx-6">
        <h1 className="md:text-6xl text-4xl mb-10">Services</h1>
          <div className="grid gap-12 grid-cols-1 md:grid-cols-3">
            {services.map((service, index) => (
              <div key={index}>
                <Reveal>
                  <h1 className="md:text-2xl text-xl font-medium">{service.title}</h1>
                </Reveal>
                <div className="w-full bg-neutral-800 dark:bg-white h-[2px] mt-4"></div>
                <div className="h-44">
                  <Reveal>
                    <p className="mt-4">{service.description}</p>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

