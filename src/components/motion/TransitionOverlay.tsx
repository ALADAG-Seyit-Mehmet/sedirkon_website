"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import LoaderLogo from "@/components/loading/LoaderLogo";

interface TransitionOverlayProps {
  isTransitioning: boolean;
  isLongLoading: boolean;
}

export function TransitionOverlay({ isTransitioning, isLongLoading }: TransitionOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

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
    if (isTransitioning && textRef.current) {
      // Breathing effect starts immediately
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
      gsap.set(textRef.current, { scale: 1, opacity: 1 });
    }
  }, [isTransitioning]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-charcoal-950 flex items-center justify-center pointer-events-none"
      style={{ transform: "translateY(100%)" }}
    >
      <div ref={textRef}>
        <LoaderLogo />
      </div>
    </div>
  );
}
