"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Microscope, 
  Handshake, 
  LineChart, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

const TreatmentApproaches = () => {
  const approaches = [
    {
      title: "Precision Diagnostics",
      desc: "Using advanced psychiatric screening tools and clinical data to pinpoint the exact nature of your condition.",
      icon: Microscope,
      benefit: "Accuracy in Diagnosis"
    },
    {
      title: "Targeted Psychotherapy",
      desc: "Condition-specific therapies like CBT for Depression or ERP for OCD, delivered by certified specialists.",
      icon: Zap,
      benefit: "Faster Recovery"
    },
    {
      title: "Medication Optimization",
      desc: "Expert pharmacological management focusing on minimal dosage for maximum efficacy and fewer side effects.",
      icon: ShieldCheck,
      benefit: "Safe Management"
    },
    {
      title: "Progress Monitoring",
      desc: "Regular clinical reviews and data-driven assessments to track your healing journey and adjust treatment plans.",
      icon: LineChart,
      benefit: "Measurable Results"
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
              Our Methodology
            </h4>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Advanced Approaches for <br /> 
              <span className="text-blue-600 font-medium italic">Complex Challenges</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Treating specialized conditions requires more than just general counseling. We integrate the latest psychiatric innovations with human-centric care to ensure you get the most effective treatment possible.
            </p>
            <div className="flex items-center gap-3 p-5 rounded-2xl bg-blue-50 border border-blue-100">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                <Handshake size={24} />
              </div>
              <div>
                <p className="text-primary font-bold">Collaborative Care Model</p>
                <p className="text-gray-500 text-xs">Our experts work together for your recovery.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Approaches Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {approaches.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase text-blue-600 tracking-wider">
                      {item.benefit}
                    </span>
                    <ArrowRight size={14} className="text-gray-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TreatmentApproaches;