import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface UseParallaxProps {
  speed?: number; // 1 = normal scroll, < 1 = slower, > 1 = faster (negative = reverse)
}

export function useParallax({ speed = 0.5 }: UseParallaxProps = {}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    // We use a y-offset based on speed.
    // e.g., if speed is 0.5, it moves half as fast as scroll
    gsap.to(ref.current, {
      y: () => (1 - speed) * ScrollTrigger.maxScroll(window),
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  }, { scope: ref });

  return ref;
}
