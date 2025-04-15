import BrandMarquee from "@/components/brand-marquee";
import GarageDoorMaintenanceMainPoints from "@/components/Garage-door-maintenance-Main-Points";
import GarageDoorRepairServices from "@/components/Garage-Door-Repair-Services";
import GarageDoorMaintenanceHeroSection from "@/components/GarageDoorMaintenanceHeroSection";
import GarageDoorRepairContactSections from "@/components/GarageDoorRepairContactSections";
import WhyChooseSection from "@/components/why-choose-section";
import Image from "next/image";

export const metadata = {
  title: "Garage Door Maintenance in Dallas,TX | Fast & Affordable | Tolbert Garage Door",
  description: "Expert garage door installation in Dallas, TX, maintenance, and repair services. Licensed and insured professionals, 100% satisfaction guaranteed. Get your free quote today!",
  keywords: "garage door installation, garage door repair, door maintenance, panel replacement, spring replacement, hardware parts, tolbert garage door repair",
  icons: "/Tolbert Garage Door Logo.png",
  openGraph: {
    title: "Garage Door Maintenance in Dallas,TX | Fast & Affordable",
    description: "Expert garage door installation and repair services with 100% satisfaction guarantee",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2PB3b1UQtgKTWMxGNELYKgDZuplZbv.png",
        width: 1200,
        height: 630,
        alt: "Professional Garage Door Services",
      },
    ],
  },
};

export default function page() {
  return (
    <div>
      <GarageDoorMaintenanceHeroSection />

      {/* Garage Door Services Section */}
      <GarageDoorRepairServices />
      <WhyChooseSection />
      <GarageDoorMaintenanceMainPoints />
      <GarageDoorRepairContactSections />
      <BrandMarquee />
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        We Accept All Type Of <span className="text-green-600 font-bold">Payments</span>
      </h2>
      <Image src="/payment.png" alt="payment" width={2400} height={1200} className="w-full h-auto" />
    </div>
  );
}
