"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { jobListings } from "@/lib/job-data";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import ApplicationTimeline from "./application-timeline";
import CompanyBenefits from "./company-benefits";
import DiversityInclusion from "./diversity-inclusion";
import FaqSection from "./faq-section";
import JobCard from "./job-card";
import Testimonials from "./testimonials";
import VideoSection from "./video-section";

export default function CareersLanding() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState("all");
  const [filteredJobs, setFilteredJobs] = useState(jobListings);

  // Filter jobs whenever search criteria changes
  useEffect(() => {
    const filtered = jobListings.filter((job) => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment;
      const matchesLocation = selectedLocation === "all" || job.location === selectedLocation;
      const matchesExperience = selectedExperience === "all" || job.experienceLevel === selectedExperience;

      return matchesSearch && matchesDepartment && matchesLocation && matchesExperience;
    });

    setFilteredJobs(filtered);
  }, [searchTerm, selectedDepartment, selectedLocation, selectedExperience]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedDepartment("all");
    setSelectedLocation("all");
    setSelectedExperience("all");
  };

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
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* <div className="absolute inset-0 z-0">
          <video src="https://www.apple.com/careers/global/media/laa/Hero_Life_at_Apple_9x16_V02.mp4" autoPlay loop muted className="object-cover w-full h-full" />
        </div> */}
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video src="https://www.apple.com/careers/global/media/laa/Hero_Life_at_Apple_9x16_V02.mp4" autoPlay loop muted className="object-cover w-full h-full" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#32750a] via-[#32750a]/60 to-transparent"></div>
        </div>

        {/* https://www.apple.com/careers/global/media/laa/Hero_Life_at_Apple_9x16_V02.mp4 */}
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-[#32750a] hover:bg-[#32750a]/90">We're Hiring!</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Join Our Team at Tolbert Garage Door</h1>
            <p className="text-xl text-white/90 mb-8">Build your career with the leading garage door service company. We value skill, dedication, and customer service excellence.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#32750a] hover:bg-[#32750a]/90 text-white text-2xl" asChild>
                <a href="#openings" className="py-6 block">
                  View Open Positions
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary hover:bg-white text-[#32750a] text-2xl" asChild>
                <a href="#process " className="block py-6">
                  Learn About Our Process
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div> */}
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Why Join Us Section */}
      <CompanyBenefits />
      {/* Diversity and Inclusion Section */}
      <DiversityInclusion />

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
              <Button className="bg-[#32750a] hover:bg-[#32750a]/90 md:w-auto" onClick={clearFilters}>
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
                    <SelectItem value="Houston, TX">Houston, TX</SelectItem>
                    <SelectItem value="Dallas, TX">Dallas, TX</SelectItem>
                    <SelectItem value="Austin, TX">Austin, TX</SelectItem>
                    <SelectItem value="Remote">Remote</SelectItem>
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
                  filteredJobs.map((job) => <JobCard key={job.id} job={job} layout="list" />)
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
                  filteredJobs.map((job) => <JobCard key={job.id} job={job} layout="grid" />)
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
      <Testimonials />

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
      <FaqSection />
    </div>
  );
}
