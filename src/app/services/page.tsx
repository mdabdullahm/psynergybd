import GetStarted from "@/components/services/get-started";
import MainServicesGrid from "@/components/services/main-services-grid";
import ServiceDetails from "@/components/services/service-details";
import ServicesHero from "@/components/services/services-hero";
import ServicesOverview from "@/components/services/services-overview";
import TreatmentMethods from "@/components/services/treatment-methods";
import WhyChooseServices from "@/components/services/why-choose-services";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesOverview/>
      <MainServicesGrid/>
      <ServiceDetails/>
      <TreatmentMethods/>
      <WhyChooseServices/>
      <GetStarted/>
    </main>
  );
}