import { SmartImage } from "@/components/ui/SmartImage";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-charcoal-950 flex flex-col justify-center items-center text-center">
      
      {/* Background Macro Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-charcoal-950/50 z-10 pointer-events-none" />
        <div className="w-full h-full animate-breathe origin-center">
          <SmartImage 
            src="https://images.unsplash.com/photo-1546593064-053d21199be1?auto=format&fit=crop&q=90&w=2000"
            alt="Makro Ahşap Dokusu"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Cinematic Text Overlay */}
      <div className="relative z-20 container mx-auto px-md md:px-xl">
        <RevealText 
          text="Malzeme," 
          as="h1" 
          className="text-5xl md:text-8xl lg:text-9xl font-serif text-cream-500 tracking-tighter leading-none"
        />
        <RevealText 
          text="Kalitenin İlk Adımıdır" 
          as="h1" 
          delay={0.2}
          className="text-5xl md:text-8xl lg:text-9xl font-serif text-cream-500 tracking-tighter leading-none"
        />
        
        <FadeIn delay={1.2} duration={2}>
          <p className="mt-xl md:mt-2xl text-cream-500/70 font-sans text-xl md:text-2xl font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
            Her yüzey, her doku ve her lif; uzun yıllar yaşayacak bir ürünün temelini oluşturur. 
            Doğanın sunduğu en asil materyalleri yakından keşfedin.
          </p>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <FadeIn delay={2.5} duration={2}>
          <div className="w-[1px] h-24 bg-cream-500/10 overflow-hidden relative">
            <div className="w-full h-full bg-cream-500 absolute top-0 left-0 origin-top animate-scroll-line" />
          </div>
        </FadeIn>
      </div>

    </section>
  );
}
