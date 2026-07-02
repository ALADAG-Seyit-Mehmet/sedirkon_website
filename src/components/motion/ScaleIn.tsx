"use client";

import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { MotionProps } from "@/types/motion";
import { cn } from "@/lib/utils";

interface ScaleInProps extends React.HTMLAttributes<HTMLElement>, MotionProps {
  as?: React.ElementType;
}

export function ScaleIn({
  children,
  as: Component = "div",
  className,
  duration = 1.2,
  delay,
  ease,
  scrollTrigger = true,
  ...rest
}: ScaleInProps) {
  const ref = useReveal({ type: "scale", duration, delay, ease, scrollTrigger }) as React.RefObject<HTMLElement>;

  return React.createElement(
    Component,
    {
      ref,
      className: cn("will-change-transform opacity-0", className),
      ...rest
    },
    children
  );
}
