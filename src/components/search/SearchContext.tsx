"use client";

import { createContext, useContext } from "react";
import { SearchItem, SearchResultGroup } from "./types";

export interface SearchContextType {
  isOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;
  query: string;
  setQuery: (query: string) => void;
  results: SearchResultGroup[];
  recentSearches: SearchItem[];
  addRecentSearch: (item: SearchItem) => void;
  clearRecentSearches: () => void;
  isLoading: boolean;
  trackSelect: (item: SearchItem, position: number) => void;
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
