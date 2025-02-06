import Image from "next/image";
import Link from "next/link";

export function CategoryCard({ title, image, size = "medium" }) {
  const sizeClasses = {
    large: "col-span-2 row-span-2",
    medium: "col-span-1 row-span-1",
    wide: "col-span-2 row-span-1",
  };

  return (
    <Link href={`/categories/${title.toLowerCase().replace(/ /g, "-")}`} className={`${sizeClasses[size]} group relative overflow-hidden rounded-lg bg-gray-100 group-hover:shadow-lg`}>
      <div className={`relative ${size === "large" ? "aspect-square" : "aspect-[4/3]"} w-full`}>
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-300 transform group-hover:scale-110" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>
    </Link>
  );
}
