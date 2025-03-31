import CareersLanding from "@/components/main/career/careers-landing";

export const metadata = {
  title: "Careers at Tolbert Garage Door | Join Our Team",
  description: "Build your career with Tolbert Garage Door. Browse our current job openings for garage door technicians, installers, customer service, and more.",
  keywords: "garage door jobs, Tolbert careers, garage door technician, garage door installer, job openings",
  openGraph: {
    title: "Careers at Tolbert Garage Door | Join Our Team",
    description: "Build your career with Tolbert Garage Door. Browse our current job openings for garage door technicians, installers, customer service, and more.",
    url: "https://tolbert.paipixel.com/careers",
    siteName: "Tolbert Garage Door",
    images: [
      {
        url: "/images/careers-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tolbert Garage Door Careers",
      },
    ],
    type: "website",
  },
};

export default function CareersPage() {
  return <CareersLanding />;
}
