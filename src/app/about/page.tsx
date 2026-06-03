import AboutHero from "@/components/about/about-hero";
import DoctorIntro from "@/components/about/doctor-intro";
import Experience from "@/components/about/experience";
import Expertise from "@/components/about/expertise";
import FAQ from "@/components/about/faq";
import Memberships from "@/components/about/memberships";
import Qualifications from "@/components/about/qualifications";
import RelatedSpecialists from "@/components/about/related-specialists";
import TreatmentApproach from "@/components/about/treatment-approach";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <DoctorIntro/>
      <Qualifications/>
      <Experience/>
      <Expertise/>
      <TreatmentApproach/>
      <Memberships/>
      <FAQ/>
      <RelatedSpecialists/>
    </main>
  );
}