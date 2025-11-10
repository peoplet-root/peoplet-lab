import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import FloatingSquares from "@/components/util/FloatingSquares";
import Script from "next/script"; // ✅ OVAJ IMPORT JE KLJUČAN!

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Peoplet Studio | Creative Web Design & Data Consulting",
  description:
    "Peoplet Studio is a creative digital agency specializing in web design, branding, data analytics, and network science consulting.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ JSON-LD Schema (Organization) */}
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
              sameAs: [
                "https://www.linkedin.com/company/peoplet/",
                "https://www.instagram.com/peoplet.io",
              ],
              description:
                "Peoplet Studio is a creative digital agency specializing in web development, branding, data analytics, and network science consulting.",
            }),
          }}
        />

        {/* ✅ JSON-LD Schema (Website) */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Peoplet Studio",
              url: "https://www.peoplet.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.peoplet.com/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>

      <body
        className={`${poppins.className} relative dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 antialiased pt-24`}
      >
        <FloatingSquares />
        <Navbar />
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
