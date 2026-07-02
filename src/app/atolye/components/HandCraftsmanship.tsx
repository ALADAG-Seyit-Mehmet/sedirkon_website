import { SmartImage } from "@/components/ui/SmartImage";
import { FadeIn } from "@/components/motion/FadeIn";
import { RevealText } from "@/components/motion/RevealText";

export function HandCraftsmanship() {
  return (
    <section className="w-full py-4xl md:py-section px-md md:px-xl bg-charcoal-900">
      <div className="container mx-auto">
        
        {/* Title Centered */}
        <div className="text-center mb-4xl">
          <FadeIn delay={0.2}>
            <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-md block">
              04. Atölyenin Kalbi
            </span>
          </FadeIn>
          <RevealText 
            text="İnsan Eli," 
            as="h2" 
            className="text-5xl md:text-7xl font-serif text-cream-500 tracking-tight leading-none"
          />
          <RevealText 
            text="Mükemmelliğin İmzası" 
            as="h2" 
            delay={0.2}
            className="text-5xl md:text-7xl font-serif text-cream-500 tracking-tight leading-none"
          />
        </div>

        {/* Emotion Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl md:gap-4xl">
          
          <FadeIn delay={0.4} duration={2} className="md:mt-24">
            <div className="w-full aspect-[3/4] bg-charcoal-950 relative overflow-hidden group">
              <SmartImage 
                src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=90&w=800"
                alt="Usta eli detay"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <p className="mt-md text-cream-500/50 font-sans text-sm tracking-widest uppercase text-center">Yüzey İşleme</p>
          </FadeIn>

          <FadeIn delay={0.6} duration={2}>
            <div className="w-full aspect-[3/4] bg-charcoal-950 relative overflow-hidden group">
              <SmartImage 
                src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=90&w=800"
                alt="Zımpara ve cila"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <p className="mt-md text-cream-500/50 font-sans text-sm tracking-widest uppercase text-center">Form Verme</p>
          </FadeIn>

          <FadeIn delay={0.8} duration={2} className="md:mt-48">
            <div className="w-full aspect-[3/4] bg-charcoal-950 relative overflow-hidden group">
              <SmartImage 
                src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=90&w=800"
                alt="El aletleri"
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
