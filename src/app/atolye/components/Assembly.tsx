import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";
import { SmartImage } from "@/components/ui/SmartImage";

export function Assembly() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-section px-4 md:px-8 lg:px-xl container mx-auto px-4 lg:px-0 bg-charcoal-950 flex flex-col items-center">
      
      <div className="text-center">
        <FadeIn delay={0.2}>
          <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-md block">
            04 / MONTAJ & BİRLEŞTİRME
          </span>
        </FadeIn>
        
        <RevealText 
          text="Kusursuz Bütünlük" 
          as="h2" 
          className="text-2xl md:text-4xl lg:text-5xl font-serif text-cream-100 font-light mb-6"
        />
      </div>

      <FadeIn delay={0.6} className="max-w-3xl text-center mb-8 md:mb-10">
        <p className="text-cream-500/80 font-sans font-light leading-relaxed">
          Her bir parça, yılların getirdiği ustalık ve modern hassasiyetle birbirine kenetlenir. 
          Geleneksel ahşap geçme tekniklerimiz, ürünlerimizin nesiller boyu sağlam kalmasını sağlar.
        </p>
      </FadeIn>

      <FadeIn delay={0.8} duration={2} className="w-full max-w-5xl relative">
        {/* Video Assembly Representation */}
        <div className="w-full aspect-video flex items-center justify-center relative overflow-hidden bg-transparent">
          
          <video 
            src="/Create_an_second_ultra_reali.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover mix-blend-screen"
          />

        </div>

        {/* Stealth radial gradient patch to completely hide AI logo */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 95% 90%, black 0%, black 8%, transparent 20%)'
          }}
        ></div>
      </FadeIn>

    </section>
  );
}
