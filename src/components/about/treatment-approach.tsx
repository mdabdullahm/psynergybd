"use client";

import { motion } from "framer-motion";
import { 
  HeartHandshake, 
  Stethoscope, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

const TreatmentApproach = () => {
  const steps = [
    {
      title: "In-depth Assessment",
      desc: "We start by understanding your unique history, symptoms, and life goals through thorough psychiatric evaluation.",
      icon: Search,
    },
    {
      title: "Collaborative Planning",
      desc: "Together, we create a personalized treatment roadmap that fits your lifestyle and mental health objectives.",
      icon: HeartHandshake,
    },
    {
      title: "Evidence-Based Therapy",
      desc: "Utilizing scientifically proven methods like CBT, DBT, and modern psychiatry to ensure effective healing.",
      icon: Stethoscope,
    },
    {
      title: "Sustainable Wellness",
      desc: "We focus on long-term resilience, providing tools to maintain your mental peace even after treatment ends.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-20 bg-gray-50/50 overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div>
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Methodology</h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              A Compassionate <br /> <span className="text-blue-600">Approach to Healing</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Dr. Sarah Johnson follows an integrative approach to mental health, combining biological psychiatry with psychological therapy. Every person is different, and so is our way of helping them.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Focus on root causes, not just symptoms",
                "Non-judgmental and safe environment",
                "Regular progress monitoring",
                "Family involvement when necessary"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-green-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <button className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-blue-900/20 transition-all">
              Learn More About Our Method
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Right Side: Process Steps */}
          <div className="relative">
            {/* Background decorative line */}
            <div className="absolute top-0 left-10 w-0.5 h-full bg-blue-100 hidden md:block"></div>

            <div className="space-y-12 relative z-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 group"
                  >
                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon size={28} />
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-blue-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TreatmentApproach;