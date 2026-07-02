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
  direction?: string; // e.g. "top-to-bottom", "left-to-right", "right-to-left", "bottom-to-top"
}

export function useReveal({
  type,
  duration = durations.base,
  delay = 0,
  stagger = 0,
  ease = easings.luxuryReveal,
  scrollTrigger = true,
  direction = "bottom-to-top",
}: UseRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const el = ref.current;
    
    // Determine targets
    let targets: any = el;
    if (type === "text") {
      // For text reveal, we must animate the inner spans to create the mask effect
      targets = gsap.utils.toArray(el.querySelectorAll('.will-change-transform'));
    } else if (type === "mask") {
      targets = el.children;
    }

    // Determine initial transform based on direction (primarily for masks)
    let initX = 0;
    let initY = 0;
    
    if (type === "mask" || type === "text") {
      if (direction === "top-to-bottom") initY = -100;
      else if (direction === "left-to-right") initX = -100;
      else if (direction === "right-to-left") initX = 100;
      else initY = 100; // default bottom-to-top
    }

    // Define initial states
    if (type === "fade") {
      gsap.set(targets, { opacity: 0, y: 30 });
    } else if (type === "scale") {
      gsap.set(targets, { opacity: 0, scale: 0.95 });
    } else if (type === "mask" || type === "text") {
      gsap.set(targets, { 
        xPercent: initX, 
        yPercent: initY, 
        opacity: type === "text" ? 1 : 0 
      });
    }

    const animProps: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      xPercent: 0,
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
