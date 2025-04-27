"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MinusCircle, PlusCircle } from "lucide-react";
import Link from "next/link";

// FAQ data structured for SEO and featured snippets
const faqCategories = [
  {
    category: "Repairs & Troubleshooting",
    questions: [
      {
        question: "How much does it cost to repair a garage door?",
        answer: "Garage door repair costs typically range from $89 to $299 depending on the issue. Simple repairs like sensor alignment or track adjustments start at $89, while spring replacements average $189-$249 for a pair. Opener repairs typically cost $129-$199. At Tolbert Garage Door, we provide free estimates and transparent pricing before any work begins.",
      },
      {
        question: "How long does a garage door repair take?",
        answer: "Most garage door repairs can be completed in 1-2 hours. Simple issues like sensor alignment or track adjustments may take 30-60 minutes, while spring replacements or opener installations typically take 1-2 hours. Our Tolbert Garage Door technicians arrive with fully-stocked trucks to complete most repairs in a single visit.",
      },
      {
        question: "What are the signs that my garage door springs need replacement?",
        answer: "Signs that your garage door springs need replacement include: 1) The door feels heavy or difficult to lift manually, 2) You hear a loud bang or snapping noise when operating the door, 3) The door appears crooked or uneven when opening/closing, 4) Visible gaps or stretching in the springs, or 5) The door won't stay open when raised halfway. Springs typically last 7-10 years depending on usage. Tolbert Garage Door offers same-day spring replacement service throughout the DFW area.",
      },
    ],
  },
  {
    category: "New Doors & Installation",
    questions: [
      {
        question: "How much does a new garage door cost?",
        answer: "New garage door prices range from $699 to $3,500+ depending on material, style, size, and features. Basic steel doors start around $699-$999, mid-range insulated doors cost $1,000-$1,800, and premium carriage house or custom wood doors range from $1,800-$3,500+. Installation is typically included in our pricing. At Tolbert Garage Door, we offer free in-home consultations to provide an exact quote for your specific needs.",
      },
      {
        question: "How long does it take to install a new garage door?",
        answer: "A standard garage door installation typically takes 4-6 hours to complete. This includes removing the old door, installing the new door, setting up the opener, and testing everything for proper operation. Custom installations or those requiring additional modifications may take longer. Tolbert Garage Door handles everything from removal and disposal of your old door to the complete setup of your new door system.",
      },
    ],
  },
  {
    category: "Maintenance & Service",
    questions: [
      {
        question: "How often should garage doors be serviced?",
        answer: "Garage doors should be professionally serviced once a year for residential use and quarterly for commercial or high-use applications. Regular maintenance prevents costly repairs, extends the life of your door system, ensures safe operation, and maintains warranty coverage. Tolbert Garage Door's maintenance service includes lubrication, hardware tightening, spring tension adjustment, safety testing, and a comprehensive inspection.",
      },
      {
        question: "What's included in your garage door tune-up service?",
        answer: "Tolbert Garage Door's comprehensive garage door tune-up includes: 1) Lubricating all moving parts, 2) Tightening all hardware and fasteners, 3) Checking and adjusting spring tension, 4) Inspecting cables, rollers, and hinges for wear, 5) Testing safety sensors and auto-reverse features, 6) Checking door balance and alignment, 7) Inspecting weather seals, and 8) Testing the opener and remote operation. This 21-point inspection helps prevent breakdowns and extends the life of your door system.",
      },
    ],
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full bg-[#32750a]/10 text-[#32750a] text-sm font-medium">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
            Frequently Asked <span className="text-[#32750a]">Questions</span>
          </h2>
          <div className="h-1 w-20 bg-[#32750a] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">Find answers to common questions about garage door repair, installation, and maintenance from the experts at Tolbert Garage Door.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h3 className="text-xl font-bold mb-4">{category.category}</h3>

              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                    <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 data-[state=open]:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4 text-left">
                        <div className="flex-shrink-0 pt-1">
                          <div className="h-6 w-6 rounded-full bg-[#32750a]/10 flex items-center justify-center">
                            <PlusCircle className="h-4 w-4 text-[#32750a] accordion-plus" />
                            <MinusCircle className="h-4 w-4 text-[#32750a] accordion-minus" />
                          </div>
                        </div>
                        <h4 className="font-medium text-lg">{faq.question}</h4>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-2 text-gray-700">
                      <div className="pl-10">{faq.answer}</div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {/* View all FAQs button */}
          <div className="text-center mt-8">
            <Button asChild className="bg-[#32750a] hover:bg-[#2b6309]">
              <Link href="/faqs">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.accordion-plus) {
          display: flex;
        }
        :global(.accordion-minus) {
          display: none;
        }
        :global([data-state="open"] .accordion-plus) {
          display: none;
        }
        :global([data-state="open"] .accordion-minus) {
          display: flex;
        }
      `}</style>
    </section>
  );
}
