"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Clock, MapPin, Shield, Star } from "lucide-react";

export default function GarageDoorRepairHeroSection() {
  return (
    <>
      <section className="w-full  flex items-center py-12 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-xl font-semibold text-green-600 mb-2">
                  <span className="sr-only">Company Name: </span>
                  Tolbert Garage Door Repair
                </h1>
                <h2 className="text-5xl font-bold text-gray-800 leading-tight">
                  Expert <span className="text-green-500">Garage Door</span>
                  <br />
                  Repair Services
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-lg">
                Fast, reliable solutions for all your <span className="text-green-500">garage door</span> needs in Dallas, Texas. Available 24/7.
              </p>
              <ul className="flex flex-wrap gap-4" aria-label="Company Features">
                {[
                  { text: "Licensed & Insured", icon: Shield },
                  { text: "24/7 Service", icon: Clock },
                  { text: "5-Star Rated", icon: Star },
                  { text: "Serving Entire Dallas, Texas", icon: MapPin },
                ].map((feature, index) => (
                  <li key={index}>
                    <Badge variant="outline" className="text-sm py-1 px-3 bg-green-100 text-green-800 border-green-300">
                      <feature.icon className="w-4 h-4 mr-1" aria-hidden="true" />
                      {feature.text}
                    </Badge>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
                <a href="tel:4699090956" className="text-2xl font-bold text-green-600 hover:text-green-500 transition-colors">
                  <span className="sr-only">Call us at </span>
                  (469) 909-0956
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-green-600 mb-6">Quick Quote Request or Call Us</h3>
              <form className="space-y-4" name="quote-request" method="POST" data-netlify="true">
                <Input type="text" name="name" placeholder="Name" className="bg-white border-gray-300" required aria-label="Your Name" />
                <Input type="tel" name="phone" placeholder="Phone" className="bg-white border-gray-300" required aria-label="Your Phone Number" />
                <Input type="email" name="email" placeholder="Email" className="bg-white border-gray-300" required aria-label="Your Email Address" />
                <Input type="text" name="zip" placeholder="Zip Code" className="bg-white border-gray-300" required aria-label="Zip Code" />
                <Textarea name="message" placeholder="I need a garage door repair for my 150 years old garage door" className="bg-white border-gray-300 min-h-[100px]" aria-label="Your Message" />
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 text-lg">
                  Get Instant Quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
