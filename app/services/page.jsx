import DataIntelligenceSection from "@/components/services/DataInteligence";
import ServicesSection from "@/components/services/ServicesComponent";
import ServicesProcessSection from "@/components/services/ServicesProcess";
import WhyWorkWithPeoplet from "@/components/services/WhyWorkWithPeoplet";

export const metadata = {
  title: "Services | Peoplet Lab",
};

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