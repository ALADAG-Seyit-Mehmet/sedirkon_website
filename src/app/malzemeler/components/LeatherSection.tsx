import { SmartImage } from "@/components/ui/SmartImage";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";
import { MaskReveal } from "@/components/motion/MaskReveal";

export function LeatherSection() {
  return (
    <section className="w-full py-3xl md:py-section bg-charcoal-900 border-y border-charcoal-800">
      <div className="container mx-auto px-md md:px-xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2xl md:gap-4xl items-center">
          
          <div className="order-2 md:order-1 relative">
            <MaskReveal direction="top-to-bottom" duration={1.5}>
              <div className="w-full aspect-square bg-charcoal-950 relative">
                <SmartImage 
                  src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=90&w=1200"
                  alt="Premium Deri"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </MaskReveal>
          </div>

          <div className="order-1 md:order-2 flex flex-col justify-center">
            <FadeIn delay={0.2}>
              <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-md block">
                Materyal #04
              </span>
            </FadeIn>
            <RevealText 
              text="Anilin Deri" 
              as="h2" 
              className="text-4xl md:text-6xl font-serif text-cream-500 tracking-tight leading-none mb-xl"
            />
            <FadeIn delay={0.6} duration={1.5}>
              <p className="text-cream-500/70 font-sans text-lg md:text-xl font-light leading-relaxed mb-lg">
                Yüzeyi zımparalanmamış, doğallığı tamamen korunmuş üst segment Full Grain deriler. 
                Suni kaplamalar kullanılmadığı için derinin kendi gözenekleri nefes almaya devam eder.
              </p>
              <p className="text-cream-500/70 font-sans text-lg md:text-xl font-light leading-relaxed italic">
                Tıpkı ahşap gibi, hakiki deri de yıllar geçtikçe kendi karakterini bulur ve zenginleşir.
              </p>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
