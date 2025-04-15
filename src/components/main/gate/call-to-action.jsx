import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#32750a] to-[#245607]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Make Your Home Awesome?</h2>
          <p className="text-xl mb-10 leading-relaxed">Contact Tolbert Garage Door today for a free chat about custom gates and garage door solutions from Dallas's most trusted specialists.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-[#32750a] hover:bg-white/90 font-bold text-xl px-10 py-8 rounded-full">
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white border-2 text-white hover:bg-white/10 font-medium text-xl px-10 py-8 rounded-full">
              <Phone className="mr-3 h-6 w-6" /> Call Now
            </Button>
          </div>
          <p className="mt-8 text-white/80 text-lg">Same-day service available for repairs. Serving all of Dallas, TX and surrounding areas.</p>
        </div>
      </div>
    </section>
  );
}
