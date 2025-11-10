import DataIntelligenceSection from "@/components/services/DataInteligence";
import ServicesSection from "@/components/services/ServicesComponent";
import ServicesProcessSection from "@/components/services/ServicesProcess";
import WhyWorkWithPeoplet from "@/components/services/WhyWorkWithPeoplet";

export const metadata = {
  title: "Services | Peoplet Studio – Web Design, Branding & Data Analytics",
  description:
    "Explore Peoplet Studio’s creative services — from web design and branding to data analytics and network science consulting. We blend creativity, strategy, and science to build smarter digital experiences.",
  keywords: [
    // English keywords
    "Peoplet Studio", "Peoplet services", "creative services", "web design services",
    "branding services", "graphic design services", "data analytics consulting",
    "network science consulting", "digital transformation", "UI design", "UX design",
    "web development services", "creative strategy", "design thinking", "data-driven strategy",
    "business intelligence", "data visualization", "data science", "digital consulting",
    "Peoplet Lab", "AI design", "creative technology", "front-end development",
    "creative agency services", "branding agency", "web design company",
    "digital innovation", "AI-driven analytics", "data storytelling",
    // Croatian keywords
    "Peoplet Studio", "usluge Peoplet", "web dizajn usluge", "brendiranje", "grafički dizajn",
    "analiza podataka", "konzalting", "kreativni konzalting", "mrežna znanost",
    "kreativni studio", "dizajn usluge", "izrada web stranica", "UI dizajn", "UX dizajn",
    "web razvoj", "dizajn strategija", "poslovna inteligencija", "digitalna transformacija",
    "analitika podataka", "data-driven dizajn", "Peoplet Lab usluge", "AI dizajn", "umjetna inteligencija",
    "vizualizacija podataka", "digitalni dizajn", "kreativne usluge", "dizajn i razvoj",
    "branding agencija", "strategija brendiranja", "digitalni marketing"
  ],
  openGraph: {
    title: "Peoplet Studio Services | Web Design, Branding & Data Consulting",
    description:
      "We design, build, and analyze — offering web design, branding, data analytics, and network science consulting for innovative digital brands.",
    url: "https://www.peoplet.com/services",
    siteName: "Peoplet Studio",
    images: [
      {
        url: "https://www.peoplet.com/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Peoplet Studio Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peoplet Studio | Web Design, Branding & Data Analytics Services",
    description:
      "Creative and data-driven digital services by Peoplet Studio — web design, branding, data analytics, and consulting.",
    images: ["https://www.peoplet.com/og-services.jpg"],
  },
  alternates: {
    canonical: "https://www.peoplet.com/services",
    languages: {
      "en-US": "https://www.peoplet.com/services",
      "hr-HR": "https://www.peoplet.com/hr/usluge",
    },
  },
};

export const dynamic = "force-static"; // ensures static SEO rendering

export default function ServicesPage() {
  return (
    <main>
      <ServicesSection />
      <DataIntelligenceSection />
      <WhyWorkWithPeoplet />
      <ServicesProcessSection />
    </main>
  );
}
