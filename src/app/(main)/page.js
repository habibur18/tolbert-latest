import AboutusSection from "@/components/AboutusSection";
import CategoryMain from "@/components/CategoryMain";
import { ContactForm } from "@/components/contact-form";
import FooterContactForm from "@/components/FooterContactForm";
import HeroSection from "@/components/HeroSection";
import LargeNewsVideo from "@/components/LargeNewsVideo";
import ServiceLocations from "@/components/service-locations";
import TeamSection from "@/components/TeamSection";
import TestimonialSection from "@/components/testimonials";
import WelcomeSection from "@/components/WelcomeSection";
import { WhyChooseUs } from "@/components/why-choose-us";
import Link from "next/link";

export const metadata = {
  title: "Tolbert Garage Door Repair | DFW#1 Garage Door Services in Dallas, TX",
  description: "Top-rated garage door repair and installation in Dallas, TX. Fast, affordable, and reliable services, including same-day repairs, opener fixes, and spring replacements. Get a free quote now!",
  keywords: "garage door repair Dallas, garage door installation, same-day garage door service, opener repair, spring replacement, commercial garage doors, residential garage doors, emergency garage door repair Dallas",
  openGraph: {
    title: "Tolbert Garage Door Repair | Expert Garage Door Services in Dallas, TX",
    description: "Dallas’s most trusted garage door repair and installation experts. We provide fast, reliable service for residential and commercial garage doors. Get fast same-day service and free estimates. Contact us now!",
    images: [
      {
        url: "/HomeopenGraph.png",
        width: 1200,
        height: 630,
        alt: "Tolbert Garage Door Repair - Best Garage Door Service in Dallas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tolbert Garage Door Repair | Trusted Experts in Dallas, TX",
    description: "Reliable garage door repair, opener installations, and maintenance services in Dallas. Get fast same-day service and free estimates. Contact us now!",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2PB3b1UQtgKTWMxGNELYKgDZuplZbv.png"],
  },
};
export default function Home() {
  return (
    <>
      <div className="mb-8">
        <HeroSection />
      </div>
      <main className="relative">
        <div className="mb-8">
          <CategoryMain />
        </div>
        <div className="mb-8">
          <WelcomeSection />
        </div>
        <div className="sticky left-0 right-0 bottom-0">
          <div className="bg-gradient-to-b from-green-100 via-white to-green-50  p-2 rounded-xl shadow-lg text-center border border-green-300">
            <p className="text-green-700 mb-4 text-sm font-medium">Tolbert Garage Door provides reliable and professional repair services for your garage doors. Get in touch for a seamless experience.</p>
            <Link href="#contact">
              <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-transform transform hover:scale-105 shadow-md">Get Free Estimate</button>
            </Link>
          </div>
        </div>
        <div className="mb-8">
          <WhyChooseUs />
        </div>
        <LargeNewsVideo />
        <TestimonialSection />
        <div className="">
          <ServiceLocations />
        </div>
        <TeamSection />
        <div className="mt-8"></div>
        <ContactForm />

        <div className="my-8">
          <AboutusSection />
        </div>
      </main>
      <FooterContactForm />
    </>
  );
}
