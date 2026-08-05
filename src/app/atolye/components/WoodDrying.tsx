import { SmartImage } from "@/components/ui/SmartImage";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";
import { MaskReveal } from "@/components/motion/MaskReveal";

export function WoodDrying() {
  return (
    <section className="w-full py-4xl md:py-section px-md md:px-xl container mx-auto bg-charcoal-950 border-t border-cream-500/10">
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-md md:gap-lg items-center">
        
        {/* Left: Image */}
        <div className="md:col-span-5 flex items-center justify-center order-1 md:order-1">
          <MaskReveal direction="left-to-right" duration={1.8} className="w-full max-w-[420px]">
            <div className="w-full aspect-square bg-charcoal-900 relative rounded-2xl overflow-hidden border border-cream-500/10 shadow-2xl">
              <SmartImage 
                src="/images/wood_drying_planks.png"
                alt="Doğal kurutma ahşaplar"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover scale-105 hover:scale-100 transition-transform duration-[3s] ease-out"
              />
            </div>
          </MaskReveal>
        </div>

        {/* Right: Text */}
        <div className="md:col-span-7 flex flex-col justify-center order-2 md:order-2 pl-0 lg:pl-12">
          <FadeIn delay={0.2}>
            <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-md block">
              02. Sabrın Meyvesi
            </span>
          </FadeIn>
          <RevealText 
            text="Doğal Kurutma" 
            as="h2" 
            className="text-4xl md:text-6xl font-serif text-cream-500 tracking-tight leading-none mb-6 md:mb-8"
          />
          <FadeIn delay={0.6} duration={1.5}>
            <p className="text-cream-500/70 font-sans text-lg md:text-xl font-light leading-relaxed mb-6">
              Seçilen kütükler, atölyemizin açık alanlarında mevsimlerin geçişine şahitlik ederek kurur. 
              Ahşabın içindeki nemin doğal bir hızda buharlaşması, mobilyanın yıllar sonra bile çatlamasını 
              ve formunu kaybetmesini engeller. Bu süreç, bazen yıllar sürer.
            </p>
            <p className="text-cream-500/70 font-sans text-lg md:text-xl font-light leading-relaxed italic">
              "Fırınlanmış ahşap hızlıdır ama doğal kurutma ruhu korur."
            </p>
          </FadeIn>
        </div>

      </div>

    </section>
  );
}
