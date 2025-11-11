"use client";

import React from "react";
import Script from "next/script";

const cards = [
  {
    title: "Visualization",
    subtitle: "Interactive Network Maps",
    description:
      "Explore complex data through dynamic visualizations that reveal hidden relationships and patterns.",
    layout: "sm:col-span-4",
  },
  {
    title: "Collaboration",
    subtitle: "Real Time Exploration",
    description:
      "Collaborate on shared visual models, analyze connections, and align decisions across your organization.",
    layout: "sm:col-span-2",
  },
  {
    title: "AI Insights",
    subtitle: "Pattern Detection & Clustering",
    description:
      "Use AI to uncover structures, influencers, and communities across your networks in seconds.",
    layout: "sm:col-span-2",
  },
  {
    title: "Customization",
    subtitle: "Your Data, Your Rules",
    description:
      "Fully personalize visualization layouts, filters, and designs to match your data and goals.",
    layout: "sm:col-span-4",
  },
];

export default function BentoGrid() {
  return (
    <section
      id="bento-grid"
      aria-label="Peoplet Platform Capabilities Section"
      className="w-full px-6 py-16 mt-20"
    >
      {/* ✅ JSON-LD structured data */}
      <Script
        id="bento-grid-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Peoplet Platform Capabilities",
            url: "https://www.peoplet.com/#bento-grid",
            description:
              "Core capabilities of the Peoplet platform — visualization, collaboration, AI insights, and data customization.",
            numberOfItems: cards.length,
            itemListElement: cards.map((card, i) => ({
              "@type": "CreativeWork",
              position: i + 1,
              name: card.subtitle,
              headline: card.title,
              text: card.description,
              inLanguage: "en",
              creator: {
                "@type": "Organization",
                name: "Peoplet Studio",
                url: "https://www.peoplet.com",
                logo: "https://www.peoplet.com/logo.png",
              },
            })),
          }),
        }}
      />

      <div className="max-w-[1300px] mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold text-left mb-16">
            Discover{" "}
            <span className="italic text-[#0066ff]">Peoplet</span> in Action
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-6">
          {cards.map((card) => (
            <article
              key={card.title}
              className={`relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${card.layout}`}
            >
              <div className="relative z-10">
                <span className="inline-flex px-2 py-1 items-center justify-center rounded-full bg-[#0066ff] text-xs tracking-wide text-white">
                  {card.title}
                </span>
                <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                  {card.subtitle}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
