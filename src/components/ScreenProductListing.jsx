"use client";

import { Check, Phone, Star } from "lucide-react";

export default function ScreenProductListing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-16">Choose Your Perfect Garage Screen</h1>

        {/* Product Cards */}
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Magnet Screen */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105">
            <div className="relative">
              <img src="/screen/MAGNET SCREEN.png" alt="Magnet Screen" className="w-full h-48 object-cover" />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Budget-Friendly</div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-green-800 mb-2">MAGNET SCREEN</h2>
              <p className="text-green-600 mb-4">AFFORDABLE OPTION FOR FAMILIES</p>
              <div className="space-y-3 mb-6">
                {magnetFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-600">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="text-3xl font-bold text-green-800 mb-6">$175</div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-colors">Get Started</button>
            </div>
          </div>

          {/* Lifestyle 7FT */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105">
            <div className="relative">
              <img src="/screen/LIFESTYLE 7 FT TALL.jpg" alt="7FT Garage Screen" className="w-full h-48 object-cover" />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Popular</div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-green-800 mb-2">LIFESTYLE 7 FT TALL</h2>
              <p className="text-green-600 mb-4">WIDTH 8FT-18FT SAME PRICE</p>
              <div className="space-y-3 mb-6">
                {features7ft.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-600">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="text-3xl font-bold text-green-800 mb-6">$1,299</div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-colors">Get Started</button>
            </div>
          </div>

          {/* Lifestyle 8FT */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105">
            <div className="relative">
              <img src="/screen/LIFESTYLE 8FT TALL.png" alt="8FT Garage Screen" className="w-full h-48 object-cover" />
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">Best Value</div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-green-800 mb-2">LIFESTYLE 8 FT TALL</h2>
              <p className="text-green-600 mb-4">WIDTH 8FT-18FT SAME PRICE</p>
              <div className="space-y-3 mb-6">
                {features8ft.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-600">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="text-3xl font-bold text-green-800 mb-6">$1,499</div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-colors">Get Started</button>
            </div>
          </div>

          {/* Custom Build */}
          <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105">
            <div className="relative">
              <div className="h-48 flex items-center justify-center bg-green-800">
                <Star className="w-20 h-20 text-green-400" />
              </div>
              <div className="absolute top-4 right-4 bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-medium">Premium</div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">CUSTOM BUILD</h2>
              <p className="text-green-300 mb-4">TAILORED TO YOUR NEEDS</p>
              <div className="space-y-3 mb-6">
                {customFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-green-100">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 mb-6">
                <Phone className="w-6 h-6 text-green-400" />
                <span className="text-2xl font-bold text-white">Call for Quote</span>
              </div>
              <button className="w-full bg-green-400 hover:bg-green-500 text-green-900 py-3 rounded-xl font-semibold transition-colors">Contact Us</button>
            </div>
          </div>
        </div>

        {/* Contact Banner */}
        <div className="mt-16 bg-green-800 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Help Choosing?</h3>
          <p className="text-green-100 mb-6">Our experts are here to help you find the perfect solution</p>
          <button className="bg-white text-green-800 px-8 py-3 rounded-xl font-semibold hover:bg-green-100 transition-colors inline-flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}

const magnetFeatures = ["Easy Installation", "Affordable Option", "Magnetic Closure", "Keeps Bugs Out", "Allows Fresh Air In", "No Tools Required"];

const features7ft = ["Standard 7ft Height", "Fully Retractable Design", "Easy Installation", "Weather Resistant", "Multiple Color Options", "1-Year Warranty"];

const features8ft = ["Extended 8ft Height", "Fully Retractable Design", "Professional Installation", "Enhanced Ventilation", "Premium Materials", "2-Year Warranty"];

const customFeatures = ["Custom Dimensions", "Premium Material Selection", "Advanced Security Features", "Motorized Operation Available", "Designer Color Options", "Extended 5-Year Warranty"];
