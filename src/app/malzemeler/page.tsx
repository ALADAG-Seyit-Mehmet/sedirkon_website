import { HeroSection } from "./components/HeroSection";
import { HornbeamSection } from "./components/HornbeamSection";
import { FabricSection } from "./components/FabricSection";
import { TitaniumSection } from "./components/TitaniumSection";
import { MaterialComparison } from "./components/MaterialComparison";
import { CareGuide } from "./components/CareGuide";
import { ShowcaseSection } from "./components/ShowcaseSection";

export const metadata = {
  title: "Materyal Kütüphanesi | Sedirkon Mobilya",
  description: "Sedirkon mobilyalarının temelini oluşturan Masif Gürgen, lüks kumaşlar ve Titanyum metalin kalitesi.",
};

export default function MaterialsPage() {
  return (
    <main className="min-h-screen bg-charcoal-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Materyal Kütüphanesi | Sedirkon Mobilya",
            "description": "Sedirkon mobilyalarının temelini oluşturan Masif Gürgen, lüks kumaşlar ve Titanyum metalin kalitesi.",
            "url": "https://sedirkon.com/malzemeler",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "Thing",
                    "name": "Masif Gürgen",
                    "description": "Ürünlerimizin iskeletinde uzun ömürlü ve dayanıklı Masif Gürgen kullanıyoruz."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "Thing",
                    "name": "Lüks Kumaşlar",
                    "description": "Estetik ve konforu bir arada sunan özel ithal kumaş seçenekleri."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "Thing",
                    "name": "Titanyum Metal",
                    "description": "Paslanmaz ve kararmaz titanyum detaylarla mobilyalarda şıklık ve sağlamlık."
                  }
                }
              ]
            }
          })
        }}
      />
      <HeroSection />
      <HornbeamSection />
      <FabricSection />
      <TitaniumSection />
      <MaterialComparison />
      <CareGuide />
      <ShowcaseSection />

    </main>
  );
}
