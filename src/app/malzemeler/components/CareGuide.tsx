import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";

export function CareGuide() {
  return (
    <section className="w-full py-[20vh] px-md md:px-xl bg-charcoal-900 border-t border-charcoal-800">
      <div className="container mx-auto max-w-6xl">
        
        <div className="mb-4xl md:mb-6xl">
          <RevealText 
            text="Zamanın Testi" 
            as="h2" 
            className="text-4xl md:text-6xl font-serif text-cream-500 tracking-tight mb-xl"
          />
          <FadeIn delay={0.4}>
            <p className="text-cream-500/70 font-sans text-xl font-light max-w-2xl leading-relaxed">
              Doğru bakım, mobilyanın sadece ömrünü uzatmaz, onunla birlikte yaşlanmasını ve 
              kendi hikayesini yazmasını sağlar.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2xl">
          
          <FadeIn delay={0.6} duration={1.5} className="flex flex-col">
            <h3 className="font-serif text-2xl text-cream-500 mb-lg">Ahşap Bakımı</h3>
            <div className="w-8 h-[1px] bg-bronze-500 mb-lg" />
            <ul className="flex flex-col gap-md text-cream-500/60 font-sans text-base font-light">
              <li>• Direkt güneş ışığından koruyun.</li>
              <li>• Sadece hafif nemli ve pamuklu bez kullanın.</li>
              <li>• Kimyasal çözücülerden ve cilalardan kaçının.</li>
              <li>• Yılda bir kez doğal balmumu ile besleyin.</li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.8} duration={1.5} className="flex flex-col">
            <h3 className="font-serif text-2xl text-cream-500 mb-lg">Kumaş Bakımı</h3>
            <div className="w-8 h-[1px] bg-bronze-500 mb-lg" />
            <ul className="flex flex-col gap-md text-cream-500/60 font-sans text-base font-light">
              <li>• Düzenli olarak düşük devirde vakumlayın.</li>
              <li>• Dökülen sıvıları ovalamadan, emici bir bezle anında tamponlayın.</li>
              <li>• Kılıfları sadece kuru temizleme ile yıkayın.</li>
            </ul>
          </FadeIn>

          <FadeIn delay={1.0} duration={1.5} className="flex flex-col">
            <h3 className="font-serif text-2xl text-cream-500 mb-lg">Deri Bakımı</h3>
            <div className="w-8 h-[1px] bg-bronze-500 mb-lg" />
            <ul className="flex flex-col gap-md text-cream-500/60 font-sans text-base font-light">
              <li>• Isı kaynaklarından (radyatör, şömine) en az 50cm uzakta tutun.</li>
              <li>• Yüzeydeki tozu kuru ve yumuşak bir bezle alın.</li>
              <li>• Altı ayda bir profesyonel deri besleyici krem uygulayın.</li>
            </ul>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
