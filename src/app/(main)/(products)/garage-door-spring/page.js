"use client";

import { AwesomeSpringComparison } from "@/components/awesome-spring-comparison";
import { EmergencyContact } from "@/components/emergency-contact";
import { MeasurementGuide } from "@/components/measurement-guide";
import { ServiceArea } from "@/components/service-area";
import { SpringAnimation } from "@/components/spring-animation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Phone, Shield, Star } from "lucide-react";
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 lg:pt-36">
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="relative">
            <Badge className="mb-4 bg-green-500/10 text-green-600 hover:bg-green-500/20">
              DFW&apos;s #1 <span>Garage Door Company</span>
            </Badge>
            <h1 className="text-balance bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
              Expert <span className="text-green-500">Garage Door Spring</span> Services
            </h1>
            <p className="mt-6 max-w-[55ch] text-lg text-gray-600 sm:text-xl w-full ">
              Professional installation and repair with industry-leading <span className="text-green-500">5-year</span> warranty. Available 24/7 for your <span className="text-green-500">garage door</span> needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
              <Button size="lg" variant="outline">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-500" />
                <span className="font-medium">24/7 Service</span>
              </div>
            </div>
          </div>
          <div className="relative lg:ml-8">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-xl" />
            <div className="relative  w-full">
              <SpringAnimation />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <MeasurementGuide />
      <AwesomeSpringComparison />
      <ServiceArea />
      <EmergencyContact />
    </section>
  );
}
