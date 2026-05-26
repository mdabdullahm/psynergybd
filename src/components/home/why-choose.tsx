import Image from "next/image";
import { ShieldCheck, HeartPulse, Stethoscope, MessageCircleMore, Check } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      title: "Certified Professionals",
      desc: "Our team consists of board-certified psychiatrists and licensed clinical psychologists.",
      icon: Stethoscope,
    },
    {
      title: "Compassionate Care",
      desc: "We treat every patient with empathy, ensuring you feel heard and understood.",
      icon: HeartPulse,
    },
    {
      title: "100% Confidentiality",
      desc: "Your privacy is our priority. All sessions and records are kept strictly confidential.",
      icon: ShieldCheck,
    },
    {
      title: "Ongoing Support",
      desc: "We provide continuous guidance throughout your mental health journey.",
      icon: MessageCircleMore,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div>
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Why Choose Us</h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Empowering Minds with <br /> Expert & Compassionate Care
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Choosing the right mental health team is a big step. At PsynergyBD, we combine scientific expertise with a deeply human approach to help you find your path to wellness.
            </p>

            <div className="space-y-6">
              {reasons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-5 group">
                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-blue-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-1">{item.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Image with Decorative Elements */}
          <div className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://i.ibb.co.com/twkGqFkJ/rehab-patient-fighting-together-with-addiction.jpg" // Replace with your ImgBB link
                alt="Our Mental Health Team"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Success Rate Card */}
            <div className="absolute -top-10 -right-4 md:right-0 z-20 bg-white p-6 rounded-3xl shadow-xl border border-gray-50 flex items-center gap-4 animate-bounce-slow">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                <Check size={24} strokeWidth={3} />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">98%</p>
                <p className="text-gray-500 text-xs font-bold uppercase">Success Rate</p>
              </div>
            </div>

            {/* Decorative Dots/Circle */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;