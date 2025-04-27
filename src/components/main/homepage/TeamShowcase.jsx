import { cn } from "@/lib/utils";
import { Award, Clock, Linkedin, Mail, Phone, Shield, Star } from "lucide-react";
import Image from "next/image";

// Team member data with rich content for SEO
const teamMembers = [
  {
    name: "Colby Tolbert",
    role: "Founder & CEO",
    image: "/tolbert.jpg",
    bio: "Founded Tolbert Garage Door with a vision to provide exceptional service and quality craftsmanship to the DFW area. With over 20 years of industry experience, Colby personally trains each technician to ensure the highest standards.",
    expertise: ["Garage Door Installation", "Business Development", "Customer Service"],
    certifications: ["IDA Certified Technician", "IDEA Dealer", "Licensed & Insured"],
    contact: {
      email: "colby@tolbertgaragedoor.com",
      phone: "(469)-909-0956",
      linkedin: "https://linkedin.com/in/colby-tolbert",
    },
  },
  {
    name: "Brandon",
    role: "Lead Technician",
    image: "/employee1.png",
    bio: "With his technical expertise and customer-first approach, Brandon has earned our Employee of the Year award. He specializes in complex installations and troubleshooting, with a perfect customer satisfaction record.",
    expertise: ["Spring Replacement", "Opener Installation", "Troubleshooting"],
    certifications: ["IDA Certified", "LiftMaster Certified", "5-Star Rating"],
    contact: {
      email: "brandon@tolbertgaragedoor.com",
      phone: "(469)-909-0956",
      linkedin: "https://linkedin.com/in/brandon",
    },
  },
  {
    name: "Habibur Rahman",
    role: "Web Developer & SEO Specialist",
    image: "/habibur rahman.jpeg",
    bio: "Habibur ensures our online presence is optimized, helping customers find our services when they need them most. His expertise in digital marketing has helped grow our business and connect with more homeowners in need.",
    expertise: ["SEO Optimization", "Web Development", "Digital Marketing"],
    certifications: ["Google Certified", "WordPress Expert", "Technical SEO"],
    contact: {
      email: "habibur@tolbertgaragedoor.com",
      phone: "(469)-909-0956",
      linkedin: "https://linkedin.com/in/habibur-rahman",
    },
  },
  {
    name: "Little Tolbert",
    role: "Operations Manager",
    image: "/tolbert2.png",
    bio: "Oversees daily operations and ensures every project meets our high standards of quality and customer satisfaction. His attention to detail and commitment to excellence has helped build our reputation for reliability.",
    expertise: ["Team Management", "Quality Control", "Customer Relations"],
    certifications: ["Project Management", "Customer Service Excellence", "Safety Certified"],
    contact: {
      email: "manager@tolbertgaragedoor.com",
      phone: "(469)-909-0956",
      linkedin: "https://linkedin.com/in/little-tolbert",
    },
  },
];

// Company values for the team section
const companyValues = [
  {
    icon: <Star className="h-6 w-6 text-[#32750a]" />,
    title: "Excellence",
    description: "We strive for excellence in every job, no matter how big or small.",
  },
  {
    icon: <Shield className="h-6 w-6 text-[#32750a]" />,
    title: "Integrity",
    description: "Honest pricing, transparent communication, and doing what we promise.",
  },
  {
    icon: <Clock className="h-6 w-6 text-[#32750a]" />,
    title: "Reliability",
    description: "On-time service, responsive communication, and dependable results.",
  },
  {
    icon: <Award className="h-6 w-6 text-[#32750a]" />,
    title: "Expertise",
    description: "Continuous training and certification for all our technicians.",
  },
];

export default function TeamShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full bg-[#32750a]/10 text-[#32750a] text-sm font-medium">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
            Meet the <span className="text-[#32750a]">Experts</span>
          </h2>
          <div className="h-1 w-20 bg-[#32750a] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">Our passionate team of professionals is dedicated to providing exceptional garage door services with expertise and care. Get to know the people behind our 5-star service.</p>
        </div>

        {/* Team members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image src={member.image || "/placeholder.svg"} alt={`${member.name} - ${member.role} at Tolbert Garage Door`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-bold">{member.name}</h3>
                  <p className="text-white/90">{member.role}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, i) => (
                      <span key={i} className="inline-block bg-[#32750a]/10 text-[#32750a] text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex justify-between">
                  <a href={`mailto:${member.contact.email}`} className="p-2 bg-[#32750a]/10 rounded-full hover:bg-[#32750a]/20 transition-colors" aria-label={`Email ${member.name}`}>
                    <Mail className="h-4 w-4 text-[#32750a]" />
                  </a>
                  <a href={`tel:${member.contact.phone.replace(/[^0-9]/g, "")}`} className="p-2 bg-[#32750a]/10 rounded-full hover:bg-[#32750a]/20 transition-colors" aria-label={`Call ${member.name}`}>
                    <Phone className="h-4 w-4 text-[#32750a]" />
                  </a>
                  <a href={member.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#32750a]/10 rounded-full hover:bg-[#32750a]/20 transition-colors" aria-label={`${member.name}'s LinkedIn profile`}>
                    <Linkedin className="h-4 w-4 text-[#32750a]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company values */}
        <div className="bg-gray-50 rounded-xl p-8 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Our Values</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <div key={index} className={cn("bg-white p-6 rounded-lg shadow-sm border border-gray-100", "hover:shadow-md transition-shadow text-center")}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#32750a]/10 mb-4">{value.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">Our team is committed to these core values in every interaction and service we provide.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
