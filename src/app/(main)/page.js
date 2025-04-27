import HeroSection from "@/components/HeroSection";
import FaqSection from "@/components/main/career/faq-section";
import BeforeAfterGallery from "@/components/main/homepage/BeforeAfterGallery";
import BlogPreview from "@/components/main/homepage/BlogPreview";
import BrandShowcase from "@/components/main/homepage/BrandShowcase";
import ContactSection from "@/components/main/homepage/ContactSection";
import EmergencyCallout from "@/components/main/homepage/EmergencyCallout";
import EmergencyServices from "@/components/main/homepage/EmergencyServices";
import FontOptimizer from "@/components/main/homepage/FontOptimizer";
import InstallationTimeline from "@/components/main/homepage/InstallationTimeline";
import LocalServiceAreas from "@/components/main/homepage/LocalServiceAreas";
import PerformanceOptimizer from "@/components/main/homepage/PerformanceOptimizer";
import ProcessSteps from "@/components/main/homepage/ProcessSteps";
import RecentProjects from "@/components/main/homepage/RecentProjects";
import FaqSchema from "@/components/main/homepage/schema/FaqSchema";
import LocalBusinessSchema from "@/components/main/homepage/schema/LocalBusinessSchema";
import ReviewSchema from "@/components/main/homepage/schema/ReviewSchema";
import ServiceSchema from "@/components/main/homepage/schema/ServiceSchema";
import SeoOptimizer from "@/components/main/homepage/SeoOptimizer";
import ServiceCategories from "@/components/main/homepage/ServiceCategories";
import TeamShowcase from "@/components/main/homepage/TeamShowcase";
import TestimonialShowcase from "@/components/main/homepage/TestimonialShowcase";
import TrustSignals from "@/components/main/homepage/TrustSignals";
// import WebsiteAccessibility from "@/components/WebsiteAccessibility";

export const metadata = {
  title: "Tolbert Garage Door Repair | #1 Rated Garage Door Service in Dallas-Fort Worth",
  description: "24/7 emergency garage door repair in DFW. Same-day service, free estimates & 5-star rated technicians. Repairs from $89, new doors from $699. Call (469)-909-0956 now!",
  keywords: "garage door repair Dallas, emergency garage door service, broken spring repair, garage door opener installation, commercial garage door repair, same-day garage door service, affordable garage door repair DFW, garage door replacement Dallas",
  alternates: {
    canonical: "https://tolbertgaragedoor.com",
  },
  openGraph: {
    title: "Tolbert Garage Door Repair | Fast, Affordable Service in DFW",
    description: "24/7 emergency garage door repair in Dallas-Fort Worth. Expert technicians, same-day service, and the best warranties in the industry. Call (469)-909-0956 for immediate assistance!",
    url: "https://tolbertgaragedoor.com",
    siteName: "Tolbert Garage Door",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tolbert Garage Door Repair - #1 Rated Service in Dallas-Fort Worth",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tolbert Garage Door Repair | 24/7 Emergency Service in DFW",
    description: "Fast, reliable garage door repair in Dallas-Fort Worth. Expert technicians, same-day service, and the best warranties in the industry. Call now!",
    images: ["/twitter-image.jpg"],
    creator: "@TolbertGarage",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
    yandex: "verification_token",
    yahoo: "verification_token",
  },
  category: "Home Services",
};

export default function Home() {
  return (
    <>
      {/* Schema.org structured data for SEO */}
      <LocalBusinessSchema />
      <ServiceSchema />
      <FaqSchema />
      <ReviewSchema />

      {/* Performance optimizers */}
      <PerformanceOptimizer />
      <SeoOptimizer />
      {/* <ImageOptimizer /> */}
      <FontOptimizer />

      {/* Accessibility tool */}
      {/* <WebsiteAccessibility /> */}

      {/* Emergency banner - sticky for immediate conversion */}
      <EmergencyCallout />

      {/* Hero section with clear value proposition */}
      <HeroSection />

      {/* Trust signals to build immediate credibility */}
      <TrustSignals />

      <main>
        {/* Service categories with pricing */}
        <ServiceCategories />

        {/* Emergency services section */}
        <EmergencyServices />

        {/* How we work process steps */}
        <ProcessSteps />

        {/* Before/After gallery showing real results */}
        <BeforeAfterGallery />

        {/* Recent projects showcase */}
        <RecentProjects />

        {/* Installation timeline */}
        <InstallationTimeline />

        {/* Local service areas with schema markup */}
        <LocalServiceAreas />

        {/* Social proof with testimonials */}
        <TestimonialShowcase />

        {/* Brand showcase */}
        <BrandShowcase />

        {/* FAQ section optimized for featured snippets */}
        <FaqSection />

        {/* Team showcase with expertise highlights */}
        <TeamShowcase />

        {/* Blog preview for content marketing */}
        <BlogPreview />
      </main>

      {/* Contact section with multiple conversion paths */}
      <ContactSection />
    </>
  );
}
