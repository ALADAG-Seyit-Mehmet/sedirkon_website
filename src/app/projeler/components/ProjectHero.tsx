import { SmartImage } from "@/components/ui/SmartImage";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";

export function ProjectHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-charcoal-950 flex flex-col justify-end pb-24 md:pb-32">
      
      {/* Background Cinematic Interior */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent z-10 pointer-events-none" />
        <div className="w-full h-full animate-breathe origin-center">
          <SmartImage 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=90&w=2000"
            alt="Lüks Villa İç Mekan"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Cinematic Text Overlay */}
      <div className="relative z-20 container mx-auto px-md md:px-xl">
        <div className="max-w-5xl">
          <FadeIn delay={0.2}>
            <span className="text-bronze-500 font-sans text-xs tracking-[0.4em] uppercase block mb-md">
              Mimari Portfolyo
            </span>
          </FadeIn>
          <RevealText 
            text="Mekânların Karakterini" 
            as="h1" 
            className="text-4xl md:text-7xl lg:text-8xl font-serif text-cream-500 tracking-tight leading-none"
          />
          <RevealText 
            text="Şekillendiriyoruz" 
            as="h1" 
            delay={0.2}
            className="text-4xl md:text-7xl lg:text-8xl font-serif text-cream-500 tracking-tight leading-none mt-2"
          />
          
          <FadeIn delay={1.2} duration={2}>
            <p className="mt-xl text-cream-500/70 font-sans text-xl md:text-2xl font-light tracking-wide max-w-2xl leading-relaxed">
              Her proje yalnızca mobilya yerleşimi değil; atmosferin, ışığın ve yaşamın yeniden tasarlanmasıdır.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 right-12 md:right-24 z-20 hidden md:block">
        <FadeIn delay={2.5} duration={2}>
          <div className="flex flex-col items-center gap-sm">
            <span className="text-cream-500/30 font-sans text-xs tracking-widest uppercase [writing-mode:vertical-lr] rotate-180">Keşfet</span>
            <div className="w-[1px] h-16 bg-cream-500/10 overflow-hidden relative">
              <div className="w-full h-full bg-cream-500 absolute top-0 left-0 origin-top animate-scroll-line" />
            </div>
          </div>
        </FadeIn>
      </div>

    </section>
  );
}
