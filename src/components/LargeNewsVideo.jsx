// "use client";

// import { Volume2, VolumeX } from "lucide-react";
// import { useEffect, useRef, useState } from "react";

// export default function LargeNewsVideo() {
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
//     <div className="">
//       <h3 className="text-4xl font-bold mb-4 text-center">
//         See Us in <span className="text-green-600">Action</span>
//       </h3>
//       <div className="relative w-full h-0 pb-[700px] max-w-7xl mx-auto">
//         <video ref={videoRef} className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted playsInline>
//           <source src="/tolbert garage3.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <button onClick={toggleAudio} className="absolute bottom-4 right-4 p-2 bg-green-500 hover:bg-green-600 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50" aria-label={isMuted ? "Unmute video" : "Mute video"}>
//           {isMuted ? <VolumeX className="w-6 h-6 text-white" /> : <Volume2 className="w-6 h-6 text-white" />}
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function LargeNewsVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleAudio = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="">
      <h3 className="text-4xl font-bold mb-4 text-center">
        See Us in <span className="text-green-600">Action</span>
      </h3>
      <div className="relative w-full max-w-7xl mx-auto aspect-video">
        <video ref={videoRef} className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted playsInline>
          {/* <source src="/tolbert garage3.mp4" type="video/mp4" /> */}
          <source src="https://video-upload-taupe.vercel.app/tolbert%20garage3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button onClick={toggleAudio} className="absolute bottom-4 right-4 p-2 bg-green-500 hover:bg-green-600 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50" aria-label={isMuted ? "Unmute video" : "Mute video"}>
          {isMuted ? <VolumeX className="w-6 h-6 text-white" /> : <Volume2 className="w-6 h-6 text-white" />}
        </button>
      </div>
    </div>
  );
}
