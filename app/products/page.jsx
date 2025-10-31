export const metadata = {
  title: "Products | Peoplet Lab",
};

const products = [
  {
    name: "Peoplet",
    description:
      "A modular design system and component library that accelerates product teams while keeping experiences consistent across platforms.",
  },
  {
    name: "Insight Loop",
    description:
      "A research and analytics toolkit that turns customer signals into clear opportunities for product, marketing, and operations.",
  },
];

export default function ProductsPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16 text-base leading-7 text-neutral-600 dark:text-neutral-300 lg:px-8 lg:py-24">
      <header className="space-y-4 text-neutral-900 dark:text-neutral-50">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#0066ff]">Products</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Tools designed for ambitious teams</h1>
        <p className="max-w-3xl text-lg text-neutral-600 dark:text-neutral-300">
          We create adaptable platforms that integrate seamlessly into your workflows—helping teams launch faster, learn quicker,
          and scale with confidence.
        </p>
      </header>
      <section className="grid gap-6 sm:grid-cols-2">
        {products.map((product) => (
          <article
            key={product.name}
            className="flex h-full flex-col justify-between rounded-2xl border border-neutral-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:border-[#0066ff]/60 dark:border-neutral-800 dark:bg-neutral-900/70"
          >
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">{product.name}</h2>
              <p>{product.description}</p>
            </div>
            <div className="mt-6 text-sm font-medium text-[#0066ff]">Explore capabilities →</div>
          </article>
        ))}
      </section>
      <section className="rounded-2xl border border-dashed border-[#0066ff]/40 bg-[#0066ff]/5 p-8 text-neutral-900 dark:text-neutral-50">
        <h2 className="text-2xl font-semibold">Looking for something bespoke?</h2>
        <p className="mt-3 max-w-2xl text-neutral-700 dark:text-neutral-200">
          We frequently collaborate on co-creating internal tools, experimental prototypes, and specialized platforms. Share your
          challenge and we will tailor a solution that meets your team’s needs.
        </p>
      </section>
    </main>
  );
}