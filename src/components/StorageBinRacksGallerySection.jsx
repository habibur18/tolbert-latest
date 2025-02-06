"use client";
const imagess = [
  "/gallery/image-1.jpg",
  "/gallery/image-2.jpg",
  "/gallery/image-3.jpg",
  "/gallery/image-4.jpg",
  "/gallery/image-5.jpg",
  "/gallery/image-6.jpg",
  "/gallery/image-7.jpg",
  "/gallery/image-8.jpg",
  "/gallery/image-9.jpg",
  "/gallery/image-10.jpg",
  "/gallery/image-11.jpg",
  "/gallery/image-12.jpg",
  "/gallery/image-13.jpg",
  "/gallery/image-14.jpg",
  "/gallery/image-15.jpg",
  "/gallery/image-16.jpg",
  "/gallery/image-17.jpg",
  "/gallery/image-18.jpg",
  "/gallery/image-19.jpg",
  "/gallery/image-20.jpg",
  "/gallery/image-21.jpg",
  "/gallery/image-22.jpg",
  "/gallery/image-23.jpg",
  "/gallery/image-24.jpg",
  "/gallery/image-25.jpg",
  "/gallery/image-26.jpg",
  "/gallery/image-27.jpg",
  "/gallery/image-28.jpg",
  "/gallery/image-29.jpg",
  "/gallery/image-30.jpg",
  "/gallery/image-31.jpg",
  "/gallery/image-32.jpg",
  "/gallery/image-33.jpg",
  "/gallery/image-34.jpg",
  "/gallery/image-35.jpg",
  "/gallery/image-36.jpg",
  "/gallery/image-37.jpg",
  "/gallery/image-38.jpg",
  "/gallery/image-39.jpg",
  "/gallery/image-40.jpg",
];
// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";

// export default function StorageBinRacksGallerySection() {
//   const [visibleImages, setVisibleImages] = useState(12);
//   const containerRef = useRef(null);

//   const images = Array.from({ length: 40 }, (_, i) => `/Tolbert and his team.jpg`);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           loadMoreImages();
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       if (containerRef.current) {
//         observer.unobserve(containerRef.current);
//       }
//     };
//   }, []);

//   const loadMoreImages = () => {
//     if (visibleImages < images.length) {
//       setVisibleImages((prev) => Math.min(prev + 12, images.length));
//     }
//   };

//   return (
//     <section id="gallery" className="py-20 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Gallery</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {images.slice(0, visibleImages).map((src, index) => (
//             <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: (index % 12) * 0.1 }} className="overflow-hidden rounded-lg shadow-lg">
//               <Image src={src || "/placeholder.svg"} alt={`Gallery image ${index + 1}`} width={300} height={300} className="w-full h-full object-cover" />
//             </motion.div>
//           ))}
//         </div>
//         {visibleImages < images.length && <div ref={containerRef} className="h-20" />}
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function StorageBinRacksGallerySection() {
  const [visibleImages, setVisibleImages] = useState(12);
  const containerRef = useRef(null);

  const images = Array.from({ length: 40 }, (_, i) => `/Tolbert and his team.jpg`);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreImages();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const loadMoreImages = () => {
    if (visibleImages < images.length) {
      setVisibleImages((prev) => Math.min(prev + 12, images.length));
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.slice(0, visibleImages).map((src, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut", delay: (index % 12) * 0.1 }} whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)" }} className="overflow-hidden rounded-lg shadow-lg">
              <Image src={src || "/placeholder.svg"} alt={`Gallery image ${index + 1}`} width={300} height={300} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
        {visibleImages < images.length && <div ref={containerRef} className="h-20" />}
      </div>
    </section>
  );
}
