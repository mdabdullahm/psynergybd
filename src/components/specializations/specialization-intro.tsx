"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Microscope, HeartHandshake } from "lucide-react";

const SpecializationIntro = () => {
  const features = [
    {
      title: "Evidence-Based Diagnosis",
      desc: "We use globally recognized clinical assessment tools to identify the root cause of your mental health challenges.",
      icon: Microscope,
    },
    {
      title: "Tailored Treatment Plans",
      desc: "Every mind is unique. Our specialists create personalized roadmaps that combine therapy and medication specifically for you.",
      icon: BrainCircuit,
    },
    {
      title: "Empathetic Support",
      desc: "Beyond clinical expertise, we provide a safe and non-judgmental environment where your voice is always heard.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side: Large Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
              Our Core Philosophy
            </h4>
            <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight">
              Why Specialized Mental <br /> 
              <span className="text-blue-600 font-medium italic">Health Care Matters</span>
            </h2>
          </motion.div>

          {/* Right Side: Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              Mental health issues are often complex and interconnected. A general approach isn&apos;t always enough. At <span className="font-bold text-primary">PsynergyBD</span>, our specialized approach ensures that you receive care from experts who have dedicated their careers to specific fields of psychiatry and psychology.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SpecializationIntro;