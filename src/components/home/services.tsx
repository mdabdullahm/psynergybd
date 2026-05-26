import Link from "next/link";
import { 
  Brain, 
  Users2, 
  Smile, 
  Zap, 
  Baby, 
  HeartHandshake, 
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const allServices = [
    {
      title: "Depression Therapy",
      description: "Professional help to overcome persistent sadness and regain interest in life.",
      icon: Smile,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Anxiety Management",
      description: "Effective strategies to manage stress, panic attacks, and daily social anxiety.",
      icon: Zap,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Couple Counseling",
      description: "Improving communication and resolving conflicts for a healthier relationship.",
      icon: Users2,
      color: "bg-pink-50 text-pink-600",
    },
    {
      title: "Child Psychiatry",
      description: "Specialized mental health care for children and adolescents' development.",
      icon: Baby,
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Stress Management",
      description: "Learn to balance work and life while maintaining mental peace and clarity.",
      icon: Brain,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Trauma Recovery",
      description: "Compassionate support to help you heal from past traumatic experiences.",
      icon: HeartHandshake,
      color: "bg-red-50 text-red-600",
    },
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5">
            Specialized Mental Health Services
          </h2>
          <p className="text-gray-600 text-lg">
            We provide a wide range of psychological and psychiatric services designed to help you achieve emotional balance and mental clarity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed mb-6">
                  {service.description}
                </p>

                <Link 
                  href="/services" 
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-blue-600 transition-colors"
                >
                  Learn More
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 font-medium">Looking for a specific treatment not listed here?</p>
          <Link
            href="/contact"
            className="inline-block border-2 border-primary text-primary px-10 py-4 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all shadow-md"
          >
            Contact Our Support
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;