import Footer from "@/components/Footer";
import { GarageDoorNavbar } from "@/components/GarageDoorNavbar";
import MobileNavigation from "@/components/main/mobile-navigation";
import { Button } from "@/components/ui/button";
import { ConfettiProvider } from "@/context/confetti-context";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  icons: "/Tolbert Garage Door Logo.png",
};
export default function layout({ children }) {
  return (
    <div className="relative">
      <div className="bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-primary">
            <div className="flex items-center space-x-2">
              <Phone size={18} />
              <span className="font-semibold">469-909-0956</span>
            </div>
            <Link className="hidden md:flex" target="_blank" href="https://g.page/r/CQSjwAoMVaEHEBM/review">
              <Image src="/google-review.png" alt="Logo" width={140} height={30} />
            </Link>
            <Button className="bg-primary hover:bg-emerald-700 text-white">Get Free Estimate</Button>
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-[999]">
        <GarageDoorNavbar />
      </div>
      <ConfettiProvider>{children}</ConfettiProvider>
      <Footer />
      {/* Mobile Navigation */}
      <MobileNavigation />
    </div>
  );
}
