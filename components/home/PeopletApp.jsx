"use client";

import React from "react";
import Reveal from "../util/Reveal";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { generateFloatingShapes } from "../util/generateFloatingShapes";
import Script from "next/script";

const appShapes = generateFloatingShapes({ count: 8, seed: 2, delayStep: 0.5 });

const PeopletApp = () => {
  return (
    <section
      id="peoplet-app"
      aria-label="Peoplet App – Network Visualization and Data Insights Platform"
      className="px-2 flex justify-center mb-32"
    >
      {/* ✅ JSON-LD structured data for SEO */}
      <Script
        id="peoplet-app-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Peoplet App",
            operatingSystem: "Web",
            applicationCategory: "Data Visualization, Analytics, Network Science",
            description:
              "Peoplet App is an interactive data visualization and social intelligence tool that maps how people, teams, and ideas connect — helping organizations make smarter, data-informed decisions.",
            url: "https://www.peoplet.com/products",
            creator: {
              "@type": "Organization",
              name: "Peoplet Studio",
              url: "https://www.peoplet.com",
            },
            offers: {
              "@type": "Offer",
              price: "0.00",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      <div className="relative mx-auto mt-12 w-full max-w-[1920px] overflow-hidden bg-[#0066ff] px-4 sm:mt-16 sm:px-6 md:rounded-[80px] rounded-[30px] lg:py-32">
        {/* Dekorativni background */}
        <div
          className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20 pointer-events-none"
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
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center justify-center py-24 text-center text-white sm:py-32 lg:py-40">
          <div className="flex flex-col items-center justify-center gap-6 px-2 sm:px-6">
            <h2 className="text-3xl font-semibold md:text-5xl lg:text-6xl">
              Explore the <span className="italic">Peoplet</span> App
            </h2>

            <div className="max-w-3xl space-y-6">
              <Reveal>
                <p className="text-base leading-relaxed text-white md:text-lg">
                  <span className="font-semibold italic">Peoplet App</span>{" "}
                  visualizes human and data networks — revealing how people,
                  ideas, and systems connect. Built for clarity and insight,
                  it transforms complexity into visual understanding.
                </p>
              </Reveal>

              <Reveal>
                <p className="text-base leading-relaxed text-white md:text-lg">
                  From organizations to creative teams, the{" "}
                  <span className="font-semibold italic">Peoplet App</span>{" "}
                  helps you see connections that drive innovation. Turn data
                  into stories, patterns into strategies, and relationships
                  into opportunities.
                </p>
              </Reveal>

              {/* CTA Button */}
              <div className="mt-6 flex justify-center">
                <Link href="/products" rel="nofollow">
                  <button
                    type="button"
                    title="Learn more about Peoplet App"
                    className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-[#0066ff] shadow-sm transition hover:bg-blue-50"
                  >
                    <span>Learn more</span>
                    <ExternalLink size={16} strokeWidth={2} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Random floating shapes */}
        {appShapes.map((shape, i) => (
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
};

export default PeopletApp;
