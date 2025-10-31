export const metadata = {
  title: "About | Peoplet Lab",
};

import TeamSection from "@/components/team/TeamSection";
import WhyPeoplet from "@/components/whypeoplet/WhyPeoplet";

export default function AboutPage() {
  return (
    <main>
      <WhyPeoplet />
      <TeamSection /> 
    </main>
  );
}