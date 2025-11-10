import BentoGrid from "@/components/products/BentoGrid";
import ProductsSection from "@/components/products/ProductsSection";

export const metadata = {
  title: "Products | Peoplet Studio – Digital Tools & Data Solutions",
  description:
    "Discover Peoplet Studio’s digital products and data-driven tools designed to enhance creativity, performance, and decision-making through intelligent design and analytics.",
  keywords: [
    // English keywords
    "Peoplet Studio", "Peoplet products", "digital products", "creative tools",
    "data analytics tools", "data visualization software", "web applications",
    "AI-driven tools", "creative software", "digital tools", "data solutions",
    "network science applications", "business intelligence", "analytics dashboards",
    "interactive apps", "creative digital products", "innovation tools",
    "Peoplet Lab", "Next.js applications", "design systems", "creative web solutions",
    "digital design software", "data design tools", "creative experiments",
    "AI in design", "data-driven innovation", "intelligent digital tools",
    "analytics products", "custom software solutions",
    // Croatian keywords
    "Peoplet Studio", "Peoplet proizvodi", "digitalni proizvodi", "digitalni alati",
    "analitički alati", "aplikacije", "web aplikacije", "AI alati", "umjetna inteligencija u dizajnu",
    "mrežna znanost", "poslovna inteligencija", "analitika podataka", "softver rješenja",
    "interaktivne aplikacije", "dizajn sustavi", "digitalni alati za poduzeća",
    "data-driven alati", "analitičke platforme", "vizualizacija podataka",
    "kreativni softver", "inovativni proizvodi", "digitalna rješenja", "kreativni alati",
    "Peoplet Lab proizvodi", "inteligentni alati", "umjetna inteligencija", "automatizacija podataka"
  ],
  openGraph: {
    title: "Peoplet Studio Products | Creative Digital & Data Tools",
    description:
      "Explore Peoplet Studio’s suite of digital products — combining creativity, analytics, and technology to empower your business decisions.",
    url: "https://www.peoplet.com/products",
    siteName: "Peoplet Studio",
    images: [
      {
        url: "https://www.peoplet.com/og-products.jpg",
        width: 1200,
        height: 630,
        alt: "Peoplet Studio Digital Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peoplet Studio | Digital Tools & Data Analytics Products",
    description:
      "Innovative digital and analytics products by Peoplet Studio — merging creativity, data, and design.",
    images: ["https://www.peoplet.com/og-products.jpg"],
  },
  alternates: {
    canonical: "https://www.peoplet.com/products",
    languages: {
      "en-US": "https://www.peoplet.com/products",
      "hr-HR": "https://www.peoplet.com/hr/proizvodi",
    },
  },
};

export const dynamic = "force-static"; // ensures static SEO-friendly rendering

export default function ProductsPage() {
  return (
    <main>
      <ProductsSection />
      <BentoGrid />
    </main>
  );
}
