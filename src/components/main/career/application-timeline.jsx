"use client";

import React from "react";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Award, Calendar, CheckCircle, FileText, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ApplicationTimeline() {
  const steps = [
    {
      title: "Submit Application",
      description: "Fill out our online application form and upload your resume. We review all applications within 48 hours.",
      icon: <FileText className="h-8 w-8 text-[#32750a]" />,
    },
    {
      title: "Initial Assessment",
      description: "Complete a brief skills assessment to help us understand your expertise and how you might fit with our team.",
      icon: <CheckCircle className="h-8 w-8 text-[#32750a]" />,
    },
    {
      title: "Interview Process",
      description: "Meet with our hiring team for a conversation about your experience, skills, and career goals.",
      icon: <Users className="h-8 w-8 text-[#32750a]" />,
    },
    {
      title: "Skills Demonstration",
      description: "For technical roles, we'll ask you to demonstrate your skills in a practical, real-world scenario.",
      icon: <Award className="h-8 w-8 text-[#32750a]" />,
    },
    {
      title: "Job Offer",
      description: "If you're a good fit, we'll extend an offer and welcome you to the Tolbert Garage Door family!",
      icon: <Calendar className="h-8 w-8 text-[#32750a]" />,
    },
  ];

  // Create refs for each step
  const stepRefs = useRef([]);
  stepRefs.current = steps.map((_, i) => stepRefs.current[i] || React.createRef());

  // Track which steps are in view
  const [visibleSteps, setVisibleSteps] = useState([]);

  // Check if each step is in view
  useEffect(() => {
    const observers = [];

    stepRefs.current.forEach((ref, index) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleSteps((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index].sort((a, b) => a - b);
                }
                return prev;
              });
            }
          },
          { threshold: 0.3 }
        );

        observer.observe(ref.current);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
          <Badge className="mb-4 bg-[#32750a] hover:bg-[#32750a]/90">Application Process</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Hiring Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">From application to onboarding, here's what you can expect when applying to join our team.</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>

            {/* Timeline steps */}
            {steps.map((step, index) => (
              <div key={index} ref={stepRefs.current[index]} className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} animate={visibleSteps.includes(index) ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={visibleSteps.includes(index) ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.3, delay: 0.2 }} className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-[#32750a] z-10 my-4 md:my-0">
                  <span className="text-[#32750a] font-bold">{index + 1}</span>
                </motion.div>

                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">The entire process typically takes 1-2 weeks from application to offer.</p>
            <div className="inline-flex items-center justify-center p-4 bg-[#32750a]/10 rounded-lg">
              <span className="font-medium text-[#32750a]">Ready to get started? Browse our open positions below!</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
