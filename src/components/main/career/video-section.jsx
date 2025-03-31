"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);

        if (isVisible && !isPlaying) {
          videoRef.current.play();
          setIsPlaying(true);
        } else if (!isVisible && isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPlaying]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="video" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
          <Badge className="mb-4 bg-[#32750a] hover:bg-[#32750a]/90">Our Story</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Life At Tolbert Garage Door - Join Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get a glimpse into our company culture and the work we do every day.</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="relative max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <video ref={videoRef} className="w-full aspect-video object-cover" poster="/tolbert.jpg" muted loop>
            <source src="https://www.apple.com/careers/global/media/laa/Hero_Life_at_Apple_9x16_V02.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex justify-between items-center">
            <div className="text-white">
              <h3 className="font-bold">Life at Tolbert Garage Door</h3>
              <p className="text-sm text-white/80">Join our team of dedicated professionals</p>
            </div>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/20" onClick={handleMuteToggle}>
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </Button>
              <Button size="icon" className="bg-white text-[#32750a] hover:bg-white/90" onClick={handlePlayPause}>
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </Button>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {!isPlaying && (
              <Button size="lg" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 pointer-events-auto" onClick={handlePlayPause}>
                <Play className="mr-2" size={20} />
                Watch Video
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
