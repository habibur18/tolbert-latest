import Image from "next/image";

const brands = [
  { name: "Clopay", logo: "/WR.png" },
  { name: "Amarr", logo: "/marantec-logo.png" },
  { name: "LiftMaster", logo: "/LiftMaster.png" },
  { name: "DoorLink", logo: "/brands/doorlink-logo.webp" },
  { name: "Wayne Dalton", logo: "/brands/Windsor Door.jpg" },
  { name: "C.H.I.", logo: "/Stanley.png" },
  { name: "Chamberlain", logo: "/Amarr.png" },
  { name: "Raynor", logo: "/Raynor.png" },
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
            <div key={index}>
              <Image src={brand.logo || "/placeholder.svg"} alt={`${brand.name} - Authorized Dealer`} width={120} height={80} className="h-12 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
