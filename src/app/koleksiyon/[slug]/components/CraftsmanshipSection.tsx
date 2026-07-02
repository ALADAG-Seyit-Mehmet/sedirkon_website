import { Product } from "@/lib/data";
import { SmartImage } from "@/components/ui/SmartImage";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { FadeIn } from "@/components/motion/FadeIn";
import { RevealText } from "@/components/motion/RevealText";

interface CraftsmanshipSectionProps {
  product: Product;
}

export function CraftsmanshipSection({ product }: CraftsmanshipSectionProps) {
  if (!product.craftsmanshipImages || product.craftsmanshipImages.length === 0) return null;

  return (
    <section className="w-full py-section px-md md:px-xl container mx-auto bg-charcoal-950">
      
      {/* Title */}
      <div className="mb-2xl md:mb-4xl text-center">
        <RevealText 
          text="Zanaat ve Ustalık" 
          as="h2" 
          className="text-2xl md:text-4xl font-serif text-cream-500 tracking-widest uppercase"
        />
        <FadeIn delay={0.4}>
          <div className="w-12 h-[1px] bg-bronze-500 mt-md mx-auto" />
        </FadeIn>
      </div>

      <div className="flex flex-col gap-4xl md:gap-section">
        {product.craftsmanshipImages.map((img, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div 
              key={idx} 
              className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-xl md:gap-4xl`}
            >
              
              {/* Image side */}
              <div className="w-full md:w-2/3">
                <MaskReveal duration={1.5} delay={0.2}>
                  <div className="w-full aspect-[4/3] bg-charcoal-900 relative">
                    <SmartImage
                      src={img}
                      alt={`${product.title} İşçilik ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 66vw"
                      className="object-cover"
                    />
                  </div>
                </MaskReveal>
              </div>

              {/* Text side (Editorial spacing) */}
              <div className="w-full md:w-1/3 flex flex-col justify-center">
                <FadeIn delay={0.6} duration={1.5}>
                  <h3 className="text-xl md:text-2xl font-serif text-bronze-500 mb-md italic">
                    {idx === 0 ? "Malzemenin Ruhu" : "İnce Dokunuşlar"}
                  </h3>
                  <p className="text-cream-500/70 font-sans text-lg font-light leading-relaxed">
                    Sedirkon atölyelerinde her detay elde işlenir. Makineleşmenin standartlaştırdığı dünyada, 
                    biz ustalarımızın parmak izlerini ürünlerimizde bir lüks işareti olarak taşıyoruz.
                  </p>
                </FadeIn>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
