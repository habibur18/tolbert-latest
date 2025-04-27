"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

// Gallery data with before/after images
const galleryItems = [
  {
    id: 1,
    category: "installations",
    title: "Modern Steel Door Installation",
    location: "Dallas, TX",
    description: "Replaced an old wooden door with a modern insulated steel door with windows.",
    before: "/home/garage door before-1.webp",
    after: "/home/garage door after-1.jpg",
    testimonial: "The transformation is incredible! Our home looks completely different now.",
    client: "Johnson Family",
  },
  {
    id: 2,
    category: "installations",
    title: "Carriage House Style Upgrade",
    location: "Plano, TX",
    description: "Upgraded from a basic door to an elegant carriage house style door.",
    before: "/before-2.jpg",
    after: "/after-2.jpg",
    testimonial: "The new door has completely transformed our home's curb appeal.",
    client: "Williams Residence",
  },
  {
    id: 3,
    category: "repairs",
    title: "Spring and Cable Repair",
    location: "Fort Worth, TX",
    description: "Fixed broken springs and frayed cables on an existing door.",
    before: "/before-3.jpg",
    after: "/after-3.jpg",
    testimonial: "Door works perfectly now. Fast service and reasonable price.",
    client: "Martinez Family",
  },
  {
    id: 4,
    category: "repairs",
    title: "Track Alignment & Panel Repair",
    location: "Arlington, TX",
    description: "Repaired damaged panels and realigned tracks for smooth operation.",
    before: "/before-4.jpg",
    after: "/after-4.jpg",
    testimonial: "Door is quieter than ever and looks like new again!",
    client: "Thompson Residence",
  },
  {
    id: 5,
    category: "commercial",
    title: "Commercial Warehouse Door",
    location: "Irving, TX",
    description: "Installed a heavy-duty commercial door for a local warehouse.",
    before: "/before-5.jpg",
    after: "/after-5.jpg",
    testimonial: "Excellent service and the door has been working flawlessly.",
    client: "ABC Logistics",
  },
  {
    id: 6,
    category: "commercial",
    title: "Retail Storefront Upgrade",
    location: "Mesquite, TX",
    description: "Replaced an outdated storefront door with a modern glass panel design.",
    before: "/before-6.jpg",
    after: "/after-6.jpg",
    testimonial: "Our customers love the new look! Great investment for our business.",
    client: "Main Street Boutique",
  },
];

function ImageComparisonSlider({ beforeImage, afterImage, alt }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  // Handle initial click on the slider
  const handleSliderMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    document.body.style.userSelect = "none"; // Prevent text selection during drag
  };

  // Handle click on the container (for clicking anywhere on the image)
  const handleContainerMouseDown = (e) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;

    // Calculate new position based on click location
    const newPosition = ((e.clientX - containerRect.left) / containerWidth) * 100;
    setSliderPosition(Math.min(Math.max(newPosition, 0), 100));

    // Start dragging only if we're near the slider
    if (Math.abs(newPosition - sliderPosition) < 10) {
      setIsDragging(true);
      document.body.style.userSelect = "none"; // Prevent text selection during drag
    }
  };

  // Handle mouse movement
  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerWidth = containerRect.width;

      const newPosition = ((e.clientX - containerRect.left) / containerWidth) * 100;
      setSliderPosition(Math.min(Math.max(newPosition, 0), 100));
    },
    [isDragging]
  );

  // Handle mouse up - stop dragging
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    document.body.style.userSelect = ""; // Restore text selection
  }, []);

  // Set up and clean up global event listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("mouseleave", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // Handle touch events for mobile
  const handleTouchStart = (e) => {
    if (!containerRef.current) return;

    const touch = e.touches[0];
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;

    const newPosition = ((touch.clientX - containerRect.left) / containerWidth) * 100;
    setSliderPosition(Math.min(Math.max(newPosition, 0), 100));

    // Start dragging only if we're near the slider
    if (Math.abs(newPosition - sliderPosition) < 10) {
      setIsDragging(true);
    }
  };

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging || !containerRef.current) return;
      e.preventDefault();

      const touch = e.touches[0];
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerWidth = containerRect.width;

      const newPosition = ((touch.clientX - containerRect.left) / containerWidth) * 100;
      setSliderPosition(Math.min(Math.max(newPosition, 0), 100));
    },
    [isDragging]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Set up and clean up global touch event listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleTouchEnd);
      window.addEventListener("touchcancel", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, [isDragging, handleTouchMove, handleTouchEnd]);

  return (
    <div ref={containerRef} className="relative h-64 md:h-80 overflow-hidden rounded-lg cursor-ew-resize" onMouseDown={handleContainerMouseDown} onTouchStart={handleTouchStart}>
      {/* After image (background) */}
      <div className="absolute inset-0 pointer-events-none">
        <Image src={afterImage || "/placeholder.svg"} alt={`After: ${alt}`} fill className="object-cover select-none" draggable="false" unoptimized />
      </div>

      {/* Before image (foreground with clip) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ width: `${sliderPosition}%` }}>
        <Image src={beforeImage || "/placeholder.svg"} alt={`Before: ${alt}`} fill className="object-cover select-none" draggable="false" unoptimized />
      </div>

      {/* Slider control */}
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="h-full w-0.5 bg-white relative" style={{ left: `${sliderPosition}%` }} ref={sliderRef}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center pointer-events-auto" onMouseDown={handleSliderMouseDown} onTouchStart={handleSliderMouseDown}>
            <div className="w-4 h-4 rounded-full bg-[#32750a]"></div>
          </div>
        </div>
      </div>

      {/* Before/After labels */}
      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm pointer-events-none">Before</div>
      <div className="absolute top-4 right-4 bg-[#32750a]/90 text-white px-3 py-1 rounded-full text-sm pointer-events-none">After</div>
    </div>
  );
}

export default function BeforeAfterGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  //   const [selectedItem, setSelectedItem] = (useState < ) | (null > null);
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 border">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full bg-[#32750a]/10 text-[#32750a] text-sm font-medium">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
            Before & After <span className="text-[#32750a]">Transformations</span>
          </h2>
          <div className="h-1 w-20 bg-[#32750a] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">See the dramatic difference our garage door services make. Browse our gallery of real projects and transformations.</p>
        </div>

        <div className="">
          {/* Category filter */}
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
            <TabsList className="grid grid-cols-4 max-w-md mx-auto bg-white border border-gray-200 p-1 rounded-full">
              <TabsTrigger value="all" className={cn("rounded-full px-4 py-2 data-[state=active]:bg-[#32750a] data-[state=active]:text-white", "data-[state=active]:font-bold data-[state=active]:shadow-sm")}>
                All Projects
              </TabsTrigger>
              <TabsTrigger value="installations" className={cn("rounded-full px-4 py-2 data-[state=active]:bg-[#32750a] data-[state=active]:text-white", "data-[state=active]:font-bold data-[state=active]:shadow-sm")}>
                Installations
              </TabsTrigger>
              <TabsTrigger value="repairs" className={cn("rounded-full px-4 py-2 data-[state=active]:bg-[#32750a] data-[state=active]:text-white", "data-[state=active]:font-bold data-[state=active]:shadow-sm")}>
                Repairs
              </TabsTrigger>
              <TabsTrigger value="commercial" className={cn("rounded-full px-4 py-2 data-[state=active]:bg-[#32750a] data-[state=active]:text-white", "data-[state=active]:font-bold data-[state=active]:shadow-sm")}>
                Commercial
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Gallery grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group" onClick={() => setSelectedItem(item.id)}>
                <div className="relative">
                  <ImageComparisonSlider beforeImage={item.before} afterImage={item.after} alt={item.title} />
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <span className="px-2 py-1 bg-[#32750a]/10 text-[#32750a] text-xs font-medium rounded-full">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{item.location}</p>
                  <p className="text-gray-700 text-sm line-clamp-2">{item.description}</p>

                  <div className="mt-4 text-[#32750a] font-medium text-sm flex items-center">
                    <span>View Details</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View more button */}
          <div className="text-center mt-10">
            <Button asChild className="bg-[#32750a] hover:bg-[#2b6309]">
              <Link href="/transformations">View All Transformations</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
