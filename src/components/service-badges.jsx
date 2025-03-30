"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ServiceBadges() {
  const badges = [
    {
      title: "FULLY INSURED",
      image: "/hero/FULLY-INSURED-BADGE-V1.png",
      alt: "Fully Insured Badge",
    },
    {
      title: "MILITARY DISCOUNTS",
      image: "/hero/MILITARY-DISCOUNTS-BADGE-V1.png",
      alt: "Military Discounts Badge",
    },
    {
      title: "OFFICIALLY LICENSED",
      image: "/hero/OFFICIALLY-LICENSED-BADGEV1-909x1024.png",
      alt: "Officially Licensed Badge",
    },
  ];

  return (
    <div className="flex flex-wrap gap-8 max-w-3xl mx-auto">
      {badges.map((badge, index) => (
        <motion.div
          key={badge.title}
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 + 0.5 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
        >
          <motion.div
            className="mb-4 relative overflow-hidden rounded-full shadow-lg"
            whileHover={{
              boxShadow: "0 0 25px rgba(74, 222, 128, 0.6)",
              transition: { duration: 0.3 },
            }}
          >
            <Image width={160} height={160} src={badge.image || "/placeholder.svg"} alt={badge.alt} className="object-cover w-full h-44" />
          </motion.div>
          <h3 className="font-bold text-green-100 text-shadow drop-shadow-md">{badge.title}</h3>
        </motion.div>
      ))}
    </div>
  );
}
