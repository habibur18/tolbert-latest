import CategoryMain from "@/components/CategoryMain";
import FooterContactForm from "@/components/FooterContactForm";
import HeroSection from "@/components/HeroSection";
import LargeNewsVideo from "@/components/LargeNewsVideo";
import AboutusSection from "@/components/main/aboutus-section";
import WelcomeSection from "@/components/main/homepage/WelcomeSection";
import StickyBottom from "@/components/main/sticky-bottom";
import ServiceLocations from "@/components/service-locations";
import TeamSection from "@/components/TeamSection";
import TestimonialSection from "@/components/testimonials";
import { WhyChooseUs } from "@/components/why-choose-us";

export const metadata = {
  title: "Tolbert Garage Door Repair | DFW#1 Garage Door Services in Dallas, TX",
  description: "Top-rated garage door repair and installation in Dallas, TX. Fast, affordable, and reliable services, including same-day repairs, opener fixes, and spring replacements. Get a free quote now!",
  keywords: "garage door repair Dallas, garage door installation, same-day garage door service, opener repair, spring replacement, commercial garage doors, residential garage doors, emergency garage door repair Dallas",
  icons: "/Tolbert Garage Door Logo.png",
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

        <StickyBottom />
        <div className="mb-8">
          <WhyChooseUs />
        </div>
        <LargeNewsVideo />
        <TestimonialSection />
        <div className="">
          <ServiceLocations />
        </div>
        <TeamSection />

        <div className="my-8">
          <AboutusSection />
        </div>
      </main>
      <FooterContactForm />
    </>
  );
}
