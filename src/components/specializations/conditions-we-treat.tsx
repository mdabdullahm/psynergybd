"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Brain, 
  Activity, 
  Heart, 
  Zap, 
  UserPlus, 
  ShieldCheck 
} from "lucide-react";

const ConditionsWeTreat = () => {
  const categories = [
    {
      title: "Mood Disorders",
      icon: Heart,
      conditions: [
        "Major Depressive Disorder",
        "Bipolar I & II Disorders",
        "Persistent Depressive Disorder",
        "Postpartum Depression",
        "Seasonal Affective Disorder (SAD)"
      ]
    },
    {
      title: "Anxiety Disorders",
      icon: Zap,
      conditions: [
        "Generalized Anxiety Disorder (GAD)",
        "Panic Disorder & Attacks",
        "Social Anxiety Disorder",
        "Specific Phobias",
        "Agoraphobia"
      ]
    },
    {
      title: "Neurodevelopmental",
      icon: Brain,
      conditions: [
        "ADHD (Adults & Children)",
        "Autism Spectrum Disorder",
        "Learning Disabilities",
        "Tourette's Syndrome",
        "Speech & Language Disorders"
      ]
    },
    {
      title: "Psychotic Disorders",
      icon: ShieldCheck,
      conditions: [
        "Schizophrenia",
        "Schizoaffective Disorder",
        "Delusional Disorder",
        "Brief Psychotic Disorder",
        "Substance-Induced Psychosis"
      ]
    },
    {
      title: "Personality Disorders",
      icon: UserPlus,
      conditions: [
        "Borderline Personality (BPD)",
        "Narcissistic Personality",
        "Avoidant Personality",
        "Obsessive-Compulsive Personality",
        "Antisocial Personality"
      ]
    },
    {
      title: "Other Specialized Areas",
      icon: Activity,
      conditions: [
        "OCD & Related Disorders",
        "PTSD & Complex Trauma",
        "Eating Disorders",
        "Sleep-Wake Disorders",
        "Grief & Bereavement"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Clinical Directory</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            A Comprehensive Guide <br /> to <span className="text-blue-600">Conditions We Treat</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Below is a detailed list of clinical conditions our specialists are trained to diagnose and manage.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{category.title}</h3>
                </div>

                {/* List of Conditions */}
                <ul className="space-y-4">
                  {category.conditions.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <CheckCircle2 
                        size={18} 
                        className="text-green-500 mt-1 shrink-0 transition-transform group-hover:scale-125" 
                      />
                      <span className="text-gray-600 font-medium group-hover:text-primary transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer/Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm italic max-w-2xl mx-auto">
            Note: This list is not exhaustive. If you are experiencing symptoms not mentioned here, 
            please consult with our professionals for a thorough clinical evaluation.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ConditionsWeTreat;