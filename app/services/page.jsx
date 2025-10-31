export const metadata = {
  title: "Services | Peoplet Lab",
};

const services = [
  {
    name: "Product Strategy",
    description:
      "Discover insights, define outcomes, and chart a focused roadmap that aligns teams around what to build next.",
  },
  {
    name: "Experience Design",
    description:
      "Design inclusive, cohesive experiences across every touchpoint with research-backed interaction and visual systems.",
  },
  {
    name: "Full-Stack Engineering",
    description:
      "Ship reliable, scalable applications using modern frameworks, cloud infrastructure, and robust CI/CD tooling.",
  },
  {
    name: "Innovation Sprints",
    description:
      "Prototype, test, and validate new ideas in weeks—not months—to de-risk investments and accelerate learning.",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16 text-base leading-7 text-neutral-600 dark:text-neutral-300 lg:px-8 lg:py-24">
      <header className="space-y-4 text-neutral-900 dark:text-neutral-50">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#0066ff]">Services</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Partnership from vision to launch</h1>
        <p className="max-w-3xl text-lg text-neutral-600 dark:text-neutral-300">
          We embed alongside your team to shape strategy, design differentiated products, and deliver production-grade software
          with measurable impact.
        </p>
      </header>
      <section className="grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.name}
            className="rounded-2xl border border-neutral-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:border-[#0066ff]/60 dark:border-neutral-800 dark:bg-neutral-900/70"
          >
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">{service.name}</h2>
            <p className="mt-3">{service.description}</p>
          </article>
        ))}
      </section>
      <section className="rounded-2xl border border-neutral-200/60 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/70">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">How we work</h2>
        <dl className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-semibold uppercase tracking-widest text-[#0066ff]">01 — Co-create</dt>
            <dd className="mt-2 text-sm">
              We assemble cross-functional squads with your stakeholders to stay aligned on goals, velocity, and outcomes.
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-widest text-[#0066ff]">02 — Iterate</dt>
            <dd className="mt-2 text-sm">
              Evidence-based decision making keeps us testing, learning, and refining quickly with real users.
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-widest text-[#0066ff]">03 — Deliver</dt>
            <dd className="mt-2 text-sm">
              We launch with robust QA, documentation, and knowledge transfer to set your teams up for long-term success.
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-widest text-[#0066ff]">04 — Support</dt>
            <dd className="mt-2 text-sm">
              Ongoing optimisation, experimentation, and technical stewardship keep your products evolving after launch.
            </dd>
          </div>
        </dl>
      </section>
    </main>
  );
}