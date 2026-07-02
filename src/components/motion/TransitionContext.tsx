"use client";

import { createContext, useContext } from "react";

export type TransitionContextType = {
  isTransitioning: boolean;
  navigate: (href: string, options?: { isFlip?: boolean; flipTargetId?: string }) => void;
};

export const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export function useTransition() {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error("useTransition must be used within a TransitionProvider");
  }
  return context;
}
