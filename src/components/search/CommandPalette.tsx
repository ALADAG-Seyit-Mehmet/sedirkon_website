"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useSearch } from "./SearchContext";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";

export function CommandPalette() {
  const { isOpen, closeSearch } = useSearch();
  const overlayRef = useRef<HTMLDivElement>(null);
  const paletteRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsMounted(true);
      document.body.style.overflow = "hidden";

      gsap.to(overlayRef.current, { opacity: 1, duration: 0.4, ease: "power3.out" });
      gsap.fromTo(
        paletteRef.current,
        { opacity: 0, scale: 0.95, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power3.out", delay: 0.1 }
      );
    } else if (isMounted) {
      gsap.to(paletteRef.current, { opacity: 0, scale: 0.98, y: -5, duration: 0.3, ease: "power2.in" });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setIsMounted(false);
          document.body.style.overflow = "";
        }
      });
    }

    return () => {
      if (isOpen) document.body.style.overflow = "";
    };
  }, [isOpen, isMounted]);

  if (!isMounted && !isOpen) return null;

  return (
    <div className="fixed inset-0 z-99999 flex flex-col pointer-events-auto">
      {/* Full screen backdrop blur */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-charcoal-950/90 backdrop-blur-2xl opacity-0"
        onClick={closeSearch}
      />

      {/* Content Container */}
      <div 
        ref={paletteRef}
        className="relative w-full max-w-5xl mx-auto h-full flex flex-col px-4 pt-8 md:pt-16 opacity-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end mb-4">
            <button 
              onClick={closeSearch} 
              className="text-cream-500/50 hover:text-cream-500 transition-colors uppercase tracking-widest text-xs md:text-sm font-sans flex items-center gap-2 group"
            >
              Kapat 
              <kbd className="px-2 py-1 rounded bg-cream-500/10 border border-cream-500/20 group-hover:bg-cream-500/20 transition-colors">ESC</kbd>
            </button>
        </div>
        
        <SearchInput />
        <SearchResults />
        
      </div>
    </div>
  );
}
