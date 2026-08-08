import { FadeIn } from "@/components/motion/FadeIn";
import { MapPin, Mail, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "905439402778"; // Fatih Öğeç (geçici yönlendirme)
const WHATSAPP_MESSAGE = "Merhaba, Sedirkon mobilya koleksiyonu hakkında bilgi almak istiyorum.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export function ContactInfo() {
  return (
    <section className="w-full container mx-auto px-4 md:px-8 lg:px-xl mt-lg md:mt-2xl max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-md lg:gap-lg">
        
        {/* Left Side: WhatsApp Primary CTA */}
        <div className="lg:col-span-7">
          <FadeIn delay={0.2} duration={1.0} className="h-full">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col justify-center h-full group relative bg-charcoal-900 border border-cream-500/10 rounded-3xl overflow-hidden p-lg md:p-xl transition-colors duration-500 hover:border-[#25D366]/30"
            >
              {/* Subtle hover background effect */}
              <div className="absolute inset-0 bg-linear-to-br from-[#25D366]/0 to-[#25D366]/0 group-hover:from-[#25D366]/10 group-hover:to-transparent transition-colors duration-700 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col justify-between gap-xl">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mb-md transition-transform duration-500 group-hover:scale-110">
                    <svg className="w-7 h-7 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif text-cream-500 tracking-tight leading-tight mb-md">
                    Projelerinizi <br/>
                    <span className="text-[#25D366]">WhatsApp</span>'tan <br/>
                    Birlikte Şekillendirelim
                  </h2>
                  <p className="text-cream-500/70 font-sans text-base font-light leading-relaxed max-w-sm">
                    Tasarım danışmanlarımıza doğrudan ulaşıp hızlıca fiyat teklifi alabilirsiniz.
                  </p>
                </div>
                
                <div className="flex items-center gap-md">
                  <div className="px-md py-3 rounded-full bg-[#25D366] text-white font-sans text-xs font-semibold tracking-wide transition-transform duration-300 group-hover:scale-105 flex items-center gap-2">
                    Hemen Mesaj Gönder
                  </div>
                </div>
              </div>
            </a>
          </FadeIn>
        </div>

        {/* Right Side: Other Contact Info */}
        <div className="lg:col-span-5 flex flex-col gap-md">
          <FadeIn delay={0.3} duration={1.0} className="flex-1">
            <div className="h-full bg-charcoal-900 border border-cream-500/10 rounded-3xl p-lg flex flex-col justify-center gap-lg hover:border-bronze-500/20 transition-colors duration-500">
              
              {/* Address */}
              <div className="flex items-start gap-md group cursor-default">
                <div className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center shrink-0 group-hover:bg-bronze-500/10 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-bronze-500" />
                </div>
                <div className="pt-1">
                  <h3 className="text-cream-500 font-sans text-xs font-medium uppercase tracking-widest mb-1">Atölye & Showroom</h3>
                  <p className="text-cream-500/70 font-sans text-sm font-light leading-relaxed">
                    Horozluhan, Doğantepe Sk. No/2<br />
                    42120 Selçuklu / Konya
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-cream-500/10" />

              {/* Phone */}
              <div className="flex items-start gap-md group cursor-default">
                <div className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center shrink-0 group-hover:bg-bronze-500/10 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-bronze-500" />
                </div>
                <div className="pt-1">
                  <h3 className="text-cream-500 font-sans text-xs font-medium uppercase tracking-widest mb-2">Telefon</h3>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-cream-500/50 font-sans text-xs">Fatih Öğeç</span>
                      <a href="tel:+905439402778" className="text-cream-500/80 font-sans text-sm font-light hover:text-cream-500 transition-colors">
                        +90 543 940 2778
                      </a>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-cream-500/50 font-sans text-xs">Mehmetali Öğeç</span>
                      <a href="tel:+905439145472" className="text-cream-500/80 font-sans text-sm font-light hover:text-cream-500 transition-colors">
                        +90 543 914 5472
                      </a>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-cream-500/50 font-sans text-xs">Abdullah Öğeç</span>
                      <a href="tel:+905544058489" className="text-cream-500/80 font-sans text-sm font-light hover:text-cream-500 transition-colors">
                        +90 554 405 8489
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </FadeIn>

          {/* Social Media Mini Card */}
          <FadeIn delay={0.4} duration={1.0}>
            <a 
              href="https://instagram.com/sedirkon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-charcoal-900 border border-cream-500/10 rounded-3xl p-lg flex items-center justify-between group hover:border-bronze-500/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center group-hover:bg-bronze-500/10 transition-colors duration-300">
                  <svg className="w-4 h-4 text-cream-500 group-hover:text-bronze-500 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-cream-500 font-sans text-xs font-medium uppercase tracking-widest mb-1">Instagram</h3>
                  <p className="text-cream-500/60 font-sans text-sm font-light">@sedirkon</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full border border-cream-500/20 flex items-center justify-center group-hover:border-bronze-500 group-hover:bg-bronze-500 transition-all duration-300">
                <svg className="w-3 h-3 text-cream-500 group-hover:text-charcoal-950 transition-colors duration-300 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
