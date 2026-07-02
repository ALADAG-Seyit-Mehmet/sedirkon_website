"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useCursor } from "./CursorContext";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

export function Tooltip({ children, content, position = "top", className = "" }: TooltipProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const { isTouchDevice } = useCursor();

  useEffect(() => {
    if (isTouchDevice || !containerRef.current || !tooltipRef.current) return;

    const el = containerRef.current;
    const tooltip = tooltipRef.current;

    const showTooltip = () => {
      gsap.to(tooltip, {
        opacity: 1,
        y: position === "top" ? -5 : position === "bottom" ? 5 : 0,
        x: position === "left" ? -5 : position === "right" ? 5 : 0,
        duration: 0.3,
        ease: "power2.out",
        delay: 0.1
      });
    };

    const hideTooltip = () => {
      gsap.to(tooltip, {
        opacity: 0,
        y: 0,
        x: 0,
        duration: 0.2,
        ease: "power2.in"
      });
    };

    el.addEventListener("mouseenter", showTooltip);
    el.addEventListener("mouseleave", hideTooltip);
    el.addEventListener("focusin", showTooltip);
    el.addEventListener("focusout", hideTooltip);

    return () => {
      el.removeEventListener("mouseenter", showTooltip);
      el.removeEventListener("mouseleave", hideTooltip);
      el.removeEventListener("focusin", showTooltip);
      el.removeEventListener("focusout", hideTooltip);
    };
  }, [position, isTouchDevice]);

  let positionClasses = "";
  switch (position) {
    case "top": positionClasses = "bottom-full left-1/2 -translate-x-1/2 mb-2"; break;
    case "bottom": positionClasses = "top-full left-1/2 -translate-x-1/2 mt-2"; break;
    case "left": positionClasses = "right-full top-1/2 -translate-y-1/2 mr-2"; break;
    case "right": positionClasses = "left-full top-1/2 -translate-y-1/2 ml-2"; break;
  }

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {children}
      {!isTouchDevice && (
        <div 
          ref={tooltipRef}
          className={`absolute ${positionClasses} pointer-events-none opacity-0 whitespace-nowrap bg-charcoal-900/90 backdrop-blur-md border border-cream-500/10 text-cream-500 text-xs font-sans tracking-wider px-3 py-1.5 rounded-sm z-[999]`}
        >
          {content}
        </div>
      )}
    </div>
  );
}
