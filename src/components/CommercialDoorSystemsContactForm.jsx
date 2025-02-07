"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function CommercialDoorSystemsContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add form submission logic here
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input placeholder="Name" required name="name" />
        </div>
        <div>
          <Input type="email" placeholder="Email" required name="email" />
        </div>
        <div>
          <Input type="tel" placeholder="Phone" required name="phone" />
        </div>
        <div>
          <Input placeholder="ZIP Code" required name="zip" />
        </div>
      </div>
      <div>
        <Textarea placeholder="Your Message" required name="message" className="min-h-[120px]" />
      </div>
      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
