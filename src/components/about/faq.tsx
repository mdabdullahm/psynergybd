"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How can I book an appointment?",
      answer: "You can easily book an appointment by clicking the 'Book Appointment' button on our website or by calling our support line at +880 1234 567 890."
    },
    {
      question: "Do you offer online consultations?",
      answer: "Yes, we provide secure and confidential online video consultations for patients who are unable to visit our clinic in person."
    },
    {
      question: "How long does a typical session last?",
      answer: "A standard psychiatric assessment or counseling session usually lasts between 45 to 60 minutes, depending on the complexity of the case."
    },
    {
      question: "Is my personal information kept confidential?",
      answer: "Absolutely. We follow strict international privacy standards. All your medical records and conversation details are kept 100% confidential."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring any previous medical records, current medications, and a list of symptoms or questions you would like to discuss with the doctor."
    },
    {
      question: "Do you provide emergency mental health services?",
      answer: "While we provide comprehensive care, for immediate life-threatening emergencies, we recommend visiting the nearest hospital emergency department."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50/50">.
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-bold mb-4">
            <HelpCircle size={18} />
            Common Questions
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to the most common questions about our services and treatments.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-2xl border transition-all duration-300 ${
                activeIndex === index 
                ? "border-primary bg-white shadow-xl shadow-blue-900/5" 
                : "border-gray-200 bg-white hover:border-blue-300"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 md:px-8 text-left"
              >
                <span className={`text-lg font-bold transition-colors ${
                  activeIndex === index ? "text-primary" : "text-gray-700"
                }`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 ml-4 p-1 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-primary text-white rotate-180" : "bg-gray-100 text-gray-500"
                }`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 md:px-8 md:pb-8 text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Extra Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Still have questions?  
            <button className="ml-2 text-primary font-bold hover:underline">
              Contact our support team
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};

export default FAQ;