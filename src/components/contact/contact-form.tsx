"use client";

import { motion } from "framer-motion";
import { 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  Send, 
  ChevronDown,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [isSubmitted, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    // এখানে আপনার API logic যোগ করতে পারেন
  };

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content & Support Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Direct Message</h4>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                Tell Us How We Can <br /> <span className="text-blue-600 font-medium italic">Support You</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you have a question about our treatments or want to share your concerns, our compassionate team is ready to listen.
              </p>
            </div>

            <div className="space-y-4">
               {[
                 "100% HIPAA compliant and confidential",
                 "Response within 2-4 business hours",
                 "Direct connection with clinic specialists",
                 "No obligation initial inquiry"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="text-green-500" size={20} />
                    {item}
                 </div>
               ))}
            </div>

            {/* Privacy Shield Card */}
            <div className="p-8 rounded-[2.5rem] bg-primary text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                  <ShieldCheck size={120} />
               </div>
               <div className="relative z-10 flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                     <ShieldCheck className="text-blue-300" size={24} />
                  </div>
                  <div>
                     <h4 className="text-xl font-bold mb-2">Privacy First Policy</h4>
                     <p className="text-blue-100/70 text-sm leading-relaxed">
                       Your messages are encrypted and handled only by our authorized clinical staff. Your mental health journey is private with us.
                     </p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Right Side: The Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1 flex items-center gap-2">
                      <User size={16} /> Full Name
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter your name"
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1 flex items-center gap-2">
                      <Mail size={16} /> Email Address
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="yourname@mail.com"
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1 flex items-center gap-2">
                      <Phone size={16} /> Phone Number
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+880 1XXX XXXXXX"
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                  {/* Department Select */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1 flex items-center gap-2">
                      <MessageSquare size={16} /> Subject
                    </label>
                    <div className="relative">
                      <select className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                        <option>General Inquiry</option>
                        <option>Therapy Sessions</option>
                        <option>Medication Management</option>
                        <option>Partnership/Corporate</option>
                      </select>
                      <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary ml-1">How can we help you?</label>
                  <textarea 
                    rows={5}
                    required
                    placeholder="Type your message here..."
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-blue-900/30 transition-all active:scale-95 group"
                >
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-500 mb-10">Thank you for reaching out. One of our clinical coordinators will get back to you within 2-4 hours.</p>
                <button 
                  onClick={() => setIsSubscribed(false)}
                  className="text-primary font-bold underline"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;