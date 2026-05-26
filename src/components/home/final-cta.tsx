"use client";

import Link from "next/link";
import { CalendarCheck, PhoneCall, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-full mx-auto">
        <div className="relative bg-primary rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/40">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          <div className="relative z-10 px-8 py-16 md:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Ready to Start Your Journey <br className="hidden md:block" /> 
                to Better Mental Health?
              </h2>
              <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Take the first step towards a happier and more balanced life. Our specialists are here to support you every step of the way.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                {/* Primary Action */}
                <Link
                  href="/appointments"
                  className="w-full sm:w-auto bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-1 active:scale-95"
                >
                  <CalendarCheck size={22} />
                  Book Appointment Now
                </Link>

                {/* Secondary Action */}
                <Link
                  href="/contact"
                  className="w-full sm:w-auto bg-primary border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/10 transition-all group"
                >
                  <PhoneCall size={22} />
                  Contact Support
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Trust Badge */}
              <div className="mt-12 flex items-center justify-center gap-2 text-blue-200/60 text-sm font-medium tracking-wide uppercase">
                <div className="h-px w-8 bg-blue-200/20"></div>
                100% Confidential & Professional Care
                <div className="h-px w-8 bg-blue-200/20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;