"use client";

import { motion } from "framer-motion";
import { FileDown, FileText, PhoneCall, ExternalLink, ShieldCheck } from "lucide-react";

const HelpfulResources = () => {
  const resources = [
    {
      title: "Anxiety Management Guide",
      desc: "A comprehensive PDF guide with daily exercises to manage stress and anxiety.",
      type: "PDF Document",
      size: "2.4 MB",
      icon: FileDown,
      action: "Download Guide"
    },
    {
      title: "Mental Health Self-Assessment",
      desc: "A preliminary screening tool to help you understand your emotional state.",
      type: "Interactive Tool",
      size: "Web Link",
      icon: FileText,
      action: "Start Assessment"
    },
    {
      title: "Emergency Crisis Contacts",
      desc: "List of national and international mental health emergency helpline numbers.",
      type: "Contact List",
      size: "PDF / Web",
      icon: PhoneCall,
      action: "View Contacts"
    },
    {
      title: "Patient Rights & Privacy",
      desc: "Detailed document on how we handle your data and your rights as a patient.",
      type: "Legal Info",
      size: "1.1 MB",
      icon: ShieldCheck,
      action: "Read Policy"
    }
  ];

  return (
    <section className="py-14 bg-gray-50/50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Extra Support</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Helpful <span className="text-blue-600 font-medium italic">Resources</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Beyond our FAQ, we have curated these resources to support you in your journey toward better mental health.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col"
              >
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-primary mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-grow">
                  {item.desc}
                </p>

                {/* Metadata */}
                <div className="flex items-center justify-between py-4 border-t border-gray-50 mb-6">
                   <div className="text-[10px] font-black uppercase text-gray-400">
                      {item.type}
                   </div>
                   <div className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {item.size}
                   </div>
                </div>

                {/* Action Button */}
                <button className="w-full py-4 rounded-2xl bg-gray-50 text-primary font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white transition-all">
                  {item.action}
                  <ExternalLink size={16} className="opacity-50" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 flex justify-center">
           <div className="inline-flex flex-col md:flex-row items-center gap-4 px-8 py-4 rounded-3xl bg-primary text-white shadow-xl">
              <span className="text-sm font-medium opacity-80 uppercase tracking-widest">More Resources on our Blog</span>
              <div className="hidden md:block w-px h-6 bg-white/20"></div>
              <button className="font-bold flex items-center gap-2 hover:text-blue-300 transition-colors">
                 Visit PsynergyBD Journal
                 <ExternalLink size={18} />
              </button>
           </div>
        </div>

      </div>
    </section>
  );
};

export default HelpfulResources;