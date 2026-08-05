import { Metadata } from "next";
import Hero from "@/components/Hero";
import Showroom from "@/components/Showroom";

export const metadata: Metadata = {
  title: "Sedirkon Mobilya | Zanaatın ve Lüksün Zirvesi",
  description: "Zamanın ötesinde tasarımlar, üstün zanaat ve modern lüks anlayışıyla şekillenen Sedirkon Mobilya koleksiyonları. Lüks ve özel tasarım mobilyalar.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Sedirkon Mobilya | Anasayfa",
            "description": "Zamanın ötesinde tasarımlar, üstün zanaat ve modern lüks anlayışıyla şekillenen Sedirkon Mobilya.",
            "url": "https://sedirkon.com",
            "publisher": {
              "@type": "Organization",
              "name": "Sedirkon Mobilya"
            }
          })
        }}
      />
      <Hero />
      <Showroom />
    </main>
  );
}
