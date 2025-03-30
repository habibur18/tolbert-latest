// // "use client";

// // import { useWindowSize } from "@/hooks/use-window-size";
// // import Confetti from "react-confetti";

// // export function ConfettiCelebration({ show, pieces = 200 }) {
// //   const { width, height } = useWindowSize();

// //   if (!show) return null;

// //   return <Confetti width={width} height={height} recycle={false} numberOfPieces={pieces} />;
// // }

// "use client";

// import { useWindowSize } from "@/hooks/use-window-size";
// import Confetti from "react-confetti";

// export function ConfettiCelebration({ show, pieces = 200 }) {
//   const { width, height } = useWindowSize();

//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 pointer-events-none z-[9999]">
//       <Confetti width={width} height={height} recycle={false} numberOfPieces={pieces} />
//     </div>
//   );
// }

"use client";

import { useWindowSize } from "@/hooks/use-window-size";
import { useEffect, useRef } from "react";
import Confetti from "react-confetti";

export function ConfettiCelebration({ show, pieces = 200 }) {
  const { width, height } = useWindowSize();
  const audioRef = useRef(null);

  // Play sound when confetti shows
  useEffect(() => {
    if (show && audioRef.current) {
      // Reset the audio to the beginning if it was already playing
      audioRef.current.currentTime = 0;
      // Play the celebration sound
      audioRef.current.play().catch((error) => {
        // Handle any errors silently
        console.log("Audio playback prevented:", error);
      });
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <audio ref={audioRef} src="/sounds/celebration.mp3" preload="auto" />
      <Confetti width={width} height={height} recycle={false} numberOfPieces={pieces} />
    </div>
  );
}
