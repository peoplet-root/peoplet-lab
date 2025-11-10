"use client";

import { AiOutlineArrowRight } from "react-icons/ai";
import Reveal from "../util/Reveal";
import Link from "next/link";
import Script from "next/script";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Peoplet Studio Section"
      className="section-wrapper mx-auto w-full max-w-[1300px] px-4 py-24 sm:px-6 md:py-32"
    >
      {/* ✅ JSON-LD structured data for About page */}
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Peoplet Studio",
            url: "https://www.peoplet.com/about",
            description:
              "Peoplet Studio is a creative digital agency specializing in web development, web applications, design, and data-driven consulting. Learn about our mission to connect people, technology, and data through modern development and network science.",
            publisher: {
              "@type": "Organization",
              name: "Peoplet Studio",
              url: "https://www.peoplet.com",
              logo: "https://www.peoplet.com/logo.png",
            },
          }),
        }}
      />

      <div className="mx-auto w-full">
        <Reveal>
          <h1 className="mb-8 text-4xl font-bold md:mb-10 md:text-6xl leading-tight">
            About <span className="italic text-[#0066ff]">Peoplet Studio</span>
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 text-neutral-800 dark:text-neutral-200">
          {/* Paragraph 1 */}
          <Reveal>
            <p className="leading-relaxed text-lg">
              <strong>Peoplet Studio</strong> is a{" "}
              <em>creative digital and technology agency</em> focused on building
              <strong> web applications, digital products, and brand identities</strong> that make an impact.
              We help companies transform ideas into functional, scalable, and
              visually powerful digital experiences — blending{" "}
              <strong>strategy, design, web development, and data analytics</strong>.
            </p>
          </Reveal>

          {/* Paragraph 2 */}
          <Reveal>
            <p className="leading-relaxed text-lg">
              Our core expertise lies in{" "}
              <strong>web development</strong> and{" "}
              <strong>custom web application engineering</strong> using modern
              frameworks like <strong>Next.js, React, Django, and Neo4j</strong>.
              We build fast, secure, and SEO-optimized digital experiences that
              adapt to your business — whether you’re a startup or enterprise.
            </p>
          </Reveal>

          {/* Paragraph 3 */}
          <Reveal>
            <p className="leading-relaxed text-lg">
              We combine <strong>UX/UI design</strong> and{" "}
              <strong>network science</strong> to visualize and understand how
              people, systems, and data interact. This approach helps our clients
              make smarter decisions, uncover new opportunities, and optimize
              performance through data-driven insights.
            </p>
          </Reveal>

          {/* Paragraph 4 */}
          <Reveal>
            <p className="leading-relaxed text-lg">
              From designing interactive interfaces to{" "}
              <strong>developing complex web platforms</strong> and{" "}
              <strong>automating workflows with AI and analytics</strong>,
              Peoplet Studio acts as your end-to-end digital partner. We bridge
              creativity and technology — ensuring every product we build is both
              beautiful and intelligent.
            </p>
          </Reveal>

          {/* Paragraph 5 — Peoplet App */}
          <Reveal>
            <p className="leading-relaxed text-lg">
              Our flagship platform, the <strong>Peoplet App</strong>, turns
              complex datasets into interactive network visualizations,
              allowing organizations to see relationships and patterns that were
              previously invisible — empowering better collaboration and growth.
            </p>
          </Reveal>

          {/* CTA */}
          <Reveal>
            <div className="mt-4">
              <Link
                href="/about"
                title="Learn more about Peoplet Studio – Who we are and what we build"
                className="inline-flex items-center gap-2 rounded-full bg-[#0066ff] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#0051cc]"
              >
                Learn more about us <AiOutlineArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
