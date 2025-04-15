import GarageDoorRepairServices from "@/components/Garage-Door-Repair-Services";
import GarageDoorRepairContactSections from "@/components/GarageDoorRepairContactSections";
import GarageDoorRepairHeroSection from "@/components/GarageDoorRepairHeroSection";

export const metadata = {
  title: "Garage Door Repair in Dallas,TX | Fast & Affordable | Tolbert Garage Door",
  description: "Expert garage door installation in Dallas, TX, maintenance, and repair services. Licensed and insured professionals, 100% satisfaction guaranteed. Get your free quote today!",
  keywords: "garage door installation, garage door repair, door maintenance, panel replacement, spring replacement, hardware parts, tolbert garage door repair",
  icons: "/Tolbert Garage Door Logo.png",
  openGraph: {
    title: "Garage Door Repair in Dallas,TX | Fast & Affordable",
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
      {/* Herosection */}
      <GarageDoorRepairHeroSection />
      {/* Garage Door Services Section */}
      <GarageDoorRepairServices />
      {/* Contact Section */}
      <GarageDoorRepairContactSections />
    </div>
  );
}
