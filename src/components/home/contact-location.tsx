"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const ContactLocation = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Contact Us</h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            We Are Here to <span className="text-blue-600">Help You</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Have questions or want to book a session? Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Side: Contact Details */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-primary text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
              
              <h3 className="text-2xl font-bold mb-8 relative z-10">Contact Info</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-white/20 rounded-xl flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-bold uppercase">Call Us</p>
                    <p className="text-lg font-medium">+880 1234 567 890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-white/20 rounded-xl flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-bold uppercase">Email Us</p>
                    <p className="text-lg font-medium">support@psynergybd.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-white/20 rounded-xl flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-bold uppercase">Visit Us</p>
                    <p className="text-lg font-medium">123 Wellness Tower, Dhanmondi, Dhaka</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-white/20 rounded-xl flex items-center justify-center">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-bold uppercase">Opening Hours</p>
                    <p className="text-lg font-medium">Sat - Thu: 10AM - 8PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-2 bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100">
            <form className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary ml-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <label className="text-sm font-bold text-primary ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help you?" 
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <label className="text-sm font-bold text-primary ml-1">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Type your message here..." 
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white resize-none"
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <button 
                  type="submit" 
                  className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-blue-900/30 transition-all active:scale-95"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Location Map Section */}
        <div className="mt-16 rounded-[2.5rem] overflow-hidden h-[400px] border-8 border-gray-50 shadow-inner grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.195000000000!2d90.37!3d23.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbadafd15!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1625000000000!5m2!1sen!2sbd" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default ContactLocation;