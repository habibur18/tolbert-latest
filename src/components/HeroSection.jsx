// import { Phone } from "lucide-react";
// import Link from "next/link";
// import { Button } from "./ui/button";

// export default function HeroSection() {
//   return (
//     <section className="relative bg-gray-100">
//       <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-12 lg:py-24">
//         <div className="lg:w-1/2 mb-8 lg:mb-0">
//           <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-6">
//             DFW #1 <span className="text-green-600">GARAGE DOOR</span> COMPANY
//           </h1>
//           <p className="max-w-[600px] text-gray-500 md:text-xl mb-8">
//             Your trusted provider of high-quality <span className="text-green-600">garage door</span> solutions in the <span className="text-green-600">Dallas-Fort Worth</span> area
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
//               <Link href="tel:469-909-0956">
//                 <Phone className="mr-2 h-4 w-4" />
//                 Call Now: 469-909-0956
//               </Link>
//             </Button>
//             <Button asChild variant="outline" size="lg">
//               <Link href="#contact" className="text-green-600 hover:bg-green-600 hover:text-white">
//                 Get Free Estimate
//               </Link>
//             </Button>
//           </div>
//         </div>
//         <div className="lg:w-1/2 relative aspect-video">
//           <video className="rounded-lg shadow-lg" src="https://video.wixstatic.com/video/ce12da_94b2357d6bb04fe08783aaf375a5d0b2/720p/mp4/file.mp4" autoPlay loop muted controls />
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { Phone, Volume2, VolumeX } from "lucide-react";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import { Button } from "./ui/button";

// export default function HeroSection() {
//   const [isMuted, setIsMuted] = useState(true);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.muted = isMuted;
//     }
//   }, [isMuted]);

//   const toggleAudio = () => {
//     setIsMuted(!isMuted);
//   };

//   return (
//     <section className="relative bg-gray-100">
//       <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-12 lg:py-24">
//         <div className="lg:w-1/2 mb-8 lg:mb-0">
//           <h1 className="text-5xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-6">
//             DFW #1 <span className="text-green-600">GARAGE DOOR</span> COMPANY
//           </h1>
//           <p className="max-w-[600px] text-gray-500 md:text-xl mb-8">
//             Your trusted provider of high-quality <span className="text-green-600">garage door</span> solutions in the <span className="text-green-600">Dallas-Fort Worth</span> area
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
//               <Link href="tel:469-909-0956">
//                 <Phone className="mr-2 h-4 w-4" />
//                 Call Now: 469-909-0956
//               </Link>
//             </Button>
//             <Button asChild variant="outline" size="lg">
//               <Link href="#contact" className="text-green-600 hover:bg-green-600 hover:text-white">
//                 Get Free Estimate
//               </Link>
//             </Button>
//           </div>
//         </div>
//         <div className="lg:w-1/2 relative aspect-video">
//           <video ref={videoRef} className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg" src="https://video.wixstatic.com/video/ce12da_94b2357d6bb04fe08783aaf375a5d0b2/720p/mp4/file.mp4" autoPlay loop muted />
//           <button onClick={toggleAudio} className="absolute bottom-4 right-4 p-2 bg-green-500 hover:bg-green-600 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50" aria-label={isMuted ? "Unmute video" : "Mute video"}>
//             {isMuted ? <VolumeX className="w-6 h-6 text-white" /> : <Volume2 className="w-6 h-6 text-white" />}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Phone } from "lucide-react";
import { HeroContactForm } from "./hero-contact-form";
import { ServiceBadges } from "./service-badges";

export default function HeroSection() {
  return (
    <main className=" ">
      <div
        className="relative"
        style={{
          backgroundImage: `
            linear-gradient(135deg,
              rgba(22, 163, 74, 0.6) 0%,
              rgba(21, 128, 61, 0.8) 30%,
              rgba(20, 83, 45, 0.6) 100%
            ),
            url('https://www.metrogaragedoor.net/wp-content/uploads/garage-door-styles-dallas-tx.webp')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 py-36 min-h-[60vh]">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">TOLBERT GARAGE DOOR REPAIR DALLAS</h1>
                <p className="text-green-100 text-xl">Your trusted provider of high-quality garage door solutions in the Dallas-Fort Worth area</p>
              </div>

              <a href="tel:(469)909-0956" className="herobtn block items-center px-6 py-3 rounded-full text-white font-bold text-lg transition-colors">
                <div className="flex">
                  <Phone className="mr-2" />
                  CALL US (469) 909-0956
                </div>
              </a>

              <ServiceBadges />
            </div>

            {/* Right Column */}
            <div className="bg-green-500/20 p-6 rounded-lg backdrop-blur">
              <h2 className="text-2xl font-bold text-white mb-6">SEND US A MESSAGE OR CALL US</h2>
              <HeroContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
