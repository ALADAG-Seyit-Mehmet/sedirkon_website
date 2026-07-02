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
    <div className="fixed inset-0 z-[99999] flex items-start justify-center pt-[10vh] sm:pt-[15vh] px-4 pointer-events-auto">
      {/* Overlay Backdrop */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-charcoal-950/80 backdrop-blur-md opacity-0"
        onClick={closeSearch}
      />

      {/* Palette Container */}
      <div 
        ref={paletteRef}
        className="relative w-full max-w-2xl bg-charcoal-900 border border-cream-500/10 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh] opacity-0"
        onClick={(e) => e.stopPropagation()}
      >
        <SearchInput />
        <SearchResults />
        
        {/* Footer */}
        <div className="py-3 px-4 border-t border-cream-500/10 flex items-center justify-between text-[10px] text-cream-500/40 uppercase tracking-widest font-sans">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded-sm bg-charcoal-800 border border-cream-500/20">↑↓</kbd> Gezin
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded-sm bg-charcoal-800 border border-cream-500/20">↵</kbd> Seç
            </span>
          </div>
          <div className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded-sm bg-charcoal-800 border border-cream-500/20">ESC</kbd> Kapat
          </div>
        </div>
      </div>
    </div>
  );
}
