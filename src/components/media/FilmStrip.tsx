"use client";

import React, { useEffect, useRef } from "react";
import { MediaAsset, useMedia } from "./MediaContext";
import { SmartImage } from "@/components/ui/SmartImage";
import gsap from "gsap";

interface FilmStripProps {
  items: MediaAsset[];
  currentIndex: number;
}

export function FilmStrip({ items, currentIndex }: FilmStripProps) {
  const { setIndex } = useMedia();
  const stripRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the filmstrip so the active item is near the center
  useEffect(() => {
    if (stripRef.current) {
      const activeEl = stripRef.current.children[currentIndex] as HTMLElement;
      if (activeEl) {
        const stripCenter = stripRef.current.clientWidth / 2;
        const elCenter = activeEl.offsetLeft + activeEl.clientWidth / 2;
        const scrollTarget = elCenter - stripCenter;
        
        gsap.to(stripRef.current, {
          scrollTo: { x: scrollTarget, autoKill: false },
          duration: 0.8,
          ease: "power3.out"
        });
      }
    }
  }, [currentIndex]);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 overflow-hidden">
      <div 
        ref={stripRef}
        className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        {items.map((item, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={item.id}
              onClick={() => setIndex(idx)}
              className={`relative flex-shrink-0 transition-all duration-500 ease-out overflow-hidden bg-charcoal-900 ${
                isActive ? "w-24 h-16 opacity-100 ring-1 ring-cream-500" : "w-16 h-12 opacity-40 hover:opacity-80"
              }`}
            >
              <SmartImage 
                src={item.thumbnailSrc || item.src}
                alt={item.title || `Thumb ${idx}`}
                fill
                sizes="100px"
                className="object-cover"
              />
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                    <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-black border-b-4 border-b-transparent ml-0.5" />
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
