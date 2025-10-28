'use client'

import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import Reveal from "../util/Reveal";

export const ProjectsSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto md:py-40" id="projects">
      <div className="mx-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Reveal>
              <h1 className="md:text-6xl text-4xl mb-10">Projects</h1>
            </Reveal>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              imgSrc={project.imgSrc}
              code={project.code}
              tech={project.tech}
              projectLink={project.projectLink}
              data={project.data}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Project Component
const Project = ({
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech = [],
  data,
}) => {
  const [hovered, setHovered] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.75 }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative group"
      >
        <div className="w-full aspect-video bg-zinc-100 dark:bg-neutral-700 cursor-pointer relative rounded-lg overflow-hidden">
          <img
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 rounded transition-all duration-300 ease-in-out"
            style={{
              width: hovered ? "90%" : "85%",
              transform: `translate(-50%, 25%) rotate(${hovered ? "2deg" : "0deg"})`,
            }}
          />
        </div>
        
        <div className="mt-6">
          <Reveal width="w-full">
            <div className="flex items-center gap-2 w-full">
              <h4 className="font-bold text-lg shrink-0 max-w-[calc(100%_-_150px)] truncate">
                {title}
              </h4>
              <div className="w-full h-[1px] bg-neutral-300" />
              <div className="flex gap-2">
                <Link 
                  href={code} 
                  target="_blank" 
                  rel="nofollow"
                  className="hover:scale-110 transition-transform"
                >
                  <AiFillGithub className="text-xl hover:text-neutral-500 transition-colors" />
                </Link>
                <Link 
                  href={projectLink} 
                  target="_blank" 
                  rel="nofollow"
                  className="hover:scale-110 transition-transform"
                >
                  <AiOutlineExport className="text-xl hover:text-neutral-500 transition-colors" />
                </Link>
              </div>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="flex flex-wrap gap-2 text-sm my-2">
              {tech.map((item, index) => (
                <span key={index} className="border px-3 py-1 rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
          
          <Reveal>
            <p className="text-neutral-500 text-sm leading-relaxed">
              {description}
              {data?.username && data?.password && (
                <span className="text-neutral-500 text-sm leading-relaxed">
                  <br />
                  <strong>Username:</strong> {data.username}
                  <br />
                  <strong>Password:</strong> {data.password}
                </span>
              )}
            </p>
          </Reveal>
        </div>
      </div>
    </motion.div>
  );
};

// Projects Data
const projects = [
  {
    title: "Print Alfa Webshop",
    imgSrc: "assets/webp/print-alfa.webp",
    code: "https://github.com/Robertino2809/printalfa-front",
    projectLink: "https://printalfa-front.vercel.app/?",
    tech: ["Next.js", "React.js", "TailwindCSS", "MongoDB", "AWS"],
    description:
      "A dynamic Next.js e-commerce platform for a creative agency that seamlessly integrates MongoDB for product management and secure payment processing. The webshop features a responsive React-based interface styled with modern design principles, handling everything from service browsing to checkout with robust order tracking and secure payment processing through Stripe integration.",
  },
  {
    title: "Beekeeping Association application",
    imgSrc: "assets/webp/beekeping-app.webp",
    code: "",
    projectLink: "https://beekeeper-app.vercel.app/",
    tech: ["Next.js", "React.js", "TailwindCSS", "Postgres", "SQL"],
    description:
      "This is a Next.js web application for managing members of a beekeeping association, allowing administrators to view, add, edit, and delete member records including their personal details, number of beehives, and membership payment status. The app is built with React, uses Prisma for database operations, and features a Croatian-language interface with a clean, responsive design using Tailwind CSS and modern UI components.",
    data: {
      username: "admin",
      password: "admin12345",
    }
  },
  {
    title: "Elektro Deni",
    imgSrc: "assets/webp/elektro-deni.webp",
    code: "",
    projectLink: "https://elektro-deni.hr",
    tech: ["Figma", "Next.js", "React.js", "TailwindCSS"],
    description:
      "A static website for Elektro Deni that use Next.js's server-side rendering and optimized SEO capabilities to showcase their electrical services with lightning-fast page loads and seamless user experience. The site features a professional design crafted in Figma and implemented with React and Tailwind CSS, utilizing lazy loading for images and components to ensure optimal performance while presenting their electrical expertise, project portfolio, and services.",
  },
  {
    title: "Personal Branding",
    imgSrc: "assets/webp/personal-branding.webp",
    code: "",
    projectLink: "https://www.behance.net/gallery/212287003/Personal-Brand-Identity",
    tech: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    description:
      "A personal branding project that combines modern design aesthetics with strategic visual storytelling to create a distinctive professional identity. The brand system was meticulously crafted using Adobe Illustrator for scalable vector elements, Adobe Photoshop for sophisticated image processing, and Figma for mockups. Special attention was given to maintaining brand consistency while ensuring optimal reproduction quality across various mediums, from business cards to social media assets.",
  },
  {
    title: "Video Alfa",
    imgSrc: "assets/webp/video-alfa.webp",
    code: "https://www.github.com",
    projectLink: "https://video-alfa.vercel.app",
    tech: ["Figma", "React.js", "Tailwind CSS"],
    description:
      "A dynamic website for Video Alfa that leverages Next.js's server-side rendering and advanced SEO optimization to showcase their photography portfolio with crisp image delivery and smooth transitions. The site features an elegant, minimalist design that puts the focus on visual storytelling, implemented with React and Tailwind CSS, utilizing advanced image optimization techniques and lazy loading to deliver high-resolution photography with optimal performance while presenting their wedding collections, portrait sessions, and commercial work alongside client testimonials and booking capabilities.",
  },
  {
    title: "FinTasker",
    imgSrc: "assets/webp/fintasker.webp",
    code: "https://github.com/Robertino2809/fintasker-app",
    projectLink: "",
    tech: ["Next.js", "React.js", "Tailwind CSS", "PostgreSQL", "Prisma"],
    description:
      "A web application FinTasker that combines task management with personal finance tracking, built with Next.js for robust performance and real-time updates. The app features an intuitive interface designed for daily productivity, implemented with React and Tailwind CSS, allowing users to manage their to-do lists alongside expense tracking, budget planning, and financial goal setting, while providing insightful analytics and visual reports to help users understand their productivity and spending patterns in one unified platform.",
  },
];