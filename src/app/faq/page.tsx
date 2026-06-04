"use client";

import ContactInfo from "@/components/contact/contact-info";
import FAQAccordion from "@/components/faq/faq-accordion";
import FAQCategories from "@/components/faq/faq-categories";
import FAQHero from "@/components/faq/faq-hero";
import HelpfulResources from "@/components/faq/helpful-resources";
import { useState } from "react";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <main>
      <FAQHero searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <FAQAccordion searchQuery={searchQuery}/>
      <FAQCategories/>
      <HelpfulResources/>
      <ContactInfo/>
    </main>
  );
}