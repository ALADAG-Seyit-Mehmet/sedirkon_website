import { Project } from "@/lib/data";
import { SmartImage } from "@/components/ui/SmartImage";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";
import { MaskReveal } from "@/components/motion/MaskReveal";

interface ResidentialCommercialProps {
  projects: Project[];
}

export function ResidentialCommercial({ projects }: ResidentialCommercialProps) {
  const residential = projects.find(p => p.category === "Residential" && p.slug !== "villa-bosphorus");
  const commercial = projects.find(p => p.category === "Commercial");

  return (
    <section className="w-full bg-charcoal-950 flex flex-col gap-0 pb-[15vh]">
      
      {/* Residential - Edge to Edge */}
      {residential && (
        <div className="w-full relative py-[15vh]">
          <div className="container mx-auto px-md md:px-xl mb-2xl">
            <RevealText 
              text="Bireysel Yaşam Alanları" 
              as="h2" 
              className="text-3xl md:text-5xl font-serif text-cream-500 tracking-tight"
            />
            <FadeIn delay={0.4}>
              <p className="mt-md text-cream-500/50 font-sans font-light text-lg max-w-xl">
                Kişiye özel villalar ve lüks konutlar için tasarımı yaşam tarzıyla harmanlıyoruz.
              </p>
            </FadeIn>
          </div>
          
          <MaskReveal direction="left-to-right" duration={2}>
            <div className="w-full h-[60vh] md:h-[80vh] relative group overflow-hidden">
              <SmartImage 
                src={residential.images[0]} 
                alt={residential.title}
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out"
              />
              <div className="absolute inset-0 bg-charcoal-950/20 group-hover:bg-charcoal-950/0 transition-colors duration-1000" />
              <div className="absolute bottom-12 left-12 md:bottom-24 md:left-24">
                <h3 className="font-serif text-3xl md:text-5xl text-cream-500 drop-shadow-lg">
                  {residential.title}
                </h3>
                <span className="font-sans text-sm tracking-widest text-cream-500/80 uppercase mt-2 block drop-shadow-md">
                  {residential.location}
                </span>
              </div>
            </div>
          </MaskReveal>
        </div>
      )}

      {/* Commercial - Asymmetric Editorial Layout */}
      {commercial && (
        <div className="w-full py-[10vh] container mx-auto px-md md:px-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-xl md:gap-4xl items-center">
            
            <div className="md:col-span-5 order-2 md:order-1 flex flex-col justify-center">
              <RevealText 
                text="Ticari Mekânlar" 
                as="h2" 
                className="text-3xl md:text-5xl font-serif text-cream-500 tracking-tight mb-md"
              />
              <FadeIn delay={0.4} duration={1.5}>
                <p className="text-cream-500/70 font-sans font-light text-lg leading-relaxed mb-xl">
                  Oteller, restoranlar ve genel merkezler... Markaların prestijini ziyaretçilerine en ilk saniyede hissettiren 
                  özel proje uygulamaları.
                </p>
                <div className="border-l border-bronze-500 pl-lg py-sm">
                  <h3 className="font-serif text-2xl text-cream-500 mb-1">{commercial.title}</h3>
                  <span className="font-sans text-xs tracking-widest text-cream-500/50 uppercase">
                    {commercial.location} • {commercial.year}
                  </span>
                </div>
              </FadeIn>
            </div>

            <div className="md:col-span-7 order-1 md:order-2">
              <MaskReveal direction="right-to-left" duration={1.8}>
                <div className="w-full aspect-[4/3] bg-charcoal-900 relative">
                  <SmartImage 
                    src={commercial.images[0]} 
                    alt={commercial.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
              </MaskReveal>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
