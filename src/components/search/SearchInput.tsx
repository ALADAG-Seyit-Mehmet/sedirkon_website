"use client";

import React, { useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { useSearch } from "./SearchContext";

export function SearchInput() {
  const { query, setQuery, isLoading } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto focus when palette opens
  useEffect(() => {
    // slight delay to allow GSAP animation to start
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center px-4 py-4 border-b border-cream-500/10 bg-charcoal-900">
      <Search size={20} className="text-cream-500/50 mr-3 flex-shrink-0" />
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ürün, proje, malzeme arayın..."
        className="flex-1 bg-transparent border-none outline-none text-cream-500 placeholder-cream-500/30 text-lg font-sans w-full"
        autoComplete="off"
        spellCheck="false"
      />
      {isLoading && (
        <div className="w-4 h-4 border-2 border-cream-500/20 border-t-cream-500 rounded-full animate-spin flex-shrink-0 ml-3" />
      )}
    </div>
  );
}
