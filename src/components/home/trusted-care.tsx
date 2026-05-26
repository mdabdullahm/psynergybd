import Image from "next/image";
import { CheckCircle2, Shield, HeartPulse, UserRoundCheck } from "lucide-react";

const TrustedCare = () => {
  const features = [
    {
      title: "Certified Specialists",
      description: "Our doctors are board-certified with years of experience in clinical psychiatry.",
      icon: UserRoundCheck,
    },
    {
      title: "100% Confidentiality",
      description: "We ensure a safe and private environment for all your sessions and records.",
      icon: Shield,
    },
    {
      title: "Personalized Therapy",
      description: "Every individual is unique. We create custom treatment plans tailored to you.",
      icon: CheckCircle2,
    },
    {
      title: "Compassionate Care",
      description: "We prioritize empathy and understanding to help you through your journey.",
      icon: HeartPulse,
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image from ImgBB */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl border-4 border-primary">
              <Image 
                src="https://i.ibb.co.com/4ZNyH93c/unhappy-male-patient-listening-psychologist-counselor-advice.jpg" // Replace with your actual ImgBB link
                alt="Trusted Mental Health Care"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative shape */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10 rotate-12"></div>
          </div>

          {/* Right Side: Content */}
          <div className="order-1 lg:order-2">
            <h4 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">
              Why Choose PsynergyBD
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              Trusted Mental Health Care <br /> 
              Tailored To Your Needs
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              We understand that seeking help can be difficult. Thats why weve built a practice based on trust, expertise, and a patient-first approach.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex flex-col gap-3 group">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedCare;