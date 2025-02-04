"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const serviceAreas = ["Dallas", "Fort Worth", "Plano", "Frisco", "McKinney", "Arlington", "Irving", "Garland", "Richardson", "Lewisville", "Allen", "Carrollton"];

export function ServiceArea() {
  return (
    <section id="service-area" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div>
            <Badge className="mb-4 bg-green-500/10 text-green-600 hover:bg-green-500/20">Service Coverage</Badge>
            <h2 className="md:text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Serving the <span className="text-green-500"> DFW Metroplex</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">Fast, reliable service across the Dallas-Fort Worth area</p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <Card>
            <CardContent className="p-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {serviceAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2 rounded-lg border p-3 transform hover:-translate-y-1 duration-300 hover:scale-105">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <span className="font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
