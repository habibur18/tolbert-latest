import OpenersAccessoriesSection from "@/components/OpenersAccessoriesSection";
import OpenersFeatureFlow from "@/components/OpenersFeatureFlow";
import { OpenersHeroSection } from "@/components/OpenersHeroSection";
import { OpenersProductGrid } from "@/components/OpenersProductGrid";
import { OpenersTwoImage } from "@/components/OpenersTwoImage";

export default function GarageDoorOpeners() {
  return (
    <div>
      <OpenersHeroSection />
      <OpenersProductGrid />
      <OpenersTwoImage />
      <OpenersFeatureFlow />
      <OpenersAccessoriesSection />
    </div>
  );
}
