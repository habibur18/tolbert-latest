"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";

export default function GDRFaqSection() {
  const [openItem, setOpenItem] = useState("item-1");

  const faqs = [
    {
      id: "item-1",
      question: "How long does a garage door replacement take?",
      answer: "Most standard garage door replacements can be completed in a single day. However, custom installations or complex projects may take 1-2 days. Our technicians work efficiently to minimize disruption to your daily routine.",
    },
    {
      id: "item-2",
      question: "What types of garage doors do you offer?",
      answer: "We offer a wide range of garage doors including steel, wood, aluminum, and our popular Lifestyle screen doors. Each type comes in various styles, colors, and insulation options to match your home's aesthetic and your specific needs.",
    },
    {
      id: "item-3",
      question: "Do I need to replace my garage door opener too?",
      answer: "Not necessarily. If your current opener is in good working condition, it may be compatible with your new door. However, if your opener is older (7+ years), we often recommend replacing it to ensure optimal performance and to take advantage of newer safety and security features.",
    },
    {
      id: "item-4",
      question: "How much does a new garage door cost?",
      answer: "Garage door prices vary based on size, material, style, and features. Basic steel doors start around $899, while custom wood or specialty doors can range from $1,500 to $3,000+. We provide detailed quotes after assessing your specific needs and preferences.",
    },
    {
      id: "item-5",
      question: "Do you offer warranties on new garage doors?",
      answer: "Yes, all our garage doors come with manufacturer warranties, typically ranging from 5-15 years depending on the model. Additionally, we provide a 5-year warranty on our installation work, giving you peace of mind with your investment.",
    },
    {
      id: "item-6",
      question: "Can I keep my old garage door opener remote?",
      answer: "If you're replacing just the door and keeping your existing opener, you can continue using your current remotes. If you're upgrading the opener as well, new remotes will be provided, and we'll help you program them before we leave.",
    },
    {
      id: "item-7",
      question: "What maintenance does a new garage door require?",
      answer: "Modern garage doors require minimal maintenance. We recommend a yearly inspection to check springs, cables, rollers, and hinges. Occasional lubrication of moving parts and cleaning the tracks will help ensure smooth operation and extend the life of your door.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Get answers to common questions about garage door replacement.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem}>
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium text-lg py-4 hover:text-primary transition-colors">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600">
            Still have questions? Contact our team at{" "}
            <a href="tel:469-909-0956" className="text-primary font-medium hover:underline">
              (469) 909-0956
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
