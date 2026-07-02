import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { MotionProps } from "@/types/motion";
import { cn } from "@/lib/utils";

interface FadeInProps extends MotionProps {
  as?: keyof JSX.IntrinsicElements;
}

export function FadeIn({
  children,
  as: Component = "div",
  className,
  duration,
  delay,
  ease,
  scrollTrigger = true,
}: FadeInProps) {
  const ref = useReveal({ type: "fade", duration, delay, ease, scrollTrigger }) as React.RefObject<any>;

  return (
    <Component ref={ref} className={cn("will-change-transform opacity-0", className)}>
      {children}
    </Component>
  );
}
