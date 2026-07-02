import { Product } from "@/lib/data";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";

interface DimensionsSectionProps {
  product: Product;
}

export function DimensionsSection({ product }: DimensionsSectionProps) {
  if (!product.dimensions) return null;

  // Split dimensions if they are in "G: ... D: ... Y: ..." format
  const dimParts = product.dimensions.split("x").map(p => p.trim());

  return (
    <section className="w-full py-section px-md md:px-xl container mx-auto bg-charcoal-950 flex flex-col items-center">
      
      <div className="text-center mb-xl md:mb-2xl">
        <RevealText 
          text="Mekansal Uyum" 
          as="h2" 
          className="text-2xl md:text-3xl font-serif text-cream-500 tracking-widest uppercase"
        />
      </div>

      <FadeIn delay={0.4} duration={1.5} className="w-full max-w-4xl">
        {/* Abstract Minimalist Diagram Box */}
        <div className="relative w-full aspect-[2/1] md:aspect-[3/1] border border-cream-500/10 flex items-center justify-center p-md">
          {/* A simple geometric representation of the furniture volume */}
          <div className="w-1/2 h-1/2 border border-bronze-500/50 relative">
            
            {/* Top Label (Width) */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-cream-500/70 font-sans text-sm tracking-widest uppercase whitespace-nowrap">
              {dimParts[0] || product.dimensions}
            </div>
            {/* Top Line */}
            <div className="absolute -top-4 left-0 right-0 h-[1px] bg-cream-500/20" />
            <div className="absolute -top-5 left-0 w-[1px] h-3 bg-cream-500/20" />
            <div className="absolute -top-5 right-0 w-[1px] h-3 bg-cream-500/20" />

            {/* Right Label (Depth) */}
            {dimParts[1] && (
              <>
                <div className="absolute top-1/2 -right-32 -translate-y-1/2 text-cream-500/70 font-sans text-sm tracking-widest uppercase whitespace-nowrap">
                  {dimParts[1]}
                </div>
                {/* Right Line */}
                <div className="absolute top-0 bottom-0 -right-4 w-[1px] bg-cream-500/20" />
                <div className="absolute top-0 -right-5 w-3 h-[1px] bg-cream-500/20" />
                <div className="absolute bottom-0 -right-5 w-3 h-[1px] bg-cream-500/20" />
              </>
            )}

            {/* Bottom Label (Height) */}
            {dimParts[2] && (
              <>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-cream-500/70 font-sans text-sm tracking-widest uppercase whitespace-nowrap">
                  {dimParts[2]}
                </div>
                <div className="absolute -bottom-4 left-0 right-0 h-[1px] bg-cream-500/20" />
              </>
            )}

          </div>
        </div>
      </FadeIn>

    </section>
  );
}
