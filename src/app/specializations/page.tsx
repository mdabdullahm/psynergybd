import Specialists from "@/components/home/specialists";
import ConditionsWeTreat from "@/components/specializations/conditions-we-treat";
import EarlySupport from "@/components/specializations/early-support";
import MainSpecializations from "@/components/specializations/main-specializations";
import SpecializationHero from "@/components/specializations/specialization-hero";
import SpecializationIntro from "@/components/specializations/specialization-intro";
import TreatmentApproaches from "@/components/specializations/treatment-approaches";

export default function SpecializationsPage() {
  return (
    <main>
      <SpecializationHero />
      <SpecializationIntro/>
      <MainSpecializations/>
      <ConditionsWeTreat/>
      <TreatmentApproaches/>
      <Specialists/>
      <EarlySupport/>
    </main>
  );
}