import { FadeIn } from "@/components/motion/FadeIn";
import { RevealText } from "@/components/motion/RevealText";

export function WoodDrying() {
  return (
    <section className="w-full py-3xl md:py-section bg-charcoal-900 border-y border-charcoal-800">
      <div className="container mx-auto px-md md:px-xl text-center max-w-4xl">
        
        <FadeIn delay={0.2} duration={2}>
          <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-xl block">
            02. Sabrın Meyvesi
          </span>
        </FadeIn>

        <RevealText 
          text="Zamanla Olgunlaşan" 
          as="h2" 
          className="text-3xl md:text-5xl font-serif text-cream-500 tracking-wide mb-sm"
        />
        <RevealText 
          text="Doğal Kurutma" 
          as="h2" 
          delay={0.2}
          className="text-3xl md:text-5xl font-serif text-cream-500 tracking-wide mb-2xl"
        />

        <FadeIn delay={0.6} duration={2}>
          <p className="text-cream-500/70 font-sans text-xl md:text-2xl font-light leading-relaxed italic">
            &ldquo;Fırınlanmış ahşap hızlıdır ama doğal kurutma ruhu korur.&rdquo;
          </p>
          <div className="w-12 h-[1px] bg-bronze-500 mx-auto my-xl" />
          <p className="text-cream-500/60 font-sans text-lg font-light leading-relaxed">
            Seçilen kütükler, atölyemizin açık alanlarında mevsimlerin geçişine şahitlik ederek kurur. 
            Ahşabın içindeki nemin doğal bir hızda buharlaşması, mobilyanın yıllar sonra bile çatlamasını 
            ve formunu kaybetmesini engeller. Bu süreç, bazen yıllar sürer.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
