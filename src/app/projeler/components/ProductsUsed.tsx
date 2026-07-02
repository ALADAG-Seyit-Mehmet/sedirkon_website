import { MOCK_PRODUCTS } from "@/lib/data";
import { TransitionLink as Link } from "@/components/motion/TransitionLink";
import { SmartImage } from "@/components/ui/SmartImage";
import { FadeIn } from "@/components/motion/FadeIn";
import { RevealText } from "@/components/motion/RevealText";

interface ProductsUsedProps {
  productSlugs: string[];
}

export function ProductsUsed({ productSlugs }: ProductsUsedProps) {
  if (!productSlugs || productSlugs.length === 0) return null;

  const usedProducts = productSlugs
    .map(slug => MOCK_PRODUCTS.find(p => p.slug === slug))
    .filter(Boolean) as typeof MOCK_PRODUCTS;

  return (
    <section className="w-full py-[15vh] px-md md:px-xl container mx-auto bg-charcoal-950 border-t border-cream-500/10 mt-xl">
      
      <div className="mb-4xl text-center">
        <RevealText 
          text="Mekanı Tamamlayan Parçalar" 
          as="h2" 
          className="text-3xl md:text-5xl font-serif text-cream-500 tracking-tight"
        />
      </div>

      <div className="flex flex-col gap-sm">
        {usedProducts.map((product, idx) => (
          <FadeIn key={product.id} delay={0.2 + (idx * 0.1)}>
            <Link 
              href={`/koleksiyon/${product.slug}`}
              isFlip={true}
              className="group relative w-full h-[25vh] md:h-[35vh] flex items-center overflow-hidden"
            >
              <div className="absolute inset-0 z-0 bg-charcoal-900">
                <SmartImage 
                  src={product.images[0]} 
                  alt={product.title}
                  fill
                  sizes="100vw"
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/50 to-transparent group-hover:opacity-50 transition-opacity duration-700" />
              </div>
              
              <div className="relative z-10 pl-xl md:pl-4xl flex flex-col">
                <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-sm transition-transform duration-500 group-hover:translate-x-2">
                  İncele
                </span>
                <h3 className="font-serif text-3xl md:text-5xl text-cream-500 transition-transform duration-500 delay-75 group-hover:translate-x-2">
                  {product.title}
                </h3>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>

    </section>
  );
}
