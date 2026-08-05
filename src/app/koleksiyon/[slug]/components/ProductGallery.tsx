import { Product } from "@/lib/data";
import { SmartImage } from "@/components/ui/SmartImage";
import { FadeIn } from "@/components/motion/FadeIn";
import { RevealText } from "@/components/motion/RevealText";

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  // We only want to show images other than the first one (which is used in HeroSection)
  const galleryImages = product.images.slice(1);

  if (!galleryImages || galleryImages.length === 0) return null;

  return (
    <section className="w-full py-section px-md md:px-xl container mx-auto bg-charcoal-950">
      
      {/* Title */}
      <div className="mb-2xl md:mb-4xl">
        <RevealText 
          text="Tasarımın Diğer Yüzü" 
          as="h2" 
          className="text-2xl md:text-3xl font-serif text-cream-500 tracking-wide"
        />
        <FadeIn delay={0.4}>
          <p className="mt-md text-cream-500/50 font-sans text-lg max-w-xl">
            Ürünümüzün farklı açılardan estetik duruşunu ve ortamla uyumunu inceleyin.
          </p>
        </FadeIn>
      </div>

      {/* Gallery Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl md:gap-2xl">
        {galleryImages.map((img, idx) => {
          // To make it look dynamic, we can make the first image full width if we have an odd number of images
          const isOddTotal = galleryImages.length % 2 !== 0;
          const isFirstAndOdd = isOddTotal && idx === 0;
          
          let colSpan = isFirstAndOdd ? "md:col-span-2" : "md:col-span-1";
          let aspectRatio = isFirstAndOdd ? "aspect-[21/9]" : "aspect-[4/3]";
          
          return (
            <div key={idx} className={`${colSpan} flex flex-col justify-center`}>
              <FadeIn delay={0.2 + (idx * 0.1)} duration={1.5} className="w-full h-full">
                <div className={`w-full ${aspectRatio} bg-charcoal-900 relative overflow-hidden group rounded-xl border border-cream-500/10`}>
                  <SmartImage
                    src={img}
                    alt={`${product.title} Görsel ${idx + 2}`}
                    fill
                    sizes={isFirstAndOdd ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                    className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                  />
                  {/* Subtle dark overlay to match overall mood */}
                  <div className="absolute inset-0 bg-charcoal-950/5 pointer-events-none transition-colors duration-500 group-hover:bg-transparent" />
                </div>
              </FadeIn>
            </div>
          );
        })}
      </div>

    </section>
  );
}
