"use client";

import dynamic from "next/dynamic";

// 🔹 Dinamički import komponente s isključenim SSR-om
const ContactSectionInner = dynamic(() => import("./ContactSectionInner"), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] flex items-center justify-center text-neutral-500">
      Loading contact section...
    </div>
  ),
});

export default function ContactSection() {
  return <ContactSectionInner />;
}
