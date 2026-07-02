import { notFound } from "next/navigation";
import { MOCK_PRODUCTS } from "@/lib/data";

// Editorial Components
import { HeroSection } from "./components/HeroSection";
import { PhilosophySection } from "./components/PhilosophySection";
import { CraftsmanshipSection } from "./components/CraftsmanshipSection";
import { MacroGallery } from "./components/MacroGallery";
import { MaterialPhilosophy } from "./components/MaterialPhilosophy";
import { DimensionsSection } from "./components/DimensionsSection";
import { DesignerQuote } from "./components/DesignerQuote";
import { Specifications } from "./components/Specifications";
import { RelatedCollection } from "./components/RelatedCollection";
import { RecentlyViewed } from "@/components/RecentlyViewed";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const product = MOCK_PRODUCTS.find((p) => p.slug === params.slug);
  
  if (!product) return { title: "Bulunamadı | Sedirkon" };
  
  return {
    title: `${product.title} | Sedirkon Mobilya`,
    description: product.subtitle,
  };
}

export default async function ProductDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const product = MOCK_PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  // The layout follows the Editorial Architectural Plan
  return (
    <main className="min-h-screen bg-charcoal-950">
      
      {/* 1. Fullscreen Product Hero */}
      <HeroSection product={product} />

      {/* 2. Product Philosophy */}
      <PhilosophySection product={product} />

      {/* 3. Craftsmanship Story */}
      <CraftsmanshipSection product={product} />

      {/* 4. Macro Detail Gallery */}
      <MacroGallery product={product} />

      {/* 5. Material Philosophy (Crossfade Configurator) */}
      <MaterialPhilosophy product={product} />

      {/* 6. Dimensions */}
      <DimensionsSection product={product} />

      {/* 7. Designer Notes */}
      <DesignerQuote product={product} />

      {/* 8. Specifications */}
      <Specifications product={product} />

      {/* 9. Related Collection */}
      <RelatedCollection product={product} />

      {/* 10. Recently Viewed */}
      <RecentlyViewed currentProductId={product.id} />

    </main>
  );
}
