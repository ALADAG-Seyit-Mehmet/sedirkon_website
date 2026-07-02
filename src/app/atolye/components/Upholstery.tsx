"use client";

import { useState, useEffect } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { FadeIn } from "@/components/motion/FadeIn";
import { RevealText } from "@/components/motion/RevealText";
import { cn } from "@/lib/utils";

const UPHOLSTERY_IMAGES = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=90&w=1200",
  "https://images.unsplash.com/photo-1590158498218-47230491fb8d?auto=format&fit=crop&q=90&w=1200",
  "https://images.unsplash.com/photo-1611078726588-348b61e2a048?auto=format&fit=crop&q=90&w=1200"
];

export function Upholstery() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto crossfade
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % UPHOLSTERY_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-3xl md:py-section px-md md:px-xl container mx-auto bg-charcoal-950">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl lg:gap-4xl items-center">
        
        {/* Left: Text */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <FadeIn delay={0.2}>
            <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-md block">
              06. Yumuşak Dokunuş
            </span>
          </FadeIn>
          <RevealText 
            text="Döşeme Sanatı" 
            as="h2" 
            className="text-4xl md:text-5xl font-serif text-cream-500 tracking-tight leading-tight mb-xl"
          />
          <FadeIn delay={0.6} duration={1.5}>
            <p className="text-cream-500/70 font-sans text-lg md:text-xl font-light leading-relaxed mb-lg">
              Kumaşın ve derinin iskeletle buluştuğu an, mobilyanın karakterinin tamamlandığı andır. 
              En yüksek kalitedeki kaz tüyü katmanları, HR süngerler ve özel İtalyan ketenleri...
            </p>
            <p className="text-cream-500/70 font-sans text-lg md:text-xl font-light leading-relaxed">
              Döşeme ustalarımız, kumaşın esneme payını bile ezbere bilir; her bir dikişi, 
              kumaşın damarlarına paralel olarak milimetrik bir hassasiyetle çeker.
            </p>
          </FadeIn>
        </div>

        {/* Right: Crossfade Image Gallery */}
        <div className="order-1 lg:order-2">
          <FadeIn delay={0.4} duration={2}>
            <div className="w-full aspect-square md:aspect-[4/3] bg-charcoal-900 relative overflow-hidden">
              {UPHOLSTERY_IMAGES.map((img, idx) => (
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
                    alt={`Döşeme Detayı ${idx + 1}`}
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
