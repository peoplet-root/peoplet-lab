"use client";

import React from "react";
import Reveal from "../util/Reveal";

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
      <div className="grid md:grid-cols-3 place-items-center">
        {plans.map((plan, index) => (
          <Reveal key={index}>
            <div
              className={`relative flex flex-col justify-between items-center text-center w-full max-w-[380px] p-10 rounded-[36px] border shadow-sm overflow-hidden min-h-[520px] transition-all duration-300
                ${
                  plan.accent === "blue"
                    ? "bg-[#0066ff] text-white shadow-xl"
                    : "bg-white border-gray-200 hover:border-[#0066ff] hover:shadow-md"
                }`}
            >
              {/* Floating animated shapes */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute bg-blue-${
                      [200, 300, 400, 500][i % 4]
                    } rounded-${i % 2 ? "full" : "lg"} animate-float`}
                    style={{
                      top: `${Math.random() * 80}%`,
                      left: `${Math.random() * 80}%`,
                      width: `${Math.random() * 30 + 15}px`,
                      height: `${Math.random() * 30 + 15}px`,
                      animationDelay: `${i * 0.6}s`,
                    }}
                  ></div>
                ))}
              </div>

              {/* Glow for middle card */}
              {plan.popular && (
                <div className="absolute inset-0 bg-[#0066ff]/70 blur-3xl opacity-30 -z-10"></div>
              )}

              {/* Badge */}
              {plan.popular && (
                <div className="absolute top-6 right-6 bg-white text-[#0066ff] text-xs font-semibold px-4 py-1 rounded-full shadow-sm">
                  Most Popular
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
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
                    className={`text-lg md:text-xl font-semibold mb-3 ${
                      plan.accent === "blue" ? "text-white" : "text-gray-900"
                    }`}
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
                <ul className="text-sm space-y-3 mt-6 mb-8 max-w-[250px] mx-auto">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`${
                        plan.accent === "blue"
                          ? "text-white/90"
                          : "text-gray-700"
                      }`}
                    >
                      • {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  className={`px-6 py-3 rounded-full font-medium transition shadow-sm ${
                    plan.accent === "blue"
                      ? "bg-white text-[#0066ff] hover:bg-neutral-100"
                      : "bg-black text-white hover:bg-[#0066ff]"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
