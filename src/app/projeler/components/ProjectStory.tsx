import { Project } from "@/lib/data";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";

interface ProjectStoryProps {
  project: Project;
}

export function ProjectStory({ project }: ProjectStoryProps) {
  if (!project) return null;

  return (
    <section className="w-full py-[15vh] px-md md:px-xl container mx-auto bg-charcoal-950">
      
      <div className="text-center mb-4xl">
        <FadeIn delay={0.2}>
          <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase block mb-md">
            Örnek Vaka
          </span>
        </FadeIn>
        <RevealText 
          text="Projenin Anatomisi" 
          as="h2" 
          className="text-4xl md:text-6xl font-serif text-cream-500 tracking-tight leading-none"
        />
        <FadeIn delay={0.6}>
          <p className="mt-md text-cream-500/50 font-sans font-light tracking-widest uppercase text-sm">
            {project.title}
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2xl md:gap-4xl max-w-6xl mx-auto">
        
        {/* Client Goals */}
        <div className="flex flex-col border-t border-cream-500/20 pt-lg">
          <FadeIn delay={0.4}>
            <h3 className="font-serif text-2xl text-cream-500 mb-md">Müşteri Beklentisi</h3>
            <p className="text-cream-500/70 font-sans font-light text-lg leading-relaxed">
              {project.clientGoal}
            </p>
          </FadeIn>
        </div>

        {/* Design Philosophy */}
        <div className="flex flex-col border-t border-cream-500/20 pt-lg">
          <FadeIn delay={0.6}>
            <h3 className="font-serif text-2xl text-cream-500 mb-md">Tasarım Felsefesi</h3>
            <p className="text-cream-500/70 font-sans font-light text-lg leading-relaxed">
              {project.designPhilosophy}
            </p>
          </FadeIn>
        </div>

      </div>

    </section>
  );
}
