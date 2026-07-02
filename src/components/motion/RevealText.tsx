"use client";

import React, { useMemo } from "react";
import { useReveal } from "@/hooks/useReveal";
import { MotionProps } from "@/types/motion";
import { cn } from "@/lib/utils";

interface RevealTextProps extends React.HTMLAttributes<HTMLElement>, MotionProps {
  text: string;
  as?: React.ElementType;
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
  ...rest
}: RevealTextProps) {
  // Use 'text' type in useReveal, which looks for children inside the ref
  const ref = useReveal({ type: "text", duration, delay, stagger, ease, scrollTrigger }) as React.RefObject<any>;

  // Split text by words, wrap each in an overflow-hidden wrapper to simulate line-by-line reveal
  const words = useMemo(() => text.split(" "), [text]);

  return React.createElement(
    Component,
    {
      ref,
      className: cn("flex flex-wrap", className),
      ...rest
    },
    words.map((word, idx) => (
      <span key={idx} className="overflow-hidden inline-flex pb-1 mr-[0.25em]">
        <span className="will-change-transform inline-block">
          {word}
        </span>
      </span>
    ))
  );
}
