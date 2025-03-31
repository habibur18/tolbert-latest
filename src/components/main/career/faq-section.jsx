"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function FaqSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const Collapsible = ({ children }) => {
    const [open, setOpen] = useState(false);
    return children({ open, setOpen });
  };

  const CollapsibleTrigger = ({ children, className, open, setOpen }) => {
    return (
      <button className={className} onClick={() => setOpen(!open)}>
        {children}
      </button>
    );
  };

  const CollapsibleContent = ({ children, className, open }) => {
    if (!open) return null;
    return <div className={className}>{children}</div>;
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
          <Badge className="mb-4 bg-[#32750a] hover:bg-[#32750a]/90">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Find answers to common questions about careers at Tolbert Garage Door.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {[
            {
              question: "What qualifications do I need to become a garage door technician?",
              answer: "We look for candidates with mechanical aptitude, problem-solving skills, and a customer-focused attitude. Prior experience in garage door installation and repair is preferred but not always required for entry-level positions, as we provide comprehensive training.",
            },
            {
              question: "What is the application process like?",
              answer: "Our application process typically involves submitting your resume, completing an initial assessment, participating in interviews, and potentially a skills demonstration. The entire process usually takes 1-2 weeks from application to offer.",
            },
            {
              question: "Do you offer benefits?",
              answer: "Yes, we offer a comprehensive benefits package that includes health insurance, retirement plans, paid time off, and professional development opportunities. Full details are provided during the interview process.",
            },
            {
              question: "Is there room for advancement within the company?",
              answer: "We prioritize promoting from within and offer clear career paths for advancement. Many of our managers and team leaders started in entry-level positions.",
            },
            {
              question: "What is the company culture like?",
              answer: "We foster a collaborative, supportive environment where teamwork and customer satisfaction are valued. We celebrate achievements, provide constructive feedback, and encourage work-life balance.",
            },
          ].map((faq, index) => (
            <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-6">
              <Collapsible>
                {({ open, setOpen }) => (
                  <>
                    <CollapsibleTrigger open={open} setOpen={setOpen} className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-left">
                      <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                      {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </CollapsibleTrigger>
                    <CollapsibleContent open={open} className="p-4 bg-white border border-gray-100 rounded-b-lg mt-1">
                      <p className="text-gray-700">{faq.answer}</p>
                    </CollapsibleContent>
                  </>
                )}
              </Collapsible>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
