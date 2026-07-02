"use client";

import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { MotionProps } from "@/types/motion";
import { cn } from "@/lib/utils";

interface MaskRevealProps extends React.HTMLAttributes<HTMLElement>, MotionProps {
  as?: React.ElementType;
  direction?: string;
}

export function MaskReveal({
  children,
  as: Component = "div",
  className,
  duration,
  delay,
  ease,
  scrollTrigger = true,
  direction, // Accept but ignore functionally for now, or you can implement it in useReveal if needed
  ...rest
}: MaskRevealProps) {
  // Use mask type. Expects the immediate children to be animated.
  const ref = useReveal({ type: "mask", duration, delay, ease, scrollTrigger }) as React.RefObject<any>;

  return React.createElement(
    Component,
    {
      ref,
      className: cn("overflow-hidden block", className),
      ...rest
    },
    <div className="will-change-transform">
      {children}
    </div>
  );
}
