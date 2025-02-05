"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BadgeDollarSign, CheckCheckIcon, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const services = ["Door Cleaning & Painting", "Door Repair & Installation", "Emergency Service", "Preventive Maintenance"];

export default function GarageDoorMaintenanceHeroSection() {
  const [serviceIndex, setServiceIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setServiceIndex((current) => (current + 1) % services.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className=" w-full flex flex-col items-center justify-center ">
        {/* bg */}
        <div className="relative w-full text-center pt-12 bg-[url('https://brightgaragedoorinc.com/wp-content/uploads/2022/08/hexagon-garage-door-repair-services_door-maintenance-1-scaled.jpg')] min-h-[600px] bg-cover bg-no-repeat">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="relative">
            <h1 className="text-white text-5xl font-bold tracking-wider mb-4">
              <span className="text-green-500">GARAGE DOOR</span> MAINTENANCE
            </h1>
            <div className="h-8 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p key={serviceIndex} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -40, opacity: 0 }} transition={{ duration: 0.5 }} className="text-white text-2xl italic absolute w-full">
                  {services[serviceIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
          {/* form */}
          <div className="relative top-28 w-full max-w-3xl mx-auto">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2  text-sm font-bold text-orange-500 rounded-full">
              {/* <span className="uppercase"></span> */}
              <img src="https://brightgaragedoorinc.com/wp-content/uploads/2022/08/custom-icon-dollar-g-copy.png" className="  w-24 h-24" alt="" />
            </div>
            <div className=" bg-white border-t-8 border-green-500 rounded-xl pt-12 p-6 shadow-lg mt-6">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="col-span-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#2ECC71] text-gray-700" />
                  <input type="email" placeholder="Enter Email" className="col-span-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#2ECC71] text-gray-700" />
                  <input type="tel" placeholder="Phone" className="col-span-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#2ECC71] text-gray-700" />
                  <input type="text" placeholder="Zip" className="col-span-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#2ECC71] text-gray-700" />
                </div>
                <textarea placeholder="My 10-year-old garage door is making a racket! 🚪🔊 Can you swing by and check it out?" rows={4} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#2ECC71] text-gray-700" />
                <button type="submit" className="w-full bg-[#2ECC71] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#27AE60] transition-colors">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-[#2ECC71] w-full ">
          {/* features */}
          <div className="flex flex-col justify-between md:flex-row gap-20 my-28 text-white text-center max-w-5xl mx-auto ">
            <div>
              <div className="flex justify-center mb-4">
                <Zap size={48} className="text-[#FF9F43]" />
              </div>
              <h3 className="text-2xl font-bold mb-2">SAME DAY</h3>
              <p className="text-xl">EMERGENCY SERVICE</p>
            </div>
            <div className="h-40 w-1 bg-white"></div>
            <div>
              <div className="flex justify-center mb-4">
                <CheckCheckIcon size={48} className="text-[#FF9F43]" />
              </div>
              <h3 className="text-2xl font-bold mb-2">FULLY LICENSED,</h3>
              <p className="text-xl">BONDED & INSURED</p>
            </div>
            <div className="h-40 w-1 bg-white"></div>
            <div>
              <div className="flex justify-center mb-4">
                <BadgeDollarSign size={48} className="text-[#FF9F43]" />
              </div>
              <h3 className="text-2xl font-bold mb-2">AFFORDABLE,</h3>
              <p className="text-xl">TOP-QUALITY WORK</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
