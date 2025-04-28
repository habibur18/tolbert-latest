import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle, DoorClosed, Settings, PenToolIcon as Tool, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AllServicesGrid from "../all-services-grid";

const services = [
  {
    id: "repairs",
    name: "Garage Door Repairs",
    icon: <Tool className="h-6 w-6" />,
    description: "Fast, reliable repairs for all garage door issues. We fix springs, cables, openers, and more.",
    image: "/home/solutions/garage door repair by tolbert garage door repair.jpg",
    features: ["Same-day service available", "90-day labor warranty", "Lifetime warranty on parts", "All major brands serviced"],
    commonIssues: [
      { name: "Broken Springs", time: "1-2 hours" },
      { name: "Opener Repair", time: "1 hour" },
      { name: "Cable Replacement", time: "1-2 hours" },
      { name: "Track Alignment", time: "1 hour" },
    ],
  },
  {
    id: "installation",
    name: "New Door Installation",
    icon: <DoorClosed className="h-6 w-6" />,
    description: "Premium garage doors installed by certified technicians. Choose from a wide range of styles and materials.",
    image: "/home/solutions/Tolbert garage door men employee installing garage door at Roehl Transport Inc.jpg",
    features: ["Free in-home consultation", "Professional installation", "5-year installation warranty", "Financing available"],
    doorTypes: [
      { name: "Steel Doors", features: "Durable, insulated, low-maintenance" },
      { name: "Wood Doors", features: "Classic look, customizable, premium" },
      { name: "Aluminum/Glass", features: "Modern, lightweight, stylish" },
      { name: "Carriage House", features: "Elegant, distinctive, high-end" },
    ],
  },
  {
    id: "openers",
    name: "Garage Door Openers",
    icon: <Settings className="h-6 w-6" />,
    description: "Smart, reliable garage door openers with the latest technology for smooth and quiet operation.",
    image: "/home/solutions/tolbert garage door man setup garage door openers.jpg",
    features: ["Professional installation", "WiFi & smartphone compatible", "Battery backup options", "Quiet operation models"],
    openerTypes: [
      { name: "Chain Drive", features: "Economical, reliable, standard" },
      { name: "Belt Drive", features: "Ultra quiet, smooth, premium" },
      { name: "Smart Openers", features: "WiFi, camera, smartphone control" },
      { name: "Commercial Grade", features: "Heavy-duty, high-cycle, durable" },
    ],
  },
  {
    id: "maintenance",
    name: "Maintenance & Tune-Ups",
    icon: <Wrench className="h-6 w-6" />,
    description: "Preventative maintenance to keep your garage door operating safely and extend its lifespan.",
    image: "/home/solutions/Garage-Door-Tune-Up by Tolbert Garage Door.webp",
    features: ["21-point inspection", "Lubrication of moving parts", "Hardware tightening", "Safety sensor alignment"],
    plans: [
      { name: "Basic Tune-Up", includes: "Inspection, lubrication, adjustment" },
      { name: "Premium Tune-Up", includes: "Basic + parts replacement, sensor alignment" },
      { name: "Annual Plan", includes: "2 tune-ups per year, priority service" },
      { name: "Commercial Plan", includes: "Quarterly maintenance, emergency service" },
    ],
  },
];

export default function ServiceCategories() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full bg-[#32750a]/10 text-[#32750a] text-sm font-medium">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
            Complete <span className="text-[#32750a]">Garage Door</span> Solutions
          </h2>
          <div className="h-1 w-20 bg-[#32750a] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">From emergency repairs to new installations, we provide comprehensive garage door services with upfront pricing and no hidden fees.</p>
        </div>

        <Tabs defaultValue="repairs" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto mb-8">
            {services.map((service) => (
              <TabsTrigger key={service.id} value={service.id} className={cn("flex flex-col items-center gap-2 p-4 rounded-lg data-[state=active]:bg-white", "border border-gray-200 shadow-sm data-[state=active]:shadow-md", "data-[state=active]:border-[#32750a]  data-[state=active]:font-bold transition-all duration-200 data-[state=active]:border-[3px]", "h-auto")}>
                <div className={cn("p-2 rounded-full", "bg-gray-100 data-[state=active]:bg-[#32750a]/10", "text-gray-600 data-[state=active]:text-[#32750a]")}>{service.icon}</div>
                <span className="text-sm font-medium">{service.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-0">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2">
                  {/* Service image */}
                  <div className="relative h-64 md:h-auto">
                    <Image src={service.image || "/placeholder.svg"} alt={service.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-white text-2xl font-bold">{service.name}</h3>
                    </div>
                  </div>

                  {/* Service details */}
                  <div className="p-6 md:p-8">
                    <p className="text-gray-700 mb-6">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Key Benefits</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#32750a] flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Service specific content */}
                    {service.id === "repairs" && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Common Repairs</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.commonIssues.map((issue, i) => (
                            <div key={i} className="bg-gray-50 p-3 rounded-lg">
                              <p className="font-medium">{issue.name}</p>
                              <div className="flex justify-between text-sm text-gray-600">
                                <span>Typical Time: {issue.time}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.id === "installation" && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Door Types</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.doorTypes.map((door, i) => (
                            <div key={i} className="bg-gray-50 p-3 rounded-lg">
                              <p className="font-medium">{door.name}</p>
                              <p className="text-xs text-gray-500 mt-1">{door.features}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.id === "openers" && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Opener Options</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.openerTypes.map((opener, i) => (
                            <div key={i} className="bg-gray-50 p-3 rounded-lg">
                              <p className="font-medium">{opener.name}</p>
                              <p className="text-xs text-gray-500 mt-1">{opener.features}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.id === "maintenance" && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Maintenance Plans</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.plans.map((plan, i) => (
                            <div key={i} className="bg-gray-50 p-3 rounded-lg">
                              <p className="font-medium">{plan.name}</p>
                              <p className="text-xs text-gray-500 mt-1">{plan.includes}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-8">
                      <Button asChild className="bg-[#32750a] hover:bg-[#2b6309] text-white">
                        <Link href={`/services/${service.id}`}>
                          Learn More About {service.name}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Product categories grid for SEO */}
        <AllServicesGrid />
      </div>
    </section>
  );
}
