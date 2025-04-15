"use client";

import { CallToAction } from "@/components/main/gate/call-to-action";
import CommunityFocused from "@/components/main/gate/Community-Focused";
import { HeroForm } from "@/components/main/gate/hero-form";
import { OurServices } from "@/components/main/gate/our-services";
import { OurStory } from "@/components/main/gate/our-story";
import { ProcessSteps } from "@/components/main/gate/process-steps";
import { SocialMedia } from "@/components/main/gate/social-media";
import { TrustIndicators } from "@/components/main/gate/trust-indicators";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function GarageGatePage() {
  const videoRef = useRef(null);
  const [currentWorkCategory, setCurrentWorkCategory] = useState("gates");

  // Portfolio data
  const works = {
    gates: [
      {
        title: "Elegant Driveway Gate",
        description: "Custom wrought iron driveway gate with automatic opener and keypad access.",
        image: "/placeholder.svg?height=500&width=600",
        location: "Highland Park, Dallas",
      },
      {
        title: "Modern Security Gate",
        description: "Sleek aluminum security gate with smartphone integration and camera system.",
        image: "/placeholder.svg?height=500&width=600",
        location: "North Dallas",
      },
      {
        title: "Ornate Garden Entry",
        description: "Decorative garden entry gate with custom designs and automatic closure.",
        image: "/placeholder.svg?height=500&width=600",
        location: "Lakewood, Dallas",
      },
    ],
    garage: [
      {
        title: "Carriage House Style Door",
        description: "Custom carriage house style garage door with decorative hardware and windows.",
        image: "/placeholder.svg?height=500&width=600",
        location: "University Park, Dallas",
      },
      {
        title: "Modern Glass Panel Door",
        description: "Contemporary full-view aluminum and glass garage door for modern homes.",
        image: "/placeholder.svg?height=500&width=600",
        location: "Uptown, Dallas",
      },
      {
        title: "Insulated Steel Door",
        description: "Energy-efficient insulated steel garage door with smart opener system.",
        image: "/placeholder.svg?height=500&width=600",
        location: "Richardson",
      },
    ],
    commercial: [
      {
        title: "Commercial Security Gate",
        description: "Heavy-duty commercial security gate with access control system for business complex.",
        image: "/placeholder.svg?height=500&width=600",
        location: "Downtown Dallas",
      },
      {
        title: "Industrial Roller Door",
        description: "High-speed industrial roller door for warehouse with smart controls.",
        image: "/placeholder.svg?height=500&width=600",
        location: "Irving Business District",
      },
      {
        title: "Storefront Security Gate",
        description: "Retail storefront security gate with elegant design and robust protection.",
        image: "/placeholder.svg?height=500&width=600",
        location: "Deep Ellum, Dallas",
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video ref={videoRef} autoPlay muted loop playsInline className="object-cover w-full h-full">
            <source src="https://videocdn.cdnpk.net/videos/f1fa82d0-0236-58ab-b68c-b3c5861a83bf/horizontal/previews/watermarked/large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#32750a]/80 to-black/70 z-10"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full text-sm font-medium">
                <span className="text-white">Dallas's Elite Gate & Garage Door Specialist</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                <span className="block">Custom Gates</span>
                <span className="block mt-1 text-4xl md:text-5xl lg:text-6xl text-white/90">& Garage Door Solutions in Dallas</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed">Make your property amazing with beautiful gate designs and top-quality garage door solutions, backed by Dallas's most trusted experts.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-[#32750a] hover:bg-white/90 font-bold text-lg px-8 py-7 rounded-full">
                  Get Free Design Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white border-2 text-[#32750a]  hover:text-[#32750a]  font-medium text-lg px-8 py-7 rounded-full">
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white/50 bg-[#32750a] flex items-center justify-center text-white font-bold shadow-lg transform transition-transform hover:scale-110 hover:-translate-y-1">
                      <Image src={`https://randomuser.me/api/portraits/men/${i}.jpg`} alt={`Avatar ${i}`} width={50} height={50} className="rounded-full" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white/90 text-lg">
                    Trusted by <span className="font-bold">1,000+</span> Dallas homeowners
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Hero Form Component */}
            <HeroForm />
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Our Services Section - Moved up for relevance */}
      <OurServices />

      {/* Process Steps Section */}
      <ProcessSteps />

      {/* Our Story/Context Section */}
      <OurStory />

      {/* Our Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-[#32750a]/10 px-4 py-2 rounded-full text-[#32750a] font-medium mb-4">Our Portfolio</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Check Out Our Awesome Work</h2>
            <p className="text-xl text-gray-600">Browse through our collection of completed projects to see the quality and craftsmanship that defines Tolbert Garage Door.</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 p-1.5 rounded-full">
              <button onClick={() => setCurrentWorkCategory("gates")} className={cn("px-6 py-3 rounded-full text-lg font-medium transition-all", currentWorkCategory === "gates" ? "bg-[#32750a] text-white shadow-md" : "text-gray-600 hover:text-gray-900")}>
                Gates
              </button>
              <button onClick={() => setCurrentWorkCategory("garage")} className={cn("px-6 py-3 rounded-full text-lg font-medium transition-all", currentWorkCategory === "garage" ? "bg-[#32750a] text-white shadow-md" : "text-gray-600 hover:text-gray-900")}>
                Garage Doors
              </button>
              <button onClick={() => setCurrentWorkCategory("commercial")} className={cn("px-6 py-3 rounded-full text-lg font-medium transition-all", currentWorkCategory === "commercial" ? "bg-[#32750a] text-white shadow-md" : "text-gray-600 hover:text-gray-900")}>
                Commercial
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {works[currentWorkCategory].map((work, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg h-[400px] transform transition-all duration-500 hover:scale-[1.02]">
                <Image src={work.image || "/placeholder.svg"} alt={work.title} width={600} height={800} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white transform transition-transform duration-500">
                  <p className="text-sm font-medium text-[#32750a] bg-white/90 w-fit px-3 py-1 rounded-full mb-3">{work.location}</p>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-white/90">{work.title}</h3>
                  <p className="text-white/80 group-hover:text-white/90">{work.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button className="bg-[#32750a] hover:bg-[#32750a]/90 text-white px-10 py-7 text-lg rounded-full">View Complete Portfolio</Button>
          </div>
        </div>
      </section>

      {/* Social Media & Community Section */}
      <SocialMedia />

      {/* Call to Action */}
      <CallToAction />

      {/* CommunityFocused */}
      <CommunityFocused />
      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Tolbert Garage Door",
            image: "https://example.com/photos/garage-door-repair.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Main Street",
              addressLocality: "Dallas",
              addressRegion: "TX",
              postalCode: "75201",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 32.7767,
              longitude: -96.797,
            },
            url: "https://www.tolbertgaragedoor.com/",
            telephone: "+12145551234",
            priceRange: "$$",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "16:00",
              },
            ],
            sameAs: ["https://www.facebook.com/tolbertgaragedoor", "https://twitter.com/tolbertgarage", "https://www.instagram.com/tolbertgaragedoor"],
            description: "Tolbert Garage Door provides professional gate design and installation, garage door repair, and maintenance services in Dallas, TX. We offer custom gate solutions and garage door systems for residential properties.",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Gate and Garage Door Services",
              itemListElement: [
                {
                  "@type": "OfferCatalog",
                  name: "Gate Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Custom Gate Design",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Gate Installation",
                      },
                    },
                  ],
                },
                {
                  "@type": "OfferCatalog",
                  name: "Garage Door Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Garage Door Repair",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "New Garage Door Installation",
                      },
                    },
                  ],
                },
              ],
            },
            review: [
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Michael Johnson",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                reviewBody: "My garage door stopped working suddenly, and Tolbert Garage Door came to the rescue! They arrived within hours of my call, quickly identified the issue with my springs, and had everything fixed the same day. Excellent service!",
              },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "500",
            },
          }),
        }}
      />
    </div>
  );
}
