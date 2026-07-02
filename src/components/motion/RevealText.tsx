import React, { useMemo } from "react";
import { useReveal } from "@/hooks/useReveal";
import { MotionProps } from "@/types/motion";
import { cn } from "@/lib/utils";

interface RevealTextProps extends MotionProps {
  text: string;
  as?: keyof JSX.IntrinsicElements;
}

export function RevealText({
  text,
  as: Component = "p",
  className,
  duration,
  delay,
  stagger = 0.05,
  ease,
  scrollTrigger = true,
}: RevealTextProps) {
  // Use 'text' type in useReveal, which looks for children inside the ref
  const ref = useReveal({ type: "text", duration, delay, stagger, ease, scrollTrigger }) as React.RefObject<any>;

  // Split text by words, wrap each in an overflow-hidden wrapper to simulate line-by-line reveal
  const words = useMemo(() => text.split(" "), [text]);

  return (
    <Component ref={ref} className={cn("flex flex-wrap", className)}>
      {words.map((word, idx) => (
        <span key={idx} className="overflow-hidden inline-flex pb-1 mr-[0.25em]">
          <span className="will-change-transform inline-block">
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
}
