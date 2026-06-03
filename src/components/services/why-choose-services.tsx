"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  UserCheck, 
  Laptop, 
  Clock, 
  Heart, 
  Coins 
} from "lucide-react";

const WhyChooseServices = () => {
  const reasons = [
    {
      title: "Expert Specialists",
      desc: "Our team consists of board-certified psychiatrists with global experience.",
      icon: UserCheck,
    },
    {
      title: "100% Confidentiality",
      desc: "Your privacy is our priority. We maintain strict medical record security.",
      icon: ShieldCheck,
    },
    {
      title: "Online Consultations",
      desc: "Get expert advice from the comfort of your home via secure video calls.",
      icon: Laptop,
    },
    {
      title: "Compassionate Care",
      desc: "We treat every patient with empathy, ensuring a non-judgmental environment.",
      icon: Heart,
    },
    {
      title: "Flexible Scheduling",
      desc: "Book your sessions at a time that fits your busy lifestyle easily.",
      icon: Clock,
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden costs. We provide affordable and clear pricing for all services.",
      icon: Coins,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">The Difference</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Why Choose Our <br /> <span className="text-blue-600">Mental Health Services</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We are dedicated to providing the highest quality of psychological care through a combination of expertise and empathy.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  {/* Icon Box */}
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-white text-primary shadow-sm flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon size={28} />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Support Badge */}
        <div className="mt-20 flex justify-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-6 px-8 py-4 rounded-3xl bg-blue-50/50 border border-blue-100 text-primary font-bold text-center">
             <p>Need urgent help?</p>
             <div className="h-4 w-px bg-blue-200 hidden md:block"></div>
             <a href="tel:+8801234567890" className="text-blue-600 hover:underline flex items-center gap-2">
               Call our support line: +880 1234 567 890
             </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseServices;