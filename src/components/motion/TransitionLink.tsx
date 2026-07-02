"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useTransition } from "./TransitionContext";

interface TransitionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  isFlip?: boolean;
  flipTargetId?: string;
}

export function TransitionLink({ 
  href, 
  children, 
  className, 
  isFlip, 
  flipTargetId,
  onClick, 
  ...props 
}: TransitionLinkProps) {
  const { navigate } = useTransition();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
      if (e.defaultPrevented) return;
    }

    const isHash = href.startsWith("#") || href.startsWith(`${pathname}#`);
    const isSamePage = href === pathname;
    
    if (isHash || isSamePage) {
      return; 
    }

    e.preventDefault();
    navigate(href, { isFlip, flipTargetId });
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
