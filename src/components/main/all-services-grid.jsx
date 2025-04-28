import { AlertTriangle, Building2, DoorClosed, Settings, PenToolIcon as Tool, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AllServicesGrid() {
  // Original services with short descriptions
  const services = [
    {
      id: "repairs",
      title: "Garage Door Repairs",
      description: "Fast, reliable repairs for all issues",
      icon: <Tool className="h-6 w-6" />,
      href: "/services/repairs",
    },
    {
      id: "installation",
      title: "New Door Installation",
      description: "Premium doors professionally installed",
      icon: <DoorClosed className="h-6 w-6" />,
      href: "/services/installation",
    },
    {
      id: "openers",
      title: "Garage Door Openers",
      description: "Smart, reliable opener solutions",
      icon: <Settings className="h-6 w-6" />,
      href: "/services/openers",
    },
    {
      id: "maintenance",
      title: "Maintenance & Tune-Ups",
      description: "Preventative care for longer lifespan",
      icon: <Wrench className="h-6 w-6" />,
      href: "/services/maintenance",
    },
    {
      id: "commercial",
      title: "Commercial Services",
      description: "Solutions for business facilities",
      icon: <Building2 className="h-6 w-6" />,
      href: "/services/commercial",
    },
    {
      id: "emergency",
      title: "Emergency Service",
      description: "24/7 urgent repair assistance",
      icon: <AlertTriangle className="h-6 w-6" />,
      href: "/services/emergency",
    },
  ];

  // Categories with short descriptions
  const categories = [
    {
      id: "garage-door-openers",
      title: "Openers",
      description: "Reliable, smart control systems",
      image: "/Openers.png",
      href: "/garage-door-openers",
    },
    {
      id: "garage-door",
      title: "Doors",
      description: "Stylish, durable door options",
      image: "/Doors.png",
      href: "/garage-door",
    },
    {
      id: "garage-door-spring",
      title: "Springs",
      description: "High-quality replacement springs",
      image: "/Springs.png",
      href: "/garage-door-spring",
    },
    {
      id: "garage-door-screen",
      title: "Screens",
      description: "Versatile, protective screens",
      image: "/Screens.png",
      href: "/garage-door-screen",
    },
    {
      id: "garage-door-gate",
      title: "Gates",
      description: "Secure, automated gate systems",
      image: "/Gates.png",
      href: "/garage-door-gate",
    },
    {
      id: "commercial-door-systems",
      title: "Commercial Doors",
      description: "Heavy-duty business solutions",
      image: "/Commercial Doors.png",
      href: "/commercial-door-systems",
    },
    {
      id: "parts",
      title: "Parts",
      description: "Quality replacement components",
      image: "/Parts.png",
      href: "/garage-door-spring",
    },
    {
      id: "storage-unit-doors-repair",
      title: "Storage Units",
      description: "Specialized storage door systems",
      image: "/Storage Units.png",
      href: "/storage-unit-doors-repair",
    },
    {
      id: "storage-bin-racks",
      title: "Storage Bin Racks",
      description: "Organized storage solutions",
      image: "/Storage Bin Racks.png",
      href: "/storage-bin-racks",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Professional Services</h2>

      {/* Services Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {services.map((service) => (
          <Link key={service.id} href={service.href} className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-[#32750a] hover:shadow-md transition-all group">
            <div className="mx-auto w-12 h-12 rounded-full bg-[#32750a]/10 flex items-center justify-center mb-3 group-hover:bg-[#32750a]/20 transition-colors">{service.icon}</div>
            <h3 className="font-medium text-gray-900 group-hover:text-[#32750a] transition-colors">{service.title}</h3>
            <p className="text-gray-500 text-sm mt-1 line-clamp-2">{service.description}</p>
          </Link>
        ))}
      </div>

      {/* Divider */}
      <div className="relative my-12">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-xl text-gray-500">PRODUCT & SERVICE CATEGORIES</span>
        </div>
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link key={category.id} href={category.href} className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-[#32750a] hover:shadow-md transition-all group">
            <div className="mx-auto w-16 h-16 relative mb-3 overflow-hidden rounded-full">
              <Image src={category.image || "/placeholder.svg"} alt={category.title} fill className="object-cover" sizes="64px" />
            </div>
            <h3 className="font-medium text-gray-900 group-hover:text-[#32750a] transition-colors">{category.title}</h3>
            <p className="text-gray-500 text-sm mt-1 line-clamp-2">{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
