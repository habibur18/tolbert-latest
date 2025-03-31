"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: "start",
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef(null);
  const autoplayInterval = 5000;

  const testimonials = [
    {
      name: "Colby Tolbert",
      position: "Founder & CEO",
      years: "15 years",
      quote: "Building Tolbert Garage Door has been my life's passion. I founded this company with a vision to provide exceptional service and create a workplace where people genuinely enjoy coming to work. Seeing our team grow and develop while maintaining our family values has been the most rewarding part of this journey.",
      image: "/tolbert.jpg",
      clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
    },
    {
      name: "Brandon Tolbert",
      position: "Operations Manager",
      years: "10 years",
      quote: "Working alongside my family to build this business has been incredibly fulfilling. We've created a culture where excellence is expected and teamwork is valued above all. I'm proud of how we've maintained our commitment to quality while expanding our services throughout Texas.",
      image: "/employee1.png",
      clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 15%)",
    },
    {
      name: "Jaxon Tolbert",
      position: "Service Coordinator",
      years: "5 years",
      quote: "Growing up watching my father build this company taught me the value of hard work and dedication. Now being part of the team, I've seen firsthand how our family values translate into exceptional customer service. We treat every employee like family and every customer like a neighbor.",
      image: "/tolbert2.png",
      clipPath: "circle(50% at 50% 50%)",
    },
    {
      name: "Habibur Rahman",
      position: "Digital Marketing Executive",
      years: "3 years",
      quote: "Joining Tolbert Garage Door was the best career decision I've made. As someone handling website development, SEO, and creative marketing, I've been given the freedom to innovate while having incredible support from leadership. The collaborative environment here allows everyone to contribute their unique skills.",
      image: "/habibur rahman.jpeg",
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 85%)",
    },
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
    resetAutoplay();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
    resetAutoplay();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
      resetAutoplay();
    },
    [emblaApi]
  );

  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      if (autoplay) {
        autoplayRef.current = setInterval(() => {
          if (emblaApi) emblaApi.scrollNext();
        }, autoplayInterval);
      }
    }
  };

  const toggleAutoplay = () => {
    setAutoplay((prev) => !prev);
  };

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Handle autoplay
  useEffect(() => {
    if (!emblaApi || !autoplay) return;

    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }

    autoplayRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, autoplayInterval);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [emblaApi, autoplay]);

  // Handle embla initialization
  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    // Pause autoplay on pointer down
    const onPointerDown = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };

    // Resume autoplay on pointer up
    const onPointerUp = () => {
      resetAutoplay();
    };

    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("pointerUp", onPointerUp);

    return () => {
      if (emblaApi) {
        emblaApi.off("select", onSelect);
        emblaApi.off("reInit", onSelect);
        emblaApi.off("pointerDown", onPointerDown);
        emblaApi.off("pointerUp", onPointerUp);
      }
    };
  }, [emblaApi, onSelect, autoplay]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Clip path for the section
  const sectionClipPath = "polygon(0 5%, 100% 0, 100% 95%, 0 100%)";

  return (
    <section className="py-24 bg-[#32750a]/10 text-gray-900 relative overflow-hidden" style={{ clipPath: sectionClipPath }}>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#32750a]/5"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-[#32750a]/5"></div>
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 rounded-full bg-[#32750a]/5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
          <Badge className="mb-4 bg-[#32750a] hover:bg-[#32750a]/90">Team Stories</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Hear From Our Team</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">Our employees share their experiences working at Tolbert Garage Door.</p>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">Our Team, Your Assurance</p>
        </motion.div>

        <div className="relative  mx-auto">
          <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 -left-4 -right-4 z-10">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon" className="bg-white shadow-lg hover:bg-[#32750a]/10 text-[#32750a] rounded-full h-12 w-12" onClick={scrollPrev} disabled={!prevBtnEnabled}>
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon" className="bg-white shadow-lg hover:bg-[#32750a]/10 text-[#32750a] rounded-full h-12 w-12" onClick={scrollNext} disabled={!nextBtnEnabled}>
                <ChevronRight className="h-6 w-6" />
              </Button>
            </motion.div>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {/* Group testimonials in pairs */}
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, pairIndex) => {
                const firstIndex = pairIndex * 2;
                const secondIndex = firstIndex + 1;
                const hasSecond = secondIndex < testimonials.length;

                return (
                  <div className="flex-[0_0_100%] min-w-0 pl-4 pr-4" key={pairIndex}>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* First testimonial in pair */}
                      <TestimonialCard testimonial={testimonials[firstIndex]} />

                      {/* Second testimonial in pair (if exists) */}
                      {hasSecond && <TestimonialCard testimonial={testimonials[secondIndex]} />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            {scrollSnaps.map((_, index) => (
              <motion.button key={index} className={`h-3 mx-1 rounded-full transition-all duration-300 ${index === selectedIndex ? "w-10 bg-[#32750a]" : "w-3 bg-[#32750a]/30"}`} onClick={() => scrollTo(index)} aria-label={`Go to slide ${index + 1}`} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} />
            ))}
          </div>

          <div className="text-center mt-6">
            <Button variant="outline" size="sm" className="text-[#32750a] border-[#32750a]/30 hover:bg-[#32750a]/10" onClick={toggleAutoplay}>
              {autoplay ? "Pause Autoplay" : "Start Autoplay"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className="bg-white text-gray-900 rounded-xl overflow-hidden shadow-xl h-full flex flex-col"
    >
      <div className="grid md:grid-cols-5">
        <div className="md:col-span-2 relative h-[200px] md:h-full">
          <div
            className="absolute inset-0 z-10"
            style={{
              clipPath: testimonial.clipPath,
              background: "linear-gradient(135deg, rgba(50, 117, 10, 0.3) 0%, rgba(50, 117, 10, 0.1) 100%)",
            }}
          />
          <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" style={{ clipPath: testimonial.clipPath }} />
        </div>
        <div className="md:col-span-3 p-6 flex flex-col justify-between relative">
          <Quote className="absolute top-4 right-4 h-8 w-8 text-[#32750a]/10" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{testimonial.name}</h3>
            <p className="text-[#32750a] font-medium mb-4">
              {testimonial.position} • {testimonial.years}
            </p>
            <p className="text-gray-700 italic text-base leading-relaxed">"{testimonial.quote}"</p>
          </div>
          <div className="mt-4 flex justify-end">
            <div className="h-1 w-12 bg-[#32750a] rounded-full" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
