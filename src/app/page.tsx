import AboutClinic from "@/components/home/about-clinic";
import Hero from "@/components/home/hero";
import HowItWorks from "@/components/home/how-it-works";
import Services from "@/components/home/services";
import Specialists from "@/components/home/specialists";
import SuccessStories from "@/components/home/success-stories";
import TrustedCare from "@/components/home/trusted-care";
import WhyChoose from "@/components/home/why-choose";

export default function Home() {
  return (
    <main>
      <Hero/>
      <TrustedCare/>
      <AboutClinic/>
      <Services/>
      <Specialists/>
      <WhyChoose/>
      <HowItWorks/>
      <SuccessStories/>
    </main>
  );
}
