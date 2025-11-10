"use client";

import About from "@/components/home/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/home/Hero";
import ScrollServices from "@/components/home/ScrollServices";
import PeopletApp from "@/components/home/PeopletApp";
import ProcessSection from "@/components/home/ProcessSection";
import ExperimentsSection from "@/components/home/VisionSection";
import Head from "next/head"; // ✅ koristimo next/head za ručni SEO
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        {/* ✅ Basic SEO */}
        <title>Peoplet Studio | Web Design, Branding & Data Consulting</title>
        <meta
          name="description"
          content="Peoplet Studio builds intelligent digital experiences through web design, branding, data analytics, and network science consulting."
        />
        <meta
          name="keywords"
          content={[
            // English
            "Peoplet Studio", "web design", "web development", "web applications", "creative agency", "digital studio",
            "graphic design", "branding", "brand identity", "logo design", "UX design", "UI design",
            "user experience", "user interface", "network science", "data analytics", "data analysis",
            "data consulting", "digital consulting", "AI design", "creative technology", "data visualization",
            "social network analysis", "digital transformation", "business intelligence", "digital product design",
            "interactive design", "mobile app design", "front-end development", "Next.js development",
            "creative web solutions", "responsive design", "SEO optimization", "SEO strategy", "content design",
            "modern websites", "portfolio design", "startup branding", "creative branding", "marketing strategy",
            "data-driven design", "AI-driven branding", "digital experiences", "intelligent design", "creative process",
            "interactive studio", "creative data solutions",
            // Croatian
            "Peoplet Studio", "web dizajn", "izrada web stranica", "web razvoj", "digitalna agencija", "dizajn agencija",
            "grafički dizajn", "brendiranje", "izrada logotipa", "logotip dizajn", "identitet brenda", "UX dizajn",
            "UI dizajn", "korisničko iskustvo", "korisničko sučelje", "digitalni studio", "mrežna znanost",
            "analiza podataka", "analitika podataka", "podatkovni konzulting", "podatkovno savjetovanje", "digitalni konzulting",
            "poslovna inteligencija", "digitalna transformacija", "dizajn proizvoda", "mobilne aplikacije",
            "izrada mobilnih aplikacija", "razvoj web aplikacija", "Next.js razvoj", "vizualni identitet", "SEO optimizacija",
            "digitalni marketing", "kreativni studio", "kreativna agencija", "moderna web stranica", "minimalistički dizajn",
            "interaktivni dizajn", "dizajn proces", "strategija brendiranja", "AI dizajn", "umjetna inteligencija u dizajnu",
            "analitika", "web aplikacije", "dizajn sustavi", "kreativne digitalne usluge", "dizajn portfelja", "kreativni dizajn"
          ].join(", ")}
        />
        <meta name="author" content="Peoplet Studio" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.peoplet.com" />

        {/* ✅ OpenGraph / Social */}
        <meta property="og:title" content="Peoplet Studio | Creative Digital & Data Agency" />
        <meta
          property="og:description"
          content="Connecting creativity, technology, and data for smarter digital solutions. Web design, branding, and data analytics by Peoplet Studio."
        />
        <meta property="og:url" content="https://www.peoplet.com" />
        <meta property="og:site_name" content="Peoplet Studio" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="https://www.peoplet.com/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Peoplet Studio - Creative Digital & Data Agency"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Peoplet Studio | Web Design & Data Analytics"
        />
        <meta
          name="twitter:description"
          content="Creative studio focused on web design, branding, and network science consulting."
        />
        <meta name="twitter:image" content="https://www.peoplet.com/og-image.jpg" />
      </Head>

      {/* ✅ JSON-LD Structured Data */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Peoplet Studio",
            url: "https://www.peoplet.com",
            logo: "https://www.peoplet.com/logo.png",
            description:
              "Peoplet Studio is a creative digital agency specializing in web design, branding, and data consulting.",
            contactPoint: {
              "@type": "ContactPoint",
              email: "hello@peoplet.com",
              contactType: "customer support",
              availableLanguage: ["English", "Croatian"],
            },
            sameAs: [
              "https://www.linkedin.com/company/peoplet",
              "https://www.instagram.com/peoplet.io",
              "https://www.facebook.com/peoplet.io",
            ],
          }),
        }}
      />

      {/* ✅ Main content */}
      <main className="pt-2">
        <Hero />
        <About />
        <ScrollServices />
        <ExperimentsSection />
        <ProcessSection />
        <PeopletApp />
        <Contact />
      </main>
    </>
  );
}
