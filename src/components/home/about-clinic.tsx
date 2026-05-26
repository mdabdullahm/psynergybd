import Image from "next/image";
import Link from "next/link";
import { Sparkles, Award, Clock, CheckCircle } from "lucide-react";

const AboutClinic = () => {
  const points = [
    "Evidence-based psychiatric treatments",
    "Compassionate & non-judgmental environment",
    "Personalized mental health roadmap",
    "Highly confidential & secure sessions",
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} />
              Learn About PsynergyBD
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              A Modern Sanctuary For Your <span className="text-blue-600">Mental Well-being</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              At PsynergyBD, we believe that mental health is a fundamental human right. Our clinic is more than just a medical facility; its a safe space designed to help you navigate lifes challenges with professional guidance and empathy.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle size={16} />
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-900/20 transition-all group"
              >
                More About Our Mission
                <Award size={20} className="ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Content - Clinic Image */}
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-2 border-primary shadow-2xl">
              <Image 
                src="https://i.ibb.co.com/jkT2WL05/logo-make-11-06-2023-203.jpg" // Replace with your ImgBB link
                alt="PsynergyBD Clinic Interior"
                width={600}
                height={550}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-4 md:right-10 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-xl">
                <Clock size={30} />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary leading-none">24/7</p>
                <p className="text-gray-500 text-xs font-semibold uppercase mt-1">Online Support</p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutClinic;