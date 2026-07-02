import { Project } from "@/lib/data";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";

interface ProjectTimelineProps {
  projects: Project[];
}

export function ProjectTimeline({ projects }: ProjectTimelineProps) {
  // Sort projects by year descending
  const sortedProjects = [...projects].sort((a, b) => parseInt(b.year) - parseInt(a.year));

  return (
    <section className="w-full py-3xl md:py-section px-md md:px-xl container mx-auto bg-charcoal-950 border-t border-cream-500/10">
      
      <div className="mb-4xl md:mb-section flex justify-between items-end">
        <div>
          <FadeIn delay={0.2}>
            <span className="text-bronze-500 font-sans text-xs tracking-[0.3em] uppercase block mb-md">
              Zaman Çizelgesi
            </span>
          </FadeIn>
          <RevealText 
            text="Tamamlanan Projeler" 
            as="h2" 
            className="text-4xl md:text-5xl font-serif text-cream-500 tracking-tight leading-none"
          />
        </div>
      </div>

      <div className="flex flex-col border-t border-cream-500/20">
        {sortedProjects.map((project, idx) => (
          <FadeIn key={project.id} delay={0.2 + (idx * 0.1)}>
            <div className="group relative flex flex-col md:flex-row md:items-center justify-between py-lg md:py-2xl border-b border-cream-500/10 hover:bg-charcoal-900/50 transition-colors duration-500 px-md cursor-pointer overflow-hidden">
              
              {/* Year */}
              <div className="w-full md:w-1/6 mb-xs md:mb-0 relative z-10">
                <span className="text-cream-500/40 font-sans text-sm tracking-widest uppercase group-hover:text-bronze-500 transition-colors duration-500">
                  {project.year}
                </span>
              </div>
              
              {/* Title */}
              <div className="w-full md:w-3/6 mb-xs md:mb-0 relative z-10">
                <h3 className="text-cream-500 font-serif text-2xl md:text-4xl group-hover:translate-x-4 transition-transform duration-500">
                  {project.title}
                </h3>
              </div>

              {/* Location & Category */}
              <div className="w-full md:w-2/6 flex justify-between md:justify-end gap-xl relative z-10">
                <span className="text-cream-500/60 font-sans font-light text-sm md:text-base">
                  {project.location}
                </span>
                <span className="text-cream-500/40 font-sans text-xs tracking-widest uppercase">
                  {project.category}
                </span>
              </div>

            </div>
          </FadeIn>
        ))}
      </div>

    </section>
  );
}
