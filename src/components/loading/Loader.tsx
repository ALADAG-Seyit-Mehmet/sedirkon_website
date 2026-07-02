"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import LoaderLogo from "./LoaderLogo";

export default function Loader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const loadingIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable scroll globally immediately
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
      if ((window as any).lenis) {
        (window as any).lenis.stop();
      }
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Re-enable scrolling after loader finishes
          if (typeof window !== "undefined") {
            document.body.style.overflow = "";
            if ((window as any).lenis) {
              (window as any).lenis.start();
            }
          }
        },
      });

      // Initial state
      gsap.set(logoWrapperRef.current, { opacity: 0, scale: 1.1, filter: "blur(10px)" });
      gsap.set(loadingIndicatorRef.current, { opacity: 0, scaleY: 0 });

      // Sequence
      tl.to(logoWrapperRef.current, {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power2.out",
      })
      .to(logoWrapperRef.current, {
        scale: 0.95,
        duration: 2,
        ease: "power1.inOut",
      })
      .to(loadingIndicatorRef.current, {
        opacity: 1,
        scaleY: 1,
        duration: 0.5,
        ease: "power2.out",
      }, "-=1.5")
      // Wait roughly 2 seconds total, then fade out the entire loader
      .to(loaderRef.current, {
        opacity: 0,
        duration: 1.2,
        ease: "power3.inOut",
        onComplete: () => {
          // Hide completely to remove from DOM flow and prevent clicks
          if (loaderRef.current) {
            loaderRef.current.style.display = "none";
          }
        }
      });

    }, loaderRef);

    return () => {
      ctx.revert();
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, []);

  return (
    <div 
      ref={loaderRef} 
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-charcoal-950 w-screen h-screen will-change-transform"
    >
      <div ref={logoWrapperRef} className="will-change-transform">
        <LoaderLogo />
      </div>
      
      <div className="absolute bottom-2xl md:bottom-4xl w-[1px] h-xl overflow-hidden">
        <div 
          ref={loadingIndicatorRef} 
          className="w-full h-full bg-cream-500/50 origin-bottom will-change-transform animate-scroll-indicator" 
        />
      </div>
    </div>
  );
}
