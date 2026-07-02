"use client";

import React, { useRef, useEffect, useState } from "react";
import { MediaAsset } from "./MediaContext";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function VideoPlayer({ item }: { item: MediaAsset }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Autoplay when visible logic is already handled by Lightbox (it renders when opened)
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, [item.src]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const prog = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(prog);
    }
  };

  return (
    <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center group">
      <video
        ref={videoRef}
        src={item.src}
        poster={item.thumbnailSrc}
        className="max-w-full max-h-full object-contain"
        loop
        muted={isMuted}
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onClick={togglePlay}
      />
      
      {/* Minimal Custom Controls Overlay (appears on hover) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-charcoal-950/80 backdrop-blur-md px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button onClick={togglePlay} className="text-cream-500 hover:text-white transition-colors">
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        
        {/* Progress Bar */}
        <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden relative">
          <div 
            className="absolute top-0 left-0 h-full bg-cream-500" 
            style={{ width: `${progress}%` }} 
          />
        </div>

        <button onClick={toggleMute} className="text-cream-500 hover:text-white transition-colors">
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </div>
  );
}
