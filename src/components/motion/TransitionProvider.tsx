"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { TransitionContext } from "./TransitionContext";
import { TransitionOverlay } from "./TransitionOverlay";

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLongLoading, setIsLongLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Scroll Restoration state
  const [scrollPositions, setScrollPositions] = useState<Record<string, number>>({});

  useEffect(() => {
    // When pathname changes (navigation complete)
    setIsTransitioning(false);
    setIsLongLoading(false);

    // Handle scroll
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    setTimeout(() => {
      // If we have a saved scroll position for this path, restore it, otherwise top
      const savedPosition = scrollPositions[pathname];
      if (savedPosition !== undefined) {
        window.scrollTo({ top: savedPosition, behavior: prefersReducedMotion ? "auto" : "smooth" });
      } else {
        window.scrollTo(0, 0);
      }
    }, 50); // slight delay to ensure DOM is ready
    
  }, [pathname]);

  // Save scroll position before leaving
  useEffect(() => {
    const handleScroll = () => {
      setScrollPositions(prev => ({
        ...prev,
        [pathname]: window.scrollY
      }));
    };
    
    // Throttle or debounce would be better for production, using generic listener for now
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);


  const navigate = useCallback((href: string, options?: { isFlip?: boolean; flipTargetId?: string }) => {
    if (href === pathname) return;
    
    setIsTransitioning(true);

    // Setup loading indicator if taking too long
    const loadingTimeout = setTimeout(() => {
      setIsLongLoading(true);
    }, 300); // 300ms

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const transitionDuration = prefersReducedMotion ? 0 : 800; // 800ms matches overlay duration

    // Wait for overlay to cover the screen
    setTimeout(() => {
      clearTimeout(loadingTimeout);
      
      // If FLIP is true, we could execute custom FLIP logic here before routing
      // For now, the global overlay covers the screen so FLIP would happen underneath.
      // True FLIP in Next.js requires the new page to be rendered, so we would pass the state.
      
      router.push(href);
    }, transitionDuration);

  }, [pathname, router]);

  return (
    <TransitionContext.Provider value={{ isTransitioning, navigate }}>
      <TransitionOverlay isTransitioning={isTransitioning} isLongLoading={isLongLoading} />
      {children}
    </TransitionContext.Provider>
  );
}
