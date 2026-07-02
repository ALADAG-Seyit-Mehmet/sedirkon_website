import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  pin?: boolean;
}

export function SectionTransition({
  children,
  className,
  as: Component = "section",
  pin = false,
}: SectionTransitionProps) {
  const containerRef = useRef<any>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    if (pin) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    }
  }, { scope: containerRef });

  return (
    <Component ref={containerRef} className={cn("relative w-full", className)}>
      {children}
    </Component>
  );
}
