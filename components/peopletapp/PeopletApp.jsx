import React from "react";
import Reveal from "../util/Reveal";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { generateFloatingShapes } from "../util/generateFloatingShapes";

const appShapes = generateFloatingShapes({ count: 8, seed: 2, delayStep: 0.5 });

const PeopletApp = () => {
  return (
    <section className="m-2 relative bg-[#0066ff] rounded-[80px] overflow-hidden">
      {/* --- Decorative floating rectangles (same as Hero) --- */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20 pointer-events-none">
        {/* Original shapes */}
        <div className="bg-blue-400 col-span-2 row-span-2 m-2 rounded-lg animate-float"></div>
        <div className="bg-blue-200 col-start-4 row-start-1 m-2 rounded-lg animate-float"></div>
        <div className="bg-blue-300 col-start-6 row-start-2 m-2 rounded-lg animate-float"></div>
        <div className="bg-blue-500 col-start-2 row-start-4 m-2 rounded-lg animate-float"></div>
        <div className="bg-blue-300 col-start-5 row-start-5 m-2 rounded-lg animate-float"></div>
        <div className="bg-blue-600 col-start-3 row-start-6 m-2 rounded-lg animate-float"></div>

        {/* New floating elements */}
        <div className="bg-blue-200 col-start-1 row-start-3 m-2 rounded-full animate-drift"></div>
        <div className="bg-blue-500 col-start-5 row-start-2 m-2 rounded-lg animate-rotate-slow"></div>
        <div className="bg-blue-400 col-start-2 row-start-5 m-2 rounded-md animate-float delay-[1s]"></div>
        <div className="bg-blue-100 col-start-6 row-start-4 m-2 w-16 h-1 rounded-full animate-drift opacity-50"></div>
        <div className="bg-blue-200 col-start-3 row-start-1 m-2 rotate-45 w-10 h-10 animate-float opacity-40"></div>
        <div className="bg-blue-300 col-start-4 row-start-6 m-2 w-12 h-12 rounded-full animate-drift delay-[1.5s] opacity-40"></div>
      </div>

      {/* --- Main content --- */}
      <div
        id="about"
        className="relative section-wrapper max-w-[1300px] flex justify-center items-center mx-auto text-center py-40 text-white z-10"
      >
        <div className="mx-6 flex flex-col items-center justify-center">
          <h1 className="md:text-6xl text-4xl mb-10 font-semibold">
            Get <span className="italic">Peoplet</span> App
          </h1>

          <div className="max-w-3xl space-y-6">
            <Reveal>
              <p className="leading-relaxed text-lg text-white">
                <span className="font-semibold italic">Peoplet </span>App enables
                users to explore and visualize complex networks through
                interactive, intuitive, and data-driven visual representations —
                transforming information into insight for better decision-making.
              </p>
            </Reveal>
            <Reveal>
              <p className="leading-relaxed text-lg text-white">
                With <span className="font-semibold italic">Peoplet </span>App,
                users can turn complex data into clear, interactive visualizations
                that reveal how people, ideas, and systems connect — empowering
                smarter decisions and deeper understanding.
              </p>
            </Reveal>

            {/* Centered Button */}
            <div className="flex justify-center mt-8">
              <Link
                href="http://client.peoplet.io"
                target="_blank"
                rel="nofollow"
              >
                <button className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition shadow-sm bg-white text-black">
                  <span>Find out more</span>
                  <ExternalLink size={16} strokeWidth={2} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* --- Random small floating shapes for extra motion --- */}
      {appShapes.map((shape, i) => (
        <div
          key={i}
          className={`absolute bg-blue-${
            [200, 300, 400, 500][i % 4]
          } rounded-${i % 2 ? "full" : "lg"} opacity-25 animate-float`}
          style={shape}
        ></div>
      ))}
    </section>
  );
};

export default PeopletApp;
