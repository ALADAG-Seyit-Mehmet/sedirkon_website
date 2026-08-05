import { SmartImage } from "@/components/ui/SmartImage";
import { FadeIn } from "@/components/motion/FadeIn";
import { RevealText } from "@/components/motion/RevealText";

export function QualityControl() {
  return (
    <section className="w-full py-16 md:py-32 lg:py-section bg-charcoal-900 border-t border-charcoal-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-xl">
        
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-6 md:mb-8 block">
              07. Son Bakış
            </span>
          </FadeIn>
          
          <RevealText 
            text="Kalite Kontrol" 
            as="h2" 
            className="text-4xl md:text-6xl font-serif text-cream-500 tracking-tight leading-none mb-8 md:mb-10"
          />

          <FadeIn delay={0.6} duration={1.5} className="mb-12 md:mb-16">
            <p className="text-cream-500/70 font-sans text-xl md:text-2xl font-light leading-relaxed">
              Atölyeden çıkmadan önce her bir parça, ustabaşı tarafından son kez gözlemlenir.
              Dokunulur, hissedilir ve test edilir. Kusursuzluk, Sedirkon&apos;da bir standart değil, bir zorunluluktur.
            </p>
          </FadeIn>

        </div>

        {/* Cinematic Wide Image */}
        <FadeIn delay={1.0} duration={2}>
          <div className="w-full aspect-[21/9] bg-charcoal-950 relative overflow-hidden group">
            <SmartImage 
              src="/images/quality_control_gloves.png"
              alt="Kalite Kontrol Süreci"
              fill
              sizes="100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out"
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
