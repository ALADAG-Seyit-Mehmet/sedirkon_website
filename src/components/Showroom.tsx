"use client";

import dynamic from "next/dynamic";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";

// Lazy load the heavy 3D scene so it doesn't block the main thread / LCP
const Scene = dynamic(() => import("./3d/ShowroomScene"), {
  ssr: false, // Must be false for R3F
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <span className="text-cream-500/50 font-sans tracking-widest text-sm uppercase animate-pulse">
        Showroom Yükleniyor...
      </span>
    </div>
  ),
});

export default function Showroom() {
  return (
    <section 
      id="koleksiyon" 
      className="relative w-full min-h-screen md:h-screen bg-charcoal-900 flex flex-col md:flex-row items-center overflow-hidden"
    >
      {/* 3D Canvas Area */}
      <div className="w-full h-[60vh] md:h-screen md:w-2/3 relative order-2 md:order-1 cursor-grab active:cursor-grabbing">
        <Scene />
      </div>

      {/* Typography Overlay / Text Section */}
      <div className="w-full md:w-1/3 py-xl md:py-0 md:h-screen flex flex-col justify-center px-md md:px-xl z-10 order-1 md:order-2 bg-charcoal-900/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
        <RevealText 
          text="Minimalist Çizgi," 
          as="h2" 
          duration={1.2} 
          className="text-3xl md:text-5xl font-serif text-cream-500 tracking-tight"
        />
        <RevealText 
          text="Maksimalist Dokunuş" 
          as="h2" 
          duration={1.2} 
          delay={0.4} 
          className="text-3xl md:text-5xl font-serif text-cream-500 tracking-tight mt-xs"
        />
        
        <FadeIn delay={0.8} duration={1.5} className="mt-lg">
          <p className="text-cream-500/80 font-sans font-light leading-relaxed">
            Doğal ceviz dokusu ve endüstriyel mat siyah metalin eşsiz buluşması. 
            Mekana ruh katan bu seri, heykelsi duruşuyla sıradanlığa meydan okuyor.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
