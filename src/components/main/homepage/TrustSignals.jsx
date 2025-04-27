import { cn } from "@/lib/utils";
import { Award, Clock, Shield, Star } from "lucide-react";
import Image from "next/image";

export default function TrustSignals() {
  const badges = [
    {
      icon: <Star className="h-6 w-6 text-yellow-500" fill="currentColor" />,
      text: "4.9/5 Stars (180+ Reviews)",
      subtext: "Google Verified",
      image: "/google-badge.svg",
    },
    {
      icon: <Award className="h-6 w-6 text-blue-600" />,
      text: "A+ BBB Accredited",
      subtext: "Since 2010",
      image: "/bbb-badge.svg",
    },
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      text: "Licensed & Insured",
      subtext: "TDLR #12345",
      image: "/license-badge.svg",
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      text: "Same-Day Service",
      subtext: "7 Days a Week",
      image: "/service-badge.svg",
    },
  ];

  const partners = [
    { name: "Clopay", logo: "/clopay-logo.svg" },
    { name: "LiftMaster", logo: "/liftmaster-logo.svg" },
    { name: "Amarr", logo: "/amarr-logo.svg" },
    { name: "Genie", logo: "/genie-logo.svg" },
    { name: "Wayne Dalton", logo: "/wayne-dalton-logo.svg" },
  ];

  return (
    <section className="bg-white py-6 border-b border-gray-100">
      <div className="container mx-auto px-4">
        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {badges.map((badge, i) => (
            <div key={i} className={cn("flex items-center gap-3 p-3 rounded-lg", "bg-gray-50 border border-gray-100")}>
              <div className="flex-shrink-0">{badge.image ? <Image src={badge.image || "/placeholder.svg"} alt={badge.text} width={32} height={32} className="object-contain" /> : badge.icon}</div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{badge.text}</p>
                <p className="text-xs text-gray-500">{badge.subtext}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Partner logos */}
        <div className="pt-4 border-t border-gray-100">
          <p className="text-center text-xs text-gray-500 uppercase tracking-wider mb-4">Authorized Dealer For</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, i) => (
              <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image src={partner.logo || "/placeholder.svg"} alt={`${partner.name} - Authorized Dealer`} width={100} height={40} className="h-8 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
