import { Button } from "@/components/ui/button";
import { Clock, Phone, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EmergencyServices() {
  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="px-4 py-1 rounded-full bg-[#32750a]/20 text-[#32750a] text-sm font-medium inline-block mb-4">24/7 Emergency Service</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Garage Door <span className="text-[#32750a]">Emergency?</span> We're Available 24/7
            </h2>
            <p className="text-gray-700 mb-6">When your garage door fails, it can compromise your home's security and disrupt your daily routine. Our emergency garage door repair service is available 24 hours a day, 7 days a week to address urgent issues like:</p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#32750a]/20 text-[#32750a] mt-1">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Broken Springs</h3>
                  <p className="text-gray-600">Springs under high tension can break suddenly, making it impossible to open your door.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#32750a]/20 text-[#32750a] mt-1">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Door Off Track</h3>
                  <p className="text-gray-600">A door that's jumped its track can cause damage and poses a safety hazard.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#32750a]/20 text-[#32750a] mt-1">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Opener Failures</h3>
                  <p className="text-gray-600">When your opener stops working and you can't get your car in or out of the garage.</p>
                </div>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#32750a] hover:bg-[#2b6309] text-white">
                <Link href="tel:4699090956">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: (469)-909-0956
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#32750a] text-[#32750a]">
                <Link href="#contact">Request Emergency Service</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image src="/gate/Tolbert Garage Door community.jpg" alt="Emergency garage door repair service" width={600} height={400} className="w-full object-cover" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <h3 className="text-xl font-bold mb-3">Our Emergency Promise</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-[#32750a]" />
                  <span className="text-sm">Fast response times</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#32750a]" />
                  <span className="text-sm">Licensed technicians</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#32750a]" />
                  <span className="text-sm">Available 24/7/365</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
