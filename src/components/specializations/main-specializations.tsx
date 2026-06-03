"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Brain, 
  ShieldAlert, 
  Smile, 
  Zap, 
  Baby, 
  Users, 
  Search, 
  HeartPulse, 
  ArrowRight 
} from "lucide-react";

const MainSpecializations = () => {
  const specs = [
    {
      title: "Clinical Depression",
      desc: "Advanced therapeutic interventions for major depressive disorders and persistent low mood.",
      image: "https://i.ibb.co.com/1DRfZkr/it-can-be-healed.jpg", // Replace with ImgBB link
      icon: Smile,
      color: "blue"
    },
    {
      title: "Anxiety Disorders",
      desc: "Specialized care for generalized anxiety, panic attacks, and social phobias.",
      image: "https://i.ibb.co.com/SX8GxtQN/lonely-traumatised-frustrated-ill-woman-holding-head-hands-feeling-vulnerable.jpg",
      icon: ShieldAlert,
      color: "purple"
    },
    {
      title: "ADHD & Kids",
      desc: "Comprehensive diagnostic and management plans for children and adults with ADHD.",
      image: "https://i.ibb.co.com/9kr8nWs8/little-girl-doing-homework-feeling-bored-sad.jpg",
      icon: Baby,
      color: "orange"
    },
    {
      title: "Bipolar Disorder",
      desc: "Expert mood stabilization and long-term management for bipolar spectrum disorders.",
      image: "https://i.ibb.co.com/Df6H1GF1/portrait-man-suffering-from-schizophrenia.jpg",
      icon: Zap,
      color: "indigo"
    },
    {
      title: "OCD Management",
      desc: "Evidence-based CBT and ERP techniques to manage intrusive thoughts and compulsions.",
      image: "https://i.ibb.co.com/6RvPX9KS/man-sitting-living-room-home-guy-enjoying-studying-using-laptop-headset-meditation.jpg",
      icon: Search,
      color: "green"
    },
    {
      title: "Trauma & PTSD",
      desc: "Compassionate trauma-informed care focused on safety, processing, and recovery.",
      image: "https://i.ibb.co.com/TMH86x1P/young-soldier-affected-by-ptsd-effect.jpg",
      icon: HeartPulse,
      color: "red"
    },
    {
      title: "Schizophrenia",
      desc: "Specialized psychiatric care and rehabilitation for complex psychotic disorders.",
      image: "https://i.ibb.co.com/3YTtLtDx/18915859.jpg",
      icon: Brain,
      color: "cyan"
    },
    {
      title: "Couple Therapy",
      desc: "Conflict resolution and emotional rebuilding for healthier, stronger relationships.",
      image: "https://i.ibb.co.com/5hx6jB6N/happy-smiling-young-couple-holding-hands-consulting-psychologist-planning-wedding.jpg",
      icon: Users,
      color: "pink"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Core Expertise</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Conditions We <span className="text-blue-600">Treat</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our clinic provides targeted and expert care for a wide range of psychological and psychiatric conditions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative flex flex-col bg-gray-50 rounded-[2.5rem] overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-blue-50"
              >
                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Floating Icon Overlay */}
                  <div className="absolute -bottom-2 left-8 w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shadow-xl border-4 border-white group-hover:rotate-12 transition-transform">
                    <Icon size={20} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 pt-10 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {item.desc}
                  </p>
                  
                  <Link 
                    href="/appointments"
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
                  >
                    Get Treatment
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Action */}
        <div className="mt-20 text-center">
          <div className="p-10 rounded-[3rem] bg-primary text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 to-transparent"></div>
             <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Don&apos;t see your condition listed?</h3>
             <p className="text-blue-100 mb-8 max-w-xl mx-auto relative z-10 text-sm md:text-base">
               Mental health is vast. If you&apos;re experiencing any psychological distress not mentioned above, reach out to us for a screening session.
             </p>
             <Link
               href="/contact"
               className="relative z-10 inline-block bg-white text-primary px-10 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-xl"
             >
               Consult Our Team
             </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MainSpecializations;