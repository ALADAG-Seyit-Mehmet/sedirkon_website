"use client";

import React, { useState, useCallback, useEffect } from "react";
import { MediaContext, MediaAsset } from "./MediaContext";
import { Lightbox } from "./Lightbox";

export function MediaProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<MediaAsset[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [galleryId, setGalleryId] = useState<string | null>(null);
  const [sourceElement, setSourceElement] = useState<HTMLElement | null>(null);

  const openMedia = useCallback(
    (newItems: MediaAsset[], startIndex: number, newGalleryId: string, el?: HTMLElement) => {
      setItems(newItems);
      setCurrentIndex(startIndex);
      setGalleryId(newGalleryId);
      if (el) setSourceElement(el);
      setIsOpen(true);
      
      // Update URL hash for deep linking
      const currentItem = newItems[startIndex];
      if (currentItem && typeof window !== "undefined") {
        window.history.pushState({ lightbox: true }, "", `#${newGalleryId}-${currentItem.id}`);
      }
    },
    []
  );

  const updateHash = useCallback((index: number) => {
    const currentItem = items[index];
    if (currentItem && galleryId && typeof window !== "undefined") {
      window.history.replaceState({ lightbox: true }, "", `#${galleryId}-${currentItem.id}`);
    }
  }, [items, galleryId]);

  const closeMedia = useCallback(() => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.hash = "";
      window.history.replaceState({}, "", url.toString());
    }
  }, []);

  const nextMedia = useCallback(() => {
    setCurrentIndex((prev) => {
      const newIndex = (prev + 1) % items.length;
      return newIndex;
    });
  }, [items.length]);

  const prevMedia = useCallback(() => {
    setCurrentIndex((prev) => {
      const newIndex = (prev - 1 + items.length) % items.length;
      return newIndex;
    });
  }, [items.length]);

  const setIndex = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    updateHash(currentIndex);
  }, [currentIndex, updateHash]);

  // Listen to browser back button (popstate)
  useEffect(() => {
    const handlePopState = () => {
      if (isOpen) {
        // User clicked back button, we should close the lightbox instead of navigating
        closeMedia();
      }
    };
    
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [isOpen, closeMedia]);

  // Deep linking initialization: check if URL has hash that matches our pattern
  // This would ideally be handled by individual galleries passing their items,
  // but since we don't have all items registered globally, we can just let
  // the gallery components trigger openMedia if they detect their hash.

  return (
    <MediaContext.Provider
      value={{
        isOpen,
        galleryId,
        items,
        currentIndex,
        openMedia,
        closeMedia,
        nextMedia,
        prevMedia,
        setIndex,
        sourceElement,
      }}
    >
      {children}
      {/* Lightbox will render the overlay when isOpen is true */}
      <Lightbox />
    </MediaContext.Provider>
  );
}
