"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, History, Phone, Shield, Star, Users } from "lucide-react";

export default function StorageUnitDoorCTA() {
  return (
    <div className="min-h-screen bg-white">
      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-2 border-green-500/20">
            <CardContent className="flex flex-col items-center p-6">
              <Clock className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24 HR SERVICE</h3>
              <p className="text-center text-gray-600">Available around the clock for your emergency needs</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-500/20">
            <CardContent className="flex flex-col items-center p-6">
              <Shield className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">LICENSED & TRAINED</h3>
              <p className="text-center text-gray-600">Professional and certified technicians</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-500/20">
            <CardContent className="flex flex-col items-center p-6">
              <Award className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">LIFETIME WARRANTY</h3>
              <p className="text-center text-gray-600">Guaranteed quality and durability</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-500/20">
            <CardContent className="flex flex-col items-center p-6">
              <Star className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">HONEST & FAIR PRICING</h3>
              <p className="text-center text-gray-600">Transparent and competitive rates</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-500/20">
            <CardContent className="flex flex-col items-center p-6">
              <Users className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">FAMILY OWNED</h3>
              <p className="text-center text-gray-600">Local business serving our community</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-500/20">
            <CardContent className="flex flex-col items-center p-6">
              <History className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">30+ YEARS EXPERIENCE</h3>
              <p className="text-center text-gray-600">Decades of trusted service</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Your Free Quote Today</h2>
          <Button size="lg" className="bg-green-600 hover:bg-green-500 text-white" onClick={() => (window.location.href = "tel:469-909-0956")}>
            <Phone className="mr-2 h-5 w-5" />
            Call Now: 469-909-0956
          </Button>
          <p className="mt-4 text-gray-600">
            Visit us at{" "}
            <a href="http://www.TolbertGarageDoor.com" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">
              www.TolbertGarageDoor.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
