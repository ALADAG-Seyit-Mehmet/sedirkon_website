"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useCursor } from "./CursorContext";
import { Play, Maximize, Move } from "lucide-react";

export function Cursor() {
  const { cursorType, isTouchDevice } = useCursor();
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable entirely on touch devices
    if (isTouchDevice || !cursorRef.current || !cursorDotRef.current) return;

    // Use GSAP quickTo for 60fps buttery smooth performance without React re-renders
    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.4, ease: "power3" });
    
    // Dot follows faster
    const xDotTo = gsap.quickTo(cursorDotRef.current, "x", { duration: 0.1, ease: "power3" });
    const yDotTo = gsap.quickTo(cursorDotRef.current, "y", { duration: 0.1, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xDotTo(e.clientX);
      yDotTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Ensure it becomes visible when mouse moves
    gsap.set([cursorRef.current, cursorDotRef.current], { opacity: 1 });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isTouchDevice]);

  // Handle State Changes
  useEffect(() => {
    if (isTouchDevice || !cursorRef.current || !cursorDotRef.current) return;

    const ctx = gsap.context(() => {
      switch (cursorType) {
        case "hover":
          gsap.to(cursorRef.current, { scale: 1.5, backgroundColor: "rgba(235, 230, 224, 0.1)", border: "1px solid rgba(235, 230, 224, 0.3)", duration: 0.3 });
          gsap.to(cursorDotRef.current, { scale: 0, opacity: 0, duration: 0.2 });
          gsap.to(cursorTextRef.current, { opacity: 0, duration: 0.2 });
          break;
        case "video":
          gsap.to(cursorRef.current, { scale: 2.5, backgroundColor: "rgba(235, 230, 224, 0.9)", border: "none", duration: 0.3 });
          gsap.to(cursorDotRef.current, { scale: 0, opacity: 0, duration: 0.2 });
          gsap.to(cursorTextRef.current, { opacity: 1, duration: 0.2, delay: 0.1 });
          break;
        case "drag":
          gsap.to(cursorRef.current, { scale: 2.5, backgroundColor: "rgba(235, 230, 224, 0.1)", border: "1px solid rgba(235, 230, 224, 0.5)", duration: 0.3 });
          gsap.to(cursorDotRef.current, { scale: 0, opacity: 0, duration: 0.2 });
          gsap.to(cursorTextRef.current, { opacity: 1, duration: 0.2, delay: 0.1 });
          break;
        case "zoom":
          gsap.to(cursorRef.current, { scale: 2.5, backgroundColor: "rgba(235, 230, 224, 0.1)", border: "1px solid rgba(235, 230, 224, 0.5)", duration: 0.3 });
          gsap.to(cursorDotRef.current, { scale: 0, opacity: 0, duration: 0.2 });
          gsap.to(cursorTextRef.current, { opacity: 1, duration: 0.2, delay: 0.1 });
          break;
        case "hidden":
          gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.3 });
          gsap.to(cursorDotRef.current, { scale: 0, opacity: 0, duration: 0.3 });
          break;
        default:
          gsap.to(cursorRef.current, { scale: 1, backgroundColor: "transparent", border: "1px solid rgba(235, 230, 224, 0.5)", duration: 0.3 });
          gsap.to(cursorDotRef.current, { scale: 1, opacity: 1, duration: 0.3 });
          gsap.to(cursorTextRef.current, { opacity: 0, duration: 0.2 });
          break;
      }
    });

    return () => ctx.revert();
  }, [cursorType, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-cursor-active, .custom-cursor-active * {
          cursor: none !important;
        }
      `}} />
      
      {/* Outer Ring */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 rounded-full border border-cream-500/50 pointer-events-none z-[99999] flex items-center justify-center opacity-0 mix-blend-difference"
      >
        <div ref={cursorTextRef} className="absolute inset-0 flex items-center justify-center opacity-0 text-charcoal-950">
          {cursorType === "video" && <Play size={12} fill="currentColor" />}
          {cursorType === "drag" && <Move size={12} className="text-cream-500" />}
          {cursorType === "zoom" && <Maximize size={12} className="text-cream-500" />}
        </div>
      </div>

      {/* Inner Dot */}
      <div 
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-cream-500 rounded-full pointer-events-none z-[99999] opacity-0 mix-blend-difference"
      />
    </>
  );
}
