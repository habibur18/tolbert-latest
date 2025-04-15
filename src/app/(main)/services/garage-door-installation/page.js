import ImageGallery from "@/components/image-gallery";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Check, Clock, Shield, ThumbsUp, PenToolIcon as Tool } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Professional Garage Door Installation Services | Fast & Affordable | Tolbert Garage Door",
  description: "Expert garage door installation in Dallas, TX, maintenance, and repair services. Licensed and insured professionals, 100% satisfaction guaranteed. Get your free quote today!",
  keywords: "garage door installation, garage door repair, door maintenance, panel replacement, spring replacement, hardware parts, tolbert garage door repair",
  icons: "/Tolbert Garage Door Logo.png",
  openGraph: {
    title: "Professional Garage Door Installation Services | Fast & Affordable",
    description: "Expert garage door installation and repair services with 100% satisfaction guarantee",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2PB3b1UQtgKTWMxGNELYKgDZuplZbv.png",
        width: 1200,
        height: 630,
        alt: "Professional Garage Door Services",
      },
    ],
  },
};

export default function GarageDoorInstallation() {
  const features = [
    { icon: Tool, text: "Expert Installation" },
    { icon: Shield, text: "Enhanced Security" },
    { icon: Clock, text: "Timely Service" },
    { icon: ThumbsUp, text: "Quality Guaranteed" },
  ];
  return (
    <>
      <div className="relative">
        {/* Hero Section with Form */}
        <div>
          <div className="absolute inset-0">
            <Image src="https://olympusgaragedoorrepair.com/images/new-install.jpg" alt="Background Image" fill className="w-full h-full object-cover lg:object-fill" />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-16">
            <div className="flex flex-col items-center text-center space-y-6">
              <h1 className="text-5xl font-bold text-white max-w-4xl leading-tight">
                PREMIUM <span className="text-green-500">GARAGE DOOR</span> INSTALLATION SERVICES
              </h1>

              <div className="flex flex-wrap justify-center gap-3 text-white">
                {["New Installation", "Door Maintenance", "Panel Replacement", "Bent Rails Off Tracks", "Hardware Parts"].map((service) => (
                  <div key={service} className="flex items-center gap-2 bg-green-500/50 px-3 py-1 rounded-full">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-xl px-8 py-4">
                (469) 909-0956
              </Button>

              {/* Quote Form */}
              <div className="w-full max-w-2xl bg-white/95 p-4 rounded-lg mt-6">
                <h2 className="text-3xl font-bold text-green-600 text-center mb-4">GET FREE ESTIMATION QUOTE</h2>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Input placeholder="Name" className="border-green-500" />
                  <Input placeholder="Phone" className="border-green-500" />
                  <Input placeholder="Enter Email" className="border-green-500" />
                  <Input placeholder="Zip" className="border-green-500" />
                  <Textarea placeholder="I need a new garage door installation service for my new home" className="md:col-span-2 border-green-500" rows={3} />
                  <div className="md:col-span-2 flex justify-end">
                    <Button className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 text-lg">SUBMIT</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-8 animate-fade-in-up">
            Garage Door <span className="text-green-600">Installation</span> Service Provider in the Dallas Metropolitan Area
          </h2>

          {/* Subheading */}
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">Enhance your property&apos;s value and security with our professional garage door installation.</p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 animate-fade-in-up animation-delay-400">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="flex flex-col items-center p-6">
                  <feature.icon className="w-12 h-12 text-green-500 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800">{feature.text}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Image Gallery */}
          <div className="mb-24">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-8">
              Our Work: <span className="text-green-500">Over 2400+ Homes</span> Served
            </h2>
            {/* <ImageGallery />*/}
            <ImageGallery />
          </div>

          {/* Description and Image */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                Your Trusted <span className="text-green-500">Garage Door</span> Partner
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At <span className="text-green-500">Tolbert Garage Door</span>, we&apos;re your one-stop shop for new <span className="text-green-500">garage door</span> installation. Our team of expert engineers will evaluate your needs and help you choose the perfect door for your home.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">We work with top manufacturers to offer a wide range of styles and designs, ensuring you get the best quality and value for your investment.</p>
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="md:w-1/2">
              <img src="/Tolbert and his team.jpg" alt="Professional garage door installation" className="rounded-lg shadow-xl w-full h-auto object-cover" />
            </div>
          </div>

          {/* Service Process */}
          <div className="mb-24">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-8">
              Our Installation <span className="text-green-500">Process</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Consultation", "Selection", "Installation"].map((step, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-500 rounded-full mb-4">
                      <Check className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{step}</h3>
                    <p className="text-gray-600">
                      {index === 0 && "We assess your needs and provide expert advice."}
                      {index === 1 && "Choose from our wide range of high-quality doors."}
                      {index === 2 && "Our team ensures precise and efficient installation."}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-xl p-12">
            <h2 className="text-5xl font-bold text-white mb-4">Ready to Upgrade Your Garage Door?</h2>
            <p className="text-white text-xl mb-8">Schedule your installation today and experience the Tolbert Garage Door Repair difference!</p>
            <p className="text-white text-2xl font-semibold mb-6">Call us: (469) 909-0956</p>
            <Button className="bg-white text-green-500 hover:bg-gray-100 text-lg py-6 px-8">
              Get Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
