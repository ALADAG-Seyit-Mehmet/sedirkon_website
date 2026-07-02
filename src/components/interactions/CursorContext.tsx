"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type CursorType = "default" | "hover" | "video" | "drag" | "zoom" | "hidden";

interface CursorContextType {
  cursorType: CursorType;
  setCursorType: (type: CursorType) => void;
  isTouchDevice: boolean;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorType, setCursorType] = useState<CursorType>("default");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const touch =
      prefersReducedMotion ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      !mediaQuery.matches;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsTouchDevice(touch);

    if (!touch) {
      document.documentElement.classList.add("custom-cursor-active");
    }

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType, isTouchDevice }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
}
