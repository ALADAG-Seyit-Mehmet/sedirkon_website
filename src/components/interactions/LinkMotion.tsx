"use client";

import React from "react";
import Link, { LinkProps } from "next/link";
import { useCursor } from "./CursorContext";
import { Magnetic } from "./Magnetic";

interface LinkMotionProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  magnetic?: boolean;
  animatedUnderline?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function LinkMotion({ 
  children, 
  className = "", 
  magnetic = false, 
  animatedUnderline = true,
  onClick,
  ...props 
}: LinkMotionProps) {
  const { setCursorType, isTouchDevice } = useCursor();

  const handleMouseEnter = () => setCursorType("hover");
  const handleMouseLeave = () => setCursorType("default");

  const linkContent = (
    <Link
      {...props}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative inline-flex items-center outline-none focus-visible:ring-1 focus-visible:ring-cream-500 ${className}`}
    >
      <span className="relative">
        {children}
        {animatedUnderline && (
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-300 ease-out group-hover:w-full" />
        )}
      </span>
    </Link>
  );

  if (magnetic && !isTouchDevice) {
    return <Magnetic intensity={0.1}>{linkContent}</Magnetic>;
  }

  return linkContent;
}
