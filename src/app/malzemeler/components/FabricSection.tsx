"use client";

import { useState, useEffect } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { FadeIn } from "@/components/motion/FadeIn";
import { RevealText } from "@/components/motion/RevealText";
import { cn } from "@/lib/utils";

const FABRIC_SLIDES = [
  {
    title: "İpek Kadife",
    desc: "Işığın açısına göre değişen yansımalarıyla mekana derinlik ve ultra lüks bir dokunuş katar.",
    img: "/textures/velvet_new.png"
  },
  {
    title: "Troya Bukle",
    desc: "Hacimli ve kıvrımlı iplik yapısıyla benzersiz bir dokunma hissi uyandırır. Hem sıcak hem de modern bir estetik.",
    img: "/textures/boucle_new.png"
  },
  {
    title: "Premium Keten",
    desc: "Doğal liflerin nefes alan yapısıyla en doğal dokunuşu sunar. Zaman geçtikçe güzelleşen organik bir doku.",
    img: "/textures/linen_new.png"
  }
];

export function FabricSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FABRIC_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-3xl md:py-section px-md md:px-xl container mx-auto bg-charcoal-950 border-t border-cream-500/10">
      
      <div className="text-center mb-4xl">
        <FadeIn delay={0.2}>
          <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-md block">
            Materyal #02
          </span>
        </FadeIn>
        <RevealText 
          text="Kumaş Koleksiyonu" 
          as="h2" 
          className="text-4xl md:text-6xl font-serif text-cream-500 tracking-tight leading-none justify-center"
        />
        <FadeIn delay={0.4}>
          <p className="mt-6 text-cream-500/60 font-sans text-lg max-w-2xl mx-auto">
            Görsel bir şölenden çok daha fazlası. Her bir dokunuşta lüksü hissettiren özenle seçilmiş premium kumaşlarımız.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-md lg:gap-lg items-center max-w-6xl mx-auto">
        
        {/* Left: Interactive/Animated Text */}
        <div className="lg:col-span-7 flex flex-col gap-xl">
          {FABRIC_SLIDES.map((slide, idx) => (
            <div 
              key={idx} 
              className={cn(
                "transition-all duration-700 border-l-2 pl-6 py-2 cursor-pointer",
                activeIndex === idx 
                  ? "border-bronze-500 opacity-100" 
                  : "border-cream-500/10 opacity-30 hover:opacity-60"
              )}
              onClick={() => setActiveIndex(idx)}
            >
              <h3 className="text-2xl font-serif text-cream-100 tracking-wide mb-2">
                {slide.title}
              </h3>
              <p className={cn(
                "text-cream-500/70 font-sans text-base font-light transition-all duration-700 overflow-hidden",
                activeIndex === idx ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
              )}>
                {slide.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Right: Crossfade Gallery */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <FadeIn delay={0.4} duration={2} className="w-full max-w-[420px]">
            <div className="w-full aspect-square bg-charcoal-900 relative overflow-hidden rounded-2xl border border-cream-500/10 shadow-2xl">
              {FABRIC_SLIDES.map((slide, idx) => (
                <div
                  key={slide.title}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-[2s] ease-in-out",
                    activeIndex === idx ? "opacity-100 z-10 scale-105" : "opacity-0 z-0 scale-100"
                  )}
                  style={{ transitionProperty: "opacity, transform" }}
                >
                  <SmartImage
                    src={slide.img}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none" />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

      </div>

    </section>
  );
}
