import { Clock, Shield, Star, Truck } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center text-white">
      <div className="mb-4 inline-block rounded-full bg-[#32750a]/20 px-4 py-1 text-sm font-medium text-[#5ebb2e]">DFW’s #1 Rated Service in Dallas</div>

      <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        <span className="relative">
          <span className="relative z-10">Same Day</span>
          <span className="absolute bottom-2 left-0 z-0 h-3 w-full bg-[#32750a]/30"></span>
        </span>{" "}
        Garage Door Installation & Repair in Dallas, TX
      </h1>
      <p className="mb-6 text-xl font-light text-gray-300">Professional service, competitive pricing, and satisfaction guaranteed.</p>

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3 backdrop-blur-sm transition-all hover:bg-white/10">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#32750a]">
            <Clock className="h-5 w-5" />
          </div>
          <span className="text-lg">Same-day service</span>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3 backdrop-blur-sm transition-all hover:bg-white/10">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#32750a]">
            <Shield className="h-5 w-5" />
          </div>
          <span className="text-lg">5-year warranty</span>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3 backdrop-blur-sm transition-all hover:bg-white/10">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#32750a]">
            <Star className="h-5 w-5" />
          </div>
          <span className="text-lg">Expert technicians</span>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3 backdrop-blur-sm transition-all hover:bg-white/10">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#32750a]">
            <Truck className="h-5 w-5" />
          </div>
          <span className="text-lg">Free estimates</span>
        </div>
      </div>

      <div className="hidden lg:block">
        <p className="mb-4 text-lg font-semibold">How it works:</p>
        <div className="relative flex items-center justify-between">
          {/* Connecting line */}
          <div className="absolute left-[10%] right-[10%] top-6 h-1 bg-white/20"></div>

          {[1, 2, 3].map((step) => (
            <div key={step} className="relative z-10 flex flex-col items-center">
              <div className={`flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold ${step === 1 ? "bg-[#32750a] text-white" : "bg-white/10 text-white"}`}>{step}</div>
              <p className="mt-2 text-center text-sm">{step === 1 ? "Fill out quick form" : step === 2 ? "Get instant quote" : "Schedule service"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
