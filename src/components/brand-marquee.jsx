"use client";

import Marquee from "react-fast-marquee";

const brands = [
  {
    name: "Windsor Door",
    logo: "/WR.png",
    alt: "Windsor Door logo",
  },

  {
    name: "Marantec",
    logo: "/marantec-logo.png",
    alt: "Marantec logo",
  },
  {
    name: "LiftMaster",
    logo: "/LiftMaster.png",
    alt: "LiftMaster logo",
  },
  {
    name: "Clopay",
    logo: "/Logo-clopay.png",
    alt: "Clopay logo",
  },
  {
    name: "Amarr",
    logo: "/Amarr.png",
    alt: "Amarr/Entrematic logo",
  },
  {
    name: "Sommer",
    logo: "/Sommer.png",
    alt: "Sommer logo",
  },
  {
    name: "Wayne Dalton",
    logo: "/WayneDalton.png",
    alt: "Wayne Dalton logo",
  },
  {
    name: "Stanley",
    logo: "/Stanley.png",
    alt: "Stanley logo",
  },
  {
    name: "Raynor",
    logo: "/Raynor.png",
    alt: "Raynor logo",
  },
  {
    name: "Chamberlain",
    logo: "/Chamberlain-logo-blue.png",
    alt: "Chamberlain logo",
  },
  {
    name: "Craftsman",
    logo: "/Craftsman-Logo.png",
    alt: "Craftsman logo",
  },
  {
    name: "Linear",
    logo: "/Linear.png",
    alt: "Linear logo",
  },
];

export default function BrandMarquee() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50/50 relative overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-4xl md:text-5xl text-balance font-bold text-center  mb-2">
          WE STOCKS AND ARE FAMILIAR WITH ANY <span className="text-green-600 font-bold">GARAGE DOOR</span> BRAND
        </h2>
        <p className="text-center">
          Trust our expertise with all major <span className="text-green-600 font-bold">garage door</span> manufacturers
        </p>
      </div>

      <div className="relative">
        {/* Left fade overlay */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />

        {/* First row - Left to Right */}
        <Marquee gradient={false} speed={40} className="py-4">
          {brands.slice(0, 7).map((brand) => (
            <div key={brand.name} className="mx-8 flex items-center justify-center  transition-all duration-300">
              <img src={brand.logo || "/placeholder.svg"} alt={brand.alt} className="h-20 w-auto object-contain" />
            </div>
          ))}
        </Marquee>

        {/* Second row - Right to Left */}
        <Marquee gradient={false} speed={40} direction="right" className="py-4">
          {brands.slice(7).map((brand) => (
            <div key={brand.name} className="mx-8 flex items-center justify-center transition-all duration-300">
              <img src={brand.logo || "/placeholder.svg"} alt={brand.alt} className="h-20 w-auto object-contain" />
            </div>
          ))}
        </Marquee>

        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
      </div>

      {/* Decorative elements */}
      <div className="absolute -z-10 top-1/3 right-1/3 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute -z-10 bottom-1/3 left-1/3 w-64 h-64 bg-green-600/10 rounded-full blur-3xl" />
    </section>
  );
}
