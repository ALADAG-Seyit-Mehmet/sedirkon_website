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
