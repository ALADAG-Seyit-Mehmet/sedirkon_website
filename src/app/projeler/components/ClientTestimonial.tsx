import { FadeIn } from "@/components/motion/FadeIn";

interface ClientTestimonialProps {
  testimonial: string;
}

export function ClientTestimonial({ testimonial }: ClientTestimonialProps) {
  if (!testimonial) return null;

  return (
    <section className="w-full py-4xl md:py-section px-md md:px-xl bg-charcoal-900 flex items-center justify-center">
      <div className="container mx-auto max-w-4xl text-center relative">
        
        {/* Large Decorative Quotes */}
        <span className="absolute -top-16 md:-top-24 left-1/2 -translate-x-1/2 text-9xl font-serif text-cream-500/5 select-none leading-none">
          &ldquo;
        </span>

        <FadeIn delay={0.3} duration={2}>
          <blockquote className="relative z-10 font-serif text-2xl md:text-4xl lg:text-5xl text-cream-500 leading-snug tracking-wide italic">
            &ldquo;{testimonial}&rdquo;
          </blockquote>
        </FadeIn>

        <FadeIn delay={0.9} duration={1.5}>
          <div className="mt-xl flex flex-col items-center justify-center gap-md">
            <div className="w-12 h-[1px] bg-bronze-500" />
            <span className="font-sans text-xs tracking-[0.3em] text-cream-500/50 uppercase">
              Proje Sahibi
            </span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
