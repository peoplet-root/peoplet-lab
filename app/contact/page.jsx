export const metadata = {
  title: "Contact | Peoplet Lab",
};

const contactOptions = [
  {
    title: "Collaborate on a project",
    description: "Share your brief or product challenge and we will assemble the right team to help.",
    email: "hello@peopletlab.com",
  },
  {
    title: "Join the team",
    description: "We’re always meeting designers, engineers, and researchers who love to experiment.",
    email: "talent@peopletlab.com",
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-16 text-base leading-7 text-neutral-600 dark:text-neutral-300 lg:px-8 lg:py-24">
      <header className="space-y-4 text-neutral-900 dark:text-neutral-50">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#0066ff]">Contact</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Let’s build what’s next</h1>
        <p className="max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
          Tell us about your goals, product challenges, or the ideas you cannot stop thinking about. We’ll follow up within two
          business days to schedule time with the right team members.
        </p>
      </header>
      <section className="grid gap-6 sm:grid-cols-2">
        {contactOptions.map((option) => (
          <article
            key={option.title}
            className="rounded-2xl border border-neutral-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:border-[#0066ff]/60 dark:border-neutral-800 dark:bg-neutral-900/70"
          >
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">{option.title}</h2>
            <p className="mt-3">{option.description}</p>
            <a
              className="mt-6 inline-flex items-center text-sm font-medium text-[#0066ff]"
              href={`mailto:${option.email}`}
            >
              {option.email}
            </a>
          </article>
        ))}
      </section>
      <section className="rounded-2xl border border-dashed border-[#0066ff]/40 bg-[#0066ff]/5 p-8 text-neutral-900 dark:text-neutral-50">
        <h2 className="text-2xl font-semibold">Prefer to meet live?</h2>
        <p className="mt-3 text-neutral-700 dark:text-neutral-200">
          We host virtual office hours every Thursday for founders and product leaders exploring new initiatives. Send us a note
          and we’ll share the next availability.
        </p>
      </section>
    </main>
  );
}