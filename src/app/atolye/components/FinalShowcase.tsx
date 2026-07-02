import { TransitionLink as Link } from "@/components/motion/TransitionLink";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";

export function FinalShowcase() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-charcoal-950 flex flex-col justify-center items-center text-center">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-charcoal-950/70 z-10 pointer-events-none" />
        <div 
          className="w-full h-full bg-cover bg-center animate-breathe"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=90&w=2000')" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-md md:px-xl">
        <RevealText 
          text="Bir Hikâye Satın Alın" 
          as="h2" 
          className="text-5xl md:text-8xl font-serif text-cream-500 tracking-tighter leading-none mb-xl"
        />
        
        <FadeIn delay={0.6} duration={2}>
          <p className="text-cream-500/70 font-sans text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto mb-2xl">
            Sadece bir mobilya değil, yılların emeğini ve usta ellerin sıcaklığını evinize taşıyın.
          </p>
        </FadeIn>

        <FadeIn delay={1.2} duration={2}>
          <Link 
            href="/koleksiyon"
            className="inline-block relative overflow-hidden group border border-cream-500/30 px-xl py-lg"
          >
            {/* Background Hover Effect */}
            <span className="absolute inset-0 bg-cream-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            
            {/* Text */}
            <span className="relative z-10 font-sans text-sm tracking-[0.3em] uppercase text-cream-500 group-hover:text-charcoal-950 transition-colors duration-500">
              Koleksiyonu İncele
            </span>
          </Link>
        </FadeIn>
      </div>

    </section>
  );
}
