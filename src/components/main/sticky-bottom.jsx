"use client";

import { useMobile } from "@/hooks/use-mobile";
import Link from "next/link";

export default function StickyBottom() {
  const isMobile = useMobile();
  if (isMobile) return null;
  return (
    <div className="sticky left-0 right-0 bottom-0">
      <div className="bg-gradient-to-b from-green-100 via-white to-green-50  p-2 rounded-xl shadow-lg text-center border border-green-300">
        <p className="text-green-700 mb-4 text-sm font-medium">Tolbert Garage Door provides reliable and professional repair services for your garage doors. Get in touch for a seamless experience.</p>
        <Link href="#contact">
          <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-transform transform hover:scale-105 shadow-md">Get Free Estimate</button>
        </Link>
      </div>
    </div>
  );
}
