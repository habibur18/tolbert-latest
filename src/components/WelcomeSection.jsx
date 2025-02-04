"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building2, Calculator, Home, Phone, Shield, Star, PenToolIcon as Tools, Truck } from "lucide-react";
import { useState } from "react";

export default function WelcomeSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ["/door1.jpg", "/door2.jpg", "/door3.jpg", "/door4.jpg"];

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">
              Welcome to <span className="text-green-600">Tolbert Garage Door</span>
            </h2>
            <p className="text-lg text-gray-700">
              The leading provider of high-quality <span className="text-green-600">garage door</span> solutions in the <span className="text-green-600">Dallas-Fort Worth</span> area.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <FeatureItem icon={Star} text="Over 20 years of experience" />
              <FeatureItem icon={Shield} text="Licensed and insured" />
              <FeatureItem icon={Tools} text="Expert installation and repair" />
              <FeatureItem icon={Home} text="Residential services" />
              <FeatureItem icon={Building2} text="Commercial solutions" />
              <FeatureItem icon={Truck} text="Wide selection of brands" />
            </div>
            <p className="text-gray-700">From modern designs to classic styles, we offer customized solutions tailored to your unique needs.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">
                <Phone className="mr-2 h-4 w-4" /> Call (555) 123-4567
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-green-600 text-green-600 hover:bg-green-50">
                <Calculator className="mr-2 h-4 w-4" /> Free Estimate
              </Button>
            </div>
          </div>

          {/* Right Column: Image Gallery */}
          <div className="max-w-lg mx-auto">
            <Carousel>
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img src={src} alt={`Garage door ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        {/* Additional Content */}
        <div className="mt-12 text-center hidden">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Tolbert Garage Door?</h3>
          <p className="text-gray-700 max-w-3xl mx-auto">Enjoy peace of mind with our highly skilled technicians who ensure professionalism and reliability on every project. We offer free estimates to help you make informed decisions. With nothing but 5-star Google reviews, our commitment to customer satisfaction is evident.</p>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ icon: Icon, text }) {
  return (
    <div className="flex items-center space-x-2">
      <Icon className="h-5 w-5 text-green-600" />
      <span className="text-sm text-gray-700">{text}</span>
    </div>
  );
}
