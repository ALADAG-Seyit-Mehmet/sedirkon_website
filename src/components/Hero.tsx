"use client";

import { RevealText } from "@/components/motion/RevealText";
import { RevealImage } from "@/components/motion/RevealImage";
import { FadeIn } from "@/components/motion/FadeIn";
import { buttonVariants } from "@/components/ui/button";
import { TransitionLink } from "@/components/motion/TransitionLink";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col md:flex-row md:h-dvh md:justify-center md:items-center overflow-hidden bg-charcoal-950 min-h-dvh pt-20 md:pt-0">
      
      {/* Background / Top Image Setup */}
      <div className="relative w-full aspect-video md:aspect-auto md:absolute md:inset-0 md:z-0 shrink-0">
        <RevealImage 
          duration={4.0} 
          scrollTrigger={false} 
          className="absolute inset-0 w-full h-full"
          aspectRatio="aspect-auto"
        >
          <SmartImage
            src="/anasayfa_arkaplan.jpg"
            alt="Sedirkon Ana Sayfa Arka Plan"
            priority
            quality={100}
            sizes="100vw"
            className="object-contain md:object-cover md:object-center w-full h-full will-change-transform"
          />
        </RevealImage>
        {/* Dark cinematic overlay - Only on desktop or gradient on mobile */}
        <div className="absolute inset-0 bg-charcoal-950/10 md:bg-charcoal-950/50 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 lg:px-xl flex flex-col items-center text-center flex-1 justify-center py-8 md:py-0">
        <RevealText 
          text="Ahşabın Ruhu," 
          as="h1" 
          duration={1.5} 
          delay={0.8} 
          scrollTrigger={false}
          className="text-4xl md:text-6xl lg:text-8xl font-serif text-cream-500 tracking-tight justify-center"
        />
        
        <RevealText 
          text="Ustanın İzi" 
          as="h1" 
          duration={1.5} 
          delay={1.2} 
          scrollTrigger={false}
          className="text-4xl md:text-6xl lg:text-8xl font-serif text-cream-500 tracking-tight justify-center mt-xs md:mt-sm"
        />

        <FadeIn delay={1.8} duration={1.5} scrollTrigger={false}>
          <p className="mt-lg text-cream-500/80 max-w-2xl text-lg md:text-xl font-sans font-light leading-relaxed mx-auto text-center">
            El işçiliğiyle şekillenen,<br className="hidden md:block" /> zamansız yaşam alanları.
          </p>
        </FadeIn>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-md mt-2xl w-full sm:w-auto">
          <FadeIn delay={2.2} duration={1.2} scrollTrigger={false} className="w-full sm:w-auto">
            <TransitionLink
              href="/koleksiyon"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full sm:w-auto border-cream-500/30 text-cream-500 hover:bg-cream-500 hover:text-charcoal-950 font-sans tracking-widest text-xs uppercase px-10 py-6 transition-all duration-500"
              )}
            >
              Koleksiyonu Keşfet
            </TransitionLink>
          </FadeIn>

          <FadeIn delay={2.4} duration={1.2} scrollTrigger={false} className="w-full sm:w-auto">
            <TransitionLink
              href="/atolye"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full sm:w-auto border-cream-500/30 text-cream-500 hover:bg-cream-500 hover:text-charcoal-950 font-sans tracking-widest text-xs uppercase px-10 py-6 transition-all duration-500"
              )}
            >
              Atölyemizi İncele
            </TransitionLink>
          </FadeIn>
        </div>

      </div>

      {/* Scroll indicator positioned at the bottom of the screen */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 overflow-hidden mx-auto hidden md:block">
        <FadeIn delay={2.8} duration={1} scrollTrigger={false}>
          <div className="w-px h-xl bg-cream-500/20 mx-auto relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-cream-500 origin-top animate-scroll-indicator" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

