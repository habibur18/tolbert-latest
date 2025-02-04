"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function FooterContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          {/* Left Section - Garage Details */}
          <div className="bg-green-600 text-white p-8 md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Tolbert Garage Door</h2>
            <div className="space-y-4">
              <p className="flex items-center">
                <MapPin className="mr-2" />
                123 Auto Street, Cartown, CT 12345
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" />
                (469)-909-0956
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" />
                info@tolbertgarage.com
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" />
                colby@tolbertgaragedoor.com
              </p>
              <p className="flex items-center">
                <Calendar className="mr-2" />
                {currentDate}
              </p>
              <p className="flex items-center">
                <Clock className="mr-2" />
                Mon-Fri: 8am-6pm, Sat: 9am-3pm, Sun: Closed
              </p>
            </div>
            <div className="mt-8 p-4 bg-green-700 rounded-lg">
              <p className="font-semibold">4-Hour Guarantee</p>
              <p className="text-sm mt-2">We guarantee to get back to you within 4 hours during our business hours!</p>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="p-8 md:w-1/2">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                <Input placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>
              <Input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
              <Input type="tel" placeholder="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />
              <Textarea placeholder="Your Message or Inquiry" name="message" value={formData.message} onChange={handleChange} required className="h-32" />
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
