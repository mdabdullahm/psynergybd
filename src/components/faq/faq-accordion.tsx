"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircleQuestion, SearchX } from "lucide-react";

interface FAQAccordionProps {
  searchQuery: string;
}

const FAQAccordion = ({ searchQuery }: FAQAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData = [
    {
      category: "General",
      question: "What is PsynergyBD and what services do you provide?",
      answer: "PsynergyBD is a specialized mental health clinic in Bangladesh. We provide psychiatric evaluations, psychotherapy (CBT, DBT), child psychiatry, and family counseling both in-person and online."
    },
    {
      category: "Appointments",
      question: "How do I book an appointment with a specialist?",
      answer: "You can book an appointment directly through our 'Appointments' page or by calling our hotline at +880 1234 567 890."
    },
    {
      category: "Online Sessions",
      question: "How does the online video consultation work?",
      answer: "Once confirmed, you will receive a secure video link via email/WhatsApp. Simply click the link at your scheduled time to start your private session."
    },
    {
      category: "Privacy",
      question: "Is my personal data and conversation kept confidential?",
      answer: "Yes, 100%. We follow international ethical standards. Your medical records and sessions are strictly between you and your healthcare provider."
    },
    {
      category: "Payments",
      question: "What are the session fees and payment methods?",
      answer: "Initial assessments start from $70. We accept all major credit cards, bKash, Nagad, and bank transfers."
    },
    {
      category: "Emergency",
      question: "Do you provide emergency psychiatric support?",
      answer: "For life-threatening emergencies, please visit the nearest hospital emergency department. Our helpline is for urgent emotional support."
    }
  ];

  // ফিল্টারিং লজিক: প্রশ্ন বা উত্তর এর মধ্যে সার্চ করা টেক্সট আছে কি না চেক করবে
  const filteredFaqs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-24 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-12 pb-4 border-b border-gray-100">
           <div className="flex items-center gap-3">
             <MessageCircleQuestion className="text-blue-600" size={28} />
             <h2 className="text-2xl md:text-3xl font-bold text-primary italic">
                {searchQuery ? "Search Results" : "General Questions"}
             </h2>
           </div>
           {searchQuery && (
             <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-bold">
                Found {filteredFaqs.length} results
             </span>
           )}
        </div>

        <div className="space-y-4 min-h-[300px]">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  layout
                  className={`rounded-[2rem] border transition-all duration-300 ${
                    isOpen 
                    ? "border-primary bg-white shadow-xl shadow-blue-900/5" 
                    : "border-gray-100 bg-gray-50/50"
                  }`}
                >
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-6 md:px-10 md:py-8 text-left focus:outline-none"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">
                        {faq.category}
                      </span>
                      <h3 className={`text-lg md:text-xl font-bold leading-tight ${
                        isOpen ? "text-primary" : "text-gray-700"
                      }`}>
                        {faq.question}
                      </h3>
                    </div>
                    
                    <div className={`shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "bg-primary text-white rotate-180" : "bg-white text-gray-400 border border-gray-100"
                    }`}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-8 md:px-10 md:pb-10 pt-2 border-t border-gray-50">
                          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            // যদি কিছু খুঁজে না পাওয়া যায়
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200"
            >
               <SearchX size={50} className="mx-auto text-gray-300 mb-4" />
               <h3 className="text-xl font-bold text-primary">No results found</h3>
               <p className="text-gray-500">Try searching for different keywords or categories.</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;