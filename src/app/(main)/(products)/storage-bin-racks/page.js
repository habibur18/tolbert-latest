import StorageBinRacksContact from "@/components/StorageBinRacksContact";
import StorageBinRacksFeaturesSection from "@/components/StorageBinRacksFeaturesSection";
import StorageBinRacksGallerySection from "@/components/StorageBinRacksGallerySection";
import StorageBinRacksHeroSection from "@/components/StorageBinRacksHeroSection";
import StorageBinRacksStepsSection from "@/components/StorageBinRacksStepsSection";

export default function StorageBinRacksPage() {
  return (
    <div>
      <StorageBinRacksHeroSection />
      <StorageBinRacksFeaturesSection />
      <StorageBinRacksGallerySection />
      <StorageBinRacksStepsSection />
      <StorageBinRacksContact />
    </div>
  );
}
