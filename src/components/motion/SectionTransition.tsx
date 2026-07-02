"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

interface SectionTransitionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  pin?: boolean;
}

export function SectionTransition({
  children,
  className,
  as: Component = "section",
  pin = false,
  ...rest
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

  return React.createElement(
    Component,
    {
      ref: containerRef,
      className: cn("relative w-full", className),
      ...rest
    },
    children
  );
}
