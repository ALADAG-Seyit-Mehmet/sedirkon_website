"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { TransitionContext } from "./TransitionContext";
import { TransitionOverlay } from "./TransitionOverlay";

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLongLoading, setIsLongLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Scroll Restoration state
  const [scrollPositions, setScrollPositions] = useState<Record<string, number>>({});

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsTransitioning(false);
    setIsLongLoading(false);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setTimeout(() => {
      // Create a unique key using both pathname and searchParams
      const currentUrl = `${pathname}${searchParams ? `?${searchParams.toString()}` : ''}`;
      const savedPosition = scrollPositions[currentUrl];
      if (savedPosition !== undefined) {
        window.scrollTo({ top: savedPosition, behavior: prefersReducedMotion ? "auto" : "smooth" });
      } else {
        window.scrollTo(0, 0);
      }
    }, 50);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams?.toString()]);

  // Save scroll position before leaving
  useEffect(() => {
    const handleScroll = () => {
      const currentUrl = `${pathname}${searchParams ? `?${searchParams.toString()}` : ''}`;
      setScrollPositions(prev => ({
        ...prev,
        [currentUrl]: window.scrollY
      }));
    };
    
    // Throttle or debounce would be better for production, using generic listener for now
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, searchParams?.toString()]);


  const navigate = useCallback((href: string) => {
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
