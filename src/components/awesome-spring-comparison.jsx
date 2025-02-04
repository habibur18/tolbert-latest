"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertTriangle, Check, ChevronDown, X } from "lucide-react";
import { useState } from "react";

const features = [
  { name: "5-Year Warranty", single: true, pair: true },
  { name: "Professional Installation", single: true, pair: true },
  { name: "Same Day Service", single: true, pair: true },
  { name: "Balanced Operation", single: true, pair: true },
  { name: "Extended Lifespan", single: false, pair: true },
  { name: "Preventive Maintenance", single: false, pair: true },
  { name: "Cost-Effective Long Term", single: false, pair: true },
  { name: "Synchronized Performance", single: false, pair: true },
];

export function AwesomeSpringComparison() {
  const [selectedOption, setSelectedOption] = useState("pair");

  return (
    <section className="py-24  bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl ">
        <div className="mx-auto max-w-4xl text-center mb-16 ">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Choose Your <span className="text-green-500">Spring Solution</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10">Compare and select the best option for your garage door system</p>
          <div className="flex justify-center gap-4 sticky top-0 z-10 bg-white">
            <Button
              variant={selectedOption === "single" ? "default" : "outline"}
              onClick={() => setSelectedOption("single")}
              className={`
                text-lg py-6 px-8 transition-all duration-300
                ${selectedOption === "single" ? "bg-green-500 hover:bg-green-600 text-white shadow-lg" : "hover:bg-green-50"}
              `}
            >
              Single Spring
            </Button>
            <Button
              variant={selectedOption === "pair" ? "default" : "outline"}
              onClick={() => setSelectedOption("pair")}
              className={`
                text-lg py-6 px-8 transition-all duration-300
                ${selectedOption === "pair" ? "bg-green-500 hover:bg-green-600 text-white shadow-lg" : "hover:bg-green-50"}
              `}
            >
              Pair of Springs
            </Button>
          </div>
        </div>

        <Card className="overflow-hidden border-0 shadow-2xl">
          <CardHeader className="bg-white border-b">
            <CardTitle className="text-3xl font-bold text-center">Spring Options Comparison</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8">
                <div className="relative mb-10 rounded-xl overflow-hidden shadow-lg">
                  <img alt="Garage Door Springs" className="w-full h-auto object-cover" src={`${selectedOption === "single" ? "https://i.ibb.co.com/sv4WS5dX/0-YOLvh-e-HQ-4vo-D-O.jpg" : "https://sc04.alicdn.com/kf/Hda6fe31b25fe4e1caa62db820d0c32f6Q.png"}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{selectedOption === "single" ? "Single Spring" : "Pair of Springs"}</h3>
                    <p className="text-lg font-medium">{selectedOption === "pair" && "Recommended solution"}</p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="w-[50%] text-lg py-4">Feature</TableHead>
                        <TableHead className="text-lg py-4">Single</TableHead>
                        <TableHead className="text-lg py-4">Pair</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {features.map((feature) => (
                        <TableRow key={feature.name} className="text-base hover:bg-gray-50">
                          <TableCell className="py-4">{feature.name}</TableCell>
                          <TableCell className="py-4">{feature.single ? <Check className="h-6 w-6 text-green-500" /> : <X className="h-6 w-6 text-red-500" />}</TableCell>
                          <TableCell className="py-4">{feature.pair ? <Check className="h-6 w-6 text-green-500" /> : <X className="h-6 w-6 text-red-500" />}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
              <div className="bg-gray-50 p-8">
                <div className="relative">
                  {selectedOption === "pair" && (
                    <div className="absolute -top-8 left-0 w-full">
                      <div className="bg-green-500 text-white text-lg font-bold py-2 px-6 rounded-t-xl mx-auto w-fit">Recommended</div>
                    </div>
                  )}
                  <Card className={`h-full ${selectedOption === "pair" ? "border-green-500 border-2" : ""}`}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-3xl mb-3">{selectedOption === "single" ? "Single Spring" : "Pair of Springs"}</CardTitle>
                      <p className="text-xl text-gray-600">{selectedOption === "single" ? "Basic solution for single car garages" : "Best value for long-term reliability"}</p>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      <ul className="space-y-4">
                        {features
                          .filter((feature) => (selectedOption === "single" ? feature.single : feature.pair))
                          .map((feature) => (
                            <li key={feature.name} className="flex items-center gap-3 text-lg">
                              <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                              <span>{feature.name}</span>
                            </li>
                          ))}
                      </ul>
                      <div className="rounded-xl bg-amber-50 p-6">
                        <div className="flex items-start gap-4">
                          <AlertTriangle className="h-8 w-8 text-amber-500 flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="text-xl font-bold text-amber-900 mb-3">Important Notice</h4>
                            <p className="text-lg text-amber-700">We highly recommend the pair option for its discounted rate and prevention of future breakdowns. The old spring may require replacement soon, potentially leading to additional service calls.</p>
                          </div>
                        </div>
                      </div>
                      <Button size="lg" className="w-full text-lg py-6 bg-green-500 hover:bg-green-600 transition-all duration-300 group shadow-lg">
                        Get Quote for {selectedOption === "single" ? "Single" : "Pair"} Spring Installation
                        <ChevronDown className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
