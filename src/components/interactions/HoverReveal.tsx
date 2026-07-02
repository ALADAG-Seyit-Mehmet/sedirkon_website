"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useCursor } from "./CursorContext";

interface HoverRevealProps {
  children: React.ReactNode;
  revealContent: React.ReactNode;
  className?: string;
  offsetX?: number;
  offsetY?: number;
}

export function HoverReveal({
  children,
  revealContent,
  className = "",
  offsetX = 20,
  offsetY = 20
}: HoverRevealProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const { isTouchDevice } = useCursor();

  useEffect(() => {
    if (isTouchDevice || !tooltipRef.current || !triggerRef.current) return;

    const tooltip = tooltipRef.current;
    
    // Animate position smoothly
    const xTo = gsap.quickTo(tooltip, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(tooltip, "y", { duration: 0.4, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      // Offset from cursor
      xTo(e.clientX + offsetX);
      yTo(e.clientY + offsetY);
    };

    const trigger = triggerRef.current;

    const handleMouseEnter = (e: MouseEvent) => {
      gsap.set(tooltip, { x: e.clientX + offsetX, y: e.clientY + offsetY });
      
      gsap.to(tooltip, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.5)"
      });
      
      document.addEventListener("mousemove", handleMouseMove);
    };

    const handleMouseLeave = () => {
      gsap.to(tooltip, {
        opacity: 0,
        scale: 0.9,
        duration: 0.2,
        ease: "power2.in"
      });
      document.removeEventListener("mousemove", handleMouseMove);
    };

    trigger.addEventListener("mouseenter", handleMouseEnter);
    trigger.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      trigger.removeEventListener("mouseenter", handleMouseEnter);
      trigger.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [offsetX, offsetY, isTouchDevice]);

  return (
    <>
      <div ref={triggerRef} className={`inline-block ${className}`}>
        {children}
      </div>

      {!isTouchDevice && (
        <div 
          ref={tooltipRef}
          className="fixed top-0 left-0 pointer-events-none z-[99990] opacity-0 scale-90"
        >
          {revealContent}
        </div>
      )}
    </>
  );
}
