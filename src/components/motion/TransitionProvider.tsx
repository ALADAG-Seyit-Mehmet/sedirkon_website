"use client";

import React, { useState, useCallback, useEffect, Suspense } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { TransitionContext } from "./TransitionContext";
import { TransitionOverlay } from "./TransitionOverlay";

// Ayrıştırılmış Scroll Restoration Manager, Suspense içinde çalışabilmesi için
function ScrollRestorationManager() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [scrollPositions, setScrollPositions] = useState<Record<string, number>>({});

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setTimeout(() => {
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

  useEffect(() => {
    const handleScroll = () => {
      const currentUrl = `${pathname}${searchParams ? `?${searchParams.toString()}` : ''}`;
      setScrollPositions(prev => ({
        ...prev,
        [currentUrl]: window.scrollY
      }));
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, searchParams?.toString()]);

  return null;
}

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLongLoading, setIsLongLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsTransitioning(false);
    setIsLongLoading(false);
  }, [pathname]);


  const navigate = useCallback((href: string) => {
    if (href === pathname) return;
    
    setIsTransitioning(true);

    const loadingTimeout = setTimeout(() => {
      setIsLongLoading(true);
    }, 300);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const transitionDuration = prefersReducedMotion ? 0 : 800;

    setTimeout(() => {
      clearTimeout(loadingTimeout);
      router.push(href);
    }, transitionDuration);

  }, [pathname, router]);

  return (
    <TransitionContext.Provider value={{ isTransitioning, navigate }}>
      <TransitionOverlay isTransitioning={isTransitioning} isLongLoading={isLongLoading} />
      <Suspense fallback={null}>
        <ScrollRestorationManager />
      </Suspense>
      {children}
    </TransitionContext.Provider>
  );
}
