import { SmartImage } from "@/components/ui/SmartImage";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";
import { MaskReveal } from "@/components/motion/MaskReveal";

export function WoodSelection() {
  return (
    <section className="w-full py-4xl md:py-section px-md md:px-xl container mx-auto bg-charcoal-950">
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2xl md:gap-4xl items-center">
        
        {/* Left: Text */}
        <div className="md:col-span-5 flex flex-col justify-center order-2 md:order-1">
          <FadeIn delay={0.2}>
            <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-md block">
              01. Kaynağa Saygı
            </span>
          </FadeIn>
          <RevealText 
            text="Ahşabın Seçimi" 
            as="h2" 
            className="text-4xl md:text-6xl font-serif text-cream-500 tracking-tight leading-none mb-xl"
          />
          <FadeIn delay={0.6} duration={1.5}>
            <p className="text-cream-500/70 font-sans text-lg md:text-xl font-light leading-relaxed">
              En iyi mobilya, en doğru ağacı seçmekle başlar. Sürdürülebilir ormanlardan elde edilen 
              premium kalite meşe ve ceviz kütüklerini, damar yapılarına ve karakterlerine göre özenle ayırıyoruz.
              Ağacın anlattığı hikayeyi dinliyoruz.
            </p>
          </FadeIn>
        </div>

        {/* Right: Macro Image */}
        <div className="md:col-span-7 order-1 md:order-2">
          <MaskReveal direction="left-to-right" duration={1.8}>
            <div className="w-full aspect-[4/5] md:aspect-square bg-charcoal-900 relative">
              <SmartImage 
                src="https://images.unsplash.com/photo-1558098329-a11cff621064?auto=format&fit=crop&q=90&w=1600"
                alt="Premium ahşap damarları"
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
