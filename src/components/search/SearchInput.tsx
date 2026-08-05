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
    <div className="flex flex-col border-b border-cream-500/20 pb-4 mb-8">
      <div className="flex items-center">
        <Search size={40} className="text-cream-500/50 mr-6 flex-shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ürün, proje veya malzeme arayın..."
          className="flex-1 bg-transparent border-none outline-none text-cream-500 placeholder-cream-500/20 text-3xl md:text-6xl font-serif tracking-tight w-full"
          autoComplete="off"
          spellCheck="false"
        />
        {isLoading && (
          <div className="w-8 h-8 border-2 border-cream-500/20 border-t-cream-500 rounded-full animate-spin flex-shrink-0 ml-4" />
        )}
      </div>
    </div>
  );
}
