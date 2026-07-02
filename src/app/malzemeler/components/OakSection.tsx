import { SmartImage } from "@/components/ui/SmartImage";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";
import { MaskReveal } from "@/components/motion/MaskReveal";

export function OakSection() {
  return (
    <section className="w-full py-3xl md:py-section px-md md:px-xl container mx-auto bg-charcoal-950">
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2xl md:gap-4xl items-center">
        
        {/* Left: Macro Image (Opposite of Walnut) */}
        <div className="md:col-span-7">
          <MaskReveal direction="left-to-right" duration={1.8}>
            <div className="w-full aspect-[4/5] md:aspect-square bg-charcoal-900 relative">
              <SmartImage 
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=90&w=1200"
                alt="Meşe Ağacı Dokusu"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover scale-105 hover:scale-100 transition-transform duration-[3s] ease-out"
              />
            </div>
          </MaskReveal>
        </div>

        {/* Right: Text */}
        <div className="md:col-span-5 flex flex-col justify-center">
          <FadeIn delay={0.2}>
            <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-md block">
              Materyal #02
            </span>
          </FadeIn>
          <RevealText 
            text="Beyaz Meşe" 
            as="h2" 
            className="text-4xl md:text-6xl font-serif text-cream-500 tracking-tight leading-none mb-xl"
          />
          
          <div className="flex flex-col gap-lg">
            <FadeIn delay={0.6} duration={1.5}>
              <h3 className="text-cream-500 font-sans tracking-widest text-xs uppercase mb-xs">Karakter</h3>
              <p className="text-cream-500/70 font-sans text-lg font-light leading-relaxed">
                Modern ve ferah. Işığı yansıtan açık tonlarıyla mekana aydınlık ve genişlik hissi katar.
              </p>
            </FadeIn>
            <FadeIn delay={0.8} duration={1.5}>
              <h3 className="text-cream-500 font-sans tracking-widest text-xs uppercase mb-xs">Doku</h3>
              <p className="text-cream-500/70 font-sans text-lg font-light leading-relaxed">
                Düz, sıkı ve paralel uzanan belirgin damarlar. Dokunma hissi son derece pürüzsüzdür.
              </p>
            </FadeIn>
            <FadeIn delay={1.0} duration={1.5}>
              <h3 className="text-cream-500 font-sans tracking-widest text-xs uppercase mb-xs">Dayanıklılık</h3>
              <p className="text-cream-500/70 font-sans text-lg font-light leading-relaxed">
                Ağır yoğunluğu sayesinde neme ve darbelere karşı olağanüstü dirençlidir. Yüzyıllardır gemi inşasında kullanılmasının sebebi budur.
              </p>
            </FadeIn>
          </div>
        </div>

      </div>

    </section>
  );
}
