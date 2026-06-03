"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  PhoneCall, 
  UserCheck, 
  HeartPulse, 
  ArrowRight 
} from "lucide-react";

const AppointmentProcess = () => {
  const steps = [
    {
      title: "Submit Request",
      desc: "Fill out the online form with your details, preferred doctor, and suitable time.",
      icon: FileText,
      step: "01"
    },
    {
      title: "Confirmation",
      desc: "Our team will review your request and call or email you to confirm the final slot.",
      icon: PhoneCall,
      step: "02"
    },
    {
      title: "The Consultation",
      desc: "Meet your specialist either in-person or online for a thorough clinical assessment.",
      icon: UserCheck,
      step: "03"
    },
    {
      title: "Path to Healing",
      desc: "Receive your personalized treatment plan and begin your journey toward wellness.",
      icon: HeartPulse,
      step: "04"
    },
  ];

  return (
    <section className="py-20 bg-gray-50/50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none -z-10">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full border-8 border-primary"></div>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Workflow</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Your Journey to <span className="text-blue-600 font-medium italic">Recovery</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We&apos;ve simplified our booking and consultation process to ensure you get the support you need without any stress.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-200 -z-0"></div>

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group text-center z-10"
              >
                {/* Icon Container */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-[2rem] bg-white text-primary shadow-xl mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-gray-50">
                  <Icon size={36} />
                  {/* Step Number Circle */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center shadow-lg border-4 border-white">
                    {item.step}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed px-4">
                  {item.desc}
                </p>

                {/* Mobile/Tablet Arrow Indicator */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden mt-8 flex justify-center text-gray-300">
                    <div className="w-0.5 h-10 bg-gradient-to-b from-primary/20 to-transparent"></div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Informational Message */}
        <div className="mt-20 p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
               <HeartPulse size={24} />
            </div>
            <p className="text-gray-700 font-medium">
              Every step is designed to maintain your <span className="text-primary font-bold">privacy and comfort.</span>
            </p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:text-blue-600 transition-all group">
            Learn more about our methods
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default AppointmentProcess;