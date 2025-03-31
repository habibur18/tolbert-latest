"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, PenToolIcon as Tool } from "lucide-react";
import Image from "next/image";

export default function GarageDoorMaintenanceMainPoints() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50/50 to-white py-16">
      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-green-600 mb-4">
              <Image src="/Tolbert Garage Door Logo.png" width={100} height={100} alt="Tolbert Garage Door logo" className="h-12 w-auto" />
              <span className="font-semibold">TOLBERT GARAGE DOOR Repaire</span>
            </div>

            <h2 className="text-4xl md:text-5xl text-balance font-bold tracking-tight text-green-800 leading-tight">
              Fast & Professional <span className=" text-green-500">Garage Door </span>Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
              <div className="flex items-center gap-2 text-green-600">
                <Clock className="h-5 w-5" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <Shield className="h-5 w-5" />
                <span>Professional Team</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <Tool className="h-5 w-5" />
                <span>Expert Service</span>
              </div>
            </div>

            <p className="text-lg text-green-700">Whether you want to replace a garage door or a simple repair, we are confident that we will be able to get the job done quickly and promptly. We will come to your home or business and estimate the cost of installing or repairing garage doors. With a wide range of designs and style options, feel free to arrange a meeting with our experts!</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-green-600 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Get Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-green-500 text-green-600 hover:bg-green-50 font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                View Our Services
              </Button>
            </div>
          </div>

          <div className="relative lg:mt-0 mt-8">
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent" />
              <div className="absolute -inset-3 bg-white/20 backdrop-blur-3xl -z-10 rounded-3xl" />
              <div className="grid grid-cols-2 gap-4 p-8">
                <div className="space-y-4">
                  <div className="bg-white/90 backdrop-blur rounded-xl p-6 shadow-lg">
                    <h3 className="text-green-800 font-semibold mb-2">Residential</h3>
                    <p className="text-green-600 text-sm">Expert home garage door solutions</p>
                  </div>
                  <div className="bg-white/90 backdrop-blur rounded-xl p-6 shadow-lg">
                    <h3 className="text-green-800 font-semibold mb-2">Emergency</h3>
                    <p className="text-green-600 text-sm">24/7 emergency repair service</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/90 backdrop-blur rounded-xl p-6 shadow-lg">
                    <h3 className="text-green-800 font-semibold mb-2">Commercial</h3>
                    <p className="text-green-600 text-sm">Business solutions & maintenance</p>
                  </div>
                  <div className="bg-white/90 backdrop-blur rounded-xl p-6 shadow-lg">
                    <h3 className="text-green-800 font-semibold mb-2">Installation</h3>
                    <p className="text-green-600 text-sm">Professional door installation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-1/3 right-1/3 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
            <div className="absolute -z-10 bottom-1/3 left-1/3 w-64 h-64 bg-green-600/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
