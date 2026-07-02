import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";
import { SmartImage } from "@/components/ui/SmartImage";

export function MetalGlassSection() {
  return (
    <section className="w-full py-[15vh] px-md md:px-xl container mx-auto bg-charcoal-950">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        
        {/* Metal Side */}
        <div className="bg-charcoal-900 p-xl md:p-4xl flex flex-col justify-between aspect-square relative group overflow-hidden border-r border-b border-cream-500/10">
          <div className="absolute inset-0 z-0">
            <SmartImage 
              src="https://images.unsplash.com/photo-1533036920150-7117188b4b73?auto=format&fit=crop&q=90&w=1000"
              alt="Mat Siyah Çelik"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000 grayscale"
            />
          </div>
          
          <div className="relative z-10">
            <FadeIn delay={0.2}>
              <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase block mb-md">
                Materyal #05
              </span>
            </FadeIn>
            <RevealText 
              text="Çelik & Karbon" 
              as="h3" 
              className="text-3xl md:text-5xl font-serif text-cream-500 tracking-tight leading-none"
            />
          </div>

          <FadeIn delay={0.6} duration={1.5} className="relative z-10 mt-xl">
            <p className="text-cream-500/70 font-sans text-lg font-light leading-relaxed">
              Taşıyıcı iskeletlerin gizli kahramanı. Mat siyah elektrostatik fırın boya ile kaplanan çelik profillerimiz, 
              korozyona karşı tam direnç sağlarken mobilyaya endüstriyel bir asalet katar.
            </p>
          </FadeIn>
        </div>

        {/* Glass Side */}
        <div className="bg-charcoal-900 p-xl md:p-4xl flex flex-col justify-between aspect-square relative group overflow-hidden border-b border-cream-500/10">
          <div className="absolute inset-0 z-0">
            <SmartImage 
              src="https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?auto=format&fit=crop&q=90&w=1000"
              alt="Temperli Füme Cam"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-1000 blur-sm group-hover:blur-none"
            />
          </div>
          
          <div className="relative z-10">
            <FadeIn delay={0.4}>
              <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase block mb-md">
                Materyal #06
              </span>
            </FadeIn>
            <RevealText 
              text="Temperli Cam" 
              as="h3" 
              className="text-3xl md:text-5xl font-serif text-cream-500 tracking-tight leading-none"
            />
          </div>

          <FadeIn delay={0.8} duration={1.5} className="relative z-10 mt-xl">
            <p className="text-cream-500/70 font-sans text-lg font-light leading-relaxed">
              Işığı mekanın içine dağıtan şeffaf sınırlar. Standart camlara göre 5 kat daha dayanıklı olan 
              temperli füme ve bronz camlarımız, zarafeti güvenlikle harmanlar.
            </p>
          </FadeIn>
        </div>

      </div>

    </section>
  );
}
