import { HeroSection } from "./components/HeroSection";
import { WalnutSection } from "./components/WalnutSection";
import { OakSection } from "./components/OakSection";
import { LinenSection } from "./components/LinenSection";
import { LeatherSection } from "./components/LeatherSection";
import { MetalGlassSection } from "./components/MetalGlassSection";
import { MaterialComparison } from "./components/MaterialComparison";
import { CareGuide } from "./components/CareGuide";
import { ShowcaseSection } from "./components/ShowcaseSection";

export const metadata = {
  title: "Materyal Kütüphanesi | Sedirkon Mobilya",
  description: "Sedirkon mobilyalarının temelini oluşturan malzemelerin kalitesi, kökeni ve felsefesi.",
};

export default function MaterialsPage() {
  return (
    <main className="min-h-screen bg-charcoal-950">
      
      <HeroSection />
      <WalnutSection />
      <OakSection />
      <LinenSection />
      <LeatherSection />
      <MetalGlassSection />
      <MaterialComparison />
      <CareGuide />
      <ShowcaseSection />

    </main>
  );
}
