import { Product } from "@/lib/data";
import { SmartImage } from "@/components/ui/SmartImage";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";

interface HeroSectionProps {
  product: Product;
}

export function HeroSection({ product }: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-charcoal-950 flex items-center justify-center">
      
      {/* Background Breathing Image */}
      <div className="absolute inset-0 w-full h-full">
        {/* Subtle dark overlay for typography readability */}
        <div className="absolute inset-0 bg-charcoal-950/40 z-10" />
        
        <SmartImage 
          src={product.images[0]} 
          alt={product.title}
          fill
          priority
          sizes="100vw"
          // Breathing animation: very slow scale using arbitrary tailwind/css or gsap. We can use tailwind animate-pulse/scale or just a simple class
          className="object-cover animate-breathe"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-md mt-24">
        <FadeIn delay={0.2} duration={1.5}>
          <p className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-lg">
            {product.category.replace("-", " ")} Koleksiyonu
          </p>
        </FadeIn>
        
        <RevealText 
          text={product.title} 
          as="h1" 
          delay={0.4}
          className="text-6xl md:text-8xl lg:text-9xl font-serif text-cream-500 tracking-tighter"
        />
        
        <FadeIn delay={1.2} duration={1.5} className="mt-xl">
          <p className="text-cream-500/70 font-sans text-lg md:text-xl font-light tracking-wide max-w-2xl">
            {product.subtitle}
          </p>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <FadeIn delay={2} duration={2}>
          <div className="w-[1px] h-16 bg-cream-500/20 overflow-hidden relative">
            <div className="w-full h-full bg-cream-500 absolute top-0 left-0 origin-top animate-scroll-line" />
          </div>
        </FadeIn>
      </div>

    </section>
  );
}
