import ContactForm from "@/components/contact/contact-form";
import ContactHero from "@/components/contact/contact-hero";
import ContactInfo from "@/components/contact/contact-info";
import ContactMap from "@/components/contact/contact-map";
import SocialMedia from "@/components/contact/social-media";
import WhyReachOut from "@/components/contact/why-reach-out";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo/>  
      <ContactForm/>    
      <ContactMap/>
      <SocialMedia/>
      <WhyReachOut/>
    </main>
  );
}