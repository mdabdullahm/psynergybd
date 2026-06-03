"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  UserCheck, 
  Leaf, 
  Microscope,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const WhyTrustUs = () => {
  const trustPoints = [
    {
      title: "Board-Certified Experts",
      desc: "Our team consists of internationally trained psychiatrists and licensed clinical psychologists with years of experience.",
      icon: UserCheck,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Science-Backed Therapy",
      desc: "We use only evidence-based methodologies like CBT and DBT, ensuring that your treatment is based on proven clinical research.",
      icon: Microscope,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Strict Confidentiality",
      desc: "Your privacy is our highest priority. All sessions and medical records are handled with the strictest legal and ethical standards.",
      icon: ShieldCheck,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Compassionate Environment",
      desc: "We provide a safe, non-judgmental space where you can express yourself freely and receive the empathy you deserve.",
      icon: Leaf,
      color: "bg-teal-50 text-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50/30">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">The Foundation of Care</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Building a Relationship <br /> 
              <span className="text-blue-600">Based on Trust</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Trust is the most vital component of mental health recovery. At PsynergyBD, we don&apos;t just see you as a patient—we see you as a partner in your own healing journey. Our commitment to excellence and ethics is why thousands of individuals choose us.
            </p>
            
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-blue-900/20 transition-all active:scale-95"
            >
              Meet Our Specialists
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          {/* Right Side: Trust Points Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${point.color}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {point.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;