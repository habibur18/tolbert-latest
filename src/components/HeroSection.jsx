import { Phone } from "lucide-react";
import { ServiceQuiz } from "./main/homepage/service-quiz";
import { ServiceBadges } from "./service-badges";

export default function HeroSection() {
  return (
    <main className=" ">
      <div
        className="relative"
        style={{
          backgroundImage: `
            linear-gradient(135deg,
              rgba(22, 163, 74, 0.6) 0%,
              rgba(21, 128, 61, 0.8) 30%,
              rgba(20, 83, 45, 0.6) 100%
            ),
            url('https://www.metrogaragedoor.net/wp-content/uploads/garage-door-styles-dallas-tx.webp')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 py-20 min-h-[60vh]">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">TOLBERT GARAGE DOOR REPAIR DALLAS</h1>
                <p className="text-green-100 text-xl">Your trusted provider of high-quality garage door solutions in the Dallas-Fort Worth area</p>
              </div>

              <a href="tel:(469)909-0956" className="herobtn block items-center px-6 py-3 rounded-full text-white font-bold text-lg transition-colors">
                <div className="flex">
                  <Phone className="mr-2" />
                  CALL US (469) 909-0956
                </div>
              </a>

              <ServiceBadges />
            </div>

            {/* Right Column */}

            <div className="bg-green-900/40 p-8 rounded-lg backdrop-blur-sm shadow-2xl border border-green-500/20">
              <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-md">GET YOUR FREE ESTIMATE</h2>
              <ServiceQuiz />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
