import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function OurServices() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#32750a]/10 px-4 py-2 rounded-full text-[#32750a] font-medium mb-4">Our Services</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Make Your Gate & Garage Awesome With Our Expertise</h2>
          <p className="text-xl text-gray-600">From custom gate designs to garage door solutions, Tolbert provides complete residential and commercial services for Dallas homeowners.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Service Card 1 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-60 overflow-hidden relative">
              <Image src="/gate/custom gate installation.jpeg" alt="Custom Gate Design" width={700} height={500} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-2xl font-bold text-white p-6">Custom Gate Design & Installation</h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6">Awesome gate solutions made just for your property's look and security needs, from fancy entry gates to modern driveway systems.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#32750a] mr-3 shrink-0 mt-0.5" />
                  <span>Automatic gate systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#32750a] mr-3 shrink-0 mt-0.5" />
                  <span>Custom design & fabrication</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#32750a] mr-3 shrink-0 mt-0.5" />
                  <span>Access control integration</span>
                </li>
              </ul>
              <Link href="/services/gates" className="inline-flex items-center text-[#32750a] font-medium text-lg hover:underline group">
                Explore Gate Services <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-60 overflow-hidden relative">
              <Image src="/gate/garage door solutions.jpg" alt="Garage Door Installation" width={700} height={500} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-2xl font-bold text-white p-6">Garage Door Solutions</h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6">Complete garage door services including new installations, replacements, and repairs with a focus on quality and performance.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#32750a] mr-3 shrink-0 mt-0.5" />
                  <span>Premium door selection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#32750a] mr-3 shrink-0 mt-0.5" />
                  <span>Smart opener installation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#32750a] mr-3 shrink-0 mt-0.5" />
                  <span>Emergency repair service</span>
                </li>
              </ul>
              <Link href="/services/garage-doors" className="inline-flex items-center text-[#32750a] font-medium text-lg hover:underline group">
                Explore Garage Door Services <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-60 overflow-hidden relative">
              <Image src="/gate/garage door Maintenance & Repair.jpeg" alt="Maintenance Services" width={700} height={500} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-2xl font-bold text-white p-6">Maintenance & Repair</h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6">Keep your gates and garage doors working smoothly with our complete maintenance and repair services.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#32750a] mr-3 shrink-0 mt-0.5" />
                  <span>Preventative maintenance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#32750a] mr-3 shrink-0 mt-0.5" />
                  <span>24/7 emergency repairs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#32750a] mr-3 shrink-0 mt-0.5" />
                  <span>System upgrades & retrofits</span>
                </li>
              </ul>
              <Link href="/services/maintenance" className="inline-flex items-center text-[#32750a] font-medium text-lg hover:underline group">
                Explore Maintenance Services <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button className="bg-[#32750a] hover:bg-[#32750a]/90 text-white px-10 py-7 text-lg rounded-full">View All Services</Button>
        </div>
      </div>
    </section>
  );
}
