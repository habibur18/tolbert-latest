export default function ServiceCard({ title, image, services }) {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-green-600/90 to-transparent transition-all duration-300 group-hover:from-green-600/30" />
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="p-4 space-y-2">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-50 p-3 rounded-lg text-gray-700 hover:bg-green-50 transition-colors duration-200">
            {service}
          </div>
        ))}
      </div>
    </div>
  );
}
