import { Product } from "@/lib/data";
import { SmartImage } from "@/components/ui/SmartImage";
import { FadeIn } from "@/components/motion/FadeIn";
import { RevealText } from "@/components/motion/RevealText";

interface MacroGalleryProps {
  product: Product;
}

export function MacroGallery({ product }: MacroGalleryProps) {
  if (!product.macroImages || product.macroImages.length === 0) return null;

  return (
    <section className="w-full py-section px-md md:px-xl container mx-auto bg-charcoal-950">
      
      {/* Title */}
      <div className="mb-2xl md:mb-4xl">
        <RevealText 
          text="Mikro Düzeyde Kusursuzluk" 
          as="h2" 
          className="text-2xl md:text-3xl font-serif text-cream-500 tracking-wide"
        />
        <FadeIn delay={0.4}>
          <p className="mt-md text-cream-500/50 font-sans text-lg max-w-xl">
            Ahşabın damarlarından kumaşın ipliklerine kadar, her detay yakın markajda mükemmelliği hedefler.
          </p>
        </FadeIn>
      </div>

      {/* Asymmetrical Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-xl md:gap-2xl">
        {product.macroImages.map((img, idx) => {
          // Create an asymmetrical layout based on index
          let colSpan = "md:col-span-12";
          let aspectRatio = "aspect-video";
          
          if (idx === 0) {
            colSpan = "md:col-span-8";
            aspectRatio = "aspect-[4/3]";
          } else if (idx === 1) {
            colSpan = "md:col-span-4";
            aspectRatio = "aspect-[3/4]";
          } else if (idx === 2) {
            colSpan = "md:col-span-12";
            aspectRatio = "aspect-[21/9]"; // Ultra wide cinematic
          }

          return (
            <div key={idx} className={`${colSpan} flex flex-col justify-center`}>
              <FadeIn delay={0.2 + (idx * 0.1)} duration={1.5} className="w-full h-full">
                <div className={`w-full ${aspectRatio} bg-charcoal-900 relative overflow-hidden group`}>
                  <SmartImage
                    src={img}
                    alt={`${product.title} Makro Detay ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                  />
                  {/* Subtle dark overlay to match overall mood */}
                  <div className="absolute inset-0 bg-charcoal-950/10 pointer-events-none" />
                </div>
              </FadeIn>
            </div>
          );
        })}
      </div>

    </section>
  );
}
