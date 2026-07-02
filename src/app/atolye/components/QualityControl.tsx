import { SmartImage } from "@/components/ui/SmartImage";
import { FadeIn } from "@/components/motion/FadeIn";
import { RevealText } from "@/components/motion/RevealText";

export function QualityControl() {
  return (
    <section className="w-full py-4xl md:py-section bg-charcoal-900 border-t border-charcoal-800">
      <div className="container mx-auto px-md md:px-xl">
        
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-xl block">
              07. Son Bakış
            </span>
          </FadeIn>
          
          <RevealText 
            text="Kalite Kontrol" 
            as="h2" 
            className="text-4xl md:text-6xl font-serif text-cream-500 tracking-tight leading-none mb-2xl"
          />

          <FadeIn delay={0.6} duration={1.5} className="mb-4xl">
            <p className="text-cream-500/70 font-sans text-xl md:text-2xl font-light leading-relaxed">
              Atölyeden çıkmadan önce her bir parça, ustabaşı tarafından son kez gözlemlenir.
              Dokunulur, hissedilir ve test edilir. Kusursuzluk, Sedirkon&apos;da bir standart değil, bir zorunluluktur.
            </p>
          </FadeIn>

        </div>

        {/* Cinematic Wide Image */}
        <FadeIn delay={1.0} duration={2}>
          <div className="w-full aspect-21/9 bg-charcoal-950 relative overflow-hidden group">
            <SmartImage 
              src="https://images.unsplash.com/photo-1502672260266-1c1f5166f2dc?auto=format&fit=crop&q=90&w=2000"
              alt="Kalite Kontrol Süreci"
              fill
              sizes="100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out grayscale"
            />
            {/* Subtle center overlay text */}
            <div className="absolute inset-0 flex items-center justify-center bg-charcoal-950/40">
              <span className="text-cream-500/30 font-serif text-4xl md:text-6xl tracking-[0.2em] uppercase select-none opacity-50 group-hover:opacity-100 transition-opacity duration-1000">
                APPROVED
              </span>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
