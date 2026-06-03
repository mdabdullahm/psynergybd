"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Heart, Sparkles } from "lucide-react";

const ServiceDetails = () => {
  const details = [
    {
      title: "Evidence-Based Approaches",
      desc: "All our treatments are backed by scientific research and global psychiatric standards to ensure the best possible outcome.",
      icon: ShieldCheck,
    },
    {
      title: "Patient-Centered Care",
      desc: "We prioritize your comfort and unique life experiences, creating a safe space where you can express yourself without judgment.",
      icon: Heart,
    },
    {
      title: "Holistic Recovery Plans",
      desc: "We don't just treat symptoms; we look at your lifestyle, diet, and environment to provide a truly comprehensive healing plan.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image with Stats */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-2 border-white"
            >
              <Image 
                src="https://i.ibb.co.com/27ZXMbFb/afro-american-man-suit-holding-documents-talking-female-boss.jpg" // Replace with ImgBB link
                alt="Professional Consultation"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </motion.div>
            
            {/* Trust Indicator Card */}
            <div className="absolute -bottom-8 -right-4 md:right-8 z-20 bg-primary text-white p-6 rounded-3xl shadow-xl max-w-[240px]">
              <p className="text-sm font-medium opacity-80 mb-1">Our Commitment</p>
              <h4 className="text-xl font-bold leading-tight">100% Secure & Confidential Sessions</h4>
            </div>

            {/* Decorative background shape */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full -z-10"></div>
          </div>

          {/* Right Side: Detailed Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Service Philosophy</h4>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                Why Our Specialized Care <br /> <span className="text-blue-600">Stands Out</span>
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                At PsynergyBD, we believe that mental health care should be accessible, professional, and deeply human. Our methodology is designed to empower you with the tools needed for long-term emotional resilience.
              </p>

              <div className="space-y-8">
                {details.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex gap-5 group">
                      <div className="shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Icon size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Check-list */}
              <div className="pt-10 grid grid-cols-2 gap-4 border-t border-gray-200 mt-10">
                {["Direct Specialist Access", "Custom Care Plans", "Digital Records", "Expert Guidance"].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700 font-bold text-xs uppercase tracking-tight">
                    <CheckCircle2 size={16} className="text-green-500" />
                    {text}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;