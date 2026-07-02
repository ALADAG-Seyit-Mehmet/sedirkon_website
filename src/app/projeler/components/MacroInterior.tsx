"use client";

import { useRef, useEffect } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { FadeIn } from "@/components/motion/FadeIn";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMedia, MediaAsset } from "@/components/media/MediaContext";
import { useCursor } from "@/components/interactions/CursorContext";
import { ImageMotion } from "@/components/interactions/ImageMotion";
import { Project } from "@/lib/data";
import { Maximize2 } from "lucide-react";

interface MacroInteriorProps {
  project: Project;
}

export function MacroInterior({ project }: MacroInteriorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openMedia } = useMedia();
  const { setCursorType } = useCursor();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Create a slight parallax effect for the images
      gsap.to(".macro-img", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!project || !project.macroImages || project.macroImages.length === 0) return null;

  const galleryItems: MediaAsset[] = project.macroImages.map((src, idx) => ({
    id: `macro-${idx}`,
    type: "image",
    src: src,
    title: `${project.title} Makro İç Mekan Detayı ${idx + 1}`,
    collection: "Sedirkon Atelier"
  }));

  return (
    <section ref={containerRef} className="py-[10vh] border-t border-cream-500/10">
      <div className="container mx-auto px-md md:px-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl md:gap-4xl">
          {project.macroImages.map((img, idx) => (
            <FadeIn key={idx} delay={0.2 * idx} className={idx === 1 ? "md:mt-4xl" : ""}>
              <div 
                className="w-full aspect-[3/4] md:aspect-square bg-charcoal-900 relative overflow-hidden group"
                onMouseEnter={() => setCursorType("zoom")}
                onMouseLeave={() => setCursorType("default")}
                onClick={(e) => openMedia(galleryItems, idx, `project-${project.id}-macro`, e.currentTarget)}
              >
                <ImageMotion className="absolute inset-0 macro-img scale-110" zoomIntensity={1.03} perspectiveIntensity={15}>
                  <SmartImage
                    src={img}
                    alt={`${project.title} Makro İç Mekan Detayı ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/20 transition-colors duration-500" />
                </ImageMotion>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
