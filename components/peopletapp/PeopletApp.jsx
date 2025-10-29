import React from "react";
import Reveal from "../util/Reveal";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const PeopletApp = () => {
  return (
    <section
      id="about"
      className="section-wrapper max-w-[1300px] flex justify-center items-center mx-auto text-center pt-40"
    >
      <div className="mx-6 flex flex-col items-center justify-center">
        <h1 className="md:text-6xl text-4xl mb-10 font-semibold">
          Get <span className="italic">Peoplet</span> App
        </h1>

        <div className="max-w-3xl space-y-6">
          <Reveal>
            <p className="leading-relaxed text-lg text-gray-700">
              <span className="font-semibold italic">Peoplet </span>App enables
              users to explore and visualize complex networks through
              interactive, intuitive, and data-driven visual representations —
              transforming information into insight for better decision-making.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-lg text-gray-700">
              With <span className="font-semibold italic">Peoplet </span>App,
              users can turn complex data into clear, interactive visualizations
              that reveal how people, ideas, and systems connect — empowering
              smarter decisions and deeper understanding.
            </p>
          </Reveal>

          {/* Centered Button */}
          <div className="flex justify-center mt-8">
            <Link href="http://client.peoplet.io" target="_blank" rel="nofollow">
              <button className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl font-medium hover:bg-neutral-900 transition shadow-sm">

                {/* Text */}
                <span>Find out more</span>

                {/* External link icon */}
                <ExternalLink size={16} strokeWidth={2} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopletApp;
