"use client";

import { useContext } from "react";

import ApplicationTimeline from "@/components/application-timeline";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideoSection from "@/components/video-section";
import { jobListings } from "@/lib/job-data";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, MapPin, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import JobCard from "./job-card";

export default function CareerPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState("all");

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === "all" || job.location === selectedLocation;
    const matchesExperience = selectedExperience === "all" || job.experienceLevel === selectedExperience;

    return matchesSearch && matchesDepartment && matchesLocation && matchesExperience;
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=1080&width=1920" alt="Tolbert Garage Door team" fill className="object-cover brightness-[0.4]" priority />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-[#32750a] hover:bg-[#32750a]/90">We're Hiring!</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Join Our Team at Tolbert Garage Door</h1>
            <p className="text-xl text-white/90 mb-8">Build your career with the leading garage door service company. We value skill, dedication, and customer service excellence.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#32750a] hover:bg-[#32750a]/90 text-white" asChild>
                <a href="#openings">View Open Positions</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#32750a]" asChild>
                <a href="#process">Learn About Our Process</a>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Why Join Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <Badge className="mb-4 bg-[#32750a] hover:bg-[#32750a]/90">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Join Tolbert Garage Door?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We offer more than just a job. Join our team and be part of a company that values growth, excellence, and people.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Competitive Compensation",
                description: "Earn what you're worth with our industry-leading pay and benefits package.",
                icon: "💰",
              },
              {
                title: "Growth Opportunities",
                description: "Advance your career with clear paths for promotion and skill development.",
                icon: "📈",
              },
              {
                title: "Supportive Team",
                description: "Work with professionals who value collaboration and mutual success.",
                icon: "🤝",
              },
              {
                title: "Work-Life Balance",
                description: "We respect your time off and promote a healthy balance between work and personal life.",
                icon: "⚖️",
              },
              {
                title: "Training & Development",
                description: "Continuous learning opportunities to keep your skills sharp and up-to-date.",
                icon: "🔧",
              },
              {
                title: "Community Impact",
                description: "Be part of a company that gives back to the communities we serve.",
                icon: "🏡",
              },
            ].map((benefit, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Process Timeline */}
      <ApplicationTimeline />

      {/* Job Openings Section */}
      <section id="openings" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <Badge className="mb-4 bg-[#32750a] hover:bg-[#32750a]/90">Opportunities</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Job Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Find the perfect role that matches your skills and career goals.</p>
          </motion.div>

          {/* Search and Filter */}
          <div className="mb-12 bg-white p-6 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input type="text" placeholder="Search for jobs..." className="pl-10" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              </div>
              <Button
                className="bg-[#32750a] hover:bg-[#32750a]/90 md:w-auto"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedDepartment("all");
                  setSelectedLocation("all");
                  setSelectedExperience("all");
                }}
              >
                Clear Filters
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Departments" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="installation">Installation</SelectItem>
                    <SelectItem value="repair">Repair</SelectItem>
                    <SelectItem value="customer-service">Customer Service</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="houston">Houston, TX</SelectItem>
                    <SelectItem value="dallas">Dallas, TX</SelectItem>
                    <SelectItem value="austin">Austin, TX</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
                <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Experience Levels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Experience Levels</SelectItem>
                    <SelectItem value="entry">Entry Level</SelectItem>
                    <SelectItem value="mid">Mid Level</SelectItem>
                    <SelectItem value="senior">Senior Level</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <Tabs defaultValue="list" className="w-full">
            <TabsList className="mb-8 mx-auto flex justify-center">
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="grid">Grid View</TabsTrigger>
            </TabsList>

            <TabsContent value="list">
              <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job, index) => <JobCard key={index} job={job} layout="list" />)
                ) : (
                  <div className="text-center py-12">
                    <p className="text-xl text-gray-600">No jobs match your search criteria. Try adjusting your filters.</p>
                  </div>
                )}
              </motion.div>
            </TabsContent>

            <TabsContent value="grid">
              <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job, index) => <JobCard key={index} job={job} layout="grid" />)
                ) : (
                  <div className="text-center py-12 col-span-full">
                    <p className="text-xl text-gray-600">No jobs match your search criteria. Try adjusting your filters.</p>
                  </div>
                )}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <Badge className="mb-4 bg-[#32750a] hover:bg-[#32750a]/90">Team Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hear From Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our employees share their experiences working at Tolbert Garage Door.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Johnson",
                position: "Senior Technician",
                years: "5 years",
                quote: "Working at Tolbert has given me the opportunity to grow both professionally and personally. The training programs are excellent, and the team feels like family.",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "Sarah Williams",
                position: "Customer Service Manager",
                years: "3 years",
                quote: "I started as a representative and worked my way up to manager. Tolbert truly values hard work and provides clear paths for advancement.",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "David Rodriguez",
                position: "Installation Specialist",
                years: "2 years",
                quote: "The work-life balance here is amazing. I get to do what I love while still having time for my family. The competitive pay is just icing on the cake.",
                image: "/placeholder.svg?height=200&width=200",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} width={60} height={60} className="rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">
                      {testimonial.position} • {testimonial.years}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#32750a]">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Take the first step toward a rewarding career with Tolbert Garage Door. Browse our openings and apply today!</p>
            <Button size="lg" variant="outline" className="bg-white text-[#32750a] hover:bg-gray-100 border-white" asChild>
              <a href="#openings">View All Job Openings</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <Badge className="mb-4 bg-[#32750a] hover:bg-[#32750a]/90">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Find answers to common questions about careers at Tolbert Garage Door.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What qualifications do I need to become a garage door technician?",
                answer: "We look for candidates with mechanical aptitude, problem-solving skills, and a customer-focused attitude. Prior experience in garage door installation and repair is preferred but not always required for entry-level positions, as we provide comprehensive training.",
              },
              {
                question: "What is the application process like?",
                answer: "Our application process typically involves submitting your resume, completing an initial assessment, participating in interviews, and potentially a skills demonstration. The entire process usually takes 1-2 weeks from application to offer.",
              },
              {
                question: "Do you offer benefits?",
                answer: "Yes, we offer a comprehensive benefits package that includes health insurance, retirement plans, paid time off, and professional development opportunities. Full details are provided during the interview process.",
              },
              {
                question: "Is there room for advancement within the company?",
                answer: "We prioritize promoting from within and offer clear career paths for advancement. Many of our managers and team leaders started in entry-level positions.",
              },
              {
                question: "What is the company culture like?",
                answer: "We foster a collaborative, supportive environment where teamwork and customer satisfaction are valued. We celebrate achievements, provide constructive feedback, and encourage work-life balance.",
              },
            ].map((faq, index) => (
              <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-6">
                <Collapsible>
                  {({ open }) => (
                    <>
                      <CollapsibleTrigger className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-left">
                        <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                        {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4 bg-white border border-gray-100 rounded-b-lg mt-1">
                        <p className="text-gray-700">{faq.answer}</p>
                      </CollapsibleContent>
                    </>
                  )}
                </Collapsible>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Tolbert Garage Door</h3>
              <p className="text-gray-400 mb-4">Building careers and serving communities with quality garage door solutions.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#32750a]">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#32750a]">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#32750a]">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#openings" className="text-gray-400 hover:text-white">
                    Job Openings
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-gray-400 hover:text-white">
                    Application Process
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <MapPin size={18} className="mr-2" />
                  <span>123 Garage Street, Houston, TX</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>careers@tolbertgaragedoor.com</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(555) 123-4567</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">Stay updated with our latest job openings and company news.</p>
              <form className="flex flex-col sm:flex-row gap-2">
                <Input type="email" placeholder="Your email" className="bg-gray-800 border-gray-700 text-white" />
                <Button className="bg-[#32750a] hover:bg-[#32750a]/90">Subscribe</Button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Tolbert Garage Door. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const Collapsible = ({ children }) => {
  const [open, setOpen] = useState(false);
  return children({ open, setOpen });
};

const CollapsibleTrigger = ({ children, className }) => {
  const { open, setOpen } = useContext({ open: false, setOpen: () => {} });
  return (
    <button className={className} onClick={() => setOpen(!open)}>
      {children}
    </button>
  );
};

const CollapsibleContent = ({ children, className }) => {
  const { open } = useContext({ open: false });
  if (!open) return null;
  return <div className={className}>{children}</div>;
};
