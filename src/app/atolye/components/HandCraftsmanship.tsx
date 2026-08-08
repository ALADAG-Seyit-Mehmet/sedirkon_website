import { SmartImage } from "@/components/ui/SmartImage";
import { FadeIn } from "@/components/motion/FadeIn";
import { RevealText } from "@/components/motion/RevealText";

export function HandCraftsmanship() {
  return (
    <section className="w-full py-16 md:py-32 lg:py-section px-4 md:px-8 lg:px-xl bg-charcoal-900">
      <div className="container mx-auto">
        
        {/* Title Centered */}
        <div className="text-center mb-12 md:mb-16">
          <FadeIn delay={0.2}>
            <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-md block">
              04. Atölyenin Kalbi
            </span>
          </FadeIn>
          <RevealText 
            text="İnsan Eli," 
            as="h2" 
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-cream-500 tracking-tight leading-none"
          />
          <RevealText 
            text="Mükemmelliğin İmzası" 
            as="h2" 
            delay={0.2}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-cream-500 tracking-tight leading-none"
          />
        </div>

        {/* Emotion Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl md:gap-4xl">
          
          <FadeIn delay={0.4} duration={2} className="md:mt-24">
            <div className="w-full aspect-3/4 bg-charcoal-950 relative overflow-hidden group">
              <SmartImage 
                src="/images/hand_craft_sanding.png"
                alt="Usta eli zımpara detayı"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <p className="mt-md text-cream-500/50 font-sans text-sm tracking-widest uppercase text-center">Yüzey İşleme</p>
          </FadeIn>

          <FadeIn delay={0.6} duration={2}>
            <div className="w-full aspect-3/4 bg-charcoal-950 relative overflow-hidden group">
              <SmartImage 
                src="/images/hand_craft_oiling.png"
                alt="Iskarpela ile detay işleme"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <p className="mt-md text-cream-500/50 font-sans text-sm tracking-widest uppercase text-center">Form Verme</p>
          </FadeIn>

          <FadeIn delay={0.8} duration={2} className="md:mt-48">
            <div className="w-full aspect-3/4 bg-charcoal-950 relative overflow-hidden group">
              <SmartImage 
                src="/images/hand_craft_chisel_v2.png"
                alt="Ahşaba yağ cilası uygulama"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <p className="mt-md text-cream-500/50 font-sans text-sm tracking-widest uppercase text-center">Geleneksel Aletler</p>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
