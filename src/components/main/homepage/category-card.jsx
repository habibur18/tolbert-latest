import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ title, image, size, href }) {
  // Define the grid span based on size
  const getGridClass = () => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "wide":
        return "md:col-span-2 md:row-span-1";
      default:
        return "col-span-1";
    }
  };

  return (
    <Link href={`${href}`} className={`${getGridClass()} block relative group overflow-hidden bg-gray-200 hover:shadow-md transition-shadow duration-300`}>
      <div
        className={`
        relative w-full
        ${size === "large" ? "aspect-square" : size === "wide" ? "aspect-[2/1]" : "aspect-square"}
      `}
      >
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover rounded" priority />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
          <h2 className="text-white font-medium">{title}</h2>
        </div>

        {/* Explore button */}
        <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-[#32750a] text-white text-xs px-3 py-1 rounded">Explore</span>
        </div>
      </div>
    </Link>
  );
}
