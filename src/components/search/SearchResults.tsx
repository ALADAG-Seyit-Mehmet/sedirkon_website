"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSearch } from "./SearchContext";
import { SearchItem as SearchItemType } from "./types";
import { Box, Briefcase, FileText, Layers, Video, Link as LinkIcon, MoveRight } from "lucide-react";
import { TransitionLink as Link } from "@/components/motion/TransitionLink";
import { SmartImage } from "@/components/ui/SmartImage";
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
      closeSearch();
    } else {
      // The Link component handles navigation natively.
      // We just need to close the search overlay so it doesn't block the next page.
      closeSearch();
    }
  };

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (flatItems.length === 0) return;

      if (e.key === "ArrowDown" || (e.key === "Tab" && !e.shiftKey)) {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % flatItems.length);
      } else if (e.key === "ArrowUp" || (e.key === "Tab" && e.shiftKey)) {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + flatItems.length) % flatItems.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        const item = flatItems[selectedIndex];
        handleSelect(item, selectedIndex);
        if (item.actionType !== "copy") {
            router.push(item.url);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [flatItems, selectedIndex, router]);

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
      <div className="flex-1 p-8 text-center text-cream-500/30 font-serif text-2xl flex flex-col items-center justify-center">
        Keşfetmek için yazmaya başlayın...
      </div>
    );
  }

  if (query.trim() !== "" && results.length === 0) {
    return (
      <div className="flex-1 p-8 text-center text-cream-500/30 font-serif text-2xl flex flex-col items-center justify-center">
        Sonuç bulunamadı: <span className="text-cream-500 font-light mt-2">&quot;{query}&quot;</span>
      </div>
    );
  }

  let globalIndex = 0;

  return (
    <div ref={scrollContainerRef} className="flex-1 overflow-y-auto overflow-x-hidden pb-12 custom-scrollbar">
      {query.trim() === "" ? (
        <div className="mb-8">
          <div className="py-4 text-sm font-sans tracking-widest text-cream-500/40 uppercase border-b border-cream-500/10 mb-6">
            Son Aramalar
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
        </div>
      ) : (
        results.map(group => (
          <div key={group.type} className="mb-12 last:mb-0">
            <div className="py-4 text-sm font-sans tracking-widest text-cream-500/40 uppercase border-b border-cream-500/10 mb-6">
              {group.title}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
  const content = (
    <div
      data-selected={isSelected}
      onMouseEnter={onHover}
      className={`group relative flex flex-col h-full rounded-xl overflow-hidden cursor-pointer transition-all duration-500 border ${
        isSelected ? "border-cream-500/30 bg-charcoal-800 scale-[1.02] shadow-2xl" : "border-cream-500/5 bg-charcoal-900/50 hover:bg-charcoal-800 hover:border-cream-500/20"
      }`}
    >
      {item.image && (
        <div className="w-full aspect-4/3 bg-charcoal-950 relative overflow-hidden border-b border-cream-500/10">
          <SmartImage 
            src={item.image} 
            alt={item.title} 
            fill 
            sizes="(max-width: 768px) 100vw, 33vw"
            className={`object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isSelected ? "scale-105" : "group-hover:scale-110"}`}
          />
        </div>
      )}
      
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3 text-cream-500/50">
            <span className="text-[10px] font-sans tracking-widest uppercase bg-charcoal-950 px-2 py-1 rounded">{item.type}</span>
        </div>
        <h4 className={`font-serif text-xl tracking-wide transition-colors ${isSelected ? "text-cream-500" : "text-cream-500/90"}`}>
          {item.title}
        </h4>
        {item.description && (
          <p className="text-sm font-sans text-cream-500/50 mt-2 line-clamp-2">
            {item.description}
          </p>
        )}
      </div>

      <div className={`absolute top-4 right-4 transition-all duration-500 ${isSelected ? "opacity-100 scale-100" : "opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"}`}>
        <div className="w-10 h-10 rounded-full bg-cream-500 text-charcoal-950 flex items-center justify-center shadow-lg">
          <MoveRight size={20} />
        </div>
      </div>
    </div>
  );

  if (item.actionType === "copy" || item.actionType === "blank") {
    return (
      <div onClick={onSelect} className="h-full">
        {content}
      </div>
    );
  }

  // The critical part for proper URLs: rendering a real <Link> element
  return (
    <Link href={item.url} onClick={onSelect} className="block h-full outline-none">
      {content}
    </Link>
  );
}
