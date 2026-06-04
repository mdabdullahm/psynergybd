"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

const ContactMap = () => {
  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Visit Us</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
              Find Our <span className="text-blue-600">Location</span>
            </h2>
            <p className="text-gray-500">
              We are located in the heart of Dhanmondi, easily accessible from any part of Dhaka.
            </p>
          </div>
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-blue-900/20 transition-all group"
          >
            Open in Google Maps
            <ExternalLink size={18} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Map Container */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] w-full rounded-[3rem] overflow-hidden border-8 border-gray-50 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          >
            {/* Google Map Iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.195000000000!2d90.37!3d23.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbadafd15!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1625000000000!5m2!1sen!2sbd" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Floating Address Card (Desktop Only) */}
          <div className="absolute top-10 left-10 hidden lg:block max-w-sm">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center shadow-inner">
                  <MapPin size={24} />
                </div>
                <h4 className="text-xl font-bold text-primary">PsynergyBD Clinic</h4>
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-gray-500 text-sm leading-relaxed">
                  123 Wellness Tower, Level 4, <br />
                  Dhanmondi Road 27, Dhaka - 1209
                </p>
                <div className="flex items-center gap-2 text-green-600 font-bold text-xs">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  Clinic is open today
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all active:scale-95">
                <Navigation size={18} />
                Start Navigation
              </button>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactMap;