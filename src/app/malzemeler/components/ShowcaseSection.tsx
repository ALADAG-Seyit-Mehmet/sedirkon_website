import { TransitionLink as Link } from "@/components/motion/TransitionLink";
import { SmartImage } from "@/components/ui/SmartImage";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";
import { MOCK_PRODUCTS } from "@/lib/data";

export function ShowcaseSection() {
  // Take first 3 products for the showcase
  const showcaseProducts = MOCK_PRODUCTS.slice(0, 3);

  return (
    <section className="w-full py-3xl md:py-section px-md md:px-xl container mx-auto bg-charcoal-950">
      
      <div className="mb-4xl flex flex-col items-center text-center">
        <FadeIn delay={0.2}>
          <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase mb-md block">
            Koleksiyon
          </span>
        </FadeIn>
        <RevealText 
          text="Materyallerin Uyumu" 
          as="h2" 
          className="text-3xl md:text-5xl font-serif text-cream-500 tracking-widest uppercase"
        />
        <FadeIn delay={0.6} duration={1.5}>
          <p className="text-cream-500/50 font-sans text-lg font-light max-w-xl mx-auto mt-lg">
            Tüm bu premium materyallerin ustalıkla bir araya getirildiği tasarımlarımızı keşfedin.
          </p>
        </FadeIn>
      </div>

      <div className="flex flex-col gap-4xl">
        {showcaseProducts.map((product, idx) => (
          <FadeIn key={product.id} delay={0.2} duration={1.5}>
            <Link 
              href={`/koleksiyon/${product.slug}`}
              className="group flex flex-col md:flex-row items-center gap-xl md:gap-4xl"
            >
              <div className={`w-full md:w-1/2 aspect-[16/9] md:aspect-[4/3] bg-charcoal-900 relative overflow-hidden ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
                <SmartImage 
                  src={product.images[0]} 
                  alt={product.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                />
                <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/20 transition-colors duration-700 pointer-events-none" />
              </div>
              
              <div className={`w-full md:w-1/2 flex flex-col justify-center ${idx % 2 !== 0 ? 'md:order-1 md:items-end md:text-right' : ''}`}>
                <h3 className="font-serif text-3xl md:text-4xl text-cream-500 tracking-wide group-hover:text-bronze-500 transition-colors duration-500 mb-sm">
                  {product.title}
                </h3>
                <p className="text-cream-500/50 font-sans text-sm tracking-widest uppercase mb-lg">
                  {product.subtitle}
                </p>
                <div className={`flex flex-wrap gap-sm ${idx % 2 !== 0 ? 'justify-end' : ''}`}>
                  {product.materials.map(mat => (
                    <span key={mat.id} className="border border-cream-500/20 px-sm py-xs text-cream-500/70 font-sans text-xs">
                      {mat.name}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>

    </section>
  );
}
