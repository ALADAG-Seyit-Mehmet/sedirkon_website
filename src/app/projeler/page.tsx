import { ProjectHero } from "./components/ProjectHero";
import { FeaturedProject } from "./components/FeaturedProject";
import { ProjectTimeline } from "./components/ProjectTimeline";
import { ResidentialCommercial } from "./components/ResidentialCommercial";
import { ProjectStory } from "./components/ProjectStory";
import { MacroInterior } from "./components/MacroInterior";
import { ProductsUsed } from "./components/ProductsUsed";
import { ClientTestimonial } from "./components/ClientTestimonial";
import { MOCK_PROJECTS } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mimari Projeler | Sedirkon Mobilya",
  description: "Mekânların karakterini şekillendiriyoruz. Sedirkon mobilyalarının dönüştürdüğü gerçek yaşam alanları.",
};

export default function ProjectsPage() {
  const featuredProject = MOCK_PROJECTS.find(p => p.slug === "villa-bosphorus") || MOCK_PROJECTS[0];

  return (
    <main className="min-h-screen bg-charcoal-950">
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Sedirkon Mimari Projeler",
            "description": "Sedirkon mobilyalarının kullanıldığı lüks konut ve ticari mimari projeler.",
            "url": "https://sedirkon.com/projeler",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": MOCK_PROJECTS.map((proj, idx) => ({
                "@type": "ListItem",
                "position": idx + 1,
                "item": {
                  "@type": "CreativeWork",
                  "name": proj.title,
                  "image": proj.images[0],
                  "description": proj.description
                }
              }))
            }
          }),
        }}
      />

      <ProjectHero />
      
      <FeaturedProject project={featuredProject} />
      
      <ProjectTimeline projects={MOCK_PROJECTS} />
      
      <ResidentialCommercial projects={MOCK_PROJECTS} />
      
      {/* The story of the featured project to provide a deep dive without needing a separate page yet */}
      <ProjectStory project={featuredProject} />
      
      <MacroInterior project={featuredProject} />
      
      <ProductsUsed productSlugs={featuredProject.usedProducts} />
      
      <ClientTestimonial testimonial={featuredProject.testimonial} />

    </main>
  );
}
