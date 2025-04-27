import { cn } from "@/lib/utils";
import { Award, Clock, Shield, Star } from "lucide-react";
import Image from "next/image";

export default function TrustSignals() {
  const badges = [
    {
      icon: <Star className="h-6 w-6 text-yellow-500" fill="currentColor" />,
      text: "5/5 Stars (1039+ Reviews)",
      subtext: "Google Verified",
      image: "/home/trustSignals/Google-Five-Star-Rating-Customer-Feedback for Tolbert Garage door repair.png",
    },
    // {
    //   icon: <Award className="h-6 w-6 text-blue-600" />,
    //   text: "A+ BBB Accredited",
    //   subtext: "Since 2010",
    //   image: "/bbb-badge.svg",
    // },
    {
      icon: <Award className="h-6 w-6 text-blue-600" />,
      text: "Over 15+ years in business",
      subtext: "Since 2008",
      image: "/home/trustSignals/tolbert garage door 15+ year in busines .png",
    },
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      text: "Licensed & Insured",
      subtext: "TDLR #12345",
      image: "/home/trustSignals/licensed and insured bonded tolbert garage door.jpg",
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      text: "Same-Day Service",
      subtext: "7 Days a Week",
      image: "/home/trustSignals/same day service and 24 hours service everyday by tolbert garage door.png",
    },
  ];

  return (
    <section className="bg-white py-6 border-b border-gray-100">
      <div className="container mx-auto px-4">
        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {badges.map((badge, i) => (
            <div key={i} className={cn("flex items-center gap-3 p-3 rounded-lg", "bg-gray-50 border border-gray-100")}>
              <div className="flex-shrink-0">{badge.image ? <Image src={badge.image || "/placeholder.svg"} alt={badge.text} width={100} height={100} className="object-contain rounded-full" /> : badge.icon}</div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{badge.text}</p>
                <p className="text-xs text-gray-500">{badge.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
