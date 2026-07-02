"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useCursor } from "./CursorContext";

interface MagneticProps {
  children: React.ReactElement;
  intensity?: number;
}

export function Magnetic({ children, intensity = 0.3 }: MagneticProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isTouchDevice } = useCursor();

  useEffect(() => {
    if (isTouchDevice || !containerRef.current) return;

    const el = containerRef.current.firstElementChild as HTMLElement;
    if (!el) return;

    const xTo = gsap.quickTo(el, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(el, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = el.getBoundingClientRect();
      
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      xTo(x * intensity);
      yTo(y * intensity);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    const wrapper = containerRef.current;
    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [intensity, isTouchDevice]);

  if (isTouchDevice) {
    return <>{children}</>;
  }

  return (
    <div ref={containerRef} className="inline-block relative">
      {children}
    </div>
  );
}
