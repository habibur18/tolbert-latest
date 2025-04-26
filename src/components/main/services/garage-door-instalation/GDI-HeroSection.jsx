"use client";
import { Calendar, Home, PenToolIcon as Tool, User } from "lucide-react";
import Image from "next/image";
import HeroContent from "./hero-content";
import QuoteForm from "./quote-form";
import TrustIndicators from "./trust-indicators";

// Define the form steps
const steps = [
  { id: 1, title: "Service", icon: Tool },
  { id: 2, title: "Property", icon: Home },
  { id: 3, title: "Timeline", icon: Calendar },
  { id: 4, title: "Contact", icon: User },
];

export default function GDIHeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#1a3c07] via-[#2a4d14] to-[#2c4c17]">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#32750a]/30 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-[#32750a]/20 blur-3xl"></div>
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#5ebb2e]/10 blur-3xl"></div>
      </div>

      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="https://olympusgaragedoorrepair.com/images/new-install.jpg" alt="Garage door installation" fill className="object-cover opacity-40" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3c07]/80 to-[#2a4d14]/70" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left column - Text content */}
          <HeroContent />

          {/* Right column - Form */}
          <QuoteForm steps={steps} />
        </div>
      </div>

      {/* Trust indicators */}
      <TrustIndicators />
    </div>
  );
}
