import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Wall Mount Opener",
    image: "/Wall Mount Opener.png",
    href: "https://www.liftmaster.com/garage-door-openers/c/wall-mount-garage-door-openers",
  },
  {
    title: "Belt Openers",
    image: "/Belt Openers.png",
    href: "https://www.liftmaster.com/garage-door-openers/c/belt-drive-openers",
  },
  {
    title: "Chain Drive Openers",
    image: "/Chain Drive Openers.png",
    href: "https://www.liftmaster.com/garage-door-openers/c/chain-drive-openers",
  },
  {
    title: "Smart Openers",
    image: "/Smart Openers.png",
    href: "https://www.liftmaster.com/garage-door-openers/c/smart-garage-door-openers",
  },
];

export function OpenersProductGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-4">
        THE MOST <span className="text-green-500">ADVANCED OPENERS</span> AVAILABLE
      </h2>
      <p className="text-center text-lg mb-12 max-w-3xl mx-auto">Strong. Quiet. Versatile. Choose from the best in smart home and security features to simplify your life, stay connected to home and protect what matters most.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.title} className="text-center">
            <Link href={product.href} target="_blank" className="block">
              <Image src={product.image || "/placeholder.svg"} alt={product.title} width={250} height={250} className="w-full rounded-md max-h-52 mb-4" />
              <h3 className="font-bold text-xl">{product.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
