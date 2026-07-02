"use client";

import { useState, useEffect } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { FadeIn } from "@/components/motion/FadeIn";
import { RevealText } from "@/components/motion/RevealText";
import { cn } from "@/lib/utils";

const LINEN_IMAGES = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=90&w=1200",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=90&w=1200"
];

export function LinenSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % LINEN_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-3xl md:py-section px-md md:px-xl container mx-auto bg-charcoal-950">
      
      <div className="text-center mb-4xl">
        <FadeIn delay={0.2}>
          <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-md block">
            Materyal #03
          </span>
        </FadeIn>
        <RevealText 
          text="Doğal Keten" 
          as="h2" 
          className="text-4xl md:text-6xl font-serif text-cream-500 tracking-tight leading-none"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl lg:gap-4xl items-center max-w-6xl mx-auto">
        
        {/* Left: Text */}
        <div className="flex flex-col gap-lg">
          <FadeIn delay={0.6} duration={1.5}>
            <p className="text-cream-500/70 font-sans text-xl md:text-2xl font-light leading-relaxed">
              Konforun en doğal hali. Sentetik hiçbir iplik içermeyen, tamamen keten bitkisinden elde edilen dokuma.
            </p>
          </FadeIn>
          
          <div className="mt-xl grid grid-cols-2 gap-xl">
            <FadeIn delay={0.8} duration={1.5}>
              <h4 className="text-cream-500 font-sans tracking-widest text-xs uppercase mb-sm">Nefes Alabilirlik</h4>
              <p className="text-cream-500/50 font-sans text-base font-light">
                Hava akışına izin verir. Yazın serin, kışın dengeli bir temas yüzeyi sunar.
              </p>
            </FadeIn>
            <FadeIn delay={1.0} duration={1.5}>
              <h4 className="text-cream-500 font-sans tracking-widest text-xs uppercase mb-sm">Uzun Ömür</h4>
              <p className="text-cream-500/50 font-sans text-base font-light">
                Pamuktan üç kat daha dayanıklıdır. Yıkandıkça ve kullanıldıkça yumuşar, güzelleşir.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Right: Crossfade Gallery */}
        <div className="w-full">
          <FadeIn delay={0.4} duration={2}>
            <div className="w-full aspect-[4/3] bg-charcoal-900 relative overflow-hidden">
              {LINEN_IMAGES.map((img, idx) => (
                <div
                  key={img}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-[2s] ease-in-out",
                    activeIndex === idx ? "opacity-100 z-10 scale-105" : "opacity-0 z-0 scale-100"
                  )}
                  style={{ transitionProperty: "opacity, transform" }}
                >
                  <SmartImage
                    src={img}
                    alt={`Doğal Keten Detayı ${idx + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

      </div>

    </section>
  );
}
