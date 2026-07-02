import { SearchItem } from "./types";
import { MOCK_PRODUCTS, MOCK_PROJECTS, CATEGORIES } from "@/lib/data";

// This simulates fetching data and normalizing it from the local data store.
export class LocalDataAdapter {
  async fetchItems(): Promise<SearchItem[]> {
    const items: SearchItem[] = [];

    // Projects
    MOCK_PROJECTS.forEach(p => {
      items.push({
        id: `project-${p.id}`,
        type: "project",
        title: p.title,
        description: p.description,
        url: `/projeler/${p.slug}`,
        tags: [p.location, p.year, "proje", "mimari", "iç mimari", "project", "architecture"].filter(Boolean) as string[],
        image: p.images[0]
      });
    });

    // Products (as Collections/Products)
    MOCK_PRODUCTS.forEach(prod => {
      items.push({
        id: `product-${prod.id}`,
        type: "product",
        title: prod.title,
        description: prod.subtitle,
        url: `/koleksiyon/${prod.slug}`,
        tags: ["ürün", "product", prod.slug, "mobilya", prod.category, "koleksiyon"],
        image: prod.images[0]
      });
    });

    // Categories
    CATEGORIES.forEach(c => {
      if (c.id !== "all") {
        items.push({
          id: `category-${c.id}`,
          type: "collection",
          title: c.label,
          description: `${c.label} Koleksiyonu`,
          url: `/koleksiyon?kategori=${c.id}`,
          tags: ["kategori", "category", c.label, "koleksiyon"],
        });
      }
    });

    // Static Pages
    const pages = [
      { id: "home", title: "Ana Sayfa", url: "/" },
      { id: "collection", title: "Koleksiyon", url: "/koleksiyon" },
      { id: "projects", title: "Projeler", url: "/projeler" },
      { id: "workshop", title: "Atölye", url: "/atolye" },
      { id: "materials", title: "Malzemeler", url: "/malzemeler" },
    ];

    pages.forEach(p => {
      items.push({
        id: `page-${p.id}`,
        type: "page",
        title: p.title,
        description: `Sedirkon ${p.title} Sayfası`,
        url: p.url,
        tags: ["sayfa", "menü", "navigasyon", p.title]
      });
    });

    // Quick Actions
    items.push({
      id: "action-copy",
      type: "action",
      title: "Bağlantıyı Kopyala",
      description: "Geçerli sayfanın bağlantısını kopyala",
      url: "#copy",
      actionType: "copy",
      tags: ["kopyala", "link", "bağlantı", "paylaş", "copy", "share"]
    });

    return items;
  }
}
