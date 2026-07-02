"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const containerRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // We use start: 0, end: "max" to perfectly track entire page scroll progress
    const scrollProps = {
      start: 0,
      end: "max",
      scrub: true, // Smooth scrub perfectly synced with Lenis
    };

    // Desktop vertical progress
    gsap.fromTo(
      desktopRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: scrollProps,
      }
    );

    // Mobile horizontal progress
    gsap.fromTo(
      mobileRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: scrollProps,
      }
    );

    // Fade out indicator completely before hitting the very bottom
    gsap.to(containerRef.current, {
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        start: () => ScrollTrigger.maxScroll(window) - 300, // Starts fading 300px from bottom
        end: "max",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[120]">
      {/* Desktop Indicator - Right side, vertical thin line */}
      <div className="hidden md:block absolute right-0 top-0 w-[2px] h-full bg-transparent">
        <div
          ref={desktopRef}
          className="w-full h-full bg-bronze-500 origin-top will-change-transform" // Bronze accent color
        />
      </div>

      {/* Mobile Indicator - Top, horizontal thin line */}
      <div className="md:hidden absolute top-0 left-0 w-full h-[2px] bg-transparent">
        <div
          ref={mobileRef}
          className="w-full h-full bg-bronze-500 origin-left will-change-transform"
        />
      </div>
    </div>
  );
}
