import JobDetailPage from "@/components/main/career/job-detail-page";
import { getAllJobSlugs, getJobBySlug } from "@/lib/job-data";
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
    title: `${job.title} | Careers at Tolbert Garage Door`,
    description: job.description.substring(0, 160) + "...",
    keywords: `${job.title}, ${job.department}, garage door jobs, Tolbert careers, ${job.location}`,
    openGraph: {
      title: `${job.title} | Careers at Tolbert Garage Door`,
      description: job.description.substring(0, 160) + "...",
      url: `https://tolbert.paipixel.com/careers/${params.slug}`,
      siteName: "Tolbert Garage Door",
      images: [
        {
          url: "/images/careers-og.jpg",
          width: 1200,
          height: 630,
          alt: `${job.title} - Tolbert Garage Door`,
        },
      ],
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllJobSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default function JobDetail({ params }) {
  const job = getJobBySlug(params.slug);

  if (!job) {
    notFound();
  }

  return <JobDetailPage job={job} />;
}
