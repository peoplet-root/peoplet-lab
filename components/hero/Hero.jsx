import Reveal from "../util/Reveal";

export default function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto" id="hero">
      <div className="mx-6 md:py-40">
        <Reveal>
          <h1 className="lg:text-7xl text-5xl mb-8">Hello, I&apos;m Robertino.</h1>
        </Reveal>
        <Reveal>
          <h1 className="text-3xl mb-8">I&apos;m Full-stack Developer & Graphic Designer.</h1>
        </Reveal>
        <Reveal>
          <p className="md:max-w-4xl">For the past 5 years, I&apos;ve been wearing two hats - crafting digital experiences with code and bringing designs to life. When I&apos;m not building full-stack solutions, you&apos;ll find me creating pixel-perfect designs. Let&apos;s make something awesome together! </p>
        </Reveal>
      </div>
    </section>
  )
}