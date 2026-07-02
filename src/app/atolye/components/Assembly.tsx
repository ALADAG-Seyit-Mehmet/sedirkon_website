import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";

export function Assembly() {
  return (
    <section className="w-full py-3xl md:py-section px-md md:px-xl container mx-auto bg-charcoal-950 flex flex-col items-center">
      
      <div className="text-center mb-xl">
        <FadeIn delay={0.2}>
          <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-md block">
            05. Bütünleşme
          </span>
        </FadeIn>
        <RevealText 
          text="Bir Araya Geliş" 
          as="h2" 
          className="text-4xl md:text-5xl font-serif text-cream-500 tracking-widest uppercase mb-sm"
        />
      </div>

      <FadeIn delay={0.6} duration={1.5} className="w-full max-w-3xl text-center mb-2xl">
        <p className="text-cream-500/70 font-sans text-lg md:text-xl font-light leading-relaxed">
          Tüm parçalar ustalarımız tarafından tutkallanarak, vidalanarak veya geleneksel geçme yöntemleriyle birleştirilir. 
          Montaj, mobilyanın iskeletinin ilk kez ayağa kalktığı ve ruh kazandığı o sihirli andır.
        </p>
      </FadeIn>

      <FadeIn delay={0.8} duration={2} className="w-full max-w-5xl">
        {/* Minimal Assembly Diagram Representation */}
        <div className="w-full aspect-[21/9] border border-cream-500/10 flex items-center justify-center relative overflow-hidden bg-charcoal-900">
          
          <div className="absolute inset-0 bg-[linear-gradient(rgba(245,242,235,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(245,242,235,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          <div className="flex items-center gap-xl relative z-10">
            <div className="w-24 h-4 border border-cream-500/30" />
            <div className="w-4 h-4 rounded-full bg-bronze-500/50" />
            <div className="w-32 h-32 border-2 border-cream-500/30 rotate-45" />
            <div className="w-4 h-4 rounded-full bg-bronze-500/50" />
            <div className="w-24 h-4 border border-cream-500/30" />
          </div>

          <p className="absolute bottom-4 right-6 text-cream-500/20 font-sans text-xs tracking-[0.4em] uppercase">
            STRUCTURAL INTEGRITY
          </p>

        </div>
      </FadeIn>

    </section>
  );
}
