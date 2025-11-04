import ContactSection from "@/components/contact/ContactSection";
import Contact from "@/components/contact/Contact";

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
    <main>
      <ContactSection />
      <Contact />
    </main>
  );
}