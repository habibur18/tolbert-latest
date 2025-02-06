"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import * as React from "react";

const images = ["/storage-unit/storage_unit1.jpg", "/storage-unit/storage-unit-2.jpg", "/storage-unit/storage-unit-3.jpeg", "/storage-unit/storage-unit-4.jpg", "/storage-unit/storage-unit-5.jpeg"];

export default function StorageUnitDoorCarousel() {
  const [api, setApi] = React.useState(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(autoplayInterval);
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      // infinite
      // loop
      opts={{
        // align: "start",
        loop: true,
      }}
      className="w-full max-w-[96vw] mx-auto relative"
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <Card className="border-none">
              <CardContent className="flex aspect-video items-center justify-center p-0">
                <Image src={src || "/placeholder.svg"} alt={`Slide ${index + 1}`} width={1920} height={1080} className="object-cover w-full h-full" />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 h-32 w-12 text-green-800 bg-green-500/20 hover:bg-green-800/40 hover:text-white">
        <ChevronLeft className="h-12 w-12 text-green-800" />
      </CarouselPrevious>
      <CarouselNext className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 h-32 w-12 text-green-800 bg-green-500/20 hover:bg-green-800/40 hover:text-white">
        <ChevronRight className="h-12 w-12 bg-green-800" />
      </CarouselNext>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 py-2 px-4 bg-green-500/50 rounded-full text-white text-sm">
        Slide {current} of {count}
      </div>
    </Carousel>
  );
}
