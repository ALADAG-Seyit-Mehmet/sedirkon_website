import { SmartImage } from "@/components/ui/SmartImage";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";
import { MaskReveal } from "@/components/motion/MaskReveal";

export function TitaniumSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-section px-4 md:px-8 lg:px-xl container mx-auto px-4 lg:px-0 bg-charcoal-950 border-t border-cream-500/10">
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-md md:gap-lg items-center">
        
        {/* Left: Macro Image */}
        <div className="md:col-span-5 flex items-center justify-center">
          <MaskReveal direction="left-to-right" duration={1.8} className="w-full max-w-[420px]">
            <div className="w-full aspect-square bg-charcoal-900 relative rounded-2xl overflow-hidden border border-cream-500/10 shadow-2xl">
              <SmartImage 
                src="/textures/titanium_new.png"
                alt="Titanyum Gold Metal Dokusu"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover scale-105 hover:scale-100 transition-transform duration-[3s] ease-out"
              />
            </div>
          </MaskReveal>
        </div>

        {/* Right: Text */}
        <div className="md:col-span-7 flex flex-col justify-center pl-0 lg:pl-12">
          <FadeIn delay={0.2}>
            <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-md block">
              Materyal #03
            </span>
          </FadeIn>
          <RevealText 
            text="Titanyum Gold Metal" 
            as="h2" 
            className="text-4xl md:text-6xl font-serif text-cream-500 tracking-tight leading-none mb-xl justify-start"
          />
          
          <div className="flex flex-col gap-lg">
            <FadeIn delay={0.6} duration={1.5}>
              <h3 className="text-cream-500 font-sans tracking-widest text-xs uppercase mb-xs">Işıltı</h3>
              <p className="text-cream-500/70 font-sans text-lg font-light leading-relaxed">
                Mobilyanın alt kasası ve taşıyıcı ayaklarında kullanılan titanyum kaplama, mat ahşap ve kumaş dokusuyla muazzam bir kontrast yaratarak mekana lüks bir ışıltı katar.
              </p>
            </FadeIn>
            <FadeIn delay={0.8} duration={1.5}>
              <h3 className="text-cream-500 font-sans tracking-widest text-xs uppercase mb-xs">Teknoloji</h3>
              <p className="text-cream-500/70 font-sans text-lg font-light leading-relaxed">
                İleri teknoloji PVD kaplama yöntemiyle uygulanan bu altın sarısı yüzey, zamanla kararma yapmaz, parlaklığını ilk günkü gibi korur.
              </p>
            </FadeIn>
            <FadeIn delay={1.0} duration={1.5}>
              <h3 className="text-cream-500 font-sans tracking-widest text-xs uppercase mb-xs">Mukavemet</h3>
              <p className="text-cream-500/70 font-sans text-lg font-light leading-relaxed">
                Paslanmaz çelik üzerine uygulanan bu özel kaplama, korozyona ve çizilmelere karşı maksimum direnç sağlayarak zarafeti güçle buluşturur.
              </p>
            </FadeIn>
          </div>
        </div>

      </div>

    </section>
  );
}
