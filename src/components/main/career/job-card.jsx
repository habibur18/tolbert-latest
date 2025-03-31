"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Briefcase, ChevronRight, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function JobCard({ job, layout = "list" }) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const getExperienceBadgeColor = (level) => {
    switch (level) {
      case "entry":
        return "bg-green-100 text-green-800";
      case "mid":
        return "bg-blue-100 text-blue-800";
      case "senior":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (layout === "list") {
    return (
      <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-grow">
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge variant="outline" className="bg-[#32750a]/10 text-[#32750a] border-[#32750a]/20">
                {job.department}
              </Badge>
              <Badge variant="outline" className={getExperienceBadgeColor(job.experienceLevel)}>
                {job.experienceLevel === "entry" ? "Entry Level" : job.experienceLevel === "mid" ? "Mid Level" : "Senior Level"}
              </Badge>
              {job.isRemote && (
                <Badge variant="outline" className="bg-indigo-100 text-indigo-800">
                  Remote
                </Badge>
              )}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 mb-4">
              <div className="flex items-center">
                <MapPin size={16} className="mr-1" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center">
                <Briefcase size={16} className="mr-1" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>Posted {job.postedDate}</span>
              </div>
            </div>

            <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-2">
            <Button className="bg-[#32750a] hover:bg-[#32750a]/90" asChild>
              <Link href={`/careers/apply/${job.slug}`}>Apply Now</Link>
            </Button>
            <Button variant="outline" className="border-[#32750a] text-[#32750a] hover:bg-[#32750a]/10" asChild>
              <Link href={`/careers/${job.slug}`}>
                View Details
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }

  // Grid layout
  return (
    <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div className="flex flex-wrap gap-2 mb-3">
        <Badge variant="outline" className="bg-[#32750a]/10 text-[#32750a] border-[#32750a]/20">
          {job.department}
        </Badge>
        <Badge variant="outline" className={getExperienceBadgeColor(job.experienceLevel)}>
          {job.experienceLevel === "entry" ? "Entry Level" : job.experienceLevel === "mid" ? "Mid Level" : "Senior Level"}
        </Badge>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>

      <div className="flex flex-col gap-2 text-sm text-gray-500 mb-4">
        <div className="flex items-center">
          <MapPin size={16} className="mr-1" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center">
          <Briefcase size={16} className="mr-1" />
          <span>{job.type}</span>
        </div>
        <div className="flex items-center">
          <Clock size={16} className="mr-1" />
          <span>Posted {job.postedDate}</span>
        </div>
      </div>

      <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">{job.description}</p>

      <div className="flex flex-col gap-2 mt-auto">
        <Button className="bg-[#32750a] hover:bg-[#32750a]/90 w-full" asChild>
          <Link href={`/careers/apply/${job.slug}`}>Apply Now</Link>
        </Button>
        <Button variant="outline" className="border-[#32750a] text-[#32750a] hover:bg-[#32750a]/10 w-full" asChild>
          <Link href={`/careers/${job.slug}`}>
            View Details
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}
