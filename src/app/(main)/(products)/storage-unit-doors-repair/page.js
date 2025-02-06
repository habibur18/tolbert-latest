import StorageUnitDoorCarousel from "@/components/StorageUnitDoorCarousel";
import StorageUnitDoorCTA from "@/components/StorageUnitDoorCTA";
import { Phone } from "lucide-react";

export default function page() {
  return (
    <div>
      {/* Hero Section */}

      <StorageUnitDoorCarousel />
      <div className="relative mt-16 text-white p-4 bg-[url('https://eu-images.contentstack.com/v3/assets/bltf0a690941f58b2e5/blt705342ac84138eb9/6523ff832247041bf9db89e7/Self-Storage-Unit-Doors-Yellow-Drive-Aisle.jpg')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/80 via-black/80 to-green-700/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">TOLBERT GARAGE DOOR</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Storage Unit Door Repair</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-8">We know a little something about storage unit doors. We have been fixing them in the Dallas Fort worth area for over 30 years now. We have same day service. So you won&apos;t be losing money with a vacant or non working unit.</p>
          <div className="flex justify-center">
            <a href="tel:469-909-0956" size="lg" className="bg-white  p-3 rounded-md font-semibold flex text-green-600 hover:bg-green-50">
              <Phone className="mr-2 h-5 w-5" />
              469-909-0956
            </a>
          </div>
        </div>
      </div>
      <StorageUnitDoorCTA />
    </div>
  );
}
