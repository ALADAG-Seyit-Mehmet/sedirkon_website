import { Project } from "@/lib/data";
import { SmartImage } from "@/components/ui/SmartImage";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";
import { MaskReveal } from "@/components/motion/MaskReveal";

interface FeaturedProjectProps {
  project: Project;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  if (!project) return null;

  return (
    <section className="w-full py-[15vh] bg-charcoal-950">
      
      {/* Featured Banner */}
      <div className="container mx-auto px-md md:px-xl mb-xl">
        <FadeIn delay={0.2}>
          <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase block mb-md">
            Öne Çıkan Proje
          </span>
        </FadeIn>
      </div>

      {/* Edge to Edge Image */}
      <div className="w-full h-[70vh] md:h-[85vh] relative overflow-hidden group">
        <MaskReveal direction="top-to-bottom" duration={2}>
          <div className="w-full h-full relative">
            <SmartImage 
              src={project.images[0]} 
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out"
            />
            {/* Soft gradient to make text readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
          </div>
        </MaskReveal>
        
        {/* Project Meta overlay */}
        <div className="absolute bottom-0 left-0 w-full p-md md:p-xl flex flex-col md:flex-row justify-between items-end pb-xl md:pb-2xl">
          <div className="container mx-auto">
            <RevealText 
              text={project.title} 
              as="h2" 
              className="text-4xl md:text-6xl lg:text-8xl font-serif text-cream-500 tracking-tight leading-none"
            />
            
            <div className="flex items-center gap-xl mt-md md:mt-lg">
              <FadeIn delay={0.8} className="flex flex-col">
                <span className="text-cream-500/50 font-sans text-xs tracking-widest uppercase mb-1">Lokasyon</span>
                <span className="text-cream-500 font-sans font-light text-lg">{project.location}</span>
              </FadeIn>
              <FadeIn delay={1.0} className="flex flex-col">
                <span className="text-cream-500/50 font-sans text-xs tracking-widest uppercase mb-1">Yıl</span>
                <span className="text-cream-500 font-sans font-light text-lg">{project.year}</span>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
