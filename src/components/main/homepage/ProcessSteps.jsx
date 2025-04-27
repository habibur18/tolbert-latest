import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarCheck, CheckSquare, PhoneCall, ThumbsUp, Wrench } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: <PhoneCall className="h-6 w-6 text-white" />,
    title: "Contact Us",
    description: "Call us or fill out our online form to schedule service.",
    color: "#32750a",
  },
  {
    icon: <CalendarCheck className="h-6 w-6 text-white" />,
    title: "Schedule Service",
    description: "We'll arrange a convenient time for our technician to visit.",
    color: "#3d8c0f",
  },
  {
    icon: <Wrench className="h-6 w-6 text-white" />,
    title: "Expert Service",
    description: "Our certified technician will diagnose and repair your door.",
    color: "#32750a",
  },
  {
    icon: <CheckSquare className="h-6 w-6 text-white" />,
    title: "Quality Check",
    description: "We'll test your door to ensure everything works perfectly.",
    color: "#3d8c0f",
  },
  {
    icon: <ThumbsUp className="h-6 w-6 text-white" />,
    title: "Satisfaction",
    description: "Enjoy your properly functioning door with our warranty.",
    color: "#32750a",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-[#f5f9f5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full bg-[#32750a]/10 text-[#32750a] text-sm font-medium">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
            How We <span className="text-[#32750a]">Work</span>
          </h2>
          <div className="h-1 w-20 bg-[#32750a] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">Our simple 5-step process ensures a smooth experience from your initial contact to job completion.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Modern process steps with horizontal layout */}
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-16 left-10 right-10 h-0.5 bg-[#32750a]/20 hidden md:block"></div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center relative">
                  <div className={cn("relative z-10 mb-4 rounded-full p-4 flex items-center justify-center")} style={{ backgroundColor: step.color }}>
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-[#32750a] font-bold flex items-center justify-center border-2 border-[#32750a]">{index + 1}</div>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button asChild className="bg-[#32750a] hover:bg-[#2b6309]">
              <Link href="#contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
