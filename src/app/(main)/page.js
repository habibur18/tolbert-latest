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

export default function Home() {
  return (
    <>
      <div className="my-8">
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
