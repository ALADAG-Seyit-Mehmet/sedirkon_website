import { Product } from "@/lib/data";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";
import { Ruler, Maximize, MoveVertical, MoveHorizontal } from "lucide-react";

interface DimensionsSectionProps {
  product: Product;
}

function parseDimensionString(val: string) {
  let w = "", d = "", h = "";
  
  const cleanStr = (str: string) => str.toLowerCase().replace('cm', '').trim();

  if (val.includes('|')) {
    const parts = val.split('|').map(p => p.trim());
    parts.forEach(part => {
      const idx = part.indexOf(':');
      if (idx !== -1) {
        const prefix = part.slice(0, idx).trim().toLowerCase();
        const value = cleanStr(part.slice(idx + 1));
        if (prefix.startsWith('g')) w = value;
        if (prefix.startsWith('d')) d = value;
        if (prefix.startsWith('y')) h = value;
      }
    });
  } else {
    const match = val.match(/G\s*:\s*(.*?)(?:\s*[|x]\s*|\s+)D\s*:\s*(.*?)(?:\s*[|x]\s*|\s+)Y\s*:\s*(.*)/i);
    if (match) {
      w = cleanStr(match[1]);
      d = cleanStr(match[2]);
      h = cleanStr(match[3]);
    }
  }
  return { w, d, h, isDetailed: !!w && !!d && !!h };
}

export function DimensionsSection({ product }: DimensionsSectionProps) {
  // Extract specific parts like Kanepe, Berjer, Köşe from specifications
  const dimSpecs = product.specifications?.filter(s => 
    s.label.toLowerCase().includes('kanepe') || 
    s.label.toLowerCase().includes('köşe') || 
    s.label.toLowerCase().includes('berjer') ||
    s.label.toLowerCase().includes('ölçüler') ||
    s.label.toLowerCase().includes('corner') ||
    s.label.toLowerCase().includes('armchair')
  ) || [];

  // Fallback to product.dimensions if no specific specs found
  const itemsToRender = dimSpecs.length > 0 
    ? dimSpecs.map(s => ({ title: s.label, val: s.value }))
    : [{ title: "Ölçüler", val: product.dimensions }];

  if (itemsToRender.length === 0 || !itemsToRender[0].val) return null;

  return (
    <section className="w-full py-2xl px-md md:px-xl container mx-auto bg-charcoal-950 flex flex-col items-center border-t border-cream-500/10">
      
      <div className="text-center mb-xl md:mb-2xl">
        <RevealText 
          text="Mekansal Uyum" 
          as="h2" 
          className="text-2xl md:text-4xl font-serif text-cream-500 tracking-widest uppercase mb-4 justify-center"
        />
        <FadeIn delay={0.2}>
          <p className="text-cream-500/60 font-sans max-w-lg mx-auto text-sm md:text-base">
            Yaşam alanınızla kusursuz bütünlük sağlaması için titizlikle hesaplanmış ergonomik ölçüler.
          </p>
        </FadeIn>
      </div>

      <div className="w-full max-w-5xl flex flex-col gap-16">
        {itemsToRender.map((item, idx) => {
          const { w, d, h, isDetailed } = parseDimensionString(item.val);
          
          return (
            <FadeIn key={idx} delay={0.3 + (idx * 0.1)} duration={1.2} className="w-full">
              {itemsToRender.length > 1 && (
                <h3 className="text-center text-cream-500/80 font-serif text-xl tracking-widest uppercase mb-8">
                  {item.title}
                </h3>
              )}
              
              {isDetailed ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Width */}
                  <div className="group relative bg-charcoal-900 border border-cream-500/10 p-10 flex flex-col items-center justify-center overflow-hidden hover:border-bronze-500/50 transition-colors duration-500">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                    <MoveHorizontal className="w-8 h-8 text-bronze-500/70 mb-4 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                    <h4 className="text-cream-500/50 font-sans text-xs tracking-[0.2em] uppercase mb-2">Genişlik</h4>
                    <div className="text-2xl md:text-3xl font-sans font-light text-cream-100">{w} <span className="text-lg text-cream-500/40">cm</span></div>
                  </div>

                  {/* Depth */}
                  <div className="group relative bg-charcoal-900 border border-cream-500/10 p-10 flex flex-col items-center justify-center overflow-hidden hover:border-bronze-500/50 transition-colors duration-500 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                    <Maximize className="w-8 h-8 text-bronze-500/70 mb-4 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                    <h4 className="text-cream-500/50 font-sans text-xs tracking-[0.2em] uppercase mb-2">Derinlik</h4>
                    <div className="text-2xl md:text-3xl font-sans font-light text-cream-100">{d} <span className="text-lg text-cream-500/40">cm</span></div>
                  </div>

                  {/* Height */}
                  <div className="group relative bg-charcoal-900 border border-cream-500/10 p-10 flex flex-col items-center justify-center overflow-hidden hover:border-bronze-500/50 transition-colors duration-500">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                    <MoveVertical className="w-8 h-8 text-bronze-500/70 mb-4 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                    <h4 className="text-cream-500/50 font-sans text-xs tracking-[0.2em] uppercase mb-2">Yükseklik</h4>
                    <div className="text-2xl md:text-3xl font-sans font-light text-cream-100">{h} <span className="text-lg text-cream-500/40">cm</span></div>
                  </div>
                </div>
              ) : (
                <div className="bg-charcoal-900 border border-cream-500/10 p-12 text-center flex flex-col items-center justify-center hover:border-bronze-500/30 transition-colors duration-500">
                   <Ruler className="w-10 h-10 text-bronze-500/70 mb-6" strokeWidth={1} />
                   <div className="text-xl md:text-2xl font-sans font-light text-cream-100">{item.val}</div>
                </div>
              )}
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
