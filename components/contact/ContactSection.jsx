"use client";

import { motion } from "framer-motion";

const contactOptions = [
  {
    title: "Get in touch",
    description:
      "Whether you’re interested in learning more about our products, need technical support, or simply want to say hello — we’d love to hear from you.",
    email: "info@peoplet.io",
  },
  {
    title: "Platform questions",
    description:
      "Need details about how Peoplet works or how it can fit into your organization? Our team is happy to provide guidance and insights.",
    email: "info@peoplet.io",
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
          Let’s connect
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-lg text-neutral-600 text-center"
        >
          Have a question or want to learn more about what we’re building?
          Reach out and we’ll get back to you within two business days.
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
        <h2 className="text-2xl font-semibold mb-3">Prefer to meet live?</h2>
        <p className="text-neutral-700">
          We regularly host virtual office hours for partners, clients, and anyone interested in exploring the platform or learning more about what we're building. Send us a message, and we'll share the next available time.
        </p>
      </motion.section>
    </section>
  );
}
