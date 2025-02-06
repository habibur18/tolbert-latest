"use client";

import { useState } from "react";

export default function StorageBinRacksContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800">
          Submit Your <span className="text-green-500">Inquiries</span> or <span className="text-green-500">Call Us</span> Directly
        </h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2 font-semibold">
              Name
            </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2 font-semibold">
              Email
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-2 font-semibold">
              Phone
            </label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2 font-semibold">
              Message
            </label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" placeholder="Tell us about your Storage Bin Racks obsession. Do you prefer them stacked or arranged by color?" className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"></textarea>
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
