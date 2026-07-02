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
  direction = "bottom-to-top",
  ...rest
}: MaskRevealProps) {
  // Use mask type. Expects the immediate children to be animated.
  const ref = useReveal({ type: "mask", duration, delay, ease, scrollTrigger, direction }) as React.RefObject<HTMLElement>;

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
