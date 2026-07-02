"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface PageTransitionProps {
  children: React.ReactNode;
}

// Optional wrapper for individual pages if they need specific entrance/exit animations
// inside the main content area, beyond the global overlay.
export function PageTransition({ children }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // A subtle fade/slide up for the page content when it mounts
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 } // Wait slightly for overlay to start moving
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen will-change-[opacity,transform]">
      {children}
    </div>
  );
}
