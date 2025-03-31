import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function WelcomeImageCarousel({ images }) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <img src={src || `/placeholder.svg?height=600&width=800`} alt={`Garage door ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 bg-white/80 hover:bg-white text-primary border-none" />
      <CarouselNext className="right-2 bg-white/80 hover:bg-white text-primary border-none" />
    </Carousel>
  );
}
