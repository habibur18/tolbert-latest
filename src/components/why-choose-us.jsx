"use client";
import { motion } from "framer-motion";
import { Award, Clock, Shield, Star, ThumbsUp, PenToolIcon as Tools } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const reasons = [
  {
    icon: Star,
    title: "Expertise",
    description: "Over 20 years of industry experience in garage door solutions.",
    image: "/expertise.jpg",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Licensed and insured technicians ensuring your peace of mind.",
    image: "/reliability.png",
  },
  {
    icon: Tools,
    title: "Quality Service",
    description: "Expert installation, repair, and maintenance for all garage door needs.",
    image: "/quality.jpg",
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    description: "Nothing but 5-star Google reviews from our satisfied customers.",
    // image: "/customer-satisfaction.jpg",
    image: "/google-review.png",
  },
  {
    icon: Clock,
    title: "Timely Service",
    description: "Prompt and efficient service to minimize your downtime.",
    image: "/Timely Service.png",
  },
  {
    icon: Award,
    title: "Free Estimates",
    description: "Transparent pricing with free estimates for all projects.",
    image: "/Free Estimates.jpg",
  },
];

export function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose <span className="text-green-600">Tolbert Garage Door</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div key={index} className="bg-white group rounded-lg shadow-lg overflow-hidden" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} onHoverStart={() => setHoveredIndex(index)} onHoverEnd={() => setHoveredIndex(null)}>
              <div className="relative h-52 overflow-hidden">
                <Image fill src={reason.image} alt={reason.title} className="w-full h-full object-cover object-center transition-transform duration-300 transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <reason.icon className="text-green-600 w-16 h-16" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
                {reason.title === "Free Estimates" && <button className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg">Get Free Estimate</button>}
              </div>
              <motion.div className="h-1 bg-green-600" initial={{ width: "0%" }} animate={{ width: hoveredIndex === index ? "100%" : "0%" }} transition={{ duration: 0.3 }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
