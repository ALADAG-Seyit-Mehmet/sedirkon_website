"use client";

import React from "react";
import { useParallax } from "@/hooks/useParallax";
import { cn } from "@/lib/utils";

interface ParallaxProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  speed?: number; // 0.5 means it moves 50% slower than scroll
  className?: string;
  as?: React.ElementType;
}

export function Parallax({
  children,
  speed = 0.5,
  className,
  as: Component = "div",
  ...rest
}: ParallaxProps) {
  const ref = useParallax({ speed }) as React.RefObject<HTMLElement>;

  return React.createElement(
    Component,
    {
      ref,
      className: cn("will-change-transform", className),
      ...rest
    },
    children
  );
}
