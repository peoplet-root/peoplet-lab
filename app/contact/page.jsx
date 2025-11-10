import ContactSection from "@/components/contact/ContactSection";
import Contact from "@/components/contact/Contact";

export const metadata = {
  title: "Contact | Peoplet Studio - Get in Touch with Our Team",
  description:
    "Contact Peoplet Studio to collaborate on web design, branding, and data analytics projects. Let's connect and build intelligent digital experiences together.",
  keywords: [
    // English keywords
    "Peoplet Studio", "contact Peoplet", "get in touch", "work with Peoplet",
    "hire creative agency", "contact creative studio", "contact digital agency",
    "contact form", "collaborate on a project", "web design agency contact",
    "branding agency contact", "data analytics consulting", "network science consulting",
    "creative partnerships", "join Peoplet", "career in design", "contact Peoplet Studio",
    "Peoplet Lab", "talk to us", "email Peoplet Studio",
    // Croatian keywords
    "Peoplet Studio", "kontakt Peoplet", "kontaktirajte nas", "započnite suradnju",
    "rad s agencijom", "kontakt digitalna agencija", "kreativna agencija kontakt",
    "kontakt forma", "suradnja na projektu", "zaposli se u Peopletu",
    "karijera u dizajnu", "kontaktiraj Peoplet", "Peoplet Lab kontakt",
    "brendiranje kontakt", "analiza podataka konzulting", "dizajn agencija Hrvatska",
    "kontakt web dizajn", "umjetna inteligencija u dizajnu", "kontakt email Peoplet",
  ],
  openGraph: {
    title: "Contact Peoplet Studio | Creative Digital & Data Agency",
    description:
      "We’d love to hear from you. Reach out to Peoplet Studio to collaborate on creative, data-driven, and network science projects.",
    url: "https://www.peoplet.com/contact",
    siteName: "Peoplet Studio",
    images: [
      {
        url: "https://www.peoplet.com/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Peoplet Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Peoplet Studio | Let's Collaborate",
    description:
      "Get in touch with Peoplet Studio for creative web design, branding, and data analytics collaborations.",
    images: ["https://www.peoplet.com/og-contact.jpg"],
  },
  alternates: {
    canonical: "https://www.peoplet.com/contact",
    languages: {
      "en-US": "https://www.peoplet.com/contact",
      "hr-HR": "https://www.peoplet.com/hr/kontakt",
    },
  },
};

export const dynamic = "force-static"; // ensures static rendering for SEO

const contactOptions = [
  {
    title: "Collaborate on a project",
    description:
      "Share your brief or product challenge and we will assemble the right team to help.",
    email: "info@peoplet.io",
  },
];

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
      <Contact />
    </main>
  );
}
