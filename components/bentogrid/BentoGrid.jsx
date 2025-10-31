import React from "react";

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
    <section className="w-full px-6 py-16 mt-20">
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
              {/* Dekorativni animirani oblici */}
              <div className="absolute inset-0 opacity-15">
                {/* Veći kvadrat */}
                <div className="absolute top-[-30px] left-[-30px] w-40 h-40 bg-blue-200 rounded-xl animate-float"></div>
                {/* Mali kvadrat */}
                <div className="absolute bottom-[-20px] right-[-20px] w-24 h-24 bg-blue-400 rounded-lg animate-drift delay-[0.5s]"></div>
                {/* Horizontalna linija */}
                <div className="absolute top-1/2 left-10 w-32 h-[2px] bg-blue-300 animate-float opacity-60"></div>
                {/* Rotirani kvadrat */}
                <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-blue-500 rotate-45 animate-drift opacity-40 delay-[1s]"></div>
              </div>

              {/* Sadržaj kartice */}
              <div className="relative z-10">
                <span className="inline-flex px-2 py-1 items-center justify-center rounded-full bg-black/90 text-xs tracking-wide text-white">
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
