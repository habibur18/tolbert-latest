import GDRFaqSection from "@/components/main/services/garage-door-replacement/gdr-faq-section";
import GDRForm from "@/components/main/services/garage-door-replacement/gdr-form";
import { Clock, Phone, Shield, ThumbsUp, Wrench } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Garage Door Replacement Dallas TX | New Installations & Upgrades || Tolbert Garage Door Repair",
  description: "Need professional garage door replacement in Dallas, TX? Tolbert Garage Door Repair offers expert service, a wide selection of new garage doors, and upgrades to enhance your home's security and curb appeal. Get a free quote!",
  keywords: "garage door replacement Dallas TX, new garage door installation Dallas, residential garage doors Dallas, garage door upgrade Dallas, emergency garage door replacement near me Dallas, cost to replace garage door Dallas, best garage door company Dallas, local garage door installers Dallas, garage door supply and service Dallas, reliable garage door replacement Dallas, Tolbert Garage Door Repair",
};

export default function GarageDoorReplacement() {
  const services = [
    {
      title: "Garage Door Installation",
      description: "Professional installation of new garage doors",
      link: "/garage-door-installation",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Garage Door Repair",
      description: "Quick fixes for all garage door issues",
      link: "/garage-door-repair",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Garage Door Maintenance",
      description: "Regular service to prevent future problems",
      link: "/garage-door-maintenance",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Garage Door Replacement",
      description: "Complete replacement of outdated doors",
      link: "/garage-door-replacement",
      image: "/placeholder.svg?height=80&width=80",
      active: true,
    },
  ];

  const doorOptions = [
    {
      title: "Steel Doors",
      description: "Durable, low-maintenance options with various insulation levels.",
      price: "Starting at $899",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Wood Doors",
      description: "Classic beauty with natural warmth and customizable designs.",
      price: "Starting at $1,299",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Modern Designs",
      description: "Contemporary styles with glass and aluminum for a sleek look.",
      price: "Starting at $1,499",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Lifestyle Garage Doors",
      description: "Versatile, screen options that transform your garage into a functional living space.",
      price: "Starting at $1,699",
      image: "/placeholder.svg?height=400&width=600",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Dallas Garage Door Experts</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 opacity-20 rounded-md -skew-y-2 transform" />
                  <span className="relative text-primary">Garage Door</span>
                </span>{" "}
                <span className="block sm:inline">Replacement Services</span> <span className="block sm:inline text-gray-600">near Dallas, TX</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700">Upgrade your home&apos;s appearance and security with our professional garage door replacement services. Serving Dallas and surrounding areas.</p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>5-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                  <ThumbsUp className="h-5 w-5 text-primary" />
                  <span>100% Satisfaction</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <a href="tel:214-555-1234" className="text-xl font-bold text-primary hover:underline">
                  (469) 909-0956
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-xl">
              <h2 className="text-2xl font-bold text-primary mb-4">Get Your Free Quote Today</h2>
              <GDRForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <Link href={service.link} key={index} target="_blank" className={`block p-4 rounded-lg text-center ${service.active ? "bg-primary text-white" : "bg-white hover:bg-gray-100"} transition-all shadow-sm`}>
                <div className="flex flex-col items-center h-full">
                  <div className="mb-3 w-16 h-16 relative">
                    <Image src={service.image || "/placeholder.svg"} alt={service.title} width={80} height={80} className="object-contain" />
                  </div>
                  <h3 className={`font-bold ${service.active ? "text-white" : "text-gray-800"}`}>{service.title}</h3>
                  <p className={`text-sm mt-1 ${service.active ? "text-white/90" : "text-gray-600"}`}>{service.description}</p>
                  <button className={`mt-3 px-4 py-2 rounded-md text-sm font-medium ${service.active ? "bg-white text-primary hover:bg-gray-100" : "bg-primary text-white hover:bg-primary/90"}`}>Get Service</button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Replace Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Replace Your Garage Door?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">A new garage door is one of the best investments you can make for your home's value and curb appeal.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Wrench className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Improved Safety</h3>
              <p className="text-gray-600">Modern garage doors come with advanced safety features to protect your family and belongings.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Wrench className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Energy Efficiency</h3>
              <p className="text-gray-600">New insulated garage doors help maintain temperature, reducing your energy bills year-round.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Wrench className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Curb Appeal</h3>
              <p className="text-gray-600">Enhance your home's appearance and potentially increase property value with a stylish new door.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Replacement Process</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We make garage door replacement simple and stress-free with our proven process.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                step: 1,
                title: "Consultation",
                desc: "We assess your needs and help you choose the perfect door for your home.",
              },
              { step: 2, title: "Measurement", desc: "Our experts take precise measurements to ensure a perfect fit." },
              {
                step: 3,
                title: "Installation",
                desc: "Professional installation by our trained and certified technicians.",
              },
              {
                step: 4,
                title: "Final Inspection",
                desc: "We ensure everything works perfectly and clean up before we leave.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl shadow-lg">{item.step}</div>
                {index < 3 && <div className="hidden md:block absolute top-10 left-[60%] right-0 h-0.5 bg-gray-200 z-0"></div>}
                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Door Options Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Garage Door Options</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Choose from our wide selection of high-quality garage doors to match your home's style.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {doorOptions.map((door, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-md group">
                <div className="relative h-64 overflow-hidden">
                  <Image src={door.image || "/placeholder.svg"} alt={door.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-semibold">{door.price}</p>
                    <button className="mt-2 px-4 py-1 bg-white/20 backdrop-blur-sm text-white border border-white/40 rounded-md text-sm hover:bg-white/30">Learn More</button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{door.title}</h3>
                  <p className="text-gray-600 mb-4">{door.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <GDRFaqSection />

      {/* Testimonials Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Our Dallas Customers Say</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Don't just take our word for it - hear from our satisfied customers throughout Dallas.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"The team was professional and efficient. My new garage door looks amazing and works perfectly. Highly recommend their services!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">M</div>
                <p className="font-bold text-gray-800 ml-3">Michael R., Dallas</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"From consultation to installation, everything was smooth. The new door has made a huge difference in our home's appearance."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">S</div>
                <p className="font-bold text-gray-800 ml-3">Sarah T., Richardson</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"I appreciated how they explained all my options and helped me choose the right door for my budget. Great service!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">D</div>
                <p className="font-bold text-gray-800 ml-3">David L., Plano</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium flex items-center mx-auto">
              Read More Reviews
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Home?</h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">Get started with a free, no-obligation quote for your garage door replacement project.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-md font-medium">Get Your Free Quote</button>
              <button className="text-white border border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium">Call (214) 555-1234</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
