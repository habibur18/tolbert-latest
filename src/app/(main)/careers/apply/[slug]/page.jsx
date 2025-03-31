import JobApplicationForm from "@/components/main/career/job-application-form";
import { getJobBySlug } from "@/lib/job-data";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const job = getJobBySlug(params.slug);

  if (!job) {
    return {
      title: "Job Not Found | Tolbert Garage Door",
      description: "The job listing you're looking for could not be found.",
    };
  }

  return {
    title: `Apply for ${job.title} | Tolbert Garage Door`,
    description: `Apply for the ${job.title} position at Tolbert Garage Door in ${job.location}.`,
    robots: { index: false, follow: false },
    openGraph: {
      title: `Apply for ${job.title} | Tolbert Garage Door`,
      description: `Apply for the ${job.title} position at Tolbert Garage Door in ${job.location}.`,
      url: `https://tolbert.paipixel.com/careers/apply/${params.slug}`,
      siteName: "Tolbert Garage Door",
      type: "website",
    },
  };
}

export default function JobApplicationPage({ params }) {
  const job = getJobBySlug(params.slug);

  if (!job) {
    notFound();
  }

  return <JobApplicationForm job={job} />;
}
