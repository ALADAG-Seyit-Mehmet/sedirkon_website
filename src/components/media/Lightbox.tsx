"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useMedia } from "./MediaContext";
import { MediaViewer } from "./MediaViewer";
import { MediaToolbar } from "./MediaToolbar";
import { FilmStrip } from "./FilmStrip";
import { MediaCaption } from "./MediaCaption";

export function Lightbox() {
  const { isOpen, closeMedia, items, currentIndex } = useMedia();
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsMounted(true);
      document.body.style.overflow = "hidden";

      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.to(contentRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.1,
      });
    } else if (isMounted) {
      gsap.to(contentRef.current, {
        opacity: 0,
        scale: 0.98,
        duration: 0.4,
        ease: "power2.in",
      });

      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.5,
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

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMedia();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeMedia]);

  if (!isMounted && !isOpen) return null;

  const currentItem = items[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center pointer-events-auto"
      aria-modal="true"
      role="dialog"
    >
      {/* Background Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-charcoal-950/95 backdrop-blur-xl opacity-0"
        onClick={closeMedia}
      />

      {/* Main Content Area */}
      <div 
        ref={contentRef}
        className="relative w-full h-full flex flex-col opacity-0 scale-[0.98] pointer-events-none"
      >
        <MediaToolbar />
        
        {/* Viewer Container */}
        <div className="flex-1 w-full h-full relative overflow-hidden pointer-events-auto flex items-center justify-center">
          {currentItem && <MediaViewer item={currentItem} />}
        </div>
        
        <div className="absolute bottom-0 left-0 w-full flex flex-col justify-end pointer-events-none">
          {/* Caption */}
          <MediaCaption item={currentItem} />
          
          {/* FilmStrip */}
          {items.length > 1 && (
            <div className="pointer-events-auto pb-md">
              <FilmStrip items={items} currentIndex={currentIndex} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
