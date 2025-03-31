import { Building2, Home, Shield, Star, PenToolIcon as Tools, Truck } from "lucide-react";
import WelcomeCallToAction from "./CallToAction";
import { WelcomeImageCarousel } from "./Welcome-Carousel";

export default function WelcomeSection() {
  const images = ["/door1.jpg", "/door2.jpg", "/door3.jpg", "/door4.jpg"];

  const features = [
    { icon: Star, text: "Over 20 years of experience" },
    { icon: Shield, text: "Licensed and insured" },
    { icon: Tools, text: "Expert installation and repair" },
    { icon: Home, text: "Residential services" },
    { icon: Building2, text: "Commercial solutions" },
    { icon: Truck, text: "Wide selection of brands" },
  ];

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 clip-path-slant-left" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-primary/5 clip-path-curve" />

      {/* Main Content */}
      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-block">
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                  Welcome to{" "}
                  <span className="text-primary relative">
                    Tolbert Garage Door
                    <span className="absolute bottom-1 left-0 w-full h-1 bg-primary/30"></span>
                  </span>
                </h2>
                <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-primary/10 z-0"></div>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-700 relative z-10">
              The leading provider of high-quality <span className="text-primary font-medium">garage door</span> solutions in the <span className="text-primary font-medium">Dallas-Fort Worth</span> area.
            </p>

            {/* Feature items - static rendering */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            <p className="text-gray-700">From modern designs to classic styles, we offer customized solutions tailored to your unique needs.</p>

            {/* Interactive buttons - client component */}
            <WelcomeCallToAction />
          </div>

          {/* Right Column: Image Gallery */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/30 rounded-full z-50"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary/10 rounded-full z-0"></div>

              {/* Image carousel - client component */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <WelcomeImageCarousel images={images} />

                {/* Badge overlay */}
                <div className="absolute z-50 top-4 right-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full shadow-lg">Premium Quality</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 items-center">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" />
              <Star className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" />
              <Star className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" />
              <Star className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" />
              <Star className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" />
              <span className="ml-2 text-gray-700 font-medium">5.0 Rating (120+ Reviews)</span>
            </div>
            <div className="h-6 border-l border-gray-300 hidden md:block"></div>
            <div className="text-gray-700 font-medium">Trusted by 1,000+ Homeowners</div>
            <div className="h-6 border-l border-gray-300 hidden md:block"></div>
            <div className="text-gray-700 font-medium">Same-Day Service Available</div>
          </div>
        </div>
      </div>
    </div>
  );
}
