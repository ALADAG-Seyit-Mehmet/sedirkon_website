"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Uygulama Hatası:", error);
  }, [error]);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-charcoal-950 overflow-hidden text-center px-4 md:px-8">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex items-center justify-center">
        <span className="text-[30rem] md:text-[40rem] font-serif text-charcoal-800 select-none leading-none">
          500
        </span>
      </div>

      <div className="relative z-10 container mx-auto max-w-3xl flex flex-col items-center">
        <RevealText 
          text="Sistem Hatası" 
          as="h1" 
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-cream-500 tracking-tight"
          duration={1.2}
          scrollTrigger={false}
        />
        
        <RevealText 
          text="Beklenmeyen Bir Durum Oluştu" 
          as="h2" 
          className="text-xl md:text-3xl font-serif text-cream-500 mt-4 md:mt-8 tracking-wide"
          delay={0.4}
          duration={1.2}
          scrollTrigger={false}
        />

        <FadeIn delay={1} duration={1.2} scrollTrigger={false} className="mt-6 md:mt-8">
          <p className="text-cream-500/70 font-sans text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            Sunucularımızda anlık bir yoğunluk veya geçici bir hata meydana geldi. Bu durumdan dolayı özür dileriz. Lütfen sayfayı yenilemeyi deneyin.
          </p>
        </FadeIn>

        <FadeIn delay={1.4} duration={1.2} scrollTrigger={false} className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-cream-500/30 text-cream-500 hover:bg-cream-500 hover:text-charcoal-950 font-sans tracking-widest text-xs uppercase px-10 py-6 transition-all duration-500"
            )}
          >
            Tekrar Dene
          </button>
          
          <a
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "text-cream-500 hover:text-white font-sans tracking-widest text-xs uppercase px-10 py-6 transition-all duration-500"
            )}
          >
            Ana Sayfaya Dön
          </a>
        </FadeIn>
      </div>
    </main>
  );
}
