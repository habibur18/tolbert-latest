import Image from "next/image";

const brands = [
  { name: "Clopay", logo: "/clopay-logo.svg" },
  { name: "LiftMaster", logo: "/liftmaster-logo.svg" },
  { name: "Amarr", logo: "/amarr-logo.svg" },
  { name: "Genie", logo: "/genie-logo.svg" },
  { name: "Wayne Dalton", logo: "/wayne-dalton-logo.svg" },
  { name: "C.H.I.", logo: "/chi-logo.svg" },
  { name: "Chamberlain", logo: "/chamberlain-logo.svg" },
  { name: "Raynor", logo: "/raynor-logo.svg" },
];

export default function BrandShowcase() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Authorized Dealer For Premium Brands</h2>
          <p className="text-gray-600 mt-2">We partner with the industry's leading manufacturers to provide you with the highest quality products</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image src={brand.logo || "/placeholder.svg"} alt={`${brand.name} - Authorized Dealer`} width={120} height={60} className="h-12 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
