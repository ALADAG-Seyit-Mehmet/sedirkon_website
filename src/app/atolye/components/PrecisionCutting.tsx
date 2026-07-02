import { SmartImage } from "@/components/ui/SmartImage";
import { FadeIn } from "@/components/motion/FadeIn";
import { RevealText } from "@/components/motion/RevealText";
import { MaskReveal } from "@/components/motion/MaskReveal";

export function PrecisionCutting() {
  return (
    <section className="w-full py-4xl md:py-section px-md md:px-xl container mx-auto bg-charcoal-950">
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-xl md:gap-4xl items-center">
        
        {/* Left: 2 Images Asymmetric */}
        <div className="md:col-span-7 relative h-[500px] md:h-[800px] w-full">
          {/* Main Large Image */}
          <div className="absolute top-0 left-0 w-4/5 h-3/4 z-10">
            <MaskReveal direction="top-to-bottom" duration={1.5}>
              <div className="w-full h-full bg-charcoal-900 relative">
                <SmartImage 
                  src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=90&w=1200"
                  alt="Ahşap kesim makinesi"
                  fill
                  sizes="(max-width: 768px) 80vw, 50vw"
                  className="object-cover"
                />
              </div>
            </MaskReveal>
          </div>
          
          {/* Overlapping Detail Image */}
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 z-20 shadow-luxury">
            <MaskReveal direction="bottom-to-top" delay={0.4} duration={1.5}>
              <div className="w-full h-full bg-charcoal-900 relative">
                <SmartImage 
                  src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=90&w=800"
                  alt="Ahşap talaşı detayı"
                  fill
                  sizes="(max-width: 768px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>
            </MaskReveal>
          </div>
        </div>

        {/* Right: Text */}
        <div className="md:col-span-5 flex flex-col justify-center mt-2xl md:mt-0">
          <FadeIn delay={0.2}>
            <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-md block">
              03. Milimetrik Kusursuzluk
            </span>
          </FadeIn>
          <RevealText 
            text="Hassas Kesim" 
            as="h2" 
            className="text-4xl md:text-5xl font-serif text-cream-500 tracking-tight leading-tight mb-xl"
          />
          <FadeIn delay={0.6} duration={1.5}>
            <p className="text-cream-500/70 font-sans text-lg md:text-xl font-light leading-relaxed">
              İleri teknoloji CNC makineleri ile kusursuz oranlar hesaplanır. Ancak makinenin soğuk kestiği her bir parça, 
              son aşamada ustanın sıcak eliyle tekrar tıraşlanır. Gözle görülmeyen o son milimetrik ayar, ahşaba ruhunu veren detaydır.
            </p>
          </FadeIn>
        </div>

      </div>

    </section>
  );
}
