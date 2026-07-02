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
  description: "Zamanın ötesinde tasarımlar, üstün zanaat ve modern lüks anlayışıyla şekillenen Sedirkon Mobilya koleksiyonları.",
  keywords: ["Sedirkon", "Lüks Mobilya", "Zanaat", "Ahşap", "Tasarım", "İç Mimari"],
  authors: [{ name: "Sedirkon" }],
  creator: "Sedirkon Mobilya",
  publisher: "Sedirkon Mobilya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sedirkon.com"), // Değiştirilebilir
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Sedirkon Mobilya | Zanaatın ve Lüksün Zirvesi",
    description: "Zamanın ötesinde tasarımlar, üstün zanaat ve modern lüks anlayışıyla şekillenen Sedirkon Mobilya koleksiyonları.",
    url: "https://sedirkon.com",
    siteName: "Sedirkon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Örnek OG image
        width: 1200,
        height: 630,
        alt: "Sedirkon Mobilya Koleksiyonu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sedirkon Mobilya",
    description: "Zamanın ötesinde tasarımlar, üstün zanaat ve modern lüks anlayışı.",
    creator: "@sedirkon",
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
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-9999 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:font-bold">
          Ana içeriğe atla
        </a>
        <SearchProvider>
          <CursorProvider>
            <Cursor />
            <MediaProvider>
              <TransitionProvider>
                <SmoothScroll>
                  <Loader />
                  <ScrollIndicator />
                  <Navbar />
                  <div id="main-content" className="flex-1 w-full overflow-x-hidden">
                    {children}
                  </div>
                </SmoothScroll>
              </TransitionProvider>
            </MediaProvider>
          </CursorProvider>
        </SearchProvider>
      </body>
    </html>
  );
}
