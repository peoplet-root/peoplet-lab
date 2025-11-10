import ApproachSection from "@/components/about/Approach";
import TeamSection from "@/components/about/TeamSection";
import WhyPeoplet from "@/components/about/WhyPeoplet";

export const metadata = {
  title: "About Us | Peoplet Studio - Creative Digital & Data Agency",
  description:
    "Learn more about Peoplet Studio - a creative digital and data-driven agency blending design, technology, and network science to craft intelligent digital experiences.",
  keywords: [
    // English
    "Peoplet Studio", "about Peoplet", "about us", "creative agency", "digital studio",
    "design team", "data consulting agency", "data-driven design", "web design team",
    "branding experts", "network science", "data analytics", "creative company",
    "our team", "Peoplet Lab", "AI design", "digital transformation", "human-centered design",
    "innovation through data", "intelligent design agency", "creative culture",
    "interdisciplinary team", "creative process", "company values", "digital experience design",
    // Croatian
    "Peoplet Studio", "O nama", "Peoplet Lab", "digitalna agencija", "kreativna agencija",
    "tim dizajnera", "analiza podataka", "mrežna znanost", "podaci i dizajn",
    "data-driven dizajn", "inovativna agencija", "web dizajn tim", "branding stručnjaci",
    "digitalni studio", "o Peopletu", "kreativna kultura", "kreativni tim", 
    "inteligentni dizajn", "umjetna inteligencija u dizajnu", "dizajn iskustva", "naša misija",
    "vrijednosti tvrtke", "Peoplet tim", "suradnja", "digitalna transformacija"
  ],
  openGraph: {
    title: "About Peoplet Studio | Creative Digital & Data Agency",
    description:
      "We are Peoplet Studio — a creative team combining design, technology, and network science to create meaningful digital experiences.",
    url: "https://www.peoplet.com/about",
    siteName: "Peoplet Studio",
    images: [
      {
        url: "https://www.peoplet.com/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Peoplet Studio Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Peoplet Studio | Creative Digital Agency",
    description:
      "Get to know Peoplet Studio — a creative digital and data agency connecting design, science, and technology.",
    images: ["https://www.peoplet.com/og-about.jpg"],
  },
  alternates: {
    canonical: "https://www.peoplet.com/about",
    languages: {
      "en-US": "https://www.peoplet.com/about",
      "hr-HR": "https://www.peoplet.com/hr/o-nama",
    },
  },
};

export const dynamic = "force-static"; // ensures static SEO rendering

export default function AboutPage() {
  return (
    <main>
      <WhyPeoplet />
      <TeamSection />
      <ApproachSection />
    </main>
  );
}
