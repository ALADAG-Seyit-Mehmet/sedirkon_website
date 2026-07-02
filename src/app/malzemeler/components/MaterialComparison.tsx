import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";

const MATERIALS = [
  { name: "Amerikan Cevizi", breathability: 40, durability: 90, warmth: 100 },
  { name: "Beyaz Meşe", breathability: 35, durability: 95, warmth: 80 },
  { name: "Doğal Keten", breathability: 100, durability: 70, warmth: 60 },
  { name: "Anilin Deri", breathability: 60, durability: 85, warmth: 75 },
];

export function MaterialComparison() {
  return (
    <section className="w-full py-[15vh] px-md md:px-xl bg-charcoal-950">
      <div className="container mx-auto max-w-5xl">
        
        <div className="text-center mb-4xl">
          <RevealText 
            text="Karakter Analizi" 
            as="h2" 
            className="text-3xl md:text-5xl font-serif text-cream-500 tracking-widest uppercase"
          />
        </div>

        {/* Semantic Definition List for perfect SEO without tables */}
        <dl className="flex flex-col gap-2xl">
          {MATERIALS.map((mat, idx) => (
            <div key={mat.name} className="flex flex-col md:flex-row md:items-center gap-xl md:gap-4xl border-b border-cream-500/10 pb-xl">
              
              <dt className="w-full md:w-1/4">
                <FadeIn delay={0.2 + (idx * 0.1)}>
                  <h3 className="font-serif text-2xl text-cream-500 tracking-wide">{mat.name}</h3>
                </FadeIn>
              </dt>

              <dd className="w-full md:w-3/4 flex flex-col gap-md m-0">
                
                {/* Durability */}
                <FadeIn delay={0.3 + (idx * 0.1)} className="flex items-center gap-md" role="presentation">
                  <span className="w-32 text-cream-500/50 font-sans text-xs tracking-widest uppercase" aria-hidden="true">Dayanıklılık</span>
                  <span className="sr-only">Dayanıklılık: Yüzde {mat.durability}</span>
                  <div className="flex-1 h-[2px] bg-charcoal-800 relative" aria-hidden="true">
                    <div 
                      className="absolute top-0 left-0 h-full bg-bronze-500" 
                      style={{ width: `${mat.durability}%` }} 
                    />
                  </div>
                </FadeIn>

                {/* Warmth */}
                <FadeIn delay={0.4 + (idx * 0.1)} className="flex items-center gap-md" role="presentation">
                  <span className="w-32 text-cream-500/50 font-sans text-xs tracking-widest uppercase" aria-hidden="true">Sıcaklık Hissi</span>
                  <span className="sr-only">Sıcaklık Hissi: Yüzde {mat.warmth}</span>
                  <div className="flex-1 h-[2px] bg-charcoal-800 relative" aria-hidden="true">
                    <div 
                      className="absolute top-0 left-0 h-full bg-cream-500" 
                      style={{ width: `${mat.warmth}%` }} 
                    />
                  </div>
                </FadeIn>

                {/* Breathability */}
                <FadeIn delay={0.5 + (idx * 0.1)} className="flex items-center gap-md" role="presentation">
                  <span className="w-32 text-cream-500/50 font-sans text-xs tracking-widest uppercase" aria-hidden="true">Nefes Alma</span>
                  <span className="sr-only">Nefes Alma Oranı: Yüzde {mat.breathability}</span>
                  <div className="flex-1 h-[2px] bg-charcoal-800 relative" aria-hidden="true">
                    <div 
                      className="absolute top-0 left-0 h-full bg-cream-500/50" 
                      style={{ width: `${mat.breathability}%` }} 
                    />
                  </div>
                </FadeIn>

              </dd>
            </div>
          ))}
        </dl>

      </div>
    </section>
  );
}
