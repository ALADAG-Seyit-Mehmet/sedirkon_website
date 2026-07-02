import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { MotionProps } from "@/types/motion";
import { cn } from "@/lib/utils";

interface MaskRevealProps extends MotionProps {
  as?: keyof JSX.IntrinsicElements;
}

export function MaskReveal({
  children,
  as: Component = "div",
  className,
  duration,
  delay,
  ease,
  scrollTrigger = true,
}: MaskRevealProps) {
  // Use mask type. Expects the immediate children to be animated.
  const ref = useReveal({ type: "mask", duration, delay, ease, scrollTrigger }) as React.RefObject<any>;

  return (
    <Component ref={ref} className={cn("overflow-hidden block", className)}>
      <div className="will-change-transform">
        {children}
      </div>
    </Component>
  );
}
