import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { MotionProps } from "@/types/motion";
import { cn } from "@/lib/utils";

interface ScaleInProps extends MotionProps {
  as?: keyof JSX.IntrinsicElements;
}

export function ScaleIn({
  children,
  as: Component = "div",
  className,
  duration = 1.2,
  delay,
  ease,
  scrollTrigger = true,
}: ScaleInProps) {
  const ref = useReveal({ type: "scale", duration, delay, ease, scrollTrigger }) as React.RefObject<any>;

  return (
    <Component ref={ref} className={cn("will-change-transform opacity-0", className)}>
      {children}
    </Component>
  );
}
