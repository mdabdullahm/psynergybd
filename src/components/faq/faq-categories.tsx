"use client";

import { motion } from "framer-motion";
import { 
  Calendar, 
  CreditCard, 
  Stethoscope, 
  MonitorSmartphone, 
  ShieldCheck, 
  UserCircle2,
  ArrowRight
} from "lucide-react";

const FAQCategories = () => {
  const categories = [
    {
      title: "General Inquiry",
      desc: "Basic information about our clinic, location, and philosophy.",
      icon: UserCircle2,
      color: "blue"
    },
    {
      title: "Appointments",
      desc: "How to book, reschedule, or cancel your consultation slots.",
      icon: Calendar,
      color: "purple"
    },
    {
      title: "Treatments",
      desc: "Details about therapy types, duration, and clinical methods.",
      icon: Stethoscope,
      color: "green"
    },
    {
      title: "Online Sessions",
      desc: "Technical requirements and how teletherapy works at PsynergyBD.",
      icon: MonitorSmartphone,
      color: "indigo"
    },
    {
      title: "Billing & Fees",
      desc: "Pricing, payment methods, and insurance related information.",
      icon: CreditCard,
      color: "orange"
    },
    {
      title: "Privacy & Security",
      desc: "How we protect your data and maintain 100% confidentiality.",
      icon: ShieldCheck,
      color: "red"
    },
  ];

  return (
    <section className="py-10 bg-gray-50/50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Browse by <span className="text-blue-600">Category</span>
          </h2>
          <p className="text-gray-500 text-sm">
            Select a topic to find specific answers related to your concerns.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  {/* Icon Box */}
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-gray-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon size={32} />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-blue-600 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4">
                      {cat.desc}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore Topics
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQCategories;