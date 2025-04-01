"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";

export default function AboutusSection() {
  const sectionRef = useRef(null);

  // Create floating animation for background circles
  useEffect(() => {
    if (!sectionRef.current) return;

    const circles = sectionRef.current.querySelectorAll(".floating-circle");

    circles.forEach((circle) => {
      const speed = Math.random() * 2 + 1;
      const direction = Math.random() > 0.5 ? 1 : -1;
      const amplitude = Math.random() * 10 + 5;

      const startPos = Number.parseFloat(getComputedStyle(circle).top);
      let offset = 0;

      const animate = () => {
        offset += 0.01 * speed * direction;
        const newPos = startPos + Math.sin(offset) * amplitude;
        circle.style.top = `${newPos}px`;
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });
  }, []);

  const features = ["20+ Years Experience", "Licensed & Insured", "24/7 Emergency Service", "Residential & Commercial", "Free Estimates", "Satisfaction Guaranteed"];

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* Clip path background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/5 clip-path-polygon"></div>
        <div className="absolute right-0 top-0 h-full w-1/2 bg-primary/10 clip-path-diagonal"></div>
      </div>

      {/* Floating circles */}
      <div className="floating-circle absolute w-32 h-32 rounded-full bg-primary/10 -left-10 top-20"></div>
      <div className="floating-circle absolute w-24 h-24 rounded-full bg-primary/5 left-1/4 bottom-10"></div>
      <div className="floating-circle absolute w-40 h-40 rounded-full bg-primary/5 right-1/3 top-1/4"></div>
      <div className="floating-circle absolute w-16 h-16 rounded-full bg-primary/10 right-10 bottom-1/4"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6 relative">
            {/* Decorative element */}
            <div className="absolute -left-4 top-0 h-full w-1 bg-primary rounded-full"></div>

            <div className="inline-block rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-white shadow-sm">About Us</div>

            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Your Trusted{" "}
              <span className="text-primary relative">
                Garage Door
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,0 C25,5 75,5 100,0 L100,10 L0,10 Z" fill="currentColor" />
                </svg>
              </span>{" "}
              Experts
            </h2>

            <p className="max-w-[600px] text-gray-600 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              With over <span className="text-primary font-medium">20 years</span> of industry experience, <span className="text-primary font-medium">Tolbert Garage Door</span> is dedicated to delivering exceptional service, top-notch craftsmanship, and customer satisfaction throughout the <span className="text-primary font-medium">Dallas-Fort Worth</span> area.
            </p>

            <div className="relative p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100">
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
              <ul className="grid gap-3 md:grid-cols-2 relative z-10">
                {features.map((item, index) => (
                  <motion.li key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-center gap-2.5">
                    <div className="flex-shrink-0 p-1 rounded-full bg-primary/10">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white px-6 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="#contact">
                  Schedule a Consultation
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative">
            {/* Image frame with decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-lg"></div>
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-xl"></div>

            {/* Decorative circles */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-primary rounded-full opacity-20"></div>

            <div className="relative p-2 bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 clip-path-triangle"></div>
              <Image src="/aboutus.png" alt="Tolbert Garage Door Team" width={2000} height={500} className="rounded-lg object-cover w-full h-full transition-all duration-500 hover:scale-105 z-10 relative" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS for clip paths and animations */}
      <style jsx>{`
        .clip-path-polygon {
          clip-path: polygon(0 0, 100% 0, 65% 100%, 0% 100%);
        }

        .clip-path-diagonal {
          clip-path: polygon(100% 0, 0% 0, 100% 100%);
        }

        .clip-path-triangle {
          clip-path: polygon(100% 0, 0% 0, 100% 100%);
        }

        .floating-circle {
          transition: top 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
}
