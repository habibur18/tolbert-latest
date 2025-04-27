import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Service area data with SEO-optimized content
const serviceAreas = [
  {
    id: "dallas",
    name: "Dallas",
    county: "Dallas County",
    population: "1.3M+",
    mainCity: "Dallas",
    image: "/home/garage door services in dallas  Tolbert garage Door repair.jpg",
    description: "Fast garage door repair and installation throughout Dallas. Same-day service available.",
    neighborhoods: ["Uptown", "Downtown", "Lake Highlands", "Oak Cliff", "Preston Hollow"],
    zipCodes: ["75201", "75204", "75214", "75218", "75225", "75230", "75240", "75243"],
  },
  {
    id: "fort-worth",
    name: "Fort Worth",
    county: "Tarrant County",
    population: "900K+",
    mainCity: "Fort Worth",
    image: "/home/Garage door service in Fort Worth, TX Tolbert Garage Door.jpg",
    description: "Comprehensive garage door services for Fort Worth residents and businesses.",
    neighborhoods: ["Downtown", "Westover Hills", "Ridglea", "Fairmount", "Arlington Heights"],
    zipCodes: ["76102", "76107", "76109", "76110", "76116", "76123", "76132", "76137"],
  },
  {
    id: "plano",
    name: "Plano",
    county: "Collin County",
    population: "285K+",
    mainCity: "Plano",
    image: "/home/Garage door service in Plano, TX by Tolbert Garage Door Repair.jpg",
    description: "Expert garage door installation and repair services throughout Plano.",
    neighborhoods: ["Legacy", "Downtown", "Willow Bend", "Preston Ridge", "Shops at Legacy"],
    zipCodes: ["75023", "75024", "75025", "75074", "75075", "75093", "75094"],
  },
  {
    id: "frisco",
    name: "Frisco",
    county: "Collin/Denton County",
    population: "200K+",
    mainCity: "Frisco",
    image: "/home/Garage door service in Frisco, TX by Tolbert Garage door.jpg",
    description: "Premium garage door solutions for Frisco's growing communities.",
    neighborhoods: ["Starwood", "Stonebriar", "Phillips Creek Ranch", "Richwoods", "Frisco Square"],
    zipCodes: ["75033", "75034", "75035", "75036"],
  },
  {
    id: "arlington",
    name: "Arlington",
    county: "Tarrant County",
    population: "395K+",
    mainCity: "Arlington",
    image: "/home/Garage door service in Arlington, TX by tolbert garage door repair.jpg",
    description: "Reliable garage door repair and installation services in Arlington.",
    neighborhoods: ["North Arlington", "South Arlington", "East Arlington", "West Arlington", "Central Arlington"],
    zipCodes: ["76001", "76002", "76006", "76010", "76011", "76012", "76013", "76014", "76015", "76016", "76017", "76018"],
  },
  {
    id: "irving",
    name: "Irving",
    county: "Dallas County",
    population: "240K+",
    mainCity: "Irving",
    image: "/home/Garage door service in Irving, TX by tolbert garage door.jpg",
    description: "Complete garage door services for Irving homes and businesses.",
    neighborhoods: ["Las Colinas", "Valley Ranch", "South Irving", "North Irving", "Irving Heights"],
    zipCodes: ["75014", "75038", "75039", "75060", "75061", "75062", "75063"],
  },
  {
    id: "mesquite",
    name: "Mesquite",
    county: "Dallas County",
    population: "140K+",
    mainCity: "Mesquite",
    image: "/home/Garage door service in Mesquite, TX by tolbert garage door repair.jpg",
    description: "Professional garage door repair and installation throughout Mesquite.",
    neighborhoods: ["Creek Crossing", "Lawson", "Cantura Mills", "Peachtree", "Skyline"],
    zipCodes: ["75149", "75150", "75181", "75182", "75185"],
  },
  {
    id: "mckinney",
    name: "McKinney",
    county: "Collin County",
    population: "200K+",
    mainCity: "McKinney",
    image: "/home/Garage door service in McKinney, TX by tolbert garage door repair.jpg",
    description: "Expert garage door services for McKinney's historic and modern homes.",
    neighborhoods: ["Historic Downtown", "Stonebridge Ranch", "Trinity Falls", "Craig Ranch", "Adriatica"],
    zipCodes: ["75069", "75070", "75071"],
  },
];

export default function LocalServiceAreas() {
  return (
    <section id="service-areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full bg-[#32750a]/10 text-[#32750a] text-sm font-medium">Service Areas</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
            Serving the Entire <span className="text-[#32750a]">DFW Metroplex</span>
          </h2>
          <div className="h-1 w-20 bg-[#32750a] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">Our team of certified technicians provides fast, reliable garage door services throughout the Dallas-Fort Worth area.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceAreas.map((area) => (
            <Link key={area.id} href={`/garage-door-service-areas/${area.id}`} className="group block bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image src={area.image || "/placeholder.svg"} alt={`Garage door service in ${area.name}, TX`} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover object-[center_-70px] group-hover:scale-105 transition-transform duration-300" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4">
                    <h3 className="text-white text-xl font-bold">{area.name}</h3>
                    <p className="text-white/80 text-sm">{area.county}</p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="h-5 w-5 text-[#32750a] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Service Coverage</p>
                    <p className="text-sm text-gray-600">{area.description}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="h-4 w-4 text-gray-400" />
                    <span>Main City: {area.mainCity}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span>Population: {area.population}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center text-[#32750a] font-medium">
                  <span>View Service Details</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Don't see your area? We likely still service your location! Our service area extends throughout the entire Dallas-Fort Worth metroplex.</p>
          <Button className="bg-[#32750a] hover:bg-[#2b6309]">Check If We Service Your Area</Button>
        </div>
      </div>
    </section>
  );
}
