export type ProductMaterial = {
  id: string;
  name: string; // e.g. "Doğal Ceviz", "Mat Siyah"
  type: "wood" | "metal" | "fabric" | "leather";
  colorCode?: string;
  image?: string; // 2D representation for the configurator
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: "oturma-gruplari" | "yemek-odalari" | "yatak-odalari" | "tamamlayici";
  images: string[];
  dimensions: string; // e.g. "G: 220cm D: 95cm Y: 75cm"
  materials: ProductMaterial[];
  relatedProducts: string[]; // slugs
  // Phase 4: Editorial Fields
  designerQuote?: string;
  philosophy?: string[];
  craftsmanshipImages?: string[];
  macroImages?: string[];
  specifications?: { label: string; value: string }[];
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "4",
    slug: "defne",
    title: "Defne Koltuk Takımı",
    subtitle: "Defne serisi ile yaşam alanlarınıza yeni bir soluk.",
    description: "Zarif altın detaylar ve lüks dokularla sofistike bir duruş. Metalik altın çerçeveler ve ince bukle kumaş kombinasyonuyla evinizde prestijli bir atmosfer.",
    category: "oturma-gruplari",
    images: ["/takımlar/defne1.webp", "/takımlar/defne2.webp", "/takımlar/defne3.webp"],
    dimensions: "G: 230cm | D: 93cm | Y: 70cm",
    materials: [
      { id: "m1", name: "Troya Bukle", type: "fabric", colorCode: "#F5F5F0" },
      { id: "m3", name: "Titanyum Gold Metal", type: "metal", colorCode: "#D4AF37" },
    ],
    relatedProducts: [],
      specifications: [
        { label: "Kumaş", value: "TROYA" },
        { label: "Konsept", value: "Modern Bukle" },
        { label: "Kanepe", value: "G: 230 | D: 93 | Y: 70 cm" },
        { label: "Berjer", value: "G: 80 | D: 80 | Y: 80 cm" }
      ],
  },
  {
    id: "5",
    slug: "esinti",
    title: "Esinti Balkon Takımı",
    subtitle: "Esinti serisi ile yaşam alanlarınıza yeni bir soluk.",
    description: "Modern ve estetik hatların zarafetle buluştuğu Esinti serisi. Yaşam alanlarınıza ferahlık ve konfor katmak için özenle tasarlandı.",
    category: "oturma-gruplari",
    images: ["/takımlar/esinti2.webp", "/takımlar/esinti3.webp", "/takımlar/esinti4.webp", "/takımlar/esinti5.webp"],
    dimensions: "Detaylı bilgi için iletişime geçiniz.",
    materials: [
      { id: "m1", name: "Premium Keten", type: "fabric", colorCode: "#F5F5F0" },
      { id: "m3", name: "Masif Gürgen (Ayaklar)", type: "wood", colorCode: "#5C4033" },
    ],
    relatedProducts: [],
      specifications: [
        { label: "Kumaş", value: "Özel" },
        { label: "Konsept", value: "Ferah Yaşam" },
        { label: "Ölçüler", value: "Detaylı bilgi için iletişime geçiniz." }
      ],
  },
  {
    id: "6",
    slug: "goksu",
    title: "Göksu Koltuk Takımı",
    subtitle: "Göksu serisi ile yaşam alanlarınıza yeni bir soluk.",
    description: "Nordik minimalizmin cesur renk paletleriyle füzyonu. Bordo ve kremin cesur karışımı, masif gürgen ayaklar ve cam detaylarla mükemmel bir denge sağladı.",
    category: "oturma-gruplari",
    images: ["/takımlar/göksu1.webp", "/takımlar/göksu2.webp", "/takımlar/göksu3.webp"],
    dimensions: "G: 240cm | D: 92cm | Y: 82cm",
    materials: [
      { id: "m1", name: "İpek Kadife", type: "fabric", colorCode: "#F5F5F0" },
      { id: "m3", name: "Masif Gürgen (Ayaklar)", type: "wood", colorCode: "#5C4033" },
    ],
    relatedProducts: [],
      specifications: [
        { label: "Kumaş", value: "İPEK" },
        { label: "Konsept", value: "Soft Kadife" },
        { label: "Kanepe", value: "G: 240 | D: 92 | Y: 82 cm" },
        { label: "Berjer", value: "G: 79 | D: 92 | Y: 95 cm" }
      ],
  },
  {
    id: "7",
    slug: "ilkim",
    title: "İlkim Koltuk Takımı",
    subtitle: "İlkim serisi ile yaşam alanlarınıza yeni bir soluk.",
    description: "Yumuşak dokular ve organik ahşap formların huzur veren buluşması. Birinci sınıf gürgen detayları ve dokulu keten döşemesiyle hazırlanan uyumlu modern yerleşim.",
    category: "oturma-gruplari",
    images: ["/takımlar/ilkim1.webp", "/takımlar/ilkim2.webp", "/takımlar/ilkim3.webp"],
    dimensions: "G: 244cm | D: 91cm | Y: 82cm",
    materials: [
      { id: "m1", name: "Dokulu Keten", type: "fabric", colorCode: "#F5F5F0" },
      { id: "m3", name: "Masif Gürgen (Ayaklar)", type: "wood", colorCode: "#5C4033" },
    ],
    relatedProducts: [],
      specifications: [
        { label: "Kumaş", value: "TROYA/CASA" },
        { label: "Konsept", value: "Rafine Doku" },
        { label: "Kanepe", value: "G: 244 | D: 91 | Y: 82 cm" },
        { label: "Berjer", value: "G: 63 | D: 90 | Y: 94 cm" }
      ],
  },
  {
    id: "8",
    slug: "kehribar",
    title: "Kehribar Koltuk Takımı",
    subtitle: "Kehribar serisi ile yaşam alanlarınıza yeni bir soluk.",
    description: "Sıcaklık ve klasik zarafetin modern konforla yeniden yorumlanması. Derin oturum alanı ve peluş sırt minderleriyle üstün rahatlık arayanlar için tasarlandı.",
    category: "oturma-gruplari",
    images: ["/takımlar/kehribar1.webp", "/takımlar/kehribar2.webp", "/takımlar/kehribar3.webp"],
    dimensions: "G: 228cm | D: 90cm | Y: 83cm",
    materials: [
      { id: "m1", name: "Amazon Kumaş", type: "fabric", colorCode: "#F5F5F0" },
      { id: "m3", name: "Masif Gürgen (Ayaklar)", type: "wood", colorCode: "#5C4033" },
    ],
    relatedProducts: [],
      specifications: [
        { label: "Kumaş", value: "AMAZON" },
        { label: "Konsept", value: "Lüks Yumuşaklık" },
        { label: "Kanepe", value: "G: 228 | D: 90 | Y: 83 cm" },
        { label: "Berjer", value: "G: 79 | D: 92 | Y: 83 cm" }
      ],
  },
  {
    id: "9",
    slug: "maksi",
    title: "Maksi Koltuk Takımı",
    subtitle: "Maksi serisi ile yaşam alanlarınıza yeni bir soluk.",
    description: "Modern hatların ve geniş oturum alanlarının ustaca birleşimi. Aile boyu konfor için tasarlanan ekstra geniş yapısı ve fonksiyonel özellikleriyle yaşam alanınızın yeni odak noktası.",
    category: "oturma-gruplari",
    images: ["/takımlar/maksi1.webp", "/takımlar/maksi2.webp", "/takımlar/maksi3.webp"],
    dimensions: "G: 208cm | D: 80cm | Y: 85cm",
    materials: [
      { id: "m1", name: "Mirza Kumaş", type: "fabric", colorCode: "#F5F5F0" },
      { id: "m3", name: "Masif Gürgen (Ayaklar)", type: "wood", colorCode: "#5C4033" },
    ],
    relatedProducts: [],
      specifications: [
        { label: "Kumaş", value: "MİRZA" },
        { label: "Konsept", value: "Şehirli Modern" },
        { label: "Kanepe", value: "G: 208 | D: 80 | Y: 85 cm" },
        { label: "Berjer", value: "G: 74 | D: 80 | Y: 85 cm" }
      ],
  },
  {
    id: "10",
    slug: "suna",
    title: "Suna Koltuk Takımı",
    subtitle: "Suna serisi ile yaşam alanlarınıza yeni bir soluk.",
    description: "Organik kıvrımları ve ekstra derin oturum alanıyla (110cm) bulutların üzerinde hissettiren eşsiz bir deneyim. Troya kumaşın yumuşak dokusuyla modern yaşam alanlarında zarif bir sığınak.",
    category: "oturma-gruplari",
    images: ["/takımlar/suna1.webp", "/takımlar/suna2.webp", "/takımlar/suna3.webp"],
    dimensions: "G: 244cm | D: 110cm | Y: 83cm",
    materials: [
      { id: "m1", name: "Troya Kumaş", type: "fabric", colorCode: "#F5F5F0" },
      { id: "m3", name: "Masif Gürgen (Ayaklar)", type: "wood", colorCode: "#5C4033" },
    ],
    relatedProducts: [],
      specifications: [
        { label: "Kumaş", value: "TROYA" },
        { label: "Konsept", value: "Organik Lüks" },
        { label: "Kanepe", value: "G: 244 | D: 110 | Y: 83 cm" },
        { label: "Berjer", value: "G: 79 | D: 92 | Y: 83 cm" }
      ],
  },
  {
    id: "11",
    slug: "suna-kose",
    title: "Suna Köşe Takımı",
    subtitle: "Suna serisi ile yaşam alanlarınıza yeni bir soluk.",
    description: "Organik kıvrımları ve ekstra geniş oturum alanıyla bulutların üzerinde hissettiren köşe takımı konforu. Troya kumaşın yumuşak dokusuyla kalabalık aileler için zarif bir sığınak.",
    category: "oturma-gruplari",
    images: ["/takımlar/sunaköşe1.webp", "/takımlar/sunaköşe2.webp", "/takımlar/sunaköşe3.webp"],
    dimensions: "G: 320x320cm | D: 110cm | Y: 83cm",
    materials: [
      { id: "m1", name: "Troya Kumaş", type: "fabric", colorCode: "#F5F5F0" },
      { id: "m3", name: "Masif Gürgen (Ayaklar)", type: "wood", colorCode: "#5C4033" },
    ],
    relatedProducts: [],
      specifications: [
        { label: "Kumaş", value: "TROYA" },
        { label: "Konsept", value: "Organik Lüks" },
        { label: "Köşe", value: "G: 320x320 | D: 110 | Y: 83 cm" },
        { label: "Berjer", value: "G: 79 | D: 92 | Y: 83 cm" }
      ],
  },
  {
    id: "12",
    slug: "v2goksu",
    title: "V2 Göksu Koltuk Takımı",
    subtitle: "V2 serisi ile yaşam alanlarınıza yeni bir soluk.",
    description: "Zamansız kadifenin modern hatlarla buluştuğu Göksu serisi, konforu en şık haliyle sunuyor. Pastel tonlar ve rafine detayların mükemmel dengesi.",
    category: "oturma-gruplari",
    images: ["/takımlar/v2göksu1.webp", "/takımlar/v2göksu2.webp", "/takımlar/v2göksu3.webp"],
    dimensions: "G: 240cm | D: 92cm | Y: 82cm",
    materials: [
      { id: "m1", name: "Neva Kadife", type: "fabric", colorCode: "#F5F5F0" },
      { id: "m3", name: "Masif Gürgen (Ayaklar)", type: "wood", colorCode: "#5C4033" },
    ],
    relatedProducts: [],
      specifications: [
        { label: "Kumaş", value: "NEVA" },
        { label: "Konsept", value: "Doğal Keten" },
        { label: "Kanepe", value: "G: 240 | D: 92 | Y: 82 cm" },
        { label: "Berjer", value: "G: 79 | D: 92 | Y: 95 cm" }
      ],
  },
  {
    id: "13",
    slug: "v2ilkim",
    title: "V2 İlkim Koltuk Takımı",
    subtitle: "V2 serisi ile yaşam alanlarınıza yeni bir soluk.",
    description: "Organik formların ve yumuşak geçişlerin mükemmel uyumu. Her detayda hissedilen sıcaklık.",
    category: "oturma-gruplari",
    images: ["/takımlar/v2ilkim1.webp", "/takımlar/v2ilkim2.webp", "/takımlar/v2ilkim3.webp"],
    dimensions: "G: 244cm | D: 91cm | Y: 82cm",
    materials: [
      { id: "m1", name: "Troya Keten", type: "fabric", colorCode: "#F5F5F0" },
      { id: "m3", name: "Masif Gürgen (Ayaklar)", type: "wood", colorCode: "#5C4033" },
    ],
    relatedProducts: [],
      specifications: [
        { label: "Kumaş", value: "TROYA" },
        { label: "Konsept", value: "Zamansız Tasarım" },
        { label: "Kanepe", value: "G: 244 | D: 91 | Y: 82 cm" },
        { label: "Berjer", value: "G: 63 | D: 90 | Y: 94 cm" }
      ],
  },
  {
    id: "14",
    slug: "v2kehribar",
    title: "V2 Kehribar Koltuk Takımı",
    subtitle: "V2 serisi ile yaşam alanlarınıza yeni bir soluk.",
    description: "Sıcaklık ve lüksün modern formda yeniden doğuşu. Yenilenen detaylar ve güçlendirilmiş oturum ile eşsiz bir konfor deneyimi.",
    category: "oturma-gruplari",
    images: ["/takımlar/v2kehribar1.webp", "/takımlar/v2kehribar2.webp", "/takımlar/v2kehribar3.webp"],
    dimensions: "G: 228cm | D: 90cm | Y: 83cm",
    materials: [
      { id: "m1", name: "Puka Kumaş", type: "fabric", colorCode: "#F5F5F0" },
      { id: "m3", name: "Masif Gürgen (Ayaklar)", type: "wood", colorCode: "#5C4033" },
    ],
    relatedProducts: [],
      specifications: [
        { label: "Kumaş", value: "PUKA" },
        { label: "Konsept", value: "Zengin Doku" },
        { label: "Kanepe", value: "G: 228 | D: 90 | Y: 83 cm" },
        { label: "Berjer", value: "G: 79 | D: 92 | Y: 83 cm" }
      ],
  },
  {
    id: "15",
    slug: "v2suna-kose",
    title: "V2 Suna Köşe Takımı",
    subtitle: "V2 serisi ile yaşam alanlarınıza yeni bir soluk.",
    description: "Modern ve rafine dokunuşlarla yenilenen Suna Köşe V2, organik kıvrımları ve üstün konforu bir arada sunuyor. Yaşam alanlarınıza ferahlık ve şıklık katan yeni nesil tasarım.",
    category: "oturma-gruplari",
    images: ["/takımlar/v2sunaköşe1.webp", "/takımlar/v2sunaköşe2.webp", "/takımlar/v2sunaköşe3.webp"],
    dimensions: "G: 320x320cm | D: 110cm | Y: 83cm",
    materials: [
      { id: "m1", name: "Neva Kumaş", type: "fabric", colorCode: "#F5F5F0" },
      { id: "m3", name: "Masif Gürgen (Ayaklar)", type: "wood", colorCode: "#5C4033" },
    ],
    relatedProducts: [],
      specifications: [
        { label: "Kumaş", value: "NEVA" },
        { label: "Konsept", value: "Sofistike Konfor" },
        { label: "Köşe", value: "G: 320x320 | D: 110 | Y: 83 cm" },
        { label: "Berjer", value: "G: 79 | D: 92 | Y: 83 cm" }
      ],
  },
  {
    id: "16",
    slug: "v3ilkim",
    title: "V3 İlkim Koltuk Takımı",
    subtitle: "V3 serisi ile yaşam alanlarınıza yeni bir soluk.",
    description: "Şehirli yaşamın enerjisini yansıtan dinamik bir tasarım. Geniş oturum alanı ve modüler yapısıyla fonksiyonelliği ön plana çıkaran modern bir yaklaşım.",
    category: "oturma-gruplari",
    images: ["/takımlar/v3ilkim1.webp", "/takımlar/v3ilkim2.webp", "/takımlar/v3ilkim3.webp"],
    dimensions: "G: 244cm | D: 91cm | Y: 82cm",
    materials: [
      { id: "m1", name: "Troya Keten", type: "fabric", colorCode: "#F5F5F0" },
      { id: "m3", name: "Masif Gürgen (Ayaklar)", type: "wood", colorCode: "#5C4033" },
    ],
    relatedProducts: [],
      specifications: [
        { label: "Kumaş", value: "TROYA" },
        { label: "Konsept", value: "Zamansız Tasarım" },
        { label: "Kanepe", value: "G: 244 | D: 91 | Y: 82 cm" },
        { label: "Berjer", value: "G: 63 | D: 90 | Y: 94 cm" }
      ],
  },
];

export type Project = {
  id: string;
  slug: string;
  title: string;
  location: string;
  year: string;
  category: "Residential" | "Commercial";
  description: string;
  clientGoal: string;
  designPhilosophy: string;
  images: string[];
  macroImages: string[];
  testimonial: string;
  usedProducts: string[]; // slugs of products
};

export const MOCK_PROJECTS: Project[] = [
];

export const CATEGORIES = [
  { id: "all", label: "Tüm Koleksiyon" },
  { id: "oturma-gruplari", label: "Oturma Grupları" },
  { id: "yemek-odalari", label: "Yemek Odaları" },
  { id: "yatak-odalari", label: "Yatak Odaları" },
  { id: "tamamlayici", label: "Tamamlayıcı Ürünler" },
];
