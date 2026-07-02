import { TransitionLink as Link } from "@/components/motion/TransitionLink";
import { Product, MOCK_PRODUCTS } from "@/lib/data";
import { SmartImage } from "@/components/ui/SmartImage";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";

interface RelatedCollectionProps {
  product: Product;
}

export function RelatedCollection({ product }: RelatedCollectionProps) {
  if (!product.relatedProducts || product.relatedProducts.length === 0) return null;

  const related = product.relatedProducts
    .map((slug) => MOCK_PRODUCTS.find((p) => p.slug === slug))
    .filter((p): p is Product => p !== undefined);

  if (related.length === 0) return null;

  return (
    <section className="w-full py-section px-md md:px-xl container mx-auto bg-charcoal-950 overflow-hidden">
      
      <div className="mb-2xl md:mb-4xl flex flex-col items-center text-center">
        <RevealText 
          text="Seriyi Tamamlayın" 
          as="h2" 
          className="text-2xl md:text-4xl font-serif text-cream-500 tracking-wide"
        />
        <FadeIn delay={0.4}>
          <p className="mt-md text-cream-500/50 font-sans text-lg max-w-xl font-light">
            Bu parça ile kusursuz uyum sağlayan diğer tasarımları keşfedin.
          </p>
        </FadeIn>
      </div>

      <div className="flex flex-col md:flex-row gap-xl md:gap-2xl justify-center items-stretch">
        {related.map((item, idx) => (
          <FadeIn 
            key={item.id} 
            delay={0.2 + (idx * 0.2)} 
            duration={1.5}
            className="w-full md:w-1/2 max-w-2xl"
          >
            <Link href={`/koleksiyon/${item.slug}`} isFlip={true} className="group block w-full h-full">
              <div className="w-full aspect-[4/3] bg-charcoal-900 relative overflow-hidden">
                <SmartImage
                  src={item.images[0]}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                />
                <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/20 transition-colors duration-700 pointer-events-none" />
              </div>
              
              <div className="mt-md md:mt-lg flex flex-col items-center text-center">
                <h3 className="font-serif text-2xl md:text-3xl text-cream-500 tracking-wide group-hover:text-bronze-500 transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="mt-xs text-cream-500/50 font-sans text-sm tracking-widest uppercase">
                  İncele
                </p>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>

    </section>
  );
}
