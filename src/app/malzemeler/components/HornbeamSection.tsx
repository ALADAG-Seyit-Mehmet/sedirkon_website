import { SmartImage } from "@/components/ui/SmartImage";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";
import { MaskReveal } from "@/components/motion/MaskReveal";

export function HornbeamSection() {
  return (
    <section className="w-full py-3xl md:py-section px-md md:px-xl container mx-auto bg-charcoal-950 border-t border-cream-500/10">
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-md md:gap-lg items-center">
        
        {/* Left: Text */}
        <div className="md:col-span-7 flex flex-col justify-center order-2 md:order-1">
          <FadeIn delay={0.2}>
            <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-md block">
              Materyal #01
            </span>
          </FadeIn>
          <RevealText 
            text="Masif Gürgen" 
            as="h2" 
            className="text-4xl md:text-6xl font-serif text-cream-500 tracking-tight leading-none mb-xl justify-start"
          />
          
          <div className="flex flex-col gap-lg pr-0 lg:pr-12">
            <FadeIn delay={0.6} duration={1.5}>
              <h3 className="text-cream-500 font-sans tracking-widest text-xs uppercase mb-xs">Karakter</h3>
              <p className="text-cream-500/70 font-sans text-lg font-light leading-relaxed">
                Mobilya iskeletlerinde aranan en üst düzey sağlamlığı, zamansız ve organik dokusuyla birleştirir. Kusursuz sıkı damar yapısı her parçayı eşsiz kılar.
              </p>
            </FadeIn>
            <FadeIn delay={0.8} duration={1.5}>
              <h3 className="text-cream-500 font-sans tracking-widest text-xs uppercase mb-xs">Doku</h3>
              <p className="text-cream-500/70 font-sans text-lg font-light leading-relaxed">
                Pürüzsüz yüzeyi boya ve cilayı mükemmel tutar. Koyu ve sıcak tonlardaki bitişleriyle mekanlara lüks bir derinlik katar.
              </p>
            </FadeIn>
            <FadeIn delay={1.0} duration={1.5}>
              <h3 className="text-cream-500 font-sans tracking-widest text-xs uppercase mb-xs">Dayanıklılık</h3>
              <p className="text-cream-500/70 font-sans text-lg font-light leading-relaxed">
                &quot;Demir ağacı&quot; olarak da bilinen gürgen, darbelere, aşınmaya ve yılların getirdiği yorgunluğa karşı olağanüstü dirençlidir. Nesiller boyu kullanılacak takımların temelidir.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Right: Macro Image */}
        <div className="md:col-span-5 order-1 md:order-2 flex items-center justify-center">
          <MaskReveal direction="right-to-left" duration={1.8} className="w-full max-w-[420px]">
            <div className="w-full aspect-square bg-charcoal-900 relative rounded-2xl overflow-hidden border border-cream-500/10 shadow-2xl">
              <SmartImage 
                src="/textures/wood_new.png"
                alt="Masif Gürgen Ahşap Dokusu"
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
