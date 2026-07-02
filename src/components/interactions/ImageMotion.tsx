"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useCursor } from "./CursorContext";

interface ImageMotionProps {
  children: React.ReactNode;
  className?: string;
  zoomIntensity?: number; // 1.05 to 1.15
  perspectiveIntensity?: number;
}

export function ImageMotion({ 
  children, 
  className = "", 
  zoomIntensity = 1.05,
  perspectiveIntensity = 10 
}: ImageMotionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { isTouchDevice } = useCursor();

  useEffect(() => {
    if (isTouchDevice || !containerRef.current || !imageRef.current) return;

    const el = containerRef.current;
    const img = imageRef.current;

    // We use quickTo for performance
    const xRotateTo = gsap.quickTo(img, "rotationY", { duration: 0.8, ease: "power3.out" });
    const yRotateTo = gsap.quickTo(img, "rotationX", { duration: 0.8, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = el.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5; // -0.5 to 0.5
      const y = (clientY - top) / height - 0.5; // -0.5 to 0.5
      
      xRotateTo(x * perspectiveIntensity);
      yRotateTo(-y * perspectiveIntensity);
    };

    const handleMouseEnter = () => {
      gsap.to(img, { scale: zoomIntensity, duration: 0.8, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      xRotateTo(0);
      yRotateTo(0);
      gsap.to(img, { scale: 1, duration: 0.8, ease: "power2.out" });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [zoomIntensity, perspectiveIntensity, isTouchDevice]);

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden ${className}`}
      style={{ perspective: "1000px" }}
    >
      <div 
        ref={imageRef} 
        className="w-full h-full relative"
        style={{ transformOrigin: "center center" }}
      >
        {children}
      </div>
    </div>
  );
}
