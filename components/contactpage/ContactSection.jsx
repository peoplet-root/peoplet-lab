"use client";

import { motion } from "framer-motion";

const contactOptions = [
  {
    title: "Collaborate on a project",
    description:
      "Share your brief or product challenge, and we’ll assemble the right team to help you bring your idea to life.",
    email: "hello@peopletlab.com",
  },
  {
    title: "Join the team",
    description:
      "We’re always meeting designers, developers, and researchers who love to build and experiment together.",
    email: "talent@peopletlab.com",
  },
];

export default function ContactSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-20 lg:px-8 lg:py-32 text-neutral-800">
      {/* Pozadinski animirani kvadrati */}
      <div className="absolute inset-0 -z-10 opacity-20 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0.4 }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
            className="absolute bg-[#0066ff]/40 rounded-md"
            style={{
              width: `${40 + Math.random() * 60}px`,
              height: `${40 + Math.random() * 60}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Naslov */}
      <header className="space-y-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm font-semibold uppercase tracking-widest text-[#0066ff]"
        >
          Contact
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold sm:text-5xl text-neutral-900 text-center"
        >
          Let’s build what’s next
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-lg text-neutral-600 text-center"
        >
          Tell us about your goals, challenges, or the ideas you can’t stop
          thinking about. We’ll get back to you within two business days with
          the right people from our team.
        </motion.p>
      </header>

      {/* Kontakt opcije */}
      <section className="grid gap-6 sm:grid-cols-2 mt-12">
        {contactOptions.map((option) => (
          <motion.article
            key={option.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-neutral-200 bg-white/70 p-8 shadow-sm backdrop-blur-sm hover:border-[#0066ff]/60 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">
              {option.title}
            </h2>
            <p className="text-neutral-600 mb-4">{option.description}</p>
            <a
              className="inline-flex items-center text-sm font-medium text-[#0066ff] hover:underline"
              href={`mailto:${option.email}`}
            >
              {option.email}
            </a>
          </motion.article>
        ))}
      </section>

      {/* Office Hours */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-dashed border-[#0066ff]/40 bg-[#0066ff]/5 p-10 text-neutral-900"
      >
        <h2 className="text-2xl font-semibold mb-3">
          Prefer to meet live?
        </h2>
        <p className="text-neutral-700">
          We host virtual office hours every Thursday for founders and product
          leaders exploring new initiatives. Send us a note and we’ll share the
          next available time.
        </p>
      </motion.section>
    </section>
  );
}
