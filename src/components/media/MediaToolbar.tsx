"use client";

import React, { useEffect, useState } from "react";
import { useMedia } from "./MediaContext";
import { X, Info, ChevronLeft, ChevronRight } from "lucide-react";

export function MediaToolbar() {
  const { closeMedia, items, currentIndex, nextMedia, prevMedia } = useMedia();
  const [showInfo, setShowInfo] = useState(false);
  const [mouseMoved, setMouseMoved] = useState(true);

  // Hide UI after inactivity
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleMouseMove = () => {
      setMouseMoved(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setMouseMoved(false), 3000); // 3 seconds inactivity
    };

    window.addEventListener("mousemove", handleMouseMove);
    // Initial trigger
    handleMouseMove();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  const total = items.length;

  return (
    <>
      {/* Top Toolbar */}
      <div 
        className={`absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50 transition-opacity duration-700 pointer-events-auto ${
          mouseMoved ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Counter */}
        <div className="text-cream-500/70 font-sans text-sm tracking-widest">
          {currentIndex + 1} <span className="opacity-40">/</span> {total}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-6">
          <button 
            className="text-cream-500/70 hover:text-cream-500 transition-colors"
            title="Bilgi"
            onClick={() => setShowInfo(!showInfo)}
          >
            <Info size={20} strokeWidth={1.5} />
          </button>
          <button 
            className="text-cream-500/70 hover:text-cream-500 transition-colors"
            title="Kapat (ESC)"
            onClick={closeMedia}
          >
            <X size={28} strokeWidth={1} />
          </button>
        </div>
      </div>

      {/* Prev/Next Side Buttons */}
      {total > 1 && (
        <>
          <button 
            className={`absolute left-8 top-1/2 -translate-y-1/2 text-cream-500/50 hover:text-cream-500 transition-all duration-500 z-50 pointer-events-auto ${
              mouseMoved ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            onClick={(e) => { e.stopPropagation(); prevMedia(); }}
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>
          
          <button 
            className={`absolute right-8 top-1/2 -translate-y-1/2 text-cream-500/50 hover:text-cream-500 transition-all duration-500 z-50 pointer-events-auto ${
              mouseMoved ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            onClick={(e) => { e.stopPropagation(); nextMedia(); }}
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>
        </>
      )}
    </>
  );
}
