"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface TransitionOverlayProps {
  isTransitioning: boolean;
  isLongLoading: boolean;
}

export function TransitionOverlay({ isTransitioning, isLongLoading }: TransitionOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // If user prefers reduced motion, we don't animate the overlay (or we do it instantly)
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = prefersReducedMotion ? 0 : 0.8;

    if (isTransitioning) {
      // Entrance (Exit animation of current page - overlay covers screen)
      gsap.to(overlayRef.current, {
        y: "0%",
        duration: duration,
        ease: "power4.inOut"
      });
    } else {
      // Exit (Entrance animation of new page - overlay leaves screen)
      gsap.to(overlayRef.current, {
        y: "-100%",
        duration: duration,
        ease: "power4.inOut",
        onComplete: () => {
          // Reset position to bottom for the next transition
          if (overlayRef.current) {
            gsap.set(overlayRef.current, { y: "100%" });
          }
        }
      });
    }
  }, [isTransitioning]);

  useEffect(() => {
    if (isLongLoading && textRef.current) {
      gsap.to(textRef.current, {
        opacity: 1,
        duration: 0.5,
      });
      // Breathing effect
      gsap.to(textRef.current, {
        scale: 1.05,
        opacity: 0.7,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    } else if (textRef.current) {
      gsap.killTweensOf(textRef.current);
      gsap.to(textRef.current, { opacity: 0, duration: 0.3 });
    }
  }, [isLongLoading]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-charcoal-950 flex items-center justify-center pointer-events-none"
      style={{ transform: "translateY(100%)" }}
    >
      <span 
        ref={textRef} 
        className="font-serif text-4xl text-cream-500 uppercase tracking-[0.2em] opacity-0"
      >
        Sedirkon
      </span>
    </div>
  );
}
