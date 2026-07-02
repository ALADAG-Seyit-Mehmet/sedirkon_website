import React from "react";
import { useParallax } from "@/hooks/useParallax";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number; // 0.5 means it moves 50% slower than scroll
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function Parallax({
  children,
  speed = 0.5,
  className,
  as: Component = "div",
}: ParallaxProps) {
  const ref = useParallax({ speed }) as React.RefObject<any>;

  return (
    <Component ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </Component>
  );
}
