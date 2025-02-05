import BrandMarquee from "@/components/brand-marquee";
import GarageDoorMaintenanceMainPoints from "@/components/Garage-door-maintenance-Main-Points";
import GarageDoorRepairServices from "@/components/Garage-Door-Repair-Services";
import GarageDoorMaintenanceHeroSection from "@/components/GarageDoorMaintenanceHeroSection";
import GarageDoorRepairContactSections from "@/components/GarageDoorRepairContactSections";
import WhyChooseSection from "@/components/why-choose-section";
import Image from "next/image";

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
