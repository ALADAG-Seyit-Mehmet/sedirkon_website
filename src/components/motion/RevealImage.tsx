import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { MotionProps } from "@/types/motion";
import { cn } from "@/lib/utils";

interface RevealImageProps extends MotionProps {
  aspectRatio?: string;
}

export function RevealImage({
  children,
  className,
  duration = 1.8,
  delay,
  ease,
  scrollTrigger = true,
  aspectRatio = "aspect-video",
}: RevealImageProps) {
  // We use scale reveal for the image wrapper
  const ref = useReveal({ type: "scale", duration, delay, ease, scrollTrigger }) as React.RefObject<HTMLDivElement>;

  return (
    <div ref={ref} className={cn("relative overflow-hidden w-full", aspectRatio, className)}>
      {/* 
        The child (usually next/image) should have 'fill' and 'object-cover'.
        The scale animation happens on this wrapper.
      */}
      {children}
    </div>
  );
}
