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
    // Detect if the device has a fine pointer (mouse/trackpad)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    
    // Detect explicit touch capability
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        !mediaQuery.matches
      );
    };

    checkTouch();

    // If it's not a touch device, hide default cursor on the whole body when moving
    // We only hide default cursor when we are sure the custom cursor is active
    if (!isTouchDevice) {
      document.documentElement.classList.add("custom-cursor-active");
    }

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [isTouchDevice]);

  // Global override for prefers-reduced-motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsTouchDevice(true); // Disable custom cursor physics entirely
    }
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
