"use client";

import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { MotionProps } from "@/types/motion";
import { cn } from "@/lib/utils";

interface FadeInProps extends React.HTMLAttributes<HTMLElement>, MotionProps {
  as?: React.ElementType;
}

export function FadeIn({
  children,
  as: Component = "div",
  className,
  duration,
  delay,
  ease,
  scrollTrigger = true,
  ...rest
}: FadeInProps) {
  const ref = useReveal({ type: "fade", duration, delay, ease, scrollTrigger }) as React.RefObject<HTMLElement>;

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
