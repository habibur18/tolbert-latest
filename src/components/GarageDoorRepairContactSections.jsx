import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const services = [
  { id: 1, name: "Broken Spring Repair", icon: "🔧", href: "#" },
  { id: 2, name: "Openers Repair / Installation", icon: "⚡", href: "#" },
  { id: 3, name: "Broken Cable Repair", icon: "🔌", href: "#" },
  { id: 4, name: "Door Off Track", icon: "🚪", href: "#" },
  { id: 5, name: "New Door Installation", icon: "🏠", href: "#" },
  { id: 6, name: "Door Maintenance", icon: "🔨", href: "#" },
  { id: 7, name: "Remote Repair / Program", icon: "📱", href: "#" },
  { id: 8, name: "Garage Door Roller Repair", icon: "⚙️", href: "#" },
];

const contactInfo = [
  {
    id: 1,
    title: "Email Address",
    value: "info@tolbertgaragedoor.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Phone Number",
    value: "(469) 909-0956",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Website",
    value: "https://www.tolbertgaragedoor.com/",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
];

export default function GarageDoorRepairContactSections() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Services Section */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <span className="text-green-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            Related Services
          </h3>
          <div className="grid gap-3">
            {services.map((service) => (
              <a key={service.id} href="#" className="group flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 transition-all duration-200">
                <span className="text-xl">{service.icon}</span>
                <span className="text-gray-600 group-hover:text-green-600 transition-colors">{service.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Estimate Section */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 shadow-lg text-white flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4">Get a Free Estimate</h3>
            <p className="mb-6 opacity-90">Professional garage door services at competitive prices</p>
          </div>
          <form className="space-y-4">
            <Input className="bg-white text-gray-800" placeholder="Name" type="text" name="name" required />
            <Input className="bg-white text-gray-800" placeholder="Email" type="email" name="email" required />
            <Input className="bg-white text-gray-800" placeholder="Phone Number" type="tel" name="phone" required />
            <Input className="bg-white text-gray-800" placeholder="Zip Code" type="text" name="zip" required />
            <Textarea className="bg-white text-gray-800" placeholder="My garage door sounds like a T-Rex fighting a blender! Help!  Help!  Help!" name="message" required />

            <Button type="submit" className="w-full bg-white text-green-600 py-3 px-6 rounded-xl font-semibold hover:bg-green-50 transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              SCHEDULE AN ESTIMATE!
            </Button>

            <Image width={180} height={140} src="/Tolbert Garage Door Logo.png" alt="Hexagon Logo" className="mx-auto opacity-90" />
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <span className="text-green-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            Contact Info
          </h3>
          <div className="space-y-4">
            {contactInfo.map((info) => (
              <a key={info.id} href="#" className="group block p-4 rounded-xl hover:bg-green-50 transition-all duration-200">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-green-600">{info.icon}</span>
                  <span className="font-medium text-gray-700">{info.title}</span>
                </div>
                <p className="text-gray-600 group-hover:text-green-600 transition-colors pl-8">{info.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
