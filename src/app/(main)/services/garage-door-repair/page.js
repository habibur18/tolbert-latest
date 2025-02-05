import GarageDoorRepairServices from "@/components/Garage-Door-Repair-Services";
import GarageDoorRepairContactSections from "@/components/GarageDoorRepairContactSections";
import GarageDoorRepairHeroSection from "@/components/GarageDoorRepairHeroSection";

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
