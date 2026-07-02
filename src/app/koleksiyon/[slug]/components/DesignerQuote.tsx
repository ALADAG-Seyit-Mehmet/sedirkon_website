import { Product } from "@/lib/data";
import { FadeIn } from "@/components/motion/FadeIn";

interface DesignerQuoteProps {
  product: Product;
}

export function DesignerQuote({ product }: DesignerQuoteProps) {
  if (!product.designerQuote) return null;

  return (
    <section className="w-full py-[15vw] px-md md:px-xl container mx-auto bg-charcoal-950 flex justify-center text-center">
      
      <FadeIn delay={0.2} duration={2} className="max-w-4xl relative">
        {/* Oversized decorative quote mark */}
        <span className="absolute -top-12 md:-top-20 left-1/2 -translate-x-1/2 text-8xl md:text-9xl text-charcoal-800 font-serif leading-none select-none">
          "
        </span>
        
        <p className="relative z-10 text-3xl md:text-5xl lg:text-6xl font-serif text-cream-500 leading-tight italic">
          {product.designerQuote}
        </p>
        
        <div className="mt-xl md:mt-2xl">
          <div className="w-8 h-[1px] bg-bronze-500 mx-auto mb-md" />
          <p className="text-cream-500/50 font-sans text-sm tracking-[0.3em] uppercase">
            Sedirkon Studio
          </p>
        </div>
      </FadeIn>

    </section>
  );
}
