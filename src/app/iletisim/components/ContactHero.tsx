import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";

export function ContactHero() {
  return (
    <section className="w-full py-xl md:py-3xl px-md md:px-xl container mx-auto text-center flex flex-col items-center">
      <FadeIn delay={0.2}>
        <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-md block">
          BİZE ULAŞIN
        </span>
      </FadeIn>
      <RevealText 
        text="Sizin İçin Buradayız" 
        as="h1" 
        className="text-5xl md:text-7xl font-serif text-cream-500 tracking-tight leading-none mb-xl justify-center"
      />
      <FadeIn delay={0.6} duration={1.5}>
        <p className="text-cream-500/70 font-sans text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
          Hayalinizdeki yaşam alanlarını gerçeğe dönüştürmek veya projeleriniz hakkında bilgi almak için tasarım uzmanlarımızla iletişime geçin.
        </p>
      </FadeIn>
    </section>
  );
}
