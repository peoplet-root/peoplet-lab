'use client';

import React from "react";
import { FiCheck, FiX } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      <section className="relative flex w-full max-w-[1920px] items-center justify-center bg-[#0066ff] text-white rounded-[80px] py-20 px-6 md:px-10 overflow-hidden">
        {/* Dekorativni oblici */}
        <div className="absolute inset-0 opacity-20">
          {/* Veliki kvadrati */}
          <div className="absolute top-[-40px] left-[-40px] w-64 h-64 bg-blue-400 rounded-2xl animate-float"></div>
          <div className="absolute top-1/4 right-[-60px] w-80 h-80 bg-blue-500 rounded-3xl animate-drift delay-[0.5s]"></div>
          <div className="absolute bottom-[-60px] left-1/3 w-72 h-72 bg-blue-300 rounded-xl animate-float delay-[1s]"></div>
          <div className="absolute bottom-[-80px] right-1/4 w-96 h-96 bg-blue-600 rounded-3xl animate-drift delay-[1.5s]"></div>

          {/* Srednji i mali kvadrati */}
          <div className="absolute top-10 left-20 w-20 h-20 bg-blue-400 rounded-lg animate-float"></div>
          <div className="absolute bottom-10 right-16 w-24 h-24 bg-blue-200 rounded-lg animate-drift"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-500 rounded-md animate-float delay-[1s]"></div>
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-blue-300 rounded-xl animate-float delay-[1.2s]"></div>

          {/* Krugovi */}
          <div className="absolute top-1/4 left-1/2 w-12 h-12 bg-blue-300 rounded-full animate-drift delay-[1.5s]"></div>
          <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-blue-200 rounded-full animate-float"></div>

          {/* Trokuti (rotirani kvadrati) */}
          <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-blue-500 rotate-45 animate-float opacity-40"></div>
          <div className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-blue-400 rotate-45 animate-drift delay-[2s] opacity-40"></div>

          {/* Mali random oblici */}
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`absolute bg-blue-${[200,300,400,500][i % 4]} rounded-${i % 2 ? "full" : "lg"} animate-float opacity-30`}
              style={{
                top: `${Math.random() * 90}%`,
                left: `${Math.random() * 90}%`,
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                animationDelay: `${i * 0.4}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Glavni sadržaj */}
        <div className="relative z-10 mx-auto max-w-5xl w-full">
          <div className="mb-12 space-y-3 text-center">
            <h2 className="text-white text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Pricing
            </h2>
            <p className="text-base text-white md:text-lg">
              Use it for free for yourself, upgrade when your team needs advanced control.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <PriceCard
              tier="Free"
              price="$0/mo"
              bestFor="Best for 1-5 users"
              CTA={<GhostButton className="w-full">Get started free</GhostButton>}
              benefits={[
                { text: "One workspace", checked: true },
                { text: "Email support", checked: true },
                { text: "1 day data retention", checked: false },
                { text: "Custom roles", checked: false },
                { text: "Priority support", checked: false },
                { text: "SSO", checked: false },
              ]}
            />
            <PriceCard
              tier="Pro"
              price="$79/mo"
              bestFor="Best for 5-50 users"
              CTA={
                <GhostButton className="w-full bg-zinc-50 text-zinc-950 hover:bg-zinc-200 hover:text-zinc-900">
                  14-day free trial
                </GhostButton>
              }
              benefits={[
                { text: "Five workspaces", checked: true },
                { text: "Email support", checked: true },
                { text: "7 day data retention", checked: true },
                { text: "Custom roles", checked: true },
                { text: "Priority support", checked: false },
                { text: "SSO", checked: false },
              ]}
            />
            <PriceCard
              tier="Enterprise"
              price="Contact us"
              bestFor="Best for 50+ users"
              CTA={<GhostButton className="w-full">Contact us</GhostButton>}
              benefits={[
                { text: "Unlimited workspaces", checked: true },
                { text: "Email support", checked: true },
                { text: "30 day data retention", checked: true },
                { text: "Custom roles", checked: true },
                { text: "Priority support", checked: true },
                { text: "SSO", checked: true },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

/* --- Ostale komponente ostaju iste --- */
const PriceCard = ({ tier, price, bestFor, CTA, benefits }) => (
  <Card>
    <div className="flex flex-col items-center border-b pb-6">
      <span className="mb-6 inline-block text-zinc-50">{tier}</span>
      <span className="mb-3 inline-block text-4xl font-medium">{price}</span>
      <span className="bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-center text-transparent">
        {bestFor}
      </span>
    </div>

    <div className="space-y-4 py-9">
      {benefits.map((b, i) => (
        <Benefit {...b} key={i} />
      ))}
    </div>

    {CTA}
  </Card>
);

const Benefit = ({ text, checked }) => (
  <div className="flex items-center gap-3">
    {checked ? (
      <span className="grid size-5 place-content-center rounded-full bg-blue-600 text-sm text-zinc-50">
        <FiCheck />
      </span>
    ) : (
      <span className="grid size-5 place-content-center rounded-full bg-zinc-800 text-sm text-zinc-400">
        <FiX />
      </span>
    )}
    <span className="text-sm text-white">{text}</span>
  </div>
);

const Card = ({ className, children, style = {} }) => (
  <motion.div
    initial={{ filter: "blur(2px)", opacity: 0, y: 20 }}
    whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.15 }}
    style={style}
    className={twMerge(
      "relative h-full w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-700/50 to-zinc-900/80 p-6",
      className
    )}
  >
    {children}
  </motion.div>
);

const GhostButton = ({ children, className, ...rest }) => (
  <button
    className={twMerge(
      "rounded-md px-4 py-2 text-lg text-zinc-100 transition-all hover:scale-[1.02] hover:bg-zinc-800 hover:text-zinc-50 active:scale-[0.98]",
      className
    )}
    {...rest}
  >
    {children}
  </button>
);
