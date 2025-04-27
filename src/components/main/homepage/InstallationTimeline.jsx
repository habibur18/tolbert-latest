import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2, Clock, Zap } from "lucide-react";
import Link from "next/link";

const timelineSteps = [
  {
    title: "Initial Consultation",
    description: "We'll discuss your needs, preferences, and budget to find the perfect garage door solution.",
    time: "Day 1",
    completed: true,
    sameDay: true,
  },
  {
    title: "Measurement & Quote",
    description: "Our technician will take precise measurements and provide a detailed quote with no hidden fees.",
    time: "Day 1-2",
    completed: true,
    sameDay: true,
  },
  {
    title: "Order Placement",
    description: "Once approved, we'll order your custom garage door and schedule the installation date.",
    time: "Day 2-3",
    completed: true,
    sameDay: false,
  },
  {
    title: "Manufacturing",
    description: "Your garage door is custom-built to your specifications with premium materials.",
    time: "Day 3-10",
    completed: false,
    sameDay: false,
  },
  {
    title: "Installation",
    description: "Our certified technicians will install your new door with precision and care.",
    time: "Day 11-12",
    completed: false,
    sameDay: false,
  },
];

export default function InstallationTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full bg-[#32750a]/10 text-[#32750a] text-sm font-medium">Installation Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
            Your Garage Door <span className="text-[#32750a]">Journey</span>
          </h2>
          <div className="h-1 w-20 bg-[#32750a] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">From consultation to completion, here's what to expect when you choose Tolbert Garage Door for your new installation.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline header with same-day service callout */}
          <div className="bg-[#32750a]/10 rounded-lg p-4 mb-10 flex items-center">
            <div className="bg-[#32750a] rounded-full p-2 mr-3">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-[#32750a]">Same-Day Service Available</h3>
              <p className="text-sm">For many repairs and consultations, we offer same-day service. During your free estimate, we'll let you know if your project qualifies.</p>
            </div>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#32750a] to-gray-200 transform md:-translate-x-1/2"></div>

            {/* Timeline steps */}
            <div className="space-y-8">
              {timelineSteps.map((step, index) => (
                <div key={index} className={cn("relative", index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto")}>
                  {/* Timeline dot */}
                  <div className={cn("absolute left-0 md:left-1/2 top-0 w-8 h-8 rounded-full transform -translate-y-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center", step.completed ? "bg-[#32750a]" : "bg-white border-2 border-gray-200")}>{step.completed && <CheckCircle2 className="h-5 w-5 text-white" />}</div>

                  {/* Content card */}
                  <div className={cn("ml-12 md:ml-0 relative bg-white p-6 rounded-lg shadow-md border", step.completed ? "border-[#32750a]/30" : "border-gray-200", index % 2 === 0 ? "md:mr-8" : "md:ml-8")}>
                    {/* Arrow for desktop */}
                    <div className={cn("hidden md:block absolute top-0 w-4 h-4 bg-white border transform rotate-45 -translate-y-1/2", step.completed ? "border-[#32750a]/30" : "border-gray-200", index % 2 === 0 ? "right-0 translate-x-1/2 border-t-0 border-l-0" : "left-0 -translate-x-1/2 border-b-0 border-r-0")}></div>

                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">{step.title}</h3>
                      <div className="flex items-center">
                        {step.sameDay && (
                          <span className="mr-2 px-2 py-1 rounded text-xs font-medium bg-[#32750a]/10 text-[#32750a] flex items-center">
                            <Zap className="h-3 w-3 mr-1" />
                            Same-Day
                          </span>
                        )}
                        <span className={cn("px-2 py-1 rounded text-xs font-medium flex items-center", step.completed ? "bg-[#32750a]/10 text-[#32750a]" : "bg-gray-100 text-gray-600")}>
                          <Clock className="h-3 w-3 mr-1" />
                          {step.time}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Need Faster Service?</h3>
            <p className="text-gray-700 mb-4">Many repairs can be completed same-day. During your free consultation, we'll let you know if your project qualifies for expedited service.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#32750a] hover:bg-[#2b6309]">
                <Link href="#contact">Schedule Your Consultation</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#32750a] text-[#32750a]">
                <Link href="tel:4699090956">Call for Emergency Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
