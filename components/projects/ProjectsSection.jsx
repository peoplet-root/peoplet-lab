import React from "react";
import Reveal from "../util/Reveal";

const cards = [
  {
    tag: "Visualization",
    title: "Interactive Network Maps",
    desc: "Explore complex data through dynamic visualizations that reveal hidden relationships and patterns.",
  },
  {
    tag: "Collaboration",
    title: "Real-Time Exploration",
    desc: "Collaborate on shared visual models, analyze connections, and align decisions across your organization.",
  },
  {
    tag: "AI Insights",
    title: "Pattern Detection & Clustering",
    desc: "Use AI to uncover structures, influencers, and communities across your networks in seconds.",
  },
  {
    tag: "Customization",
    title: "Your Data, Your Rules",
    desc: "Fully personalize visualization layouts, filters, and designs to match your data and goals.",
  },
];

export default function ProjectsSection() {
  return (
    <section className="max-w-[1300px] mx-auto py-32 px-6">
      <Reveal>
        <h1 className="text-4xl md:text-6xl font-semibold text-center mb-16">
          Discover <span className="italic text-[#0066ff]">Peoplet</span> in Action
        </h1>
      </Reveal>

      {/* Bento Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
        {/* Row 1 */}
        <div className="md:col-span-2">
          <Reveal>
            <div className="relative bg-white border border-gray-200 rounded-[40px] p-10 h-full flex flex-col justify-between overflow-hidden hover:border-[#0066ff] transition-all duration-300">
              <FloatingShapes />
              <div className="relative z-10">
                <div className="bg-black text-white text-xs font-semibold px-4 py-1 rounded-full inline-block mb-4">
                  {cards[0].tag}
                </div>
                <h2 className="text-3xl font-semibold mb-3">{cards[0].title}</h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  {cards[0].desc}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-1">
          <Reveal>
            <div className="relative bg-white border border-gray-200 rounded-[40px] p-10 h-full flex flex-col justify-between overflow-hidden hover:border-[#0066ff] transition-all duration-300">
              <FloatingShapes />
              <div className="relative z-10">
                <div className="bg-black text-white text-xs font-semibold px-4 py-1 rounded-full inline-block mb-4">
                  {cards[1].tag}
                </div>
                <h2 className="text-3xl font-semibold mb-3">{cards[1].title}</h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  {cards[1].desc}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Row 2 */}
        <div className="md:col-span-1">
          <Reveal>
            <div className="relative bg-white border border-gray-200 rounded-[40px] p-10 h-full flex flex-col justify-between overflow-hidden hover:border-[#0066ff] transition-all duration-300">
              <FloatingShapes />
              <div className="relative z-10">
                <div className="bg-black text-white text-xs font-semibold px-4 py-1 rounded-full inline-block mb-4">
                  {cards[2].tag}
                </div>
                <h2 className="text-3xl font-semibold mb-3">{cards[2].title}</h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  {cards[2].desc}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-2">
          <Reveal>
            <div className="relative bg-white border border-gray-200 rounded-[40px] p-10 h-full flex flex-col justify-between overflow-hidden hover:border-[#0066ff] transition-all duration-300">
              <FloatingShapes />
              <div className="relative z-10">
                <div className="bg-black text-white text-xs font-semibold px-4 py-1 rounded-full inline-block mb-4">
                  {cards[3].tag}
                </div>
                <h2 className="text-3xl font-semibold mb-3">{cards[3].title}</h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  {cards[3].desc}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* Reusable Floating Shapes Component */
function FloatingShapes() {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      {[...Array(6)].map((_, j) => (
        <div
          key={j}
          className={`absolute bg-blue-${
            [200, 300, 400, 500][j % 4]
          } rounded-${j % 2 ? "full" : "lg"} animate-float`}
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
            width: `${Math.random() * 30 + 10}px`,
            height: `${Math.random() * 30 + 10}px`,
            animationDelay: `${j * 0.5}s`,
          }}
        ></div>
      ))}
    </div>
  );
}
