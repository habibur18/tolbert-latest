"use client";

import { useMobile } from "@/hooks/use-mobile";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, ChevronUp, Facebook, FileText, Home, Instagram, Linkedin, Phone, Twitter, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MobileNavigation() {
  const isMobile = useMobile();
  const [isSocialExpanded, setIsSocialExpanded] = useState(false);

  // Don't render on server or desktop
  if (!isMobile) return null;

  const toggleSocial = () => {
    setIsSocialExpanded(!isSocialExpanded);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Social media popup */}
      <AnimatePresence>
        {isSocialExpanded && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="flex flex-col items-center gap-3 mb-2 p-3">
            <motion.div className="absolute inset-0 bg-black/70 backdrop-blur-sm rounded-t-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsSocialExpanded(false)} />

            <motion.button className="relative z-10 bg-white rounded-full p-2 shadow-lg" onClick={() => setIsSocialExpanded(false)} whileTap={{ scale: 0.9 }}>
              <X size={24} className="text-gray-700" />
            </motion.button>

            <div className="relative z-10 flex gap-4">
              <SocialButton href="https://instagram.com" icon={<Instagram size={20} />} color="bg-pink-600" />
              <SocialButton href="https://twitter.com" icon={<Twitter size={20} />} color="bg-blue-400" />
              <SocialButton href="https://linkedin.com" icon={<Linkedin size={20} />} color="bg-blue-700" />
            </div>

            <p className="text-white text-sm relative z-10">Connect with us!</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom navigation bar */}
      <div className="bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-around items-center h-16">
          <NavButton href="/" icon={<Home size={20} />} label="Home" />
          <NavButton href="/careers" icon={<Briefcase size={20} />} label="Careers" />

          {/* Social button with animation */}
          <button onClick={toggleSocial} className="flex flex-col items-center justify-center w-16 h-16 text-[#32750a]">
            <motion.div animate={isSocialExpanded ? { rotate: 180 } : { rotate: 0 }} className="flex items-center justify-center w-12 h-12 bg-[#32750a] rounded-full -mt-5 shadow-lg">
              {isSocialExpanded ? <ChevronUp size={24} className="text-white" /> : <Facebook size={24} className="text-white" />}
            </motion.div>
            <span className="text-xs mt-1">Social</span>
          </button>

          <NavButton href="/contact" icon={<Phone size={20} />} label="Contact" />
          <NavButton href="/quote" icon={<FileText size={20} />} label="Estimate" />
        </div>
      </div>
    </div>
  );
}

function NavButton({ href, icon, label }) {
  return (
    <Link href={href} className="flex flex-col items-center justify-center w-16 text-gray-600 hover:text-[#32750a] transition-colors">
      <div className="mb-1">{icon}</div>
      <span className="text-xs">{label}</span>
    </Link>
  );
}

function SocialButton({ href, icon, color }) {
  return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center w-10 h-10 ${color} rounded-full text-white shadow-lg`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {icon}
    </motion.a>
  );
}
