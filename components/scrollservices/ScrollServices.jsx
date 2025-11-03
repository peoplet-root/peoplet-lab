"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Example = () => {
  return <SwapColumnFeatures />;
};

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState(features[0]);

  return (
    <section className="relative mx-auto max-w-7xl">
      {/* Naslov */}
      <div className="px-6 pt-24 md:pt-32 text-left">
        <h1 className="mb-8 text-3xl font-bold md:mb-10 md:text-6xl">
          What <span className="italic text-[#0066ff]">Peoplet </span>{" "}Do Best
        </h1>

      </div>

      <SlidingFeatureDisplay featureInView={featureInView} />
      <div className="-mt-[100vh] hidden md:block" />

      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({ featureInView }) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-3/5 rounded-xl p-8"
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({ setFeatureInView, featureInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-screen"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <p className="text-sm uppercase text-gray-500 tracking-widest mb-3">
            Peoplet Lab
          </p>
          <h2 className="md:text-6xl text-3xl font-bold mb-4">{featureInView.title}</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {featureInView.desc}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-8 block md:hidden"
        >
          <ExampleFeature featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const ExampleFeature = ({ featureInView }) => {
  return (
    <div className="relative h-96 w-full overflow-hidden rounded-3xl shadow-2xl bg-[#0e0e0e]">
      {/* Slika s animacijom */}
      <motion.div
        key={featureInView.image}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <Image
          src={featureInView.image}
          alt={featureInView.title}
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>
    </div>
  );
};


export default Example;

/* ---- Novi sadržaj Peoplet usluga ---- */
const features = [
  {
    id: 1,
    callout: "Development",
    title: "Web Development",
    desc: "We build modern, high-performance web apps and platforms using React, Next.js, Django, and Neo4j. Every project is crafted for scalability, performance, and seamless user experience.",
    contentPosition: "r",
    image: "/assets/webdev.jpg",
  },
  {
    id: 2,
    callout: "Design",
    title: "Graphic Design & Branding",
    desc: "We create logos, visual systems, and digital identities that communicate clearly and look stunning. From color and typography to UI/UX, your brand stays consistent and memorable.",
    contentPosition: "l",
    image: "/assets/graphdesign.jpg",
  },
  {
    id: 3,
    callout: "Consulting",
    title: "Consulting & Network Science",
    desc: "Using our network visualization platform, we map how people, teams, and decisions connect. We combine network science and strategy to improve collaboration and growth.",
    contentPosition: "r",
    image: "/assets/consulting.png",
  },
  {
    id: 4,
    callout: "Automation",
    title: "Data Analytics & Automation",
    desc: "We automate business processes and analyze data to uncover opportunities for growth and efficiency — combining AI insights with custom dashboards and workflows.",
    contentPosition: "l",
    image: "/assets/dataanalytics.jpg",
  },
];
