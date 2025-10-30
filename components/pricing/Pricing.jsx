"use client";

import React from "react";
import Reveal from "../util/Reveal";
import { generateFloatingShapes } from "../util/generateFloatingShapes";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for individuals & freelancers",
    price: "$49",
    period: "/month",
    features: [
      "Basic web design & hosting",
      "Single-page portfolio or landing page",
      "Email support",
      "Basic analytics dashboard",
    ],
    accent: "gray",
  },
  {
    name: "Professional",
    tagline: "Ideal for startups & growing teams",
    price: "$149",
    period: "/month",
    features: [
      "Custom web app or website",
      "Complete branding & design system",
      "Priority customer support",
      "Advanced analytics & reports",
    ],
    accent: "blue",
    popular: true,
  },
  {
    name: "Enterprise",
    tagline: "For organizations & agencies",
    price: "Custom",
    period: "pricing",
    features: [
      "Full-stack product development",
      "UX/UI design & strategy",
      "Network Science integration",
      "Dedicated support & SLA",
    ],
    accent: "gray",
  },
];

const pricingShapeSets = plans.map((_, index) =>
  generateFloatingShapes({
    count: 6,
    seed: 100 + index,
    delayStep: 0.6,
    widthRange: [15, 45],
    heightRange: [15, 45],
  })
);

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 px-6 max-w-[1300px] mx-auto">
      {/* Header */}
      <Reveal>
        <h1 className="text-4xl md:text-6xl font-semibold text-center mb-6">
          Pricing made simple
        </h1>
      </Reveal>
      <Reveal>
        <p className="text-gray-600 text-left max-w-2xl mx-auto mb-20">
          Choose the plan that fits your goals — whether you’re just starting out,
          scaling your team, or running a global organization.
        </p>
      </Reveal>

      {/* Grid */}
      <div className="grid gap-10 md:grid-cols-3 md:items-stretch">
        {plans.map((plan, index) => (
          <Reveal key={index}>
            <div
              className={`relative flex h-[560px] w-full max-w-[380px] flex-col items-center overflow-hidden rounded-[36px] border p-10 text-center shadow-sm transition-all duration-300
                ${
                  plan.accent === "blue"
                    ? "bg-[#0066ff] text-white shadow-xl"
                    : "bg-white border-gray-200 hover:border-[#0066ff] hover:shadow-md"
                }`}
            >
              {/* Floating animated shapes */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                {pricingShapeSets[index].map((shape, i) => (
                  <div
                    key={i}
                    className={`absolute bg-blue-${
                      [200, 300, 400, 500][i % 4]
                    } rounded-${i % 2 ? "full" : "lg"} animate-float`}
                    style={shape}
                  ></div>
                ))}
              </div>

              {/* Badge */}
              {plan.popular && (
                <div className="absolute top-6 right-6 bg-white text-[#0066ff] text-xs font-semibold px-4 py-1 rounded-full shadow-sm">
                  Most Popular
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 flex h-full w-full flex-col justify-between">
                <div className="flex flex-col items-center">
                  <div
                    className={`text-xs font-medium rounded-full px-4 py-1 mb-5 ${
                      plan.accent === "blue"
                        ? "bg-white/20 text-white"
                        : "bg-black text-white"
                    }`}
                  >
                    {plan.name}
                  </div>

                  <h2
                    className={`text-lg md:text-xl font-semibold mb-3 leading-tight ${
                      plan.accent === "blue" ? "text-white" : "text-gray-900"
                    }`}
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {plan.tagline}
                  </h2>

                  <div className="my-4">
                    <span
                      className={`text-5xl font-bold ${
                        plan.accent === "blue" ? "text-white" : "text-black"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`block text-sm mt-1 ${
                        plan.accent === "blue"
                          ? "text-white/70"
                          : "text-gray-500"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="mx-auto mt-6 mb-8 flex w-full max-w-[250px] flex-1 flex-col justify-center space-y-3 text-sm">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`${
                        plan.accent === "blue"
                          ? "text-white/90"
                          : "text-gray-700"
                      }`}
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      • {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <div className="mt-auto flex justify-center">
                  <button
                    className={`rounded-full px-6 py-3 font-medium shadow-sm transition ${
                      plan.accent === "blue"
                        ? "bg-white text-[#0066ff] hover:bg-neutral-100"
                        : "bg-black text-white hover:bg-[#0066ff]"
                    }`}
                  >
                    {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
