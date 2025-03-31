"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ArrowLeft, Bookmark, Briefcase, CheckCircle, Clock, MapPin, Share2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import RelatedJobs from "./related-jobs";

export default function JobDetailPage({ job }) {
  const [shareDialogOpen, setShareDialogOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    toast({
      title: "Link copied to clipboard",
      description: "You can now share this job with others.",
      action: <ToastAction altText="Close">Close</ToastAction>,
    });
    setShareDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <Link href="/careers" className="inline-flex items-center text-[#32750a] hover:underline mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to all jobs
          </Link>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
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

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{job.title}</h1>

              <div className="flex flex-wrap gap-x-6 gap-y-3 text-gray-500 mb-6">
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase size={18} className="mr-2" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={18} className="mr-2" />
                  <span>Posted {job.postedDate}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <Button size="lg" className="bg-[#32750a] hover:bg-[#32750a]/90" asChild>
                  <Link href={`/careers/apply/${job.slug}`}>Apply Now</Link>
                </Button>

                <Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="outline" className="border-[#32750a] text-[#32750a] hover:bg-[#32750a]/10">
                      <Share2 size={18} className="mr-2" />
                      Share
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Share this job</DialogTitle>
                      <DialogDescription>Copy the link below to share this job with someone.</DialogDescription>
                    </DialogHeader>
                    <div className="flex gap-2 mt-4">
                      <Input value={typeof window !== "undefined" ? window.location.href : ""} readOnly />
                      <Button onClick={handleCopyLink}>Copy</Button>
                    </div>
                    <div className="flex justify-center gap-4 mt-4">
                      <Button variant="outline" className="flex-1" asChild>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`} target="_blank" rel="noopener noreferrer">
                          Facebook
                        </a>
                      </Button>
                      <Button variant="outline" className="flex-1" asChild>
                        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&text=${encodeURIComponent(`Check out this ${job.title} position at Tolbert Garage Door`)}`} target="_blank" rel="noopener noreferrer">
                          Twitter
                        </a>
                      </Button>
                      <Button variant="outline" className="flex-1" asChild>
                        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`} target="_blank" rel="noopener noreferrer">
                          LinkedIn
                        </a>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    toast({
                      title: "Job saved",
                      description: "This job has been saved to your bookmarks.",
                      action: <ToastAction altText="Close">Close</ToastAction>,
                    });
                  }}
                >
                  <Bookmark size={18} className="mr-2" />
                  Save
                </Button>
              </div>

              <Separator className="my-8" />

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold mb-4">Job Description</h2>
                    <p className="text-gray-700 mb-6">{job.description}</p>

                    <h3 className="text-xl font-bold mb-3">Responsibilities:</h3>
                    <ul className="list-disc pl-5 mb-6 space-y-2">
                      {job.responsibilities.map((responsibility, index) => (
                        <li key={index} className="text-gray-700">
                          {responsibility}
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-bold mb-3">Requirements:</h3>
                    <ul className="list-disc pl-5 mb-6 space-y-2">
                      {job.requirements.map((requirement, index) => (
                        <li key={index} className="text-gray-700">
                          {requirement}
                        </li>
                      ))}
                    </ul>

                    {job.preferredQualifications && job.preferredQualifications.length > 0 && (
                      <>
                        <h3 className="text-xl font-bold mb-3">Preferred Qualifications:</h3>
                        <ul className="list-disc pl-5 mb-6 space-y-2">
                          {job.preferredQualifications.map((qualification, index) => (
                            <li key={index} className="text-gray-700">
                              {qualification}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    <h3 className="text-xl font-bold mb-3">Benefits:</h3>
                    <ul className="mb-6 space-y-3">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#32750a] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-[#32750a]/5 p-6 rounded-lg border border-[#32750a]/10 mb-6">
                      <h3 className="text-xl font-bold mb-3">About Tolbert Garage Door</h3>
                      <p className="text-gray-700">Tolbert Garage Door is a leading provider of garage door installation, repair, and maintenance services. We pride ourselves on quality workmanship, exceptional customer service, and creating a positive work environment for our team members. Join us and be part of a company that values growth, excellence, and people.</p>
                    </div>

                    <p className="text-gray-700 italic">Tolbert Garage Door is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.</p>
                  </div>

                  <div className="mt-8">
                    <Button size="lg" className="bg-[#32750a] hover:bg-[#32750a]/90 w-full md:w-auto" asChild>
                      <Link href={`/careers/apply/${job.slug}`}>Apply for this Position</Link>
                    </Button>
                  </div>
                </div>

                <div>
                  <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-6">
                    <h3 className="text-lg font-bold mb-4">Job Summary</h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Department</p>
                        <p className="font-medium">{job.department}</p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-500 mb-1">Location</p>
                        <p className="font-medium">{job.location}</p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-500 mb-1">Employment Type</p>
                        <p className="font-medium">{job.type}</p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-500 mb-1">Experience Level</p>
                        <p className="font-medium">{job.experienceLevel === "entry" ? "Entry Level" : job.experienceLevel === "mid" ? "Mid Level" : "Senior Level"}</p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-500 mb-1">Salary Range</p>
                        <p className="font-medium">{job.salaryRange}</p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-500 mb-1">Posted Date</p>
                        <p className="font-medium">{job.postedDate}</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="font-medium mb-3">Share this job</h4>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`} target="_blank" rel="noopener noreferrer">
                            Facebook
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&text=${encodeURIComponent(`Check out this ${job.title} position at Tolbert Garage Door`)}`} target="_blank" rel="noopener noreferrer">
                            Twitter
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`} target="_blank" rel="noopener noreferrer">
                            LinkedIn
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <RelatedJobs currentJobId={job.id} />
      </div>
    </div>
  );
}
