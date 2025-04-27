import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AlertTriangle, Clock, Phone, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function EmergencyCallout() {
  return (
    <div className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#32750a] to-[#3d8c0f] text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1.5">
              <AlertTriangle className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium">Emergency Service</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">Available 24/7</span>
            </div>

            <div className="hidden md:flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="text-xs text-white/80">Call for Same-Day Service</p>
              <p className="text-sm font-bold">(469)-909-0956</p>
            </div>

            <Button asChild size="sm" variant="secondary" className={cn("bg-white text-[#32750a] hover:bg-white/90 font-medium", "rounded-full px-4 py-1 h-8 flex items-center gap-1.5")}>
              <Link href="tel:4699090956">
                <Phone className="h-3.5 w-3.5" />
                <span className="sm:hidden">Call Now</span>
                <span className="hidden sm:inline">Call Now</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
