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
    name: "Bill Witty",
    location: "Dallas, TX",
    image: "/testimonials/bill witty and her wife w3 electricians owner.jpg",
    rating: 5,
    date: "1 weeks ago",
    description: "Tolbert Garage is great. Highly recommended. In addition to stopping by our shop and looking at our garage door, they are big advocates for our community and do a lot to help. I’ll definitely be calling them if I need anything else",
    service: "Garage Door Installation",
    videoId: "testimonial-video-1",
    hasVideo: false,
  },
  {
    id: 2,
    name: "Zach Randle",
    location: "Fort Worth, TX",
    image: "/testimonials/Zach Randle review to tolbert garage door.jpg",
    rating: 5,
    date: "1 month ago",
    description: "Tolbert Garage Door is a company that actually cares about customers service. I bought a Liftmaster from them last year and had one issue. They sent out Mario, who is as nice a dude as you will ever meet. No charge follow up which turned out to be my own fault when I added decking to my attic. Mario helped me and Colby responded quickly when I texted. The company is highly recommended and super honest and up front!! Love them!!",
    service: "Garage Door Repair",
    videoId: "testimonial-video-2",
    hasVideo: false,
  },
  {
    id: 3,
    name: "Alyson Whitefield",
    location: "Dallas, TX",
    image: "/testimonials/Alyson Whitefield.jpg",
    rating: 5,
    date: "2 months ago",
    description: "We just returned from a long road trip from Michigan and discovered that our garage door had been accidentally damaged. I immediately contacted Tolbert Garage Door, and they sent a technician out within an hour! Brandon was professional, kind, and completed the repair in under 15 minutes. Wow! Their service and expertise are unbeatable. I highly recommend them for all your garage door needs!",
    service: "Garage Door Repair",
    videoId: "testimonial-video-3",
    hasVideo: false,
  },
  {
    id: 4,
    name: "Regan Bullock",
    location: "Dallas, TX",
    image: "/testimonials/Regan Bullock review to tolbert garge door repair.jpg",
    rating: 5,
    date: "3 months ago",
    description: "Tolbert has been excellent in repairing and installing my garage door and motor. They are quick and super professional.",
    service: "New Door Installation",
    videoId: "testimonial-video-4",
    hasVideo: false,
  },
  {
    id: 5,
    name: "Mechelle Williams",
    location: "McKinney, TX",
    image: "/testimonials/Mechelle Williams review to tolbert garage door repair.jpg",
    rating: 5,
    date: "4 months ago",
    description: "Tech. Kevin was a Blessing today! Respectual, professional, couterious, thorough and above all patient. Very informative and I'll continue to recommend you guys to EVERYONE! Your #1 - FCF Mechelle",
    service: "Spring Replacement",
    videoId: "testimonial-video-5",
    hasVideo: false,
  },
  {
    id: 6,
    name: "Kaylea Bullard",
    location: "Mesquite, TX",
    image: "/testimonials/Kaylea Bullard review to tolbert garage door repaire.jpg",
    rating: 5,
    date: "4 months ago",
    description: "Had a hiccup this morning and messed up our garage door at 6:00 am called Tolbert overhead at 6:20 and was greeted by a professional individual who assured me they would get us taken care of today. Two gentlemen showed up by 10:00 am to diagnose and send someone back out to fix the issue. All around great service!",
    service: "Garage Door Repair",
    videoId: "testimonial-video-6",
    hasVideo: false,
  },
  {
    id: 7,
    name: "Buddy Barton",
    location: "Dallas, TX",
    image: "/testimonials/Buddy Barton review to    tolbert Garage door repair.jpg",
    rating: 5,
    date: "2 years ago",
    description: "Had a hiccup this morning and messed up our garage door at 6:00 am called Tolbert overhead at 6:20 and was greeted by a professional individual who assured me they would get us taken care of today. Two gentlemen showed up by 10:00 am to diagnose and send someone back out to fix the issue. All around great service!",
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

        <div className="max-w-7xl mx-auto">
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
                      {/* <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} width={800} height={400} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" /> */}
                      <div className="overflow-hidden relative group h-[400px] w-full">
                        <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} width={800} height={400} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover h-full w-full transform group-hover:scale-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out " />
                      </div>

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
              <a href="https://www.google.com/maps/place/Tolbert+Garage+Door+Repair/@32.8079995,-96.66,17z/data=!3m1!4b1!4m6!3m5!1s0x864ea8858afec6c7:0x7a1550c0ac0a304!8m2!3d32.807995!4d-96.6574251!16s%2Fg%2F11c81f5p0h?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                Read All 1040+ Google Reviews
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
