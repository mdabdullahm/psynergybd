"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  ShieldAlert, 
  Users, 
  Baby, 
  Sparkles, 
  HeartPulse,
  Target,
  Zap
} from "lucide-react";

const Expertise = () => {
  const expertiseList = [
    {
      title: "Clinical Depression",
      desc: "Advanced therapeutic approaches for managing persistent sadness and loss of interest.",
      icon: HeartPulse,
      color: "text-red-500",
      bg: "bg-red-50"
    },
    {
      title: "Anxiety Disorders",
      desc: "Specialized care for generalized anxiety, panic attacks, and social phobias.",
      icon: ShieldAlert,
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      title: "Bipolar Disorder",
      desc: "Effective mood stabilization strategies and long-term management plans.",
      icon: Zap,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "ADHD & Child Psychiatry",
      desc: "Helping children and adolescents navigate developmental and behavioral challenges.",
      icon: Baby,
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      title: "Obsessive Compulsive (OCD)",
      desc: "Evidence-based CBT and ERP techniques to manage intrusive thoughts and compulsions.",
      icon: Target,
      color: "text-green-500",
      bg: "bg-green-50"
    },
    {
      title: "Trauma & PTSD",
      desc: "Compassionate trauma-informed care for recovery from past traumatic events.",
      icon: Sparkles,
      color: "text-pink-500",
      bg: "bg-pink-50"
    },
    {
      title: "Couples Therapy",
      desc: "Facilitating communication and emotional reconnection for healthier relationships.",
      icon: Users,
      color: "text-cyan-500",
      bg: "bg-cyan-50"
    },
    {
      title: "Neuropsychiatry",
      desc: "Expertise in the intersection of neurological conditions and mental health.",
      icon: Brain,
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Specializations</h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Areas of <span className="text-blue-600">Expertise</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Specialized mental health care focused on evidence-based treatments and a compassionate, patient-first philosophy.
            </p>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseList.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Footer for Section */}
        <div className="mt-16 p-8 rounded-[2rem] bg-primary text-center text-white relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <p className="relative z-10 text-lg font-medium">
            Not sure which service you need? 
            <button className="ml-4 text-white font-bold underline hover:text-blue-200 transition-colors">
              Schedule a Screening Session
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Expertise;