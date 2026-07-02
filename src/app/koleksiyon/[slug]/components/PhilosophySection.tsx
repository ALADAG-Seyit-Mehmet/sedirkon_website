import { Product } from "@/lib/data";
import { RevealText } from "@/components/motion/RevealText";
import { FadeIn } from "@/components/motion/FadeIn";

interface PhilosophySectionProps {
  product: Product;
}

export function PhilosophySection({ product }: PhilosophySectionProps) {
  if (!product.philosophy || product.philosophy.length === 0) return null;

  return (
    <section className="w-full py-section px-md md:px-xl container mx-auto bg-charcoal-950">
      
      {/* Title */}
      <div className="mb-2xl md:mb-4xl text-center md:text-left">
        <RevealText 
          text="Tasarım Felsefesi" 
          as="h2" 
          className="text-3xl md:text-5xl font-serif text-cream-500 tracking-wide"
        />
        <FadeIn delay={0.4}>
          <div className="w-12 h-[1px] bg-bronze-500 mt-md mx-auto md:mx-0" />
        </FadeIn>
      </div>

      {/* Split Layout Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2xl md:gap-4xl items-start">
        
        {/* Left Side: Empty space or large quote */}
        <div className="hidden md:block">
          <FadeIn delay={0.6} duration={1.5}>
            <p className="text-4xl lg:text-5xl font-serif text-cream-500/20 leading-tight italic">
              &ldquo;Zamansızlık, <br/>
              <span className="text-cream-500/40">ustalığın sessizliğinde</span> <br/>
              gizlidir.&rdquo;
            </p>
          </FadeIn>
        </div>

        {/* Right Side: Philosophy Text Paragraphs */}
        <div className="flex flex-col gap-lg md:gap-xl">
          {product.philosophy.map((paragraph, idx) => (
            <FadeIn key={idx} delay={0.8 + (idx * 0.2)} duration={1.5}>
              <p className="text-cream-500/90 font-sans text-xl md:text-2xl font-light leading-relaxed">
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>

      </div>

    </section>
  );
}
