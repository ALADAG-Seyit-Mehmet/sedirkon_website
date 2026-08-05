import { ContactHero } from "./components/ContactHero";
import { ContactInfo } from "./components/ContactInfo";

export const metadata = {
  title: "İletişim | Sedirkon Mobilya",
  description: "Özel üretim mobilya projeleriniz ve siparişleriniz için Sedirkon Mobilya tasarım uzmanlarıyla iletişime geçin.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-charcoal-950 pt-32 pb-section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://sedirkon.com/iletisim#localbusiness",
                "name": "Sedirkon Mobilya Atölye & Showroom",
                "image": "https://sedirkon.com/og-image.jpg",
                "url": "https://sedirkon.com/iletisim",
                "telephone": "+905439402778",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Horozluhan, Doğantepe Sk. No/2",
                  "addressLocality": "Selçuklu",
                  "addressRegion": "Konya",
                  "postalCode": "42120",
                  "addressCountry": "TR"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 37.915, 
                  "longitude": 32.520 
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "19:00"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Özel ölçü mobilya siparişi verebilir miyim?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Evet, projelerinize ve mekanınıza özel ölçülerde mobilya üretimi yapmaktayız. Tasarım ekibimizle iletişime geçerek detaylı bilgi alabilirsiniz."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Mobilyalarınızda hangi malzemeleri kullanıyorsunuz?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Ürünlerimizin iskeletinde birinci sınıf Masif Gürgen kullanılmaktadır. Ayrıca yüksek kaliteli lüks kumaşlar ve titanyum detaylar tercih ediyoruz."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Showroom'unuz nerede bulunuyor?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Atölye ve showroom'umuz Konya'da Selçuklu ilçesinde, Horozluhan Mahallesi, Doğantepe Sokak No:2 adresinde bulunmaktadır."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
      <ContactHero />
      <ContactInfo />
    </main>
  );
}
