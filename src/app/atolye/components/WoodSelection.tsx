import { SmartImage } from "@/components/ui/SmartImage";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";
import { MaskReveal } from "@/components/motion/MaskReveal";

export function WoodSelection() {
  return (
    <section className="w-full py-16 md:py-32 lg:py-section container mx-auto px-4 md:px-8 lg:px-xl bg-charcoal-950">
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-md md:gap-lg items-center">
        
        {/* Left: Text */}
        <div className="md:col-span-7 flex flex-col justify-center order-2 md:order-1 pr-0 lg:pr-12">
          <FadeIn delay={0.2}>
            <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-md block">
              01. Kaynağa Saygı
            </span>
          </FadeIn>
          <RevealText 
            text="Ahşabın Seçimi" 
            as="h2" 
            className="text-4xl md:text-6xl font-serif text-cream-500 tracking-tight leading-none mb-6 md:mb-8"
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
        <div className="md:col-span-5 flex items-center justify-center order-1 md:order-2">
          <MaskReveal direction="right-to-left" duration={1.8} className="w-full max-w-105">
            <div className="w-full aspect-square bg-charcoal-900 relative rounded-2xl overflow-hidden border border-cream-500/10 shadow-2xl">
              <SmartImage 
                src="/images/wood_selection_master.png"
                alt="Sedirkon Master Wood Selection"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover scale-105 hover:scale-100 transition-transform duration-[3s] ease-out"
              />
            </div>
          </MaskReveal>
        </div>

      </div>

    </section>
  );
}
