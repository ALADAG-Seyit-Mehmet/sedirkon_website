"use client";

import { useState } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/utils";

interface ConfiguratorProps {
  images: string[];
  title: string;
}

export default function Configurator({ images, title }: ConfiguratorProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-md">
      {/* Main Image Area with crossfade */}
      <div className="w-full aspect-square bg-charcoal-900 relative overflow-hidden group">
        {images.map((img, idx) => (
          <div
            key={img}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              activeIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <SmartImage
              src={img}
              alt={`${title} - Görsel ${idx + 1}`}
              fill
              priority={idx === 0} // Only eager load the first one
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-sm overflow-x-auto pb-xs scrollbar-hide">
        {images.map((img, idx) => (
          <button
            key={img}
            onClick={() => setActiveIndex(idx)}
            className={cn(
              "relative w-24 h-24 flex-shrink-0 bg-charcoal-900 overflow-hidden transition-all duration-300 border-2",
              activeIndex === idx ? "border-cream-500" : "border-transparent opacity-50 hover:opacity-100"
            )}
          >
            <SmartImage
              src={img}
              alt={`${title} küçük görsel ${idx + 1}`}
              fill
              sizes="96px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
