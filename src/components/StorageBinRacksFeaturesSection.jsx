const features = [
  {
    title: "Versatile Installation",
    description: "Suitable for finished and unfinished ceilings in garages, sheds, and basements.",
    icon: "🏠",
  },
  {
    title: "Compatible Storage",
    description: "Designed for use with HDX Tough Totes and Husky Latch and Stack Totes.",
    icon: "📦",
  },
  {
    title: "Easy Access",
    description: "Totes slide in and out effortlessly for convenient storage and retrieval.",
    icon: "🔄",
  },
  {
    title: "Durable Finish",
    description: "Features a powder-coated black finish for long-lasting durability.",
    icon: "🔨",
  },
  {
    title: "Flexible Configuration",
    description: "Install as an 86-inch long rail system or two 42-inch long rail systems.",
    icon: "📏",
  },
];

export default function StorageBinRacksFeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
