"use client";

import { useEffect, useState } from "react";
import { TransitionLink as Link } from "@/components/motion/TransitionLink";
import { SmartImage } from "@/components/ui/SmartImage";
import { Product, MOCK_PRODUCTS } from "@/lib/data";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";

const LOCAL_STORAGE_KEY = "sedirkon_recently_viewed";

interface RecentlyViewedProps {
  currentProductId: string;
}

export function RecentlyViewed({ currentProductId }: RecentlyViewedProps) {
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    let viewedIds: string[] = stored ? JSON.parse(stored) : [];
    viewedIds = [currentProductId, ...viewedIds.filter(id => id !== currentProductId)];
    viewedIds = viewedIds.slice(0, 4);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(viewedIds));

    const displayIds = viewedIds.filter(id => id !== currentProductId);
    const productsToDisplay = displayIds
      .map(id => MOCK_PRODUCTS.find(p => p.id === id))
      .filter((p): p is Product => p !== undefined);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRecentProducts(productsToDisplay);
  }, [currentProductId]);

  if (recentProducts.length === 0) return null;

  return (
    <section className="w-full py-section px-md md:px-xl container mx-auto bg-charcoal-950 border-t border-cream-500/10">
      <div className="mb-2xl md:mb-4xl flex flex-col items-center text-center">
        <RevealText 
          text="Son İnceledikleriniz" 
          as="h2" 
          className="text-2xl md:text-3xl font-serif text-cream-500 tracking-widest uppercase" 
        />
        <FadeIn delay={0.4}>
          <div className="w-12 h-[1px] bg-bronze-500 mt-md mx-auto" />
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-xl md:gap-2xl">
        {recentProducts.map((product, idx) => (
          <FadeIn key={product.id} delay={0.2 + (idx * 0.1)} duration={1.5}>
            <Link href={`/koleksiyon/${product.slug}`} className="group block">
              <div className="w-full aspect-[3/4] bg-charcoal-900 relative overflow-hidden">
                <SmartImage 
                  src={product.images[0]} 
                  alt={product.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                />
                <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/20 transition-colors duration-700 pointer-events-none" />
              </div>
              <div className="mt-md text-center">
                <h4 className="font-serif text-xl md:text-2xl text-cream-500 tracking-wide group-hover:text-bronze-500 transition-colors duration-500">
                  {product.title}
                </h4>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
