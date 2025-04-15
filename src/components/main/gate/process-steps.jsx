import { Button } from "@/components/ui/button";
import { ArrowRight, Award, CheckCircle, ChevronDown, PenToolIcon as Tool } from "lucide-react";

export function ProcessSteps() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#32750a]/10 px-4 py-2 rounded-full text-[#32750a] font-medium mb-4">Our Process</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Simple 3-Step Process</h2>
          <p className="text-xl text-gray-600">Getting your gate or garage door project done is easy with our simple process designed for your convenience.</p>
        </div>

        <div className="relative">
          {/* Mobile process steps (visible on small screens) */}
          <div className="md:hidden space-y-16">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl relative z-20 transform transition-transform duration-300 hover:-translate-y-2">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#32750a] text-white flex items-center justify-center text-2xl font-bold">1</div>
              <div className="text-center pt-10">
                <h3 className="text-2xl font-bold mb-4">Consultation & Design</h3>
                <p className="text-lg text-gray-600">We'll chat about what you need, give expert advice, and create a custom design for your gate or garage door project.</p>
                <div className="mt-6 bg-[#32750a]/5 rounded-xl p-4">
                  <CheckCircle className="h-8 w-8 text-[#32750a] mx-auto mb-2" />
                  <p className="text-[#32750a] font-medium">Free design consultation</p>
                </div>
              </div>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 relative">
                  <div className="absolute inset-0 bg-[#32750a] opacity-20 rounded-full animate-ping"></div>
                  <ChevronDown className="w-8 h-8 text-[#32750a]" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl relative z-20 transform transition-transform duration-300 hover:-translate-y-2">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#32750a] text-white flex items-center justify-center text-2xl font-bold">2</div>
              <div className="text-center pt-10">
                <h3 className="text-2xl font-bold mb-4">Custom Fabrication</h3>
                <p className="text-lg text-gray-600">Our skilled craftsmen will build your custom gate or prepare your selected garage door exactly how you want it.</p>
                <div className="mt-6 bg-[#32750a]/5 rounded-xl p-4">
                  <Tool className="h-8 w-8 text-[#32750a] mx-auto mb-2" />
                  <p className="text-[#32750a] font-medium">Quality materials & craftsmanship</p>
                </div>
              </div>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 relative">
                  <div className="absolute inset-0 bg-[#32750a] opacity-20 rounded-full animate-ping"></div>
                  <ChevronDown className="w-8 h-8 text-[#32750a]" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl relative z-20 transform transition-transform duration-300 hover:-translate-y-2">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#32750a] text-white flex items-center justify-center text-2xl font-bold">3</div>
              <div className="text-center pt-10">
                <h3 className="text-2xl font-bold mb-4">Professional Installation</h3>
                <p className="text-lg text-gray-600">Our expert technicians will install your new gate or garage door with care, making sure everything works perfectly.</p>
                <div className="mt-6 bg-[#32750a]/5 rounded-xl p-4">
                  <Award className="h-8 w-8 text-[#32750a] mx-auto mb-2" />
                  <p className="text-[#32750a] font-medium">Warranty-backed installation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop process steps (hidden on small screens) */}
          <div className="hidden md:block relative">
            {/* Process flow line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#32750a]/20 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-xl relative transform transition-transform duration-300 hover:-translate-y-4">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#32750a] text-white flex items-center justify-center text-2xl font-bold">1</div>
                <div className="text-center pt-10">
                  <h3 className="text-2xl font-bold mb-4">Consultation & Design</h3>
                  <p className="text-lg text-gray-600">We'll chat about what you need, give expert advice, and create a custom design for your gate or garage door project.</p>
                  <div className="mt-6 bg-[#32750a]/5 rounded-xl p-4">
                    <CheckCircle className="h-8 w-8 text-[#32750a] mx-auto mb-2" />
                    <p className="text-[#32750a] font-medium">Free design consultation</p>
                  </div>
                </div>
                <div className="hidden md:flex absolute -right-12 top-1/2 transform -translate-y-1/2 z-20 justify-center items-center">
                  <div className="w-8 h-8 relative">
                    <div className="absolute inset-0 bg-[#32750a] opacity-20 rounded-full animate-ping"></div>
                    <ArrowRight className="w-8 h-8 text-[#32750a]" />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-xl relative transform transition-transform duration-300 hover:-translate-y-4">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#32750a] text-white flex items-center justify-center text-2xl font-bold">2</div>
                <div className="text-center pt-10">
                  <h3 className="text-2xl font-bold mb-4">Custom Fabrication</h3>
                  <p className="text-lg text-gray-600">Our skilled craftsmen will build your custom gate or prepare your selected garage door exactly how you want it.</p>
                  <div className="mt-6 bg-[#32750a]/5 rounded-xl p-4">
                    <Tool className="h-8 w-8 text-[#32750a] mx-auto mb-2" />
                    <p className="text-[#32750a] font-medium">Quality materials & craftsmanship</p>
                  </div>
                </div>
                <div className="hidden md:flex absolute -right-12 top-1/2 transform -translate-y-1/2 z-20 justify-center items-center">
                  <div className="w-8 h-8 relative">
                    <div className="absolute inset-0 bg-[#32750a] opacity-20 rounded-full animate-ping"></div>
                    <ArrowRight className="w-8 h-8 text-[#32750a]" />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-xl relative transform transition-transform duration-300 hover:-translate-y-4">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#32750a] text-white flex items-center justify-center text-2xl font-bold">3</div>
                <div className="text-center pt-10">
                  <h3 className="text-2xl font-bold mb-4">Professional Installation</h3>
                  <p className="text-lg text-gray-600">Our expert technicians will install your new gate or garage door with care, making sure everything works perfectly.</p>
                  <div className="mt-6 bg-[#32750a]/5 rounded-xl p-4">
                    <Award className="h-8 w-8 text-[#32750a] mx-auto mb-2" />
                    <p className="text-[#32750a] font-medium">Warranty-backed installation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button className="bg-[#32750a] hover:bg-[#32750a]/90 text-white px-10 py-7 text-lg rounded-full">Start Your Project Today</Button>
        </div>
      </div>
    </section>
  );
}
