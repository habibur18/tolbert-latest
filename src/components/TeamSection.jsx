"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Palette, User2 } from "lucide-react";
import { useState } from "react";

const teamMembers = [
  { name: "Colby Tolbert", role: "Founder & CEO", image: "/tolbert.jpg", icon: <User2 className="w-6 h-6" /> },
  { name: "Brandon ", role: "Employee of the Year", image: "/employee1.png", icon: <Briefcase className="w-6 h-6" /> },
  { name: "Habibur Rahman", role: "Web Developer & SEO Specialist", image: "/habibur rahman.jpeg", icon: <Code className="w-6 h-6" /> },
  { name: "Little Tolbert", role: "Manager", image: "/tolbert2.png", icon: <Palette className="w-6 h-6" /> },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-800 mb-4">Meet Tolbert Garage Door Team</h2>
          <p className="text-xl text-emerald-600 max-w-2xl mx-auto">Our passionate experts are dedicated to bringing your vision to life with cutting-edge solutions and creative excellence.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({ member, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="relative overflow-hidden rounded-lg shadow-lg" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="relative">
        <img src={member.image} alt={member.name} className="w-full h-auto object-cover aspect-square" />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.3 }} className="absolute inset-0  flex items-center justify-center">
          <motion.div initial={{ scale: 0.8, rotate: -10 }} animate={{ scale: isHovered ? 1 : 0.8, rotate: isHovered ? 0 : -10 }} transition={{ duration: 0.3 }} className="text-white text-6xl">
            {member.icon}
          </motion.div>
        </motion.div>
      </div>
      <motion.div initial={{ y: 0 }} animate={{ y: isHovered ? 70 : 0 }} transition={{ duration: 0.3 }} className="absolute bottom-0 left-0 right-0 bg-emerald-700 text-white p-4">
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <p className="text-emerald-200">{member.role}</p>
      </motion.div>
    </motion.div>
  );
}
