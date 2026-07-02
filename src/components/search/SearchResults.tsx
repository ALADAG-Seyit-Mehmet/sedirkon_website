"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSearch } from "./SearchContext";
import { SearchItem as SearchItemType } from "./types";
import { Box, Briefcase, FileText, Layers, Video, Link as LinkIcon, MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

// Define icons for different types
const typeIcons: Record<string, React.ReactNode> = {
  product: <Box size={16} />,
  project: <Briefcase size={16} />,
  collection: <Layers size={16} />,
  material: <Layers size={16} />,
  page: <FileText size={16} />,
  workshop: <Video size={16} />,
  action: <LinkIcon size={16} />
};

export function SearchResults() {
  const { query, results, recentSearches, closeSearch, addRecentSearch, trackSelect } = useSearch();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const flatItems = query.trim() === ""
    ? recentSearches
    : results.flatMap(group => group.items);

  const handleSelect = (item: SearchItemType, position: number) => {
    addRecentSearch(item);
    trackSelect(item, position);

    if (item.actionType === "copy") {
      navigator.clipboard.writeText(window.location.href);
    } else {
      router.push(item.url);
    }
    closeSearch();
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (flatItems.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % flatItems.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + flatItems.length) % flatItems.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        handleSelect(flatItems[selectedIndex], selectedIndex);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flatItems, selectedIndex]);

  useEffect(() => {
    if (flatItems.length > 0 && selectedIndex >= 0 && selectedIndex < flatItems.length) {
      const activeItem = flatItems[selectedIndex];
      if (activeItem.actionType !== "copy" && activeItem.actionType !== "blank") {
        router.prefetch(activeItem.url);
      }
    }
  }, [selectedIndex, flatItems, router]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeEl = scrollContainerRef.current.querySelector('[data-selected="true"]') as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [selectedIndex]);

  if (query.trim() === "" && recentSearches.length === 0) {
    return (
      <div className="flex-1 p-8 text-center text-cream-500/40 font-sans text-sm flex flex-col items-center justify-center">
        Aramaya başlamak için yazın...
      </div>
    );
  }

  if (query.trim() !== "" && results.length === 0) {
    return (
      <div className="flex-1 p-8 text-center text-cream-500/40 font-sans text-sm flex flex-col items-center justify-center">
        Sonuç bulunamadı: <span className="text-cream-500">&quot;{query}&quot;</span>
      </div>
    );
  }

  let globalIndex = 0;

  return (
    <div ref={scrollContainerRef} className="flex-1 overflow-y-auto overflow-x-hidden p-2 custom-scrollbar max-h-[50vh]">
      {query.trim() === "" ? (
        <div className="mb-2">
          <div className="px-3 py-2 text-xs font-sans tracking-widest text-cream-500/40 uppercase">
            Son Aramalar
          </div>
          {recentSearches.map((item, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <ResultItem 
                key={item.id} 
                item={item} 
                isSelected={isSelected} 
                onSelect={() => handleSelect(item, idx)} 
                onHover={() => setSelectedIndex(idx)} 
              />
            );
          })}
        </div>
      ) : (
        results.map(group => (
          <div key={group.type} className="mb-4 last:mb-0">
            <div className="px-3 py-2 text-xs font-sans tracking-widest text-cream-500/40 uppercase sticky top-0 bg-charcoal-900/95 backdrop-blur z-10">
              {group.title}
            </div>
            <div className="flex flex-col">
              {group.items.map(item => {
                const isSelected = selectedIndex === globalIndex;
                const idx = globalIndex;
                globalIndex++;
                
                return (
                  <ResultItem 
                    key={item.id} 
                    item={item} 
                    isSelected={isSelected} 
                    onSelect={() => handleSelect(item, idx)} 
                    onHover={() => setSelectedIndex(idx)} 
                  />
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

function ResultItem({ 
  item, 
  isSelected, 
  onSelect, 
  onHover 
}: { 
  item: SearchItemType; 
  isSelected: boolean; 
  onSelect: () => void; 
  onHover: () => void;
}) {
  return (
    <div
      data-selected={isSelected}
      onClick={onSelect}
      onMouseEnter={onHover}
      className={`group flex items-center justify-between px-3 py-3 rounded-lg cursor-pointer transition-colors duration-200 ${
        isSelected ? "bg-cream-500/10" : "hover:bg-cream-500/5"
      }`}
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <div className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
          isSelected ? "bg-cream-500 text-charcoal-950" : "bg-charcoal-800 text-cream-500/70"
        }`}>
          {typeIcons[item.type] || <FileText size={16} />}
        </div>
        <div className="flex flex-col overflow-hidden">
          <span className={`text-sm font-sans truncate transition-colors ${isSelected ? "text-cream-500" : "text-cream-500/80"}`}>
            {item.title}
          </span>
          {item.description && (
            <span className="text-xs font-sans text-cream-500/40 truncate">
              {item.description}
            </span>
          )}
        </div>
      </div>
      
      {isSelected && (
        <div className="flex-shrink-0 text-cream-500/50 pl-4">
          <MoveRight size={16} />
        </div>
      )}
    </div>
  );
}
