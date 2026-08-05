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

// Listen to URL changes including search parameters safely within a Suspense boundary
function URLChangeListener({ onChange }: { onChange: () => void }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    onChange();
  }, [pathname, searchParams?.toString(), onChange]);

  return null;
}

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLongLoading, setIsLongLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleUrlChange = useCallback(() => {
    setIsTransitioning(false);
    setIsLongLoading(false);
  }, []);

  const navigate = useCallback((href: string) => {
    const currentUrl = typeof window !== "undefined" 
      ? window.location.pathname + window.location.search + window.location.hash
      : pathname;
      
    if (href === pathname || href === currentUrl) return;
    
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
        <URLChangeListener onChange={handleUrlChange} />
        <ScrollRestorationManager />
      </Suspense>
      {children}
    </TransitionContext.Provider>
  );
}
