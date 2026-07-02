"use client";

import { RevealText } from "@/components/motion/RevealText";
import { RevealImage } from "@/components/motion/RevealImage";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-charcoal-950">
      
      {/* Background Video Setup */}
      <div className="absolute inset-0 z-0">
        <RevealImage 
          duration={4.0} 
          scrollTrigger={false} 
          className="absolute inset-0 w-full h-full"
          aspectRatio="aspect-auto"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full will-change-transform"
            poster="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2532&auto=format&fit=crop"
          >
            {/* Generic placeholder woodworking video from coverr/pexels (can be replaced by real project asset) */}
            <source src="https://cdn.coverr.co/videos/coverr-woodworking-in-a-workshop-5244/1080p.mp4" type="video/mp4" />
          </video>
        </RevealImage>
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-charcoal-950/50 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-md md:px-xl flex flex-col items-center text-center">
        <RevealText 
          text="Ahşabın Ruhu," 
          as="h1" 
          duration={1.5} 
          delay={0.8} 
          scrollTrigger={false}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream-500 tracking-tight justify-center"
        />
        
        <RevealText 
          text="Ustanın İzi" 
          as="h1" 
          duration={1.5} 
          delay={1.2} 
          scrollTrigger={false}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream-500 tracking-tight justify-center mt-xs md:mt-sm"
        />

        <FadeIn delay={1.8} duration={1.5} scrollTrigger={false}>
          <p className="mt-lg text-cream-500/80 max-w-2xl text-lg md:text-xl font-sans font-light leading-relaxed mx-auto text-center">
            El işçiliğiyle şekillenen,<br className="hidden md:block" /> zamansız yaşam alanları.
          </p>
        </FadeIn>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-md mt-2xl">
          <FadeIn delay={2.2} duration={1.2} scrollTrigger={false}>
            <Button
              variant="outline"
              className="border-cream-500/30 text-cream-500 hover:bg-cream-500 hover:text-charcoal-950 font-sans tracking-widest text-xs uppercase px-10 py-6 transition-all duration-500"
            >
              Koleksiyonu Keşfet
            </Button>
          </FadeIn>

          <FadeIn delay={2.4} duration={1.2} scrollTrigger={false}>
            <Button
              variant="outline"
              className="border-transparent text-cream-500 hover:text-white hover:bg-white/5 font-sans tracking-widest text-xs uppercase px-10 py-6 transition-all duration-500"
            >
              Atölyemizi İncele
            </Button>
          </FadeIn>
        </div>

        <FadeIn delay={2.8} duration={1} scrollTrigger={false}>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 overflow-hidden mx-auto hidden md:block">
            <div className="w-px h-xl bg-cream-500/20 mx-auto relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-cream-500 origin-top animate-scroll-indicator" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

