import { FadeIn } from "@/components/motion/FadeIn";
import { RevealText } from "@/components/motion/RevealText";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { SmartImage } from "@/components/ui/SmartImage";

export function Packaging() {
  return (
    <section className="w-full py-[15vh] px-md md:px-xl container mx-auto bg-charcoal-950">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl md:gap-4xl items-center">
        
        {/* Left: Image */}
        <div className="w-full relative">
          <MaskReveal duration={1.5}>
            <div className="w-full aspect-square bg-charcoal-900 relative">
              <SmartImage 
                src="https://images.unsplash.com/photo-1607344645866-009c320c5ab2?auto=format&fit=crop&q=90&w=1200"
                alt="Güvenli Paketleme"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale"
              />
            </div>
          </MaskReveal>
        </div>

        {/* Right: Text */}
        <div className="flex flex-col justify-center">
          <FadeIn delay={0.2}>
            <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-md block">
              08. Güvenli Yolculuk
            </span>
          </FadeIn>
          <RevealText 
            text="Paketleme Ritüeli" 
            as="h2" 
            className="text-4xl md:text-5xl font-serif text-cream-500 tracking-tight leading-tight mb-xl"
          />
          <FadeIn delay={0.6} duration={1.5}>
            <p className="text-cream-500/70 font-sans text-lg md:text-xl font-light leading-relaxed">
              Aylarca süren emeğin son durağı... Her mobilya, evinize doğru yola çıkmadan önce, darbelere ve neme karşı 
              özel katmanlarla sarılır. Paketleme, atölyemizdeki ustalığa duyduğumuz saygının bir göstergesidir.
            </p>
          </FadeIn>
        </div>

      </div>

    </section>
  );
}
