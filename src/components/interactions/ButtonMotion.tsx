"use client";

import React from "react";
import { useCursor, CursorType } from "./CursorContext";
import { Magnetic } from "./Magnetic";

interface ButtonMotionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  cursorMode?: CursorType;
  magnetic?: boolean;
}

export function ButtonMotion({ 
  children, 
  className = "", 
  cursorMode = "hover", 
  magnetic = true,
  onMouseEnter,
  onMouseLeave,
  ...props 
}: ButtonMotionProps) {
  const { setCursorType, isTouchDevice } = useCursor();

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCursorType(cursorMode);
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCursorType("default");
    if (onMouseLeave) onMouseLeave(e);
  };

  const buttonElement = (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-all duration-300 ease-out active:scale-95 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cream-500 ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Subtle depth glow overlay inside button */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none" />
    </button>
  );

  if (magnetic && !isTouchDevice) {
    return <Magnetic intensity={0.2}>{buttonElement}</Magnetic>;
  }

  return buttonElement;
}
