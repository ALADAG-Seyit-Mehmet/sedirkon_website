import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/loading/Loader";
import Navbar from "@/components/navigation/Navbar";
import { ScrollIndicator } from "@/components/interactions/ScrollIndicator";
import { TransitionProvider } from "@/components/motion/TransitionProvider";
import { MediaProvider } from "@/components/media/MediaProvider";
import { CursorProvider } from "@/components/interactions/CursorContext";
import { Cursor } from "@/components/interactions/Cursor";
import { SearchProvider } from "@/components/search/SearchProvider";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sedirkon Mobilya | Zanaatın ve Lüksün Zirvesi",
    template: "%s | Sedirkon Mobilya",
  },
  description: "Zamanın ötesinde tasarımlar, üstün zanaat ve modern lüks anlayışıyla şekillenen Sedirkon Mobilya koleksiyonları. Özel tasarım mobilyalar ile yaşam alanlarınızı dönüştürün.",
  keywords: ["Sedirkon", "Lüks Mobilya", "Zanaat", "Ahşap Mobilya", "Özel Tasarım Mobilya", "İç Mimari", "Konya Mobilya", "Premium Mobilya", "El İşçiliği"],
  authors: [{ name: "Sedirkon Mobilya" }],
  creator: "Sedirkon Mobilya",
  publisher: "Sedirkon Mobilya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sedirkon.com"),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Sedirkon Mobilya | Zanaatın ve Lüksün Zirvesi",
    description: "Zamanın ötesinde tasarımlar, üstün zanaat ve modern lüks anlayışıyla şekillenen Sedirkon Mobilya koleksiyonları.",
    url: "https://sedirkon.com",
    siteName: "Sedirkon Mobilya",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sedirkon Mobilya Lüks Koleksiyonu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sedirkon Mobilya",
    description: "Zamanın ötesinde tasarımlar, üstün zanaat ve modern lüks anlayışı.",
    creator: "@sedirkon",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Kullanıcı kendi kodunu eklemeli
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${manrope.variable} ${playfair.variable} antialiased`}
    >
      <body className="flex flex-col bg-charcoal-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://sedirkon.com/#organization",
                  "name": "Sedirkon Mobilya",
                  "url": "https://sedirkon.com",
                  "logo": "https://sedirkon.com/logo.png",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+90-543-940-2778",
                    "contactType": "customer service",
                    "areaServed": "TR",
                    "availableLanguage": "Turkish"
                  },
                  "sameAs": [
                    "https://instagram.com/sedirkon"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://sedirkon.com/#website",
                  "url": "https://sedirkon.com",
                  "name": "Sedirkon Mobilya",
                  "publisher": {
                    "@id": "https://sedirkon.com/#organization"
                  }
                }
              ]
            })
          }}
        />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-9999 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:font-bold">
          Ana içeriğe atla
        </a>
        <TransitionProvider>
          <SearchProvider>
            <CursorProvider>
              <Cursor />
              <MediaProvider>
                <SmoothScroll>
                  <Loader />
                  <ScrollIndicator />
                  <Navbar />
                  <div id="main-content" className="flex-1 w-full overflow-x-hidden">
                    {children}
                  </div>
                </SmoothScroll>
              </MediaProvider>
            </CursorProvider>
          </SearchProvider>
        </TransitionProvider>
      </body>
    </html>
  );
}
