import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function AboutusSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-green-600 px-3 py-1 text-sm text-white">About Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Your Trusted <span className="text-green-600"> Garage Door</span> Experts
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
              With over <span className="text-green-600">20 years</span> of industry experience, <span className="text-green-600">Tolbert Garage Door</span> is dedicated to delivering exceptional service, top-notch craftsmanship, and customer satisfaction throughout the <span className="text-green-600">Dallas-Fort Worth</span> area.
            </p>
            <ul className="grid gap-2 md:grid-cols-2">
              {["20+ Years Experience", "Licensed & Insured", "24/7 Emergency Service", "Residential & Commercial", "Free Estimates", "Satisfaction Guaranteed"].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="#contact">Schedule a Consultation</Link>
            </Button>
          </div>
          <Image src="/aboutus.png" alt="Tolbert Garage Door Team" width={2000} height={500} className="transition-transform duration-300 hover:scale-105 rounded-lg" />
        </div>
      </div>
    </section>
  );
}
