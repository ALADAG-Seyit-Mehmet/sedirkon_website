"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { easings } from "@/animations/easings";
import { durations } from "@/animations/variants";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface UseRevealProps {
  type: "fade" | "scale" | "mask" | "text";
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
  scrollTrigger?: boolean;
}

export function useReveal({
  type,
  duration = durations.base,
  delay = 0,
  stagger = 0,
  ease = easings.luxuryReveal,
  scrollTrigger = true,
}: UseRevealProps) {
  const ref = useRef<any>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const el = ref.current;
    // Determine targets (if text, we animate the inner lines)
    const targets = type === "text" || type === "mask" ? el.children : el;

    // Define initial states
    if (type === "fade") {
      gsap.set(targets, { opacity: 0, y: 30 });
    } else if (type === "scale") {
      gsap.set(targets, { opacity: 0, scale: 0.95 });
    } else if (type === "mask" || type === "text") {
      gsap.set(targets, { yPercent: 100, opacity: type === "text" ? 1 : 0 }); // Text mask relies on yPercent
    }

    const animProps: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      yPercent: 0,
      scale: 1,
      duration,
      delay,
      stagger,
      ease,
    };

    if (scrollTrigger) {
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%", // Reveal when 85% down the viewport
        animation: gsap.to(targets, animProps),
        once: true,
      });
    } else {
      gsap.to(targets, animProps);
    }
  }, { scope: ref });

  return ref;
}
