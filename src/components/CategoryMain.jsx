import CategoryCard from "./main/homepage/category-card";

const categories = [
  {
    id: 1,
    title: "Openers",
    image: "/Openers.png",
    size: "large",
    href: "/garage-door-openers",
  },
  {
    id: 2,
    title: "Doors",
    image: "/Doors.png",
    size: "medium",
    href: "/garage-door",
  },
  {
    id: 3,
    title: "Springs",
    image: "/Springs.png",
    size: "medium",
    href: "/garage-door-spring",
  },
  {
    id: 4,
    title: "Screens",
    image: "/Screens.png",
    size: "wide",
    href: "/garage-door-screen",
  },
  {
    id: 5,
    title: "Gates",
    image: "/Gates.png",
    size: "wide",
    href: "/garage-door-gate",
  },
  {
    id: 6,
    title: "Commercial Doors",
    image: "/Commercial Doors.png",
    size: "wide",
    href: "/commercial-door-systems",
  },
  {
    id: 7,
    title: "Parts",
    image: "/Parts.png",
    size: "medium",
    href: "/garage-door-spring",
  },
  {
    id: 8,
    title: "Storage Units",
    image: "/Storage Units.png",
    size: "medium",
    href: "/storage-unit-doors-repair",
  },
  {
    id: 9,
    title: "Storage Bin Racks",
    image: "/Storage Bin Racks.png",
    size: "medium",
    href: "/storage-bin-racks",
  },
];

export default function CategoryMain() {
  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
            Our <span className="text-[#32750a]">Product</span> Categories
          </h1>
          <div className="w-24 h-1 bg-[#32750a] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Browse our extensive selection of high-quality products designed for durability and performance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} title={category.title} image={category.image} size={category.size} href={category.href} />
          ))}
        </div>
      </div>
    </div>
  );
}
