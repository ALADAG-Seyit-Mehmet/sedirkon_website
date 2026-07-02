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
    id: "1",
    slug: "luna-kanepe",
    title: "Luna Kanepe",
    subtitle: "Zarif kıvrımlar, sonsuz konfor.",
    description: "Luna Kanepe, organik formları ve heykelsi duruşuyla yaşam alanınızın merkezinde yer almayı hak ediyor. Özel dokuma keten kumaşı ve gizli masif ahşap iskeletiyle zamansız bir başyapıt.",
    category: "oturma-gruplari",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=90&w=2000",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=90&w=2000",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=90&w=2000",
    ],
    dimensions: "G: 240cm x D: 105cm x Y: 78cm",
    materials: [
      { id: "m1", name: "Premium Keten - Ekru", type: "fabric", colorCode: "#F5F5F0" },
      { id: "m2", name: "Buklet - Antrasit", type: "fabric", colorCode: "#333333" },
      { id: "m3", name: "Doğal Ceviz (Ayaklar)", type: "wood", colorCode: "#5C4033" },
    ],
    relatedProducts: ["terra-berjer", "nox-yemek-masasi"],
    designerQuote: "Bir mobilya sadece oturulan bir eşya değil, mekana ruhunu veren sessiz bir heykeltıraştır.",
    philosophy: [
      "Luna'nın tasarım yolculuğu, doğadaki kusursuz asimetriyi incelemekle başladı. Amacımız, köşeli ve katı formların egemen olduğu modern evlere nefes aldıran, akışkan bir form yaratmaktı.",
      "İç iskeletinden dış kumaşına kadar her detay, ustalarımızın ellerinde yavaşça şekillendi. Makineleşmiş hız çağında, yavaşlığın ve ustalığın lüksünü kutluyoruz."
    ],
    craftsmanshipImages: [
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=90&w=1600",
      "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=90&w=1600"
    ],
    macroImages: [
      "https://images.unsplash.com/photo-1580584126903-c17d41830450?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=90&w=1200"
    ],
    specifications: [
      { label: "İskelet", value: "Fırınlanmış Gürgen ve Huş Kontrplak" },
      { label: "Oturum Süngeri", value: "35 HR Soft, Kaz Tüyü Katmanlı" },
      { label: "Ayak", value: "Masif Amerikan Cevizi, Mat Cila" },
      { label: "Kumaş", value: "%100 İtalyan Keten" },
      { label: "Üretim Süresi", value: "6 - 8 Hafta (El İşçiliği)" }
    ]
  },
  {
    id: "2",
    slug: "terra-berjer",
    title: "Terra Berjer",
    subtitle: "Dinamik denge, kusursuz oran.",
    description: "Oturma deneyimini yeniden tanımlayan Terra, minimalist metal iskeleti ve gövdeyi saran lüks deri kaplamasıyla hem bir sanat eseri hem de bir dinlenme alanı.",
    category: "oturma-gruplari",
    images: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=90&w=2000",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=90&w=2000",
    ],
    dimensions: "G: 85cm x D: 90cm x Y: 82cm",
    materials: [
      { id: "m4", name: "Anilin Deri - Taba", type: "leather", colorCode: "#8B4513" },
      { id: "m5", name: "Mat Siyah Metal", type: "metal", colorCode: "#1A1A1A" },
    ],
    relatedProducts: ["luna-kanepe"],
    designerQuote: "Zıtlıkların muazzam çekimi: Soğuk metalin keskinliği ile sıcak derinin sarıp sarmalayan yumuşaklığı.",
    philosophy: [
      "Terra Berjer, yerçekimiyle oynayan ince metal iskeletiyle mekanda adeta süzülüyor hissi yaratır. Minimalist bir strüktürün, insana nasıl bu kadar yüksek bir konfor sunabileceği sorusunun cevabıdır."
    ],
    craftsmanshipImages: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=90&w=1600"
    ],
    macroImages: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=90&w=1200"
    ],
    specifications: [
      { label: "İskelet", value: "Elektrostatik Boyalı Bükme Çelik" },
      { label: "Döşeme", value: "Poliüretan Kalıp Sünger" },
      { label: "Kılıf", value: "Doğal Gözenekli Anilin Dana Derisi" }
    ]
  },
  {
    id: "3",
    slug: "nox-yemek-masasi",
    title: "Nox Yemek Masası",
    subtitle: "Ahşabın en yalın hali.",
    description: "Geniş aile yemekleri ve özel davetler için tasarlandı. Nox, tek parça ceviz tablası ve monoblok metal ayaklarıyla endüstriyel lüksü yeniden yorumluyor.",
    category: "yemek-odalari",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=90&w=2000",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=90&w=2000",
    ],
    dimensions: "G: 220cm x D: 100cm x Y: 76cm",
    materials: [
      { id: "m6", name: "Amerikan Cevizi", type: "wood", colorCode: "#4A3525" },
      { id: "m5", name: "Mat Siyah Metal", type: "metal", colorCode: "#1A1A1A" },
    ],
    relatedProducts: ["luna-kanepe"],
    designerQuote: "Her ağaç gövdesi, doğanın milyonlarca yıllık günlüğüdür. Biz sadece bu günlüğü okunabilir kılıyoruz.",
    philosophy: [
      "Nox Yemek Masası, doğanın anarşik güzelliği ile insan yapımı geometrinin mükemmel birleşimini temsil eder. Üst tabladaki doğal damarlar, her masayı dünyada tek ve eşsiz kılar."
    ],
    craftsmanshipImages: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=90&w=1600"
    ],
    macroImages: [
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=90&w=1200"
    ],
    specifications: [
      { label: "Üst Tabla", value: "40mm Kalınlığında Masif Amerikan Cevizi" },
      { label: "Yüzey Koruma", value: "Doğal Yağlı, Su İtici Mat Katman" },
      { label: "Ayak", value: "Lazer Kesim Monoblok Çelik" },
      { label: "Kapasite", value: "8 - 10 Kişilik Oturum Alanı" }
    ]
  }
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
  {
    id: "p1",
    slug: "villa-bosphorus",
    title: "Villa Bosphorus",
    location: "İstanbul, Türkiye",
    year: "2023",
    category: "Residential",
    description: "Boğaz'ın zamansız silüetiyle bütünleşen, modern ve brütal hatlara sahip yalı projesi.",
    clientGoal: "Müşteri, hem geniş aile buluşmalarına hem de özel davetlere ev sahipliği yapabilecek, doğa ile iç içe, gösterişten uzak ama lüks bir yaşam alanı talep etti.",
    designPhilosophy: "Dış mekanın ışığını içeriye kesintisiz almak için devasa cam yüzeyler kullanıldı. Mobilyalarda ise meşe ve koyu anilin deri tercih edilerek mekanın soğuk brütalizmi ısıtıldı.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=90&w=1600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=90&w=1600"
    ],
    macroImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=90&w=1200"
    ],
    testimonial: "Sedirkon, sadece boşlukları doldurmadı; evin ruhunu baştan yazdı. Her bir mobilya parçası mekanın kendi doğasından doğmuş gibi hissettiriyor.",
    usedProducts: ["luna-kanepe", "monolith-masa"]
  },
  {
    id: "p2",
    slug: "alpine-retreat",
    title: "Alpine Retreat",
    location: "Uludağ, Bursa",
    year: "2022",
    category: "Residential",
    description: "Kış aylarının sert koşullarına tezat, içeride sıcak ve sarıp sarmalayan ahşap bir sığınak.",
    clientGoal: "Modern bir dağ evi konsepti.",
    designPhilosophy: "Ham ahşap dokular ve keten kumaşların yarattığı akustik konfor üzerine odaklanıldı.",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=90&w=1600"
    ],
    macroImages: [],
    testimonial: "Sıcak, organik ve olağanüstü dayanıklı.",
    usedProducts: ["luna-kanepe"]
  },
  {
    id: "p3",
    slug: "the-monochrome-office",
    title: "The Monochrome Office",
    location: "Levent, İstanbul",
    year: "2024",
    category: "Commercial",
    description: "Uluslararası bir mimarlık ofisinin minimal, siyah ağırlıklı ve odaklanmayı artıran çalışma alanı.",
    clientGoal: "Çalışanlar için sessiz, şık ve lüks bir ofis.",
    designPhilosophy: "Mat siyah çelik ve ceviz ağacının otoriter uyumu.",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=90&w=1600"
    ],
    macroImages: [],
    testimonial: "Mimari ile iç mekanın kusursuz bütünleşmesi.",
    usedProducts: ["monolith-masa"]
  }
];

export const CATEGORIES = [
  { id: "all", label: "Tüm Koleksiyon" },
  { id: "oturma-gruplari", label: "Oturma Grupları" },
  { id: "yemek-odalari", label: "Yemek Odaları" },
  { id: "yatak-odalari", label: "Yatak Odaları" },
  { id: "tamamlayici", label: "Tamamlayıcı Ürünler" },
];
