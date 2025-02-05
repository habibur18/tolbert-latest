"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";

const images = [
  { src: "/garage-door-installation-1.jpg.jpg", alt: "Garage door 1" },
  { src: "/Doors.png", alt: "Garage door 2" },
  { src: "/Garaged-door-by-tolbert.jpg", alt: "Garage door 3" },
  { src: "/garage-door-installation-by-tolbert-garage-door-.jpg", alt: "Garage door 4" },
  { src: "/garage-door-installation-5.jpg", alt: "Garage door 5" },
  { src: "/garage-door-installation-by-tolbert-garage-door.jpg", alt: "Garage door 6" },
  { src: "/garage-door-installation-by-tolbert-garage-door-repair.jpg.jpg", alt: "Garage door 7" },
  { src: "/garage-door-installation-by-tolbert-garage-door-repair-.jpg", alt: "Garage door 8" },
  { src: "/garage-door-installation-9.jpg", alt: "Garage door 9" },
  { src: "/garage-door-installation-10.jpg", alt: "Garage door 10" },
  { src: "/garage-door-installation-11.jpg", alt: "Garage door 11" },
  { src: "/garage-door-installation-12.jpg", alt: "Garage door 12" },
];

export default function ImageGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeModal = () => setSelectedIndex(null);

  const navigate = useCallback((direction) => {
    setSelectedIndex((prevIndex) => {
      if (prevIndex === null) return null;
      const newIndex = direction === "next" ? (prevIndex + 1) % images.length : (prevIndex - 1 + images.length) % images.length;
      return newIndex;
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <GraduateCard key={image.src} graduate={image} onClick={() => setSelectedIndex(index)} />
        ))}
      </div>
      <AnimatePresence>{selectedIndex !== null && <Lightbox graduate={images[selectedIndex]} onClose={closeModal} onNavigate={navigate} />}</AnimatePresence>
    </div>
  );
}

function GraduateCard({ graduate, onClick }) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={onClick}>
      <Image src={graduate.src} alt={`Graduate ${graduate.id}`} width={400} height={300} className="w-full h-auto object-cover" />
    </div>
  );
}

function Lightbox({ graduate, onClose, onNavigate }) {
  return (
    <motion.div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="relative max-w-4xl w-full h-fit flex items-center justify-center" initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()}>
        <Image src={graduate.src} alt={`Graduate ${graduate.id}`} width={1200} height={800} className="max-w-full max-h-full object-contain" />
        <motion.button className="absolute top-4 right-4 text-white" onClick={onClose} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <X size={48} className="text-blue-600" />
        </motion.button>
        <motion.button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" onClick={() => onNavigate("prev")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <ChevronLeft size={40} />
        </motion.button>
        <motion.button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" onClick={() => onNavigate("next")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <ChevronRight size={40} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
