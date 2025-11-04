export const metadata = {
  title: "About | Peoplet Lab",
};

import ApproachSection from "@/components/about/Approach";
import TeamSection from "@/components/about/TeamSection";
import WhyPeoplet from "@/components/about/WhyPeoplet";

export default function AboutPage() {
  return (
    <main>
      <WhyPeoplet />
      <TeamSection /> 
      <ApproachSection />
    </main>
  );
}