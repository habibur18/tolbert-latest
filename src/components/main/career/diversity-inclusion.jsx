"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DiversityInclusion() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.5,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Split text for letter animation
  const welcomingText = "Welcoming is one thing.".split("");
  const belongingText = "Belonging is everything.".split("");

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {/* Heading with letter animation */}
          <div className="mb-12">
            <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2" variants={headingVariants}>
              {welcomingText.map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h2>

            <motion.h2 className="text-4xl md:text-5xl font-bold mb-12 py-3 bg-gradient-to-r from-[#32750a] to-[#ff8c00] text-transparent bg-clip-text" variants={headingVariants}>
              {belongingText.map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-700 mb-6">When you start a career at Tolbert Garage Door, you'll realize that you're not the only one here who wants you to succeed. You can expect the respect and support of an inclusive community throughout your time here. One of the most meaningful ways to find that experience is by joining our Employee Resource Groups.</p>
              <p className="text-lg text-gray-700 mb-8">These employee-led groups are rooted in the celebration and amplification of culturally underrepresented communities, creating even more opportunities to belong, learn, and grow.</p>
            </motion.div>

            <motion.div className="grid grid-cols-3 gap-3" variants={imageVariants}>
              <motion.div className="relative h-80 overflow-hidden rounded-lg shadow-lg transform -rotate-2" whileHover={{ scale: 1.03, rotate: 0, transition: { duration: 0.3 } }}>
                <Image src="/tolbert.jpg" alt="Tolbert team member" fill className="object-cover" />
              </motion.div>
              <motion.div className="relative h-80 overflow-hidden rounded-lg shadow-lg transform translate-y-6" whileHover={{ scale: 1.03, translateY: "1.25rem", transition: { duration: 0.3 } }}>
                <Image src="/employee1.png" alt="Tolbert team member" fill className="object-cover" />
              </motion.div>
              <motion.div className="relative h-80 overflow-hidden rounded-lg shadow-lg transform rotate-2" whileHover={{ scale: 1.03, rotate: 0, transition: { duration: 0.3 } }}>
                <Image src="/habibur rahman.jpeg" alt="Tolbert team member" fill className="object-cover" />
              </motion.div>
            </motion.div>
          </div>

          {/* Values section */}
          <motion.div className="mt-24 grid md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm" variants={itemVariants} whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}>
              <div className="w-12 h-12 bg-[#32750a]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-[#32750a]">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inclusive Culture</h3>
              <p className="text-gray-700">We foster an environment where everyone feels welcome, valued, and empowered to contribute their unique perspectives and talents.</p>
            </motion.div>

            <motion.div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm" variants={itemVariants} whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}>
              <div className="w-12 h-12 bg-[#32750a]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-[#32750a]">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Opportunities</h3>
              <p className="text-gray-700">We're committed to providing equal opportunities for professional development and advancement to all team members.</p>
            </motion.div>

            <motion.div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm" variants={itemVariants} whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}>
              <div className="w-12 h-12 bg-[#32750a]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-[#32750a]">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Impact</h3>
              <p className="text-gray-700">We actively engage with and support diverse communities, both within our company and in the areas we serve.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
