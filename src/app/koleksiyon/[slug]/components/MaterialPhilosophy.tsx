"use client";

import { useState } from "react";
import { Product } from "@/lib/data";
import { SmartImage } from "@/components/ui/SmartImage";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";
import { cn } from "@/lib/utils";

interface MaterialPhilosophyProps {
  product: Product;
}

export function MaterialPhilosophy({ product }: MaterialPhilosophyProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!product.materials || product.materials.length === 0) return null;

  return (
    <section className="w-full py-section px-md md:px-xl container mx-auto bg-charcoal-950">
      
      {/* Title */}
      <div className="mb-2xl md:mb-4xl text-center">
        <RevealText 
          text="Materyal Felsefesi" 
          as="h2" 
          className="text-2xl md:text-4xl font-serif text-cream-500 tracking-widest uppercase"
        />
        <FadeIn delay={0.4}>
          <div className="w-12 h-[1px] bg-bronze-500 mt-md mx-auto" />
        </FadeIn>
      </div>

      <div className="flex flex-col lg:flex-row gap-2xl lg:gap-4xl items-center">
        
        {/* Left: Premium Crossfade Image Area */}
        <div className="w-full lg:w-2/3">
          <FadeIn delay={0.6} duration={1.5}>
            <div className="w-full aspect-square md:aspect-[4/3] bg-charcoal-900 relative overflow-hidden">
              {product.images.map((img, idx) => (
                <div
                  key={img}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                    activeIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                  )}
                >
                  <SmartImage
                    src={img}
                    alt={`${product.title} Varyasyon ${idx + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right: Editorial Material Selection */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center">
          <FadeIn delay={0.8} duration={1.5}>
            <p className="text-cream-500/50 font-sans text-lg font-light leading-relaxed mb-xl">
              Tasarımın ruhu, seçilen malzemenin karakteriyle tamamlanır. 
              Dokunarak hissedeceğiniz yüzeyler için en iyisini seçin.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-lg">
            {product.materials.map((mat, idx) => {
              // We map materials to images. If there are fewer images than materials, we cap the index.
              const targetIndex = idx < product.images.length ? idx : product.images.length - 1;
              const isActive = activeIndex === targetIndex;

              return (
                <FadeIn key={mat.id} delay={1.0 + (idx * 0.1)} duration={1.2}>
                  <button
                    onClick={() => setActiveIndex(targetIndex)}
                    className="group flex items-center gap-md w-full text-left"
                  >
                    {/* Material Color Circle */}
                    <div 
                      className={cn(
                        "w-12 h-12 rounded-full border transition-all duration-500 flex-shrink-0",
                        isActive ? "border-bronze-500 scale-110" : "border-cream-500/20 group-hover:border-cream-500/50"
                      )}
                      style={{ backgroundColor: mat.colorCode }}
                    />
                    
                    {/* Material Details */}
                    <div className="flex flex-col">
                      <span className={cn(
                        "font-serif text-xl tracking-wide transition-colors duration-500",
                        isActive ? "text-cream-500" : "text-cream-500/50 group-hover:text-cream-500/80"
                      )}>
                        {mat.name}
                      </span>
                      <span className="text-bronze-500/70 font-sans text-xs tracking-[0.2em] uppercase mt-1">
                        {mat.type === "wood" ? "Ahşap" : mat.type === "metal" ? "Metal" : mat.type === "fabric" ? "Kumaş" : "Deri"}
                      </span>
                    </div>
                  </button>
                </FadeIn>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
}
