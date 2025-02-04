"use client";

import { motion } from "framer-motion";
import { Building2, ChevronRight, Clock, MapPin, Phone, Users } from "lucide-react";

const counties = [
  { name: "Dallas", population: "2.6M", mainCity: "Dallas", color: "#059669" },
  { name: "Tarrant", population: "2.1M", mainCity: "Fort Worth", color: "#059669" },
  { name: "Denton", population: "0.9M", mainCity: "Denton", color: "#059669" },
  { name: "Collin", population: "1.1M", mainCity: "McKinney", color: "#059669" },
  { name: "Rockwall", population: "0.1M", mainCity: "Rockwall", color: "#059669" },
  { name: "Ellis", population: "0.2M", mainCity: "Waxahachie", color: "#10b981" },
  { name: "Hunt", population: "0.1M", mainCity: "Greenville", color: "#10b981" },
  { name: "Kaufman", population: "0.1M", mainCity: "Kaufman", color: "#10b981" },
  { name: "Parker", population: "0.1M", mainCity: "Weatherford", color: "#10b981" },
  { name: "Wise", population: "0.1M", mainCity: "Decatur", color: "#10b981" },
];

export default function ServiceLocations() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          {" "}
          <h1 className="text-4xl font-bold text-green-800 mb-3">Tolbert Garage Door Serve Entire DFW Metroplex</h1>
          <p className="text-xl text-green-600">Serving the entire DFW Metroplex</p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Interactive Map & Contact */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-green-100">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center justify-center sm:justify-start space-x-3 p-4 bg-green-50 rounded-lg">
                  <Phone className="h-6 w-6 text-green-600" />
                  <span className="text-lg font-semibold text-green-800">(469)-909-0956</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-3 p-4 bg-green-50 rounded-lg">
                  <Clock className="h-6 w-6 text-green-600" />
                  <span className="text-lg font-semibold text-green-800">24/7 Service</span>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-green-100">
              <h2 className="text-2xl font-semibold text-green-800 mb-6">Our Service Area</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {counties.map((county, index) => (
                  <motion.div key={county.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-500 rounded-lg transform transition-transform group-hover:scale-105 group-hover:shadow-lg" />
                    <div className="relative p-4 flex flex-col items-center justify-center text-white space-y-2">
                      <h3 className="font-bold text-lg">{county.name}</h3>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-sm text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <Building2 className="h-3 w-3" />
                          <span>{county.mainCity}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-1">
                          <Users className="h-3 w-3" />
                          <span>{county.population}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Counties List */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-green-100">
            <h2 className="text-2xl font-semibold text-green-800 mb-6">Counties We Serve</h2>
            <div className="space-y-3">
              {counties.map((county) => (
                <motion.div key={county.name} whileHover={{ scale: 1.02 }} className="group p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-white rounded-full">
                        <MapPin className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-800">{county.name} County</h3>
                        <p className="text-sm text-green-600">
                          Pop: {county.population} | Main City: {county.mainCity}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-green-400 group-hover:text-green-600 transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
