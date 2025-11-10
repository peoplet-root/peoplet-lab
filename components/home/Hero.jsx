"use client";

import Reveal from "../util/Reveal";
import { generateFloatingShapes } from "../util/generateFloatingShapes";
import Script from "next/script";

const heroShapes = generateFloatingShapes({ count: 8, seed: 1, delayStep: 0.5 });

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Peoplet Studio Hero Section"
      className="px-2 flex justify-center"
    >
      {/* JSON-LD structured data */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Peoplet Studio",
            url: "https://www.peoplet.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.peoplet.com/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      <div className="relative bg-[#0066ff] w-full max-w-[1920px] lg:min-h-[800px] min-h-[600px] overflow-hidden md:rounded-[80px] rounded-[30px] text-white">
        {/* Dekorativna grid pozadina */}
        <div
          className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20"
          aria-hidden="true"
        >
          <div className="bg-blue-400 col-span-2 row-span-2 m-2 rounded-lg animate-float"></div>
          <div className="bg-blue-200 col-start-4 row-start-1 m-2 rounded-lg animate-float"></div>
          <div className="bg-blue-300 col-start-6 row-start-2 m-2 rounded-lg animate-float"></div>
          <div className="bg-blue-500 col-start-2 row-start-4 m-2 rounded-lg animate-float"></div>
          <div className="bg-blue-300 col-start-5 row-start-5 m-2 rounded-lg animate-float"></div>
          <div className="bg-blue-600 col-start-3 row-start-6 m-2 rounded-lg animate-float"></div>

          <div className="bg-blue-200 col-start-1 row-start-3 m-2 rounded-full animate-drift"></div>
          <div className="bg-blue-500 col-start-5 row-start-2 m-2 rounded-lg animate-rotate-slow"></div>
          <div className="bg-blue-400 col-start-2 row-start-5 m-2 rounded-md animate-float delay-[1s]"></div>
          <div className="bg-blue-100 col-start-6 row-start-4 m-2 w-16 h-1 rounded-full animate-drift opacity-50"></div>
          <div className="bg-blue-200 col-start-3 row-start-1 m-2 rotate-45 w-10 h-10 animate-float opacity-40"></div>
          <div className="bg-blue-300 col-start-4 row-start-6 m-2 w-12 h-12 rounded-full animate-drift delay-[1.5s] opacity-40"></div>
        </div>

        {/* Glavni sadržaj */}
        <div className="relative max-w-[1300px] mx-auto px-6 lg:py-40 py-28 z-10">
          <Reveal>
            <h1 className="lg:text-6xl text-4xl font-bold mb-8 leading-tight">
              Creative Web Design, Branding & Data Analytics by Peoplet Studio
            </h1>
          </Reveal>

          <Reveal>
            <p className="md:max-w-4xl text-lg md:text-xl font-normal">
              Peoplet Studio is a creative digital agency specializing in web
              design, branding, and data-driven development. We combine strategy,
              technology, and network science to build intelligent digital
              experiences that connect people and ideas.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                title="View our latest web design and branding projects"
                className="bg-white text-[#0066ff] font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-50 transition duration-300"
              >
                View Our Work
              </a>
              <a
                href="#contact"
                title="Contact Peoplet Studio – Start your project"
                className="border border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-white hover:text-[#0066ff] transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </Reveal>
        </div>

        {/* Dekorativni oblici na dnu */}
        <div
          className="absolute bottom-0 right-0 flex flex-wrap gap-2 p-6 opacity-30"
          aria-hidden="true"
        >
          <div className="bg-white w-6 h-6 animate-float"></div>
          <div className="bg-blue-300 w-8 h-8 animate-drift"></div>
          <div className="bg-blue-500 w-10 h-10 animate-float delay-[1s]"></div>
          <div className="bg-white w-4 h-4 animate-drift delay-[1.5s]"></div>
        </div>

        {/* Generirani random oblici */}
        {heroShapes.map((shape, i) => (
          <div
            key={i}
            aria-hidden="true"
            className={`absolute bg-blue-${
              [200, 300, 400, 500][i % 4]
            } rounded-${i % 2 ? "full" : "lg"} opacity-25 animate-float`}
            style={shape}
          ></div>
        ))}
      </div>
    </section>
  );
}
