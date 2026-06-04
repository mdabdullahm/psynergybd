"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  Linkedin, 
  Facebook, 
  Instagram, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";

const ContactInfo = () => {
  const contactCards = [
    {
      title: "Our Clinic",
      desc: "123 Wellness Tower, Level 4, Dhanmondi, Dhaka - 1209",
      icon: MapPin,
      color: "blue",
      action: "Get Directions"
    },
    {
      title: "Phone Number",
      desc: "+880 1234 567 890 (General)\n+880 1987 654 321 (Emergency)",
      icon: PhoneCall,
      color: "purple",
      action: "Call Now"
    },
    {
      title: "Email Support",
      desc: "support@psynergybd.com\ninquiry@psynergybd.com",
      icon: Mail,
      color: "green",
      action: "Send Email"
    },
    {
      title: "Working Hours",
      desc: "Sat - Thu: 10:00 AM - 08:00 PM\nFriday: Emergency Online Only",
      icon: Clock,
      color: "orange",
      action: "Full Schedule"
    }
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Ways to <span className="text-blue-600">Connect</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the most convenient way to reach out. Our team is dedicated to providing you with the support you need.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                  <Icon size={30} />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 whitespace-pre-line">
                  {card.desc}
                </p>

                <div className="mt-auto">
                   <button className="text-xs font-black uppercase tracking-widest text-blue-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                      {card.action}
                      <ArrowRight size={14} />
                   </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Social Media & Trust Bar */}
        <div className="p-10 rounded-[3rem] bg-white border border-gray-100 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                <ShieldCheck size={24} />
             </div>
             <div>
                <p className="text-primary font-bold">Secure Communication</p>
                <p className="text-gray-400 text-xs font-medium">All interactions are 100% confidential and encrypted.</p>
             </div>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest hidden sm:block">Follow Us:</span>
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" }
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href}
                  className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;