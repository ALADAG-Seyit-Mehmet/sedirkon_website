"use client";

import React from "react";
import { MediaAsset } from "./MediaContext";

export function MediaCaption({ item }: { item?: MediaAsset }) {
  if (!item) return null;
  if (!item.title && !item.description && !item.location && !item.photographer) return null;

  return (
    <div className="w-full text-center pb-6 pointer-events-auto">
      <div className="inline-block max-w-xl">
        {item.title && (
          <h3 className="font-serif text-xl md:text-2xl text-cream-500">
            {item.title}
          </h3>
        )}
        {item.description && (
          <p className="mt-2 text-cream-500/70 font-sans text-sm font-light leading-relaxed">
            {item.description}
          </p>
        )}
        
        {/* Meta Info */}
        {(item.location || item.photographer || item.collection) && (
          <div className="mt-4 flex items-center justify-center gap-4 text-xs font-sans tracking-widest text-cream-500/50 uppercase">
            {item.collection && <span>Koleksiyon: {item.collection}</span>}
            {item.location && <span>Konum: {item.location}</span>}
            {item.photographer && <span>Fotoğraf: {item.photographer}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
