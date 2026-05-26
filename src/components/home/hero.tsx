"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Star, Users } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  // ৪টি ইমেজের সোর্স (মেইন ইমেজের সমান সাইজে দেখাবে)
  const slidingImages = [
    "https://i.ibb.co.com/zhZPfm6r/vaibhav-vivian-3-HIro-Moyre8-unsplash.jpgg",
    "https://i.ibb.co.com/ZpBL9BZr/gaspar-uhas-j-Dm-MNZK-jo-unsplash.jpg",
    "https://i.ibb.co.com/Nd51KFKC/worried-doctor-looking-sad-patient.jpg",
    "https://i.ibb.co.com/ymF34Z1y/woman-crying-looking-doctor-after-unfavorable-news-hospital-waiting-area.jpg",
  ];

  return (
    <section className="relative bg-white pt-10 pb-20 lg:pt-14 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-left z-20 bg-white/80 backdrop-blur-sm lg:bg-transparent p-4 rounded-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-6">
              <ShieldCheck size={18} className="text-blue-600" />
              <span>Your Trusted Mental Health Partner</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold text-primary leading-[1.15] mb-6">
              Empower Your Mind <br />
              <span className="text-blue-600 font-medium italic">Restore Your Peace</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              At PsynergyBD, we provide professional psychiatric care and counseling to help you navigate lifes challenges. Your well-being is our ultimate priority.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/appointments" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all flex items-center gap-3 group">
                Book Appointment
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 rounded-2xl font-bold text-lg text-gray-700 hover:bg-gray-50 transition-all border border-gray-200"
              >
                Our Services
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-12 flex items-center gap-8 border-t border-gray-100 pt-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary flex items-center gap-1">10+ <Star size={18} className="fill-yellow-400 text-yellow-400" /></span>
                <span className="text-sm text-gray-500">Years Experience</span>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary flex items-center gap-1">5000+ <Users size={18} className="text-blue-500" /></span>
                <span className="text-sm text-gray-500">Happy Patients</span>
              </div>
            </div>
          </div>

          {/* Right Visual Element (ইমেজ সেকশন) */}
          <div className="relative h-[450px] lg:h-[600px] w-full flex justify-center items-center">
            
            {/* ১. স্লাইডিং ইমেজগুলো (এগুলো মেইন ইমেজের নিচ থেকে বের হবে) */}
            {slidingImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ x: 0, opacity: 0 }}
                animate={{ 
                  x: ["0%", "-120%"], 
                  opacity: [0, 0.4, 0], 
                }}
                transition={{
                  duration: 6, 
                  repeat: Infinity, 
                  delay: index * 1.5,
                  ease: "linear",
                }}
                className="absolute inset-0 z-0 rounded-[3rem] overflow-hidden border-2 border-blue-100 shadow-inner"
              >
                <Image 
                  src={src} 
                  alt={`Sliding ${index}`} 
                  fill 
                  className="object-cover grayscale-[50%]" 
                />
              </motion.div>
            ))}

            {/* ২. মেইন স্ট্যাটিক ইমেজ (এটি সবার উপরে থাকবে) */}
            <div className="relative z-10 w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-2 border-primary ring-1 ring-gray-100 bg-white">
              <Image 
                src="https://i.ibb.co.com/fd3y1mBK/photo-1559839734-2b71ea197ec2.avif.jpg" 
                alt="Professional Psychiatrist"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* ৩. ফ্লোটিং কার্ড (Certified Expert) */}
            <div className="absolute -bottom-6 -left-10 bg-white p-5 rounded-2xl shadow-2xl z-20 hidden md:flex items-center gap-4 border border-gray-50">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shadow-inner">
                <ShieldCheck size={28} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Certified</p>
                <p className="text-primary font-extrabold text-lg">Expert Care</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;