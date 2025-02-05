"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function WhyChooseSection() {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // Randomly decide layout on component mount
    setIsFlipped(Math.random() > 0.5);
  }, []);

  const contentSection = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-5xl">WHY CHOOSE TOLBERT GARAGE DOOR REPAIR</h2>

      <p className="text-lg text-green-700">Need reliable assistance on your garage door repair? Let us provide you with exceptional garage door repair services using our comprehensive skills, equipment, and expertise. There are a variety of reasons to count on us, and some of them are outlined here:</p>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="cost">
          <AccordionTrigger className="text-lg font-semibold text-green-600 hover:text-green-700">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌱</span>
              COST-EFFECTIVE
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-green-600 text-xl">We provide eco-friendly solutions at competitive pricing, ensuring sustainability and value for your investment.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="satisfaction">
          <AccordionTrigger className="text-lg font-semibold text-green-600 hover:text-green-700">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              100% CUSTOMER SATISFACTION
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-green-600 text-xl">Your satisfaction and environmental consciousness are our top priorities. We guarantee sustainable solutions.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="emergency">
          <AccordionTrigger className="text-lg font-semibold text-green-600 hover:text-green-700">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍃</span>
              24/7 EMERGENCY GARAGE DOOR REPAIRS
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-green-600 text-xl">Round-the-clock emergency services with energy-efficient repair solutions to minimize environmental impact.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="team">
          <AccordionTrigger className="text-lg font-semibold text-green-600 hover:text-green-700">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌲</span>
              SEASONED, WELL EQUIPPED TEAM
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-green-600 text-xl">Our experienced technicians use eco-friendly tools and sustainable practices for all repairs.</AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button size="lg" className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
        REQUEST A QUOTE
      </Button>
    </div>
  );

  const imageSection = (
    <div className="relative">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <img src={` ${isFlipped ? "/Tolbert and team-2.jpg" : "/Tolbert and his team.jpg"}`} alt="Garage door repair technician at work" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-green-50/50 py-16">
      <div className="container relative mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {isFlipped ? (
            <>
              {imageSection}
              {contentSection}
            </>
          ) : (
            <>
              {contentSection}
              {imageSection}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
