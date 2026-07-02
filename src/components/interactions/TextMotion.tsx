"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface TextMotionProps {
  children: React.ReactNode;
  className?: string;
  type?: "split" | "parallax" | "blur";
}

export function TextMotion({ children, className = "", type = "split" }: TextMotionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Very subtle parallax effect on text
    if (type === "parallax") {
      const el = containerRef.current;
      const xTo = gsap.quickTo(el, "x", { duration: 1, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 1, ease: "power3.out" });

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * -10; // Moves slightly opposite
        const y = (clientY / window.innerHeight - 0.5) * -10;
        xTo(x);
        yTo(y);
      };

      const handleMouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      const section = el.closest('section') || document.body;
      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [type]);

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {children}
    </div>
  );
}
