"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Play, Quote, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Testimonial data with rich content
const testimonials = [
  {
    id: 1,
    name: "Sav W",
    location: "Dallas, TX",
    image: "/testimonial1.jpg",
    rating: 5,
    date: "2 weeks ago",
    description: "Never expected to call for help and get serviced the same day. Brandon and CJ were amazing and got my commercial doors fixed right away. I loved the confidence that they both had when figuring out what was needed to fix my doors and the cost was extremely reasonable. Tolbert garage doors are my new go to for my garage door repairs! Thank you!",
    service: "Commercial Door Repair",
    videoId: "testimonial-video-1",
    hasVideo: true,
  },
  {
    id: 2,
    name: "Evan Johnson",
    location: "Fort Worth, TX",
    image: "/testimonial2.jpg",
    rating: 5,
    date: "1 month ago",
    description: "Great folks. They came out next day and fixed my garage door within hours. Also came in WAY under other estimates we were getting. Thanks so much for taking care of us!",
    service: "Garage Door Repair",
    videoId: "testimonial-video-2",
    hasVideo: false,
  },
  {
    id: 3,
    name: "Jerry Wascom",
    location: "Plano, TX",
    image: "/testimonial3.jpg",
    rating: 5,
    date: "2 months ago",
    description: "Kevin was great. He was here on time, told me the price and went right to work. He did a great job replacing both springs and tuning up the entire system. The door works better than it ever has.",
    service: "Spring Replacement",
    videoId: "testimonial-video-3",
    hasVideo: false,
  },
  {
    id: 4,
    name: "Brittany Craft",
    location: "Frisco, TX",
    image: "/testimonial4.jpg",
    rating: 5,
    date: "3 months ago",
    description: "Great customer service, great company and great technicians! They did an amazing job on our garage door replacement and we couldn't be happier! The installation was quick and they cleaned up everything afterward.",
    service: "New Door Installation",
    videoId: "testimonial-video-4",
    hasVideo: false,
  },
  {
    id: 5,
    name: "Nick Dassow",
    location: "McKinney, TX",
    rating: 5,
    date: "4 months ago",
    description: "Colby came out and had our broken torsion spring replaced in no time. Great customer service and upfront pricing! We definitely will be using Tolbert for all our future garage door needs. Thanks again!",
    service: "Spring Replacement",
    videoId: "testimonial-video-5",
    hasVideo: false,
  },
  {
    id: 6,
    name: "Maribel Estrada",
    location: "Mesquite, TX",
    rating: 5,
    date: "4 months ago",
    description: "Tolbert is the best. After being told by several other companies they couldn't fix the issue with my garage door, Izzy came right out and did a fantastic job at a great price. Izzy was on time, very friendly and honest. He finished the job in less than an hour. I would highly recommend this company and especially this technician.",
    service: "Garage Door Repair",
    videoId: "testimonial-video-6",
    hasVideo: false,
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((value) => (
        <Star key={value} className={`w-4 h-4 ${value <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
      ))}
    </div>
  );
}

export default function TestimonialShowcase() {
  const [currentPage, setCurrentPage] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState(null);

  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setShowVideo(false);
    setActiveVideoId(null);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setShowVideo(false);
    setActiveVideoId(null);
  };

  const handlePlayVideo = (id) => {
    setShowVideo(true);
    setActiveVideoId(id);
  };

  // Get current testimonials
  const currentTestimonials = testimonials.slice(currentPage * testimonialsPerPage, (currentPage + 1) * testimonialsPerPage);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full bg-[#32750a]/10 text-[#32750a] text-sm font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
            What Our <span className="text-[#32750a]">Customers</span> Say
          </h2>
          <div className="h-1 w-20 bg-[#32750a] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">Don't just take our word for it. Here's what our satisfied customers have to say about our services.</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Testimonial cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {currentTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
                {/* Media section (video or image) */}
                <div className="relative aspect-video bg-gray-100">
                  {showVideo && activeVideoId === testimonial.id && testimonial.hasVideo ? (
                    <iframe src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1`} title={`Testimonial from ${testimonial.name}`} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  ) : (
                    <>
                      <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />

                      {testimonial.hasVideo && (
                        <button onClick={() => handlePlayVideo(testimonial.id)} className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                          <div className="h-14 w-14 rounded-full bg-white/90 flex items-center justify-center pl-1">
                            <Play className="h-7 w-7 text-[#32750a]" />
                          </div>
                        </button>
                      )}
                    </>
                  )}
                </div>

                {/* Testimonial content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{testimonial.name}</h3>
                      <p className="text-gray-500">{testimonial.location}</p>
                      <div className="flex items-center mt-1">
                        <StarRating rating={testimonial.rating} />
                        <span className="text-gray-500 text-sm ml-2">{testimonial.date}</span>
                      </div>
                    </div>

                    <span className="inline-block bg-[#32750a]/10 text-[#32750a] text-xs font-medium px-2.5 py-0.5 rounded-full">Verified</span>
                  </div>

                  <div className="relative flex-grow">
                    <Quote className="absolute top-0 left-0 h-8 w-8 text-[#32750a]/10 -translate-x-2 -translate-y-2" />
                    <p className="text-gray-700 italic line-clamp-4">"{testimonial.description}"</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium">Service: {testimonial.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination controls */}
          <div className="flex justify-center items-center mt-10 gap-4">
            <button onClick={handlePrevPage} className="p-2 rounded-full bg-white shadow hover:bg-gray-50 transition-colors" aria-label="Previous testimonials">
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentPage(index);
                    setShowVideo(false);
                    setActiveVideoId(null);
                  }}
                  className={cn("w-2.5 h-2.5 rounded-full transition-all", index === currentPage ? "bg-[#32750a] w-8" : "bg-[#32750a]/30")}
                  aria-label={`Go to testimonial page ${index + 1}`}
                />
              ))}
            </div>

            <button onClick={handleNextPage} className="p-2 rounded-full bg-white shadow hover:bg-gray-50 transition-colors" aria-label="Next testimonials">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-[#32750a] text-[#32750a] hover:bg-[#32750a]/10">
              <a href="https://www.google.com/maps/place/Tolbert+Garage+Door+Repair/@32.9311534,-96.8947153,17z/data=!4m8!3m7!1s0x864c2b1b0a9c82c3:0x5b1c3b1f96c5b4a!8m2!3d32.9311534!4d-96.8947153!9m1!1b1!16s%2Fg%2F11h_6zk2c3?entry=ttu" target="_blank" rel="noopener noreferrer">
                Read All 120+ Google Reviews
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
