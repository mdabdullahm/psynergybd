import ClientSatisfaction from "@/components/testimonials/client-satisfaction";
import FeaturedTestimonials from "@/components/testimonials/featured-testimonials";
import ShareExperience from "@/components/testimonials/share-experience";
import SuccessStories from "@/components/testimonials/success-stories";
import TestimonialHero from "@/components/testimonials/testimonial-hero";
import WhyTrustUs from "@/components/testimonials/why-trust-us";

export default function TestimonialsPage() {
  return (
    <main>
      <TestimonialHero />
      <FeaturedTestimonials/>
      <SuccessStories/>
      <ClientSatisfaction/>
      <WhyTrustUs/>
      <ShareExperience/>
    </main>
  );
}