"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowDown, ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ScrollIndicator() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<"up" | "down" | null>(null);
  const [progressText, setProgressText] = useState("0");

  useGSAP(() => {
    // Scroll progress line
    gsap.fromTo(
      progressRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          start: 0,
          end: "max",
          scrub: true,
          onUpdate: (self) => {
            setProgressText(Math.round(self.progress * 100).toString());
            
            if (self.direction === 1) setDirection("down");
            else if (self.direction === -1) setDirection("up");
          }
        },
      }
    );

    // Fade out indicator completely before hitting the very bottom
    gsap.to(containerRef.current, {
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        start: () => ScrollTrigger.maxScroll(window) - 300,
        end: "max",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  // Hide on scroll inactivity
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScroll = () => {
      gsap.to(containerRef.current, { opacity: 1, duration: 0.3 });
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        gsap.to(containerRef.current, { opacity: 0.3, duration: 0.8 });
        setDirection(null);
      }, 1500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed right-0 top-0 h-full w-12 pointer-events-none z-[120] hidden md:flex flex-col items-center py-8 opacity-30 transition-opacity"
    >
      {/* Progress Text */}
      <div className="text-[10px] font-sans tracking-widest text-cream-500/80 mb-4 h-4 overflow-hidden">
        <div className="flex flex-col items-center justify-center h-full transition-transform duration-300">
          {progressText}
        </div>
      </div>

      {/* Line Indicator */}
      <div className="w-[1px] flex-1 bg-cream-500/10 relative overflow-hidden">
        <div
          ref={progressRef}
          className="absolute top-0 left-0 w-full h-full bg-cream-500 origin-top will-change-transform"
        />
      </div>

      {/* Direction Arrow */}
      <div className="mt-4 h-4 text-cream-500/80 transition-opacity duration-300">
        {direction === "down" && <ArrowDown size={12} className="animate-pulse" />}
        {direction === "up" && <ArrowUp size={12} className="animate-pulse" />}
      </div>
    </div>
  );
}
