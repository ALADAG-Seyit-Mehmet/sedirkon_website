import { Product } from "@/lib/data";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";

interface SpecificationsProps {
  product: Product;
}

export function Specifications({ product }: SpecificationsProps) {
  if (!product.specifications || product.specifications.length === 0) return null;

  return (
    <section className="w-full py-section px-md md:px-xl container mx-auto bg-charcoal-950">
      
      <div className="mb-2xl md:mb-4xl text-center md:text-left">
        <RevealText 
          text="Teknik Detaylar" 
          as="h2" 
          className="text-2xl md:text-3xl font-serif text-cream-500 tracking-wide"
        />
        <FadeIn delay={0.4}>
          <div className="w-12 h-[1px] bg-bronze-500 mt-md mx-auto md:mx-0" />
        </FadeIn>
      </div>

      <div className="max-w-5xl mx-auto md:mx-0">
        <div className="flex flex-col border-t border-cream-500/10">
          {product.specifications.map((spec, idx) => (
            <FadeIn 
              key={idx} 
              delay={0.2} 
              duration={1}
              className="group flex flex-col md:flex-row md:items-center py-lg border-b border-cream-500/10 hover:bg-charcoal-900/50 transition-colors duration-500 px-md"
            >
              <div className="w-full md:w-1/3 mb-xs md:mb-0">
                <span className="text-cream-500/50 font-sans text-xs tracking-[0.2em] uppercase group-hover:text-bronze-500 transition-colors duration-500">
                  {spec.label}
                </span>
              </div>
              <div className="w-full md:w-2/3">
                <span className="text-cream-500 font-sans text-lg md:text-xl font-light">
                  {spec.value}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

    </section>
  );
}
