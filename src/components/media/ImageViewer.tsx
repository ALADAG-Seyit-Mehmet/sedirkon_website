"use client";

import React, { useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { usePinch, useDrag } from "@use-gesture/react";
import { SmartImage } from "@/components/ui/SmartImage";
import { MediaAsset, useMedia } from "./MediaContext";

export function ImageViewer({ item }: { item: MediaAsset }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { closeMedia, nextMedia, prevMedia } = useMedia();

  // We use react-spring for smooth gesture physics since it integrates perfectly with use-gesture.
  // Alternatively, we could use gsap quickSetter, but react-spring handles momentum out of the box.
  const [{ x, y, scale }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    config: { mass: 1, tension: 350, friction: 35 }
  }));

  // Reset when item changes
  useEffect(() => {
    api.start({ x: 0, y: 0, scale: 1 });
  }, [item.id, api]);

  // Handle Drag (Pan) and Swipe
  const bindDrag = useDrag(({ active, movement: [mx, my], direction: [dx], velocity: [vx], tap }) => {
    if (tap) return; // ignore simple taps
    
    // If zoomed out/normal, allow swipe to change image or pull down to close
    if (scale.get() <= 1) {
      if (my > 100 && !active) {
        closeMedia();
      } else if (vx > 0.5 && !active) {
        if (dx > 0) prevMedia();
        else nextMedia();
      } else {
        api.start({
          x: active ? mx : 0,
          y: active ? my : 0,
          scale: active ? 0.95 : 1,
          immediate: active,
        });
      }
    } else {
      // Panning when zoomed in
      api.start({
        x: mx,
        y: my,
        immediate: active,
      });
    }
  }, { filterTaps: true, rubberband: true });

  // Handle Pinch (Zoom)
  const bindPinch = usePinch(({ offset: [d], active }) => {
    // d is the distance (scale multiplier)
    const newScale = Math.max(1, Math.min(d, 4)); // clamp between 1x and 4x
    
    api.start({
      scale: newScale,
      // If returning to 1x, reset position
      x: newScale === 1 ? 0 : x.get(),
      y: newScale === 1 ? 0 : y.get(),
      immediate: active,
    });
  });

  // Handle Double Click to zoom
  const handleDoubleClick = () => {
    const currentScale = scale.get();
    if (currentScale > 1) {
      api.start({ x: 0, y: 0, scale: 1 });
    } else {
      api.start({ scale: 2 }); // zoom to 2x
    }
  };

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex items-center justify-center relative touch-none"
      {...bindDrag()}
      {...bindPinch()}
      onDoubleClick={handleDoubleClick}
    >
      <animated.div
        style={{ x, y, scale }}
        className="w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center origin-center cursor-grab active:cursor-grabbing"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <SmartImage 
            src={item.src} 
            alt={item.alt || item.title || "Gallery image"}
            fill
            className="object-contain pointer-events-none"
            sizes="100vw"
            quality={90}
          />
        </div>
      </animated.div>
    </div>
  );
}
