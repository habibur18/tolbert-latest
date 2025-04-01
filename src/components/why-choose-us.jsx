"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import { Award, Clock, Shield, Star, ThumbsUp, PenToolIcon as Tools } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Auto-rotate through cards when not hovering
  useEffect(() => {
    let interval;
    if (!isHovering) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % reasons.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isHovering]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">Tolbert Garage Door</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">We pride ourselves on delivering exceptional service and quality workmanship for all your garage door needs.</p>
        </motion.div>

        <motion.div ref={containerRef} variants={containerVariants} initial="hidden" animate={controls} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className={cn("bg-white rounded-xl overflow-hidden transition-all duration-300", "border border-gray-100 shadow-lg hover:shadow-xl", "flex flex-col h-full", index === activeIndex && !isHovering ? "ring-2 ring-primary ring-offset-2" : "")}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="relative h-52 overflow-hidden">
                <Image fill src={reason.image || "/placeholder.svg"} alt={reason.title} className="object-cover object-center transition-transform duration-500 hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white text-2xl font-bold">{reason.title}</h3>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-lg">
                  <reason.icon className="text-primary w-6 h-6" />
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-700 mb-4 flex-grow">{reason.description}</p>

                {reason.title === "Free Estimates" ? (
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-auto w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                    Get Your Free Estimate
                  </motion.button>
                ) : null}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }} className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary font-medium py-3 px-6 rounded-full transition-colors">
            <span>See what our customers are saying</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
