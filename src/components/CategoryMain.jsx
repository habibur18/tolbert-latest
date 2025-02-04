import { CategoryCard } from "./ui/category-card";

const categories = [
  {
    id: 1,
    title: "Openers",
    image: "/Openers.png",
    size: "large",
  },
  {
    id: 2,
    title: "Doors",
    image: "/Doors.png",
    size: "medium",
  },
  {
    id: 3,
    title: "Springs",
    image: "/Springs.png",
    size: "medium",
  },
  {
    id: 4,
    title: "Screens",
    image: "/Screens.png",
    size: "wide",
  },
  {
    id: 5,
    title: "Gates",
    image: "/Gates.png",
    size: "wide",
  },
  {
    id: 6,
    title: "Commercial Doors",
    image: "/Commercial Doors.png",
    size: "wide",
  },
  {
    id: 7,
    title: "Parts",
    image: "/Parts.png",
    size: "medium",
  },
  {
    id: 8,
    title: "Storage Units",
    image: "/Storage Units.png",
    size: "medium",
  },
  {
    id: 9,
    title: "Storage Bin Racks",
    image: "/Storage Bin Racks.png",
    size: "medium",
  },
];

export default function CategoryMain() {
  return (
    <div className="min-h-screen bg-white">
      <h1 className="text-5xl font-bold mb-4 text-center">Products Category</h1>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto">
          {categories.map((category) => (
            <CategoryCard key={category.id} title={category.title} image={category.image} size={category.size} />
          ))}
        </div>
      </div>
    </div>
  );
}
