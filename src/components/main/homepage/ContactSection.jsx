import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, CheckCircle, Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const serviceAreas = ["Dallas", "Fort Worth", "Plano", "Frisco", "McKinney", "Arlington", "Irving", "Mesquite", "Garland", "Richardson", "Carrollton", "Lewisville"];

  const guarantees = ["Same-day service for calls before noon", "Free, no-obligation estimates", "Licensed and insured technicians", "Upfront pricing with no hidden fees", "Satisfaction guaranteed on all services", "Warranties on parts and labor"];

  return (
    <section id="contact" className="relative">
      <div className="bg-[#32750a] text-white pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="px-4 py-1 rounded-full bg-white/10 text-white text-sm font-medium">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
              Contact <span className="text-white/80">Tolbert Garage Door</span>
            </h2>
            <div className="h-1 w-20 bg-white/50 mx-auto mb-6"></div>
            <p className="text-white/80 max-w-2xl mx-auto">Have questions or need a quote? Our team is ready to help with all your garage door needs.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                        First Name*
                      </label>
                      <Input id="firstName" placeholder="Your first name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                        Last Name*
                      </label>
                      <Input id="lastName" placeholder="Your last name" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address*
                      </label>
                      <Input id="email" type="email" placeholder="Your email" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number*
                      </label>
                      <Input id="phone" type="tel" placeholder="Your phone number" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-gray-700">
                      Service Needed*
                    </label>
                    <select id="service" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#32750a]" required>
                      <option value="">Select a service</option>
                      <option value="repair">Garage Door Repair</option>
                      <option value="installation">New Door Installation</option>
                      <option value="spring">Spring Replacement</option>
                      <option value="opener">Opener Installation/Repair</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us about your garage door needs..." className="h-32" />
                  </div>

                  <div className="flex items-start">
                    <input id="consent" type="checkbox" className="h-4 w-4 mt-1 rounded border-gray-300 text-[#32750a] focus:ring-[#32750a]" required />
                    <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                      I consent to having this website store my submitted information so they can respond to my inquiry. See our{" "}
                      <Link href="/privacy-policy" className="text-[#32750a] hover:underline">
                        privacy policy
                      </Link>{" "}
                      to learn more about how we use data.
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-[#32750a] hover:bg-[#2b6309] text-white py-3">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#32750a]/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-[#32750a]" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium text-gray-900">Phone</h4>
                      <p className="mt-1 text-gray-600">(469)-909-0956</p>
                      <p className="mt-1 text-sm text-gray-500">Available 24/7 for emergencies</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#32750a]/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-[#32750a]" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium text-gray-900">Email</h4>
                      <p className="mt-1 text-gray-600">info@tolbertgaragedoor.com</p>
                      <p className="mt-1 text-sm text-gray-500">We respond within 4 business hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#32750a]/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-[#32750a]" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium text-gray-900">Address</h4>
                      <p className="mt-1 text-gray-600">123 Auto Street</p>
                      <p className="text-gray-600">Dallas, TX 75001</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#32750a]/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-[#32750a]" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium text-gray-900">Business Hours</h4>
                      <p className="mt-1 text-gray-600">Monday-Friday: 8am-6pm</p>
                      <p className="text-gray-600">Saturday: 9am-3pm</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#32750a]/10 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-[#32750a]" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium text-gray-900">Today's Date</h4>
                      <p className="mt-1 text-gray-600">{currentDate}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-base font-medium text-gray-900 mb-4">Service Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {serviceAreas.map((area, index) => (
                      <span key={index} className="inline-block bg-white px-2 py-1 rounded text-sm text-gray-600 border border-gray-200">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-base font-medium text-gray-900 mb-4">Our Guarantees</h4>
                  <ul className="space-y-2">
                    {guarantees.map((guarantee, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#32750a] flex-shrink-0 mt-0.5" />
                        <span className="ml-2 text-sm text-gray-600">{guarantee}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-white/80">&copy; {new Date().getFullYear()} Tolbert Garage Door Repair. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
