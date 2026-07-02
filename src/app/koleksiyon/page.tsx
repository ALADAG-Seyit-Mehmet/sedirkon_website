import { TransitionLink as Link } from "@/components/motion/TransitionLink";
import { SmartImage } from "@/components/ui/SmartImage";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";
import { MOCK_PRODUCTS, CATEGORIES } from "@/lib/data";

export const metadata = {
  title: "Koleksiyon | Sedirkon Mobilya",
  description: "Zanaat ve ustalığın buluştuğu zamansız yaşam alanları. Sedirkon mobilya koleksiyonunu keşfedin.",
};

// Next.js Server Component
export default async function CollectionPage(props: { searchParams?: Promise<{ kategori?: string }> }) {
  const searchParams = await props.searchParams;
  const currentCategory = searchParams?.kategori || "all";

  const filteredProducts = currentCategory === "all" 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter((p) => p.category === currentCategory);

  return (
    <main className="min-h-screen bg-charcoal-950 pt-32 pb-section">
      
      {/* Header */}
      <section className="container mx-auto px-md md:px-xl mb-4xl">
        <div className="max-w-4xl">
          <RevealText 
            text="Koleksiyon" 
            as="h1" 
            className="text-5xl md:text-7xl font-serif text-cream-500 tracking-tight" 
          />
          <FadeIn delay={0.8} duration={1.2}>
            <p className="mt-md text-cream-500/70 font-sans text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              Ahşabın doğallığı, metalin soğukluğu ve kumaşın sıcaklığı... 
              Usta ellerde şekillenen, zamansız estetiği keşfedin.
            </p>
          </FadeIn>
        </div>

        {/* Filter / Categories */}
        <FadeIn delay={1.2} duration={1}>
          <div className="mt-2xl flex flex-wrap gap-sm">
            {CATEGORIES.map((cat) => (
              <Link 
                key={cat.id} 
                href={cat.id === "all" ? "/koleksiyon" : `/koleksiyon?kategori=${cat.id}`}
                className={`px-md py-xs rounded-pill font-sans text-sm tracking-wide transition-colors duration-500 ${
                  currentCategory === cat.id 
                    ? "bg-cream-500 text-charcoal-950" 
                    : "border border-cream-500/20 text-cream-500/70 hover:text-cream-500 hover:border-cream-500"
                }`}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Grid (Editorial layout, asymmetrical) */}
      <section className="container mx-auto px-md md:px-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-xl gap-y-4xl">
          {filteredProducts.map((product, index) => {
            // Create an asymmetrical layout (some items pushed down)
            const isEven = index % 2 === 0;
            const marginTop = !isEven ? "md:mt-4xl" : "";

            return (
              <FadeIn key={product.id} delay={0.2 + (index * 0.1)} duration={1.2} className={marginTop}>
                <Link href={`/koleksiyon/${product.slug}`} isFlip={true} className="group block">
                  {/* Image wrapper with aspect ratio */}
                  <div className="w-full aspect-[4/5] md:aspect-square overflow-hidden bg-charcoal-900 relative">
                    <SmartImage
                      src={product.images[0]}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/20 transition-colors duration-700 pointer-events-none" />
                  </div>
                  
                  {/* Product Info */}
                  <div className="mt-md flex flex-col items-center text-center">
                    <h3 className="font-serif text-2xl md:text-3xl text-cream-500 tracking-wide group-hover:text-bronze-500 transition-colors duration-500">
                      {product.title}
                    </h3>
                    <p className="mt-xs text-cream-500/50 font-sans text-sm tracking-widest uppercase">
                      İncele
                    </p>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-2xl">
            <p className="text-cream-500/50 font-sans text-lg">Bu kategoride henüz ürün bulunmamaktadır.</p>
          </div>
        )}
      </section>

    </main>
  );
}
