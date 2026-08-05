import { IntroVideo } from "./components/IntroVideo";
import { WoodSelection } from "./components/WoodSelection";
import { WoodDrying } from "./components/WoodDrying";
import { PrecisionCutting } from "./components/PrecisionCutting";
import { HandCraftsmanship } from "./components/HandCraftsmanship";
import { Assembly } from "./components/Assembly";
import { Upholstery } from "./components/Upholstery";
import { QualityControl } from "./components/QualityControl";
import { Packaging } from "./components/Packaging";
import { FinalShowcase } from "./components/FinalShowcase";

export const metadata = {
  title: "Atölye Belgeseli | Sedirkon Mobilya",
  description: "Ahşabın doğallığı, ustalığın sabrı ve yılların deneyimi. Sedirkon atölyesinin kapılarını aralayın.",
};

export default function WorkshopPage() {
  return (
    <main className="min-h-screen bg-charcoal-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Atölye Belgeseli | Sedirkon Mobilya",
            "description": "Ahşabın doğallığı, ustalığın sabrı ve yılların deneyimi. Sedirkon atölyesinin kapılarını aralayın.",
            "url": "https://sedirkon.com/atolye",
            "mainEntity": {
              "@type": "VideoObject",
              "name": "Sedirkon Atölye Belgeseli",
              "description": "Sedirkon mobilyalarının üretim süreci: Ahşap seçimi, kurutma, kesim, zanaat, döşeme ve kalite kontrol aşamaları.",
              "thumbnailUrl": "https://sedirkon.com/og-image.jpg",
              "uploadDate": "2024-01-01T08:00:00+03:00",
              "contentUrl": "https://sedirkon.com/atolye",
              "embedUrl": "https://sedirkon.com/atolye",
              "publisher": {
                "@type": "Organization",
                "name": "Sedirkon Mobilya",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://sedirkon.com/logo.png"
                }
              }
            }
          })
        }}
      />
      <IntroVideo />
      <WoodSelection />
      <WoodDrying />
      <PrecisionCutting />
      <HandCraftsmanship />
      <Assembly />
      <Upholstery />
      <QualityControl />
      <Packaging />
      <FinalShowcase />

    </main>
  );
}
