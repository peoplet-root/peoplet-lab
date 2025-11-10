"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Script from "next/script";

/* ---- Peoplet usluge (FEATURES) ---- */
const features = [
  {
    id: 1,
    callout: "Development",
    title: "Web Development & Digital Experiences",
    desc: "We design and build custom websites and web applications that combine performance, usability, and visual appeal. Every digital experience we create is built to engage users, strengthen brands, and drive business results.",
    contentPosition: "r",
    image: "/assets/webdev.jpg",
  },
  {
    id: 2,
    callout: "Design",
    title: "Graphic Design & Brand Identity",
    desc: "Our creative team crafts powerful visual identities and brand systems that communicate clearly and leave a lasting impression. From concept to execution, we bring your brand to life across every digital channel.",
    contentPosition: "l",
    image: "/assets/graphdesign.jpg",
  },
  {
    id: 3,
    callout: "Consulting",
    title: "Data & Strategy Consulting",
    desc: "We help organizations make smarter decisions by connecting design, data, and business strategy. Through our analytical and network-based approach, we uncover insights that optimize performance and collaboration.",
    contentPosition: "r",
    image: "/assets/consulting.png",
  },
  {
    id: 4,
    callout: "Automation",
    title: "Data Analytics & Automation",
    desc: "Our team builds data-driven systems that simplify complex workflows and help businesses operate more efficiently. We turn information into action — combining analytics, visualization, and automation to accelerate growth.",
    contentPosition: "l",
    image: "/assets/dataanalytics.jpg",
  },
];

/* ---- Glavna komponenta ---- */
export default function Services() {
  return <SwapColumnFeatures />;
}

/* ---- Parent komponenta ---- */
const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState(features[0]);

  return (
    <section
      id="services"
      aria-label="Peoplet Studio Services Section"
      className="relative mx-auto max-w-7xl"
    >
      {/* ✅ JSON-LD structured data for SEO */}
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType:
              "Web Development, Design, Consulting, and Data Analytics",
            provider: {
              "@type": "Organization",
              name: "Peoplet Studio",
              url: "https://www.peoplet.com",
              logo: "https://www.peoplet.com/logo.png",
            },
            areaServed: { "@type": "Place", name: "Worldwide" },
            description:
              "Peoplet Studio offers professional web development, digital design, branding, data analytics, and consulting services that help businesses grow through intelligent digital experiences.",
          }),
        }}
      />

      {/* Naslov sekcije */}
      <div className="px-6 pt-24 md:pt-32 text-left">
        <h1 className="mb-8 text-4xl font-bold md:mb-10 md:text-6xl leading-tight">
          What <span className="italic text-[#0066ff]">Peoplet</span> Does Best
        </h1>
        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          We connect creativity and strategy to deliver{" "}
          <strong>impactful digital solutions</strong> — from{" "}
          <strong>custom web development</strong> and{" "}
          <strong>branding design</strong> to{" "}
          <strong>data analytics and business automation</strong>.
        </p>
      </div>

      <SlidingFeatureDisplay featureInView={featureInView} />

      {/* Spacer for scroll animation */}
      <div className="-mt-[100vh] hidden md:block" aria-hidden="true" />

      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
        />
      ))}
    </section>
  );
};

/* ---- Sticky prikaz slike ---- */
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

/* ---- Sekcija s tekstom ---- */
const Content = ({ setFeatureInView, featureInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-150px" });

  useEffect(() => {
    if (isInView) setFeatureInView(featureInView);
  }, [isInView, featureInView, setFeatureInView]);

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
            Peoplet Studio
          </p>
          <h2 className="md:text-5xl text-2xl font-bold mb-4 leading-snug">
            {featureInView.title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-md md:text-lg leading-relaxed mb-8">
            {featureInView.desc}
          </p>
        </motion.div>

        {/* Mobile image fallback */}
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

/* ---- Prikaz slike (feature image) ---- */
const ExampleFeature = ({ featureInView }) => {
  return (
    <div
      className="relative h-96 w-full overflow-hidden rounded-3xl shadow-2xl bg-[#0e0e0e]"
      aria-label={`${featureInView.title} visual`}
    >
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
          alt={`${featureInView.title} service by Peoplet Studio`}
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>
    </div>
  );
};
