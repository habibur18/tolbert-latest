"use client";

import { getRelatedJobs } from "@/lib/job-data";
import { motion } from "framer-motion";
import JobCard from "./job-card";

export default function RelatedJobs({ currentJobId }) {
  const relatedJobs = getRelatedJobs(currentJobId, 3);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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

  if (relatedJobs.length === 0) {
    return null;
  }

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Positions</h2>

      <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
        {relatedJobs.map((job) => (
          <JobCard key={job.id} job={job} layout="grid" />
        ))}
      </motion.div>
    </motion.div>
  );
}
