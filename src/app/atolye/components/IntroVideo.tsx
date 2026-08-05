import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";

export function IntroVideo() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-charcoal-950 flex flex-col justify-end">
      
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-charcoal-950/50 z-10 pointer-events-none" />
        <video
          src="/videos/hero-bg-v4.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Cinematic Text Overlay */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 lg:px-xl pb-24 md:pb-32">
        <div className="max-w-4xl">
          <RevealText 
            text="Her Parça" 
            as="h1" 
            className="text-4xl md:text-6xl lg:text-9xl font-serif text-cream-500 tracking-tighter"
          />
          <RevealText 
            text="Bir Hikâye Taşır" 
            as="h1" 
            delay={0.2}
            className="text-4xl md:text-6xl lg:text-9xl font-serif text-cream-500 tracking-tighter"
          />
          <FadeIn delay={1.2} duration={2}>
            <p className="mt-xl text-cream-500/70 font-sans text-xl md:text-2xl font-light tracking-wide max-w-2xl leading-relaxed">
              Ahşabın doğallığı, ustalığın sabrı ve yılların deneyimi aynı atölyede buluşuyor.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <FadeIn delay={2.5} duration={2}>
          <div className="w-[1px] h-24 bg-cream-500/10 overflow-hidden relative">
            <div className="w-full h-full bg-cream-500 absolute top-0 left-0 origin-top animate-scroll-line" />
          </div>
        </FadeIn>
      </div>

    </section>
  );
}
