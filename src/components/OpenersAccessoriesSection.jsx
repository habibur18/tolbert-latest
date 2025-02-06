import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Key Chain Remotes",
    image: "/Key Chain Remotes.png",
    url: "https://www.liftmaster.com/374ut-mini-universal-remote/p/374UTMC",
  },
  {
    id: 2,
    name: "Visor Remotes",
    image: "/Visor Remotes.png",
    url: "https://www.liftmaster.com/accessories/c/garage-door-opener-remotes#tab=products",
  },
  {
    id: 3,
    name: "Universal Remotes",
    image: "/Universal Remotes.png",
    url: "https://www.liftmaster.com/2-button-universal-remote-control/p/380UTMC",
  },
  {
    id: 4,
    name: "Key Pads",
    image: "/Key Pads.png",
    url: "https://www.liftmaster.com/keyless-wireless-entry-system/c/wireless-keyless-entry-systems#tab=products",
  },
  {
    id: 5,
    name: "Wall Controls",
    image: "/Wall Controls.png",
    url: "https://www.liftmaster.com/accessories/c/control-panels#tab=products",
  },
  {
    id: 6,
    name: "MYQ Accessories",
    image: "/MYQ Accessories.png",
    url: "https://www.liftmaster.com/accessories/c/myq-accessories#tab=products",
  },
];

export default function OpenersAccessoriesSection() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight">
        <span className="text-green-500">GARAGE DOOR</span> OPENER
        <br />
        ACCESSORIES & REMOTES
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <a key={product.id} href={product.url} target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.05]">
            <div className="relative bg-gray-100 aspect-[4/3] flex items-center justify-center">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold transition-colors duration-300 group-hover:text-primary">{product.name}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
