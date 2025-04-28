// import { cn } from "@/lib/utils";
// import { Award, Clock, Linkedin, Mail, Phone, Shield, Star } from "lucide-react";
// import Image from "next/image";

// // Team member data with rich content for SEO
// const teamMembers = [
//   {
//     name: "Colby Tolbert",
//     role: "Founder & CEO",
//     image: "/tolbert.jpg",
//     bio: "Founded Tolbert Garage Door with a vision to provide exceptional service and quality craftsmanship to the DFW area. With over 20 years of industry experience, Colby personally trains each technician to ensure the highest standards.",
//     expertise: ["Garage Door Installation", "Business Development", "Customer Service"],
//     certifications: ["IDA Certified Technician", "IDEA Dealer", "Licensed & Insured"],
//     contact: {
//       email: "colby@tolbertgaragedoor.com",
//       phone: "(469)-909-0956",
//       linkedin: "https://linkedin.com/in/colby-tolbert",
//     },
//   },
//   {
//     name: "Brandon",
//     role: "Lead Technician",
//     image: "/employee1.png",
//     bio: "With his technical expertise and customer-first approach, Brandon has earned our Employee of the Year award. He specializes in complex installations and troubleshooting, with a perfect customer satisfaction record.",
//     expertise: ["Spring Replacement", "Opener Installation", "Troubleshooting"],
//     certifications: ["IDA Certified", "LiftMaster Certified", "5-Star Rating"],
//     contact: {
//       email: "brandon@tolbertgaragedoor.com",
//       phone: "(469)-909-0956",
//       linkedin: "https://linkedin.com/in/brandon",
//     },
//   },
//   {
//     name: "Habibur Rahman",
//     role: "Web Developer & SEO Specialist",
//     image: "/habibur rahman.jpeg",
//     bio: "Habibur ensures our online presence is optimized, helping customers find our services when they need them most. His expertise in digital marketing has helped grow our business and connect with more homeowners in need.",
//     expertise: ["SEO Optimization", "Web Development", "Digital Marketing"],
//     certifications: ["Google Certified", "WordPress Expert", "Technical SEO"],
//     contact: {
//       email: "habibur@tolbertgaragedoor.com",
//       phone: "(469)-909-0956",
//       linkedin: "https://linkedin.com/in/habibur-rahman",
//     },
//   },
//   {
//     name: "Little Tolbert",
//     role: "Operations Manager",
//     image: "/tolbert2.png",
//     bio: "Oversees daily operations and ensures every project meets our high standards of quality and customer satisfaction. His attention to detail and commitment to excellence has helped build our reputation for reliability.",
//     expertise: ["Team Management", "Quality Control", "Customer Relations"],
//     certifications: ["Project Management", "Customer Service Excellence", "Safety Certified"],
//     contact: {
//       email: "manager@tolbertgaragedoor.com",
//       phone: "(469)-909-0956",
//       linkedin: "https://linkedin.com/in/little-tolbert",
//     },
//   },
// ];

// // Company values for the team section
// const companyValues = [
//   {
//     icon: <Star className="h-6 w-6 text-[#32750a]" />,
//     title: "Excellence",
//     description: "We strive for excellence in every job, no matter how big or small.",
//   },
//   {
//     icon: <Shield className="h-6 w-6 text-[#32750a]" />,
//     title: "Integrity",
//     description: "Honest pricing, transparent communication, and doing what we promise.",
//   },
//   {
//     icon: <Clock className="h-6 w-6 text-[#32750a]" />,
//     title: "Reliability",
//     description: "On-time service, responsive communication, and dependable results.",
//   },
//   {
//     icon: <Award className="h-6 w-6 text-[#32750a]" />,
//     title: "Expertise",
//     description: "Continuous training and certification for all our technicians.",
//   },
// ];

// export default function TeamShowcase() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <span className="px-4 py-1 rounded-full bg-[#32750a]/10 text-[#32750a] text-sm font-medium">Our Team</span>
//           <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
//             Meet the <span className="text-[#32750a]">Experts</span>
//           </h2>
//           <div className="h-1 w-20 bg-[#32750a] mx-auto mb-6"></div>
//           <p className="max-w-2xl mx-auto text-gray-600">Our passionate team of professionals is dedicated to providing exceptional garage door services with expertise and care. Get to know the people behind our 5-star service.</p>
//         </div>

//         {/* Team members */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//           {teamMembers.map((member, index) => (
//             <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
//               <div className="relative h-64">
//                 <Image src={member.image || "/placeholder.svg"} alt={`${member.name} - ${member.role} at Tolbert Garage Door`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
//                   <h3 className="text-white text-xl font-bold">{member.name}</h3>
//                   <p className="text-white/90">{member.role}</p>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

//                 <div className="mb-4">
//                   <h4 className="text-sm font-semibold text-gray-800 mb-2">Expertise</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {member.expertise.map((skill, i) => (
//                       <span key={i} className="inline-block bg-[#32750a]/10 text-[#32750a] text-xs font-medium px-2.5 py-0.5 rounded-full">
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="pt-4 border-t border-gray-100 flex justify-between">
//                   <a href={`mailto:${member.contact.email}`} className="p-2 bg-[#32750a]/10 rounded-full hover:bg-[#32750a]/20 transition-colors" aria-label={`Email ${member.name}`}>
//                     <Mail className="h-4 w-4 text-[#32750a]" />
//                   </a>
//                   <a href={`tel:${member.contact.phone.replace(/[^0-9]/g, "")}`} className="p-2 bg-[#32750a]/10 rounded-full hover:bg-[#32750a]/20 transition-colors" aria-label={`Call ${member.name}`}>
//                     <Phone className="h-4 w-4 text-[#32750a]" />
//                   </a>
//                   <a href={member.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#32750a]/10 rounded-full hover:bg-[#32750a]/20 transition-colors" aria-label={`${member.name}'s LinkedIn profile`}>
//                     <Linkedin className="h-4 w-4 text-[#32750a]" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Company values */}
//         <div className="bg-gray-50 rounded-xl p-8 max-w-5xl mx-auto">
//           <h3 className="text-2xl font-bold text-center mb-8">Our Values</h3>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {companyValues.map((value, index) => (
//               <div key={index} className={cn("bg-white p-6 rounded-lg shadow-sm border border-gray-100", "hover:shadow-md transition-shadow text-center")}>
//                 <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#32750a]/10 mb-4">{value.icon}</div>
//                 <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
//                 <p className="text-gray-600 text-sm">{value.description}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 text-center">
//             <p className="text-gray-600">Our team is committed to these core values in every interaction and service we provide.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Clock, Home, Linkedin, Mail, MapPin, Phone, PenToolIcon as Tool, Users } from "lucide-react";
import Image from "next/image";

// Team member data with rich content for SEO
const teamMembers = [
  {
    name: "Colby Tolbert",
    role: "Founder & CEO",
    image: "/tolbert.jpg",
    bio: "Founded Tolbert Garage Door with a vision to provide exceptional service and quality craftsmanship to the DFW area. With over 20 years of industry experience, Colby personally trains each technician to ensure the highest standards.",
    contact: {
      email: "colby@tolbertgaragedoor.com",
      phone: "(469)-909-0956",
      linkedin: "https://linkedin.com/in/colby-tolbert",
    },
    stats: {
      experience: "20+ years",
      projects: "5,000+",
      rating: "5.0",
    },
  },
  {
    name: "Brandon",
    role: "Lead Technician",
    image: "/employee1.png",
    bio: "With his technical expertise and customer-first approach, Brandon has earned our Employee of the Year award. He specializes in complex installations and troubleshooting, with a perfect customer satisfaction record.",
    contact: {
      email: "brandon@tolbertgaragedoor.com",
      phone: "(469)-909-0956",
      linkedin: "https://linkedin.com/in/brandon",
    },
    stats: {
      experience: "12+ years",
      projects: "850+",
      rating: "5",
    },
  },
  {
    name: "Habibur Rahman",
    role: "Web Developer & SEO Specialist(IT Specialist)",
    image: "/habibur rahman.jpeg",
    bio: "Habibur ensures our online presence is optimized, helping customers find our services when they need them most. His expertise in digital marketing has helped grow our business and connect with more homeowners in need.",
    contact: {
      email: "habibur@tolbertgaragedoor.com",
      phone: "(469)-909-0956",
      linkedin: "https://linkedin.com/in/habibur-rahman",
    },
    stats: {
      experience: "2+ years",
      projects: "10+",
      rating: "5",
    },
  },
  {
    name: "Jaxon Tolbert",
    role: "Operations Manager",
    image: "/tolbert2.png",
    bio: "Oversees daily operations and ensures every project meets our high standards of quality and customer satisfaction. His attention to detail and commitment to excellence has helped build our reputation for reliability.",
    contact: {
      email: "manager@tolbertgaragedoor.com",
      phone: "(469)-909-0956",
      linkedin: "https://linkedin.com/in/little-tolbert",
    },
    stats: {
      experience: "1 years",
      projects: "2+",
      rating: "5",
    },
  },
];

// Team achievements
const achievements = [
  { number: "5,000+", label: "Completed Projects" },
  { number: "100%", label: "Customer Satisfaction" },
  { number: "24/7", label: "Emergency Service" },
  { number: "15+", label: "Years of Experience" },
];

export default function TeamShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Team header with enhanced styling */}
        <div className="relative text-center mb-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
          <div className="relative">
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Users className="h-4 w-4 mr-2" />
              Our Expert Team
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Meet the{" "}
              <span className="text-primary relative inline-block">
                Professionals
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/30"></span>
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">Our passionate team of professionals is dedicated to providing exceptional garage door services with expertise and care. Get to know the people behind our 5-star service.</p>
          </div>
        </div>

        {/* Team achievements banner */}
        <div className="bg-gradient-to-r from-primary/90 to-primary rounded-2xl p-8 mb-16 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{item.number}</div>
                <div className="text-white/80 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced team member cards - with full bio and no expertise section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Image container with overlay animation */}
              <div className="relative h-72 overflow-hidden group rounded-xl">
                <Image src={member.image || "/placeholder.svg"} alt={`${member.name} - ${member.role} at Tolbert Garage Door`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className={`object-cover object-top transition-all duration-700 ease-in-out ${member.name === "Habibur Rahman" ? "scale-120 group-hover:scale-100 !object-center" : "group-hover:object-center group-hover:scale-100"}`} />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-bold">{member.name}</h3>
                  <p className="text-white/90">{member.role}</p>
                </div>

                {/* Certification badge */}
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">Certified</div>
              </div>

              {/* Content with enhanced styling */}
              <div className="p-6">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 mb-4 bg-gray-50 -mx-6 -mt-6 p-4 border-b border-gray-100">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-primary">{member.stats.experience}</div>
                    <div className="text-xs text-gray-500">Experience</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-sm font-semibold text-primary">{member.stats.projects}</div>
                    <div className="text-xs text-gray-500">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-primary">{member.stats.rating}</div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                </div>

                {/* Bio with full text */}
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                {/* Contact buttons with enhanced styling */}
                <div className="pt-4 border-t border-gray-100 flex justify-center gap-4">
                  {[
                    { href: `mailto:${member.contact.email}`, icon: <Mail className="h-5 w-5" />, label: `Email ${member.name}` },
                    { href: `tel:${member.contact.phone.replace(/[^0-9]/g, "")}`, icon: <Phone className="h-5 w-5" />, label: `Call ${member.name}` },
                    { href: member.contact.linkedin, icon: <Linkedin className="h-5 w-5" />, label: `${member.name}'s LinkedIn profile`, external: true },
                  ].map((item, index) => (
                    <a key={index} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-white text-primary transition-all duration-300 ease-in-out transform hover:scale-110 shadow-sm hover:shadow-md" aria-label={item.label}>
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us section */}
        <div className="max-w-6xl mx-auto mb-20 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-[1fr,2fr]">
            <div className="bg-primary p-10 flex items-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-10 text-center">WHY CHOOSE A PROFESSIONAL GARAGE DOOR COMPANY?</h2>
            </div>

            <div className="grid grid-cols-2 divide-x divide-y border-l border-gray-200">
              <div className="p-8 flex flex-col items-center text-center hover:bg-gray-50 transition-colors">
                <div className="mb-4">
                  <Tool className="h-12 w-12 text-primary" />
                </div>
                <p className="text-gray-700 font-medium">Licensed, Highly Trained, Experienced Garage Door Repair Technicians</p>
              </div>

              <div className="p-8 flex flex-col items-center text-center hover:bg-gray-50 transition-colors">
                <div className="mb-4">
                  <Clock className="h-12 w-12 text-primary" />
                </div>
                <p className="text-gray-700 font-medium">Emergency 24-Hour Garage Door Services for Residential & Commercial Customers</p>
              </div>

              <div className="p-8 flex flex-col items-center text-center hover:bg-gray-50 transition-colors">
                <div className="mb-4">
                  <Home className="h-12 w-12 text-primary" />
                </div>
                <p className="text-gray-700 font-medium">Reliable Garage Door Expertise Providing Total Customer Satisfaction</p>
              </div>

              <div className="p-8 flex flex-col items-center text-center hover:bg-gray-50 transition-colors">
                <div className="mb-4">
                  <MapPin className="h-12 w-12 text-primary" />
                </div>
                <p className="text-gray-700 font-medium">Locally Available Technicians for Timely and Cost Effective Garage Door repairs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
