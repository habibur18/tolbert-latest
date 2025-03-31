"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function CompanyBenefits() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
          <Badge className="mb-4 bg-[#32750a] hover:bg-[#32750a]/90">Why Tolbert Garage Door Repair</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits of Working at Tolbert Garage Door?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">We offer more than just a job. Join our team and be part of a company that values growth, excellence, and people.</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Competitive Compensation",
              description: "Earn what you're worth with our industry-leading pay and benefits package.",
              icon: "💰",
            },
            {
              title: "Growth Opportunities",
              description: "Advance your career with clear paths for promotion and skill development.",
              icon: "📈",
            },
            {
              title: "Supportive Team",
              description: "Work with professionals who value collaboration and mutual success.",
              icon: "🤝",
            },
            {
              title: "Work-Life Balance",
              description: "We respect your time off and promote a healthy balance between work and personal life.",
              icon: "⚖️",
            },
            {
              title: "Training & Development",
              description: "Continuous learning opportunities to keep your skills sharp and up-to-date.",
              icon: "🔧",
            },
            {
              title: "Community Impact",
              description: "Be part of a company that gives back to the communities we serve.",
              icon: "🏡",
            },
          ].map((benefit, index) => (
            <motion.div key={index} variants={fadeIn} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
