import { SmartImage } from "@/components/ui/SmartImage";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";
import { MaskReveal } from "@/components/motion/MaskReveal";

export function WalnutSection() {
  return (
    <section className="w-full py-[15vh] px-md md:px-xl container mx-auto bg-charcoal-950 border-t border-cream-500/10">
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2xl md:gap-4xl items-center">
        
        {/* Left: Text */}
        <div className="md:col-span-5 flex flex-col justify-center order-2 md:order-1">
          <FadeIn delay={0.2}>
            <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-md block">
              Materyal #01
            </span>
          </FadeIn>
          <RevealText 
            text="Amerikan Cevizi" 
            as="h2" 
            className="text-4xl md:text-6xl font-serif text-cream-500 tracking-tight leading-none mb-xl"
          />
          
          <div className="flex flex-col gap-lg">
            <FadeIn delay={0.6} duration={1.5}>
              <h3 className="text-cream-500 font-sans tracking-widest text-xs uppercase mb-xs">Karakter</h3>
              <p className="text-cream-500/70 font-sans text-lg font-light leading-relaxed">
                Koyu ve sıcak çikolata tonları, zamanla açılıp altın sarısı bir alt tona kavuşur. Yaşlandıkça güzelleşen nadir ağaçlardandır.
              </p>
            </FadeIn>
            <FadeIn delay={0.8} duration={1.5}>
              <h3 className="text-cream-500 font-sans tracking-widest text-xs uppercase mb-xs">Doku</h3>
              <p className="text-cream-500/70 font-sans text-lg font-light leading-relaxed">
                Dalgalı ve zengin damar yapısı, her mobilyayı tamamen benzersiz (one-of-a-kind) yapar.
              </p>
            </FadeIn>
            <FadeIn delay={1.0} duration={1.5}>
              <h3 className="text-cream-500 font-sans tracking-widest text-xs uppercase mb-xs">Dayanıklılık</h3>
              <p className="text-cream-500/70 font-sans text-lg font-light leading-relaxed">
                Çarpma ve çizilmelere karşı yüksek direnç gösteren sert ağaç sınıfındadır.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Right: Macro Image */}
        <div className="md:col-span-7 order-1 md:order-2">
          <MaskReveal direction="right-to-left" duration={1.8}>
            <div className="w-full aspect-[4/5] md:aspect-square bg-charcoal-900 relative">
              <SmartImage 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=1200"
                alt="Amerikan Cevizi Dokusu"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover scale-105 hover:scale-100 transition-transform duration-[3s] ease-out"
              />
            </div>
          </MaskReveal>
        </div>

      </div>

    </section>
  );
}
