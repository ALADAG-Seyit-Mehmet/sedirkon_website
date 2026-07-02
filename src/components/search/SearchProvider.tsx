"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { SearchContext } from "./SearchContext";
import { SearchItem, SearchResultGroup } from "./types";
import { LocalDataAdapter } from "./LocalDataAdapter";
import { SearchIndexer } from "./SearchIndexer";
import { SearchService } from "./SearchService";
import { NoOpAnalyticsAdapter } from "./SearchAnalyticsAdapter";
import dynamic from "next/dynamic";

const CommandPalette = dynamic(() => import("./CommandPalette").then(mod => mod.CommandPalette), { ssr: false });

// Move singletons outside to prevent re-instantiation
const adapter = new LocalDataAdapter();
const indexer = new SearchIndexer(adapter);
const searchService = new SearchService();
const analytics = new NoOpAnalyticsAdapter();

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResultGroup[]>([]);
  const [recentSearches, setRecentSearches] = useState<SearchItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  // Initialize Search Index
  useEffect(() => {
    const initSearch = async () => {
      try {
        const items = await indexer.buildIndex();
        await searchService.init(items);
        setIsReady(true);
        setIsLoading(false);
      } catch (error) {
        console.error("Search index failed to build:", error);
        setIsLoading(false);
      }
    };
    initSearch();
  }, []);

  // Handle Query Changes
  useEffect(() => {
    if (!isReady) return;
    
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const searchResults = searchService.search(query);
    const grouped = searchService.groupResults(searchResults);
    setResults(grouped);
    
    // Log analytics (disabled by default)
    analytics.trackSearch(query, searchResults.length);
  }, [query, isReady]);

  // Handle Local Storage for Recent Searches
  useEffect(() => {
    const stored = localStorage.getItem("sedirkon_recent_searches");
    if (stored) {
      try {
        setRecentSearches(JSON.parse(stored));
      } catch (e) {}
    }
  }, []);

  const addRecentSearch = useCallback((item: SearchItem) => {
    setRecentSearches(prev => {
      // Remove if exists
      const filtered = prev.filter(p => p.id !== item.id);
      // Add to top, max 5 items
      const updated = [item, ...filtered].slice(0, 5);
      localStorage.setItem("sedirkon_recent_searches", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const clearRecentSearches = useCallback(() => {
    setRecentSearches([]);
    localStorage.removeItem("sedirkon_recent_searches");
  }, []);

  const openSearch = useCallback(() => setIsOpen(true), []);
  const closeSearch = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => setQuery(""), 300); // clear query after animation
  }, []);
  const toggleSearch = useCallback(() => setIsOpen(prev => !prev), []);

  const trackSelect = useCallback((item: SearchItem, position: number) => {
    analytics.trackSelect(item, query, position);
  }, [query]);

  // Global Keyboard Shortcut CMD+K / CTRL+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggleSearch();
      }
      if (e.key === "Escape" && isOpen) {
        closeSearch();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, toggleSearch, closeSearch]);

  return (
    <SearchContext.Provider
      value={{
        isOpen,
        openSearch,
        closeSearch,
        toggleSearch,
        query,
        setQuery,
        results,
        recentSearches,
        addRecentSearch,
        clearRecentSearches,
        isLoading,
        trackSelect
      }}
    >
      {children}
      <CommandPalette />
    </SearchContext.Provider>
  );
}
