import { IntroVideo } from "./components/IntroVideo";
import dynamic from "next/dynamic";

const WoodSelection = dynamic(() => import("./components/WoodSelection").then(mod => mod.WoodSelection));
const WoodDrying = dynamic(() => import("./components/WoodDrying").then(mod => mod.WoodDrying));
const PrecisionCutting = dynamic(() => import("./components/PrecisionCutting").then(mod => mod.PrecisionCutting));
const HandCraftsmanship = dynamic(() => import("./components/HandCraftsmanship").then(mod => mod.HandCraftsmanship));
const Assembly = dynamic(() => import("./components/Assembly").then(mod => mod.Assembly));
const Upholstery = dynamic(() => import("./components/Upholstery").then(mod => mod.Upholstery));
const QualityControl = dynamic(() => import("./components/QualityControl").then(mod => mod.QualityControl));
const Packaging = dynamic(() => import("./components/Packaging").then(mod => mod.Packaging));
const FinalShowcase = dynamic(() => import("./components/FinalShowcase").then(mod => mod.FinalShowcase));

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
