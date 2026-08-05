import { TransitionLink } from "@/components/motion/TransitionLink";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı | Sedirkon Mobilya",
  description: "Aradığınız sayfaya şu anda ulaşılamıyor.",
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-charcoal-950 overflow-hidden text-center px-4 md:px-8">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex items-center justify-center">
        <span className="text-[30rem] md:text-[40rem] font-serif text-charcoal-800 select-none leading-none">
          404
        </span>
      </div>

      <div className="relative z-10 container mx-auto max-w-3xl flex flex-col items-center">
        <RevealText 
          text="404" 
          as="h1" 
          className="text-6xl md:text-8xl lg:text-9xl font-serif text-cream-500 tracking-tight"
          duration={1.2}
          scrollTrigger={false}
        />
        
        <RevealText 
          text="Aradığınız Sayfa Bulunamadı" 
          as="h2" 
          className="text-2xl md:text-4xl font-serif text-cream-500 mt-4 md:mt-8 tracking-wide"
          delay={0.4}
          duration={1.2}
          scrollTrigger={false}
        />

        <FadeIn delay={1} duration={1.2} scrollTrigger={false} className="mt-6 md:mt-8">
          <p className="text-cream-500/70 font-sans text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            Görünüşe göre tasarımın dışına çıktınız. Aradığınız koleksiyon veya sayfa taşınmış ya da yayından kaldırılmış olabilir.
          </p>
        </FadeIn>

        <FadeIn delay={1.4} duration={1.2} scrollTrigger={false} className="mt-10 md:mt-12">
          <TransitionLink 
            href="/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-cream-500/30 text-cream-500 hover:bg-cream-500 hover:text-charcoal-950 font-sans tracking-widest text-xs uppercase px-10 py-6 transition-all duration-500"
            )}
          >
            Ana Sayfaya Dön
          </TransitionLink>
        </FadeIn>
      </div>
    </main>
  );
}
