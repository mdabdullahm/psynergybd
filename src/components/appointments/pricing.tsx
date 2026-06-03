"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, CreditCard, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
  const plans = [
    {
      name: "Online Consultation",
      price: "$40",
      duration: "45 Minutes",
      desc: "Perfect for initial guidance and remote support from anywhere.",
      features: ["Video/Audio Call", "Digital Prescription", "Confidential Session", "Follow-up Reminders"],
      isPopular: false,
    },
    {
      name: "Initial Assessment",
      price: "$70",
      duration: "60-90 Minutes",
      desc: "A deep-dive evaluation to understand your history and create a plan.",
      features: ["Full Clinical History", "Comprehensive Diagnosis", "In-person/Online", "Personalized Roadmap", "Priority Support"],
      isPopular: true,
    },
    {
      name: "Follow-up Session",
      price: "$50",
      duration: "45 Minutes",
      desc: "Regular sessions to monitor progress and adjust treatment.",
      features: ["Progress Tracking", "Medication Review", "Therapy Sessions", "Ongoing Guidance"],
      isPopular: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Investment in Health</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Transparent <span className="text-blue-600">Session Fees</span>
          </h2>
          <p className="text-gray-600 text-lg">
            No hidden costs. We provide professional psychiatric and psychological care with simple, upfront pricing.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-10 rounded-[3rem] border transition-all duration-500 flex flex-col ${
                plan.isPopular 
                ? "bg-primary text-white shadow-2xl shadow-blue-900/30 border-primary scale-105 z-10" 
                : "bg-gray-50 text-primary border-gray-100 hover:bg-white hover:shadow-xl"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Most Recommended
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-4 ${plan.isPopular ? "text-white" : "text-primary"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className={`text-sm font-medium ${plan.isPopular ? "text-blue-200" : "text-gray-400"}`}>
                    / session
                  </span>
                </div>
                <div className={`flex items-center gap-2 mt-4 text-xs font-bold uppercase ${plan.isPopular ? "text-blue-200" : "text-blue-600"}`}>
                  <Clock size={14} />
                  {plan.duration}
                </div>
              </div>

              <p className={`text-sm leading-relaxed mb-8 ${plan.isPopular ? "text-blue-100/80" : "text-gray-500"}`}>
                {plan.desc}
              </p>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 size={18} className={plan.isPopular ? "text-blue-300" : "text-green-500"} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/appointments"
                className={`w-full py-4 rounded-2xl font-bold text-center transition-all flex items-center justify-center gap-2 ${
                  plan.isPopular 
                  ? "bg-white text-primary hover:bg-blue-50" 
                  : "bg-primary text-white hover:shadow-lg"
                }`}
              >
                Book Now
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Payment Methods Info */}
        <div className="mt-20 p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-xl bg-white text-primary flex items-center justify-center shadow-sm">
                <CreditCard size={24} />
             </div>
             <div>
                <p className="text-primary font-bold">Secure Payments</p>
                <p className="text-gray-500 text-xs uppercase tracking-tight">We accept all major cards & mobile banking</p>
             </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 opacity-40 grayscale">
             {/* আপনি এখানে পেমেন্ট গেটওয়ের ডামি টেক্সট বা লোগো দিতে পারেন */}
             <span className="font-black text-xl tracking-tighter italic">VISA</span>
             <span className="font-black text-xl tracking-tighter italic">MasterCard</span>
             <span className="font-black text-xl tracking-tighter italic">bKash</span>
             <span className="font-black text-xl tracking-tighter italic">Nagad</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;