"use client";

import { createContext, useContext } from "react";

export type MediaType = "image" | "video";

export interface MediaAsset {
  id: string;
  type: MediaType;
  src: string;
  thumbnailSrc?: string;
  width?: number;
  height?: number;
  alt?: string;
  title?: string;
  description?: string;
  location?: string;
  photographer?: string;
  collection?: string;
}

export type MediaContextType = {
  isOpen: boolean;
  galleryId: string | null;
  items: MediaAsset[];
  currentIndex: number;
  openMedia: (items: MediaAsset[], startIndex: number, galleryId: string, sourceElement?: HTMLElement) => void;
  closeMedia: () => void;
  nextMedia: () => void;
  prevMedia: () => void;
  setIndex: (index: number) => void;
  sourceElement: HTMLElement | null;
};

export const MediaContext = createContext<MediaContextType | undefined>(undefined);

export function useMedia() {
  const context = useContext(MediaContext);
  if (context === undefined) {
    throw new Error("useMedia must be used within a MediaProvider");
  }
  return context;
}
