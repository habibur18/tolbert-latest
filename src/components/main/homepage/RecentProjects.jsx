import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const recentProjects = [
  {
    id: "modern-steel-door-installation",
    title: "Modern Steel Door Installation",
    location: "Dallas, TX",
    date: "Last week",
    description: "Installed a new insulated steel garage door with windows for enhanced curb appeal and energy efficiency.",
    image: "/project1.jpg",
    tags: ["Installation", "Steel Door", "Insulated"],
  },
  {
    id: "commercial-warehouse-door-repair",
    title: "Commercial Warehouse Door Repair",
    location: "Fort Worth, TX",
    date: "2 weeks ago",
    description: "Repaired and serviced a high-cycle commercial door for a local warehouse, minimizing business disruption.",
    image: "/project2.jpg",
    tags: ["Commercial", "Repair", "Same-Day Service"],
  },
  {
    id: "smart-opener-upgrade",
    title: "Smart Opener Upgrade",
    location: "Plano, TX",
    date: "3 weeks ago",
    description: "Upgraded an existing garage door with a new smart opener featuring smartphone control and battery backup.",
    image: "/project3.jpg",
    tags: ["Smart Technology", "Opener", "Upgrade"],
  },
];

export default function RecentProjects() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full bg-[#32750a]/10 text-[#32750a] text-sm font-medium">Recent Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
            Our Latest <span className="text-[#32750a]">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-[#32750a] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">Take a look at some of our recent garage door installations and repairs throughout the DFW area.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {recentProjects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group">
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-[#32750a]/10 text-[#32750a] hover:bg-[#32750a]/20">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-[#32750a] transition-colors">{project.title}</h3>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarDays className="h-4 w-4" />
                    <span>{project.date}</span>
                  </div>
                </div>

                <p className="text-gray-600">{project.description}</p>

                <div className="mt-4 text-[#32750a] font-medium flex items-center">
                  <span>View Project Details</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild className="bg-[#32750a] hover:bg-[#2b6309]">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
