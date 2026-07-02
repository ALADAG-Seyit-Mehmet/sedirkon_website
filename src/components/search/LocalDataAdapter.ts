import { SearchItem } from "./types";
import { projects, collections, workshopChapters, materials, pages } from "@/lib/data";

// This simulates fetching data and normalizing it from the local data store.
export class LocalDataAdapter {
  async fetchItems(): Promise<SearchItem[]> {
    const items: SearchItem[] = [];

    // Projects
    projects.forEach(p => {
      items.push({
        id: `project-${p.id}`,
        type: "project",
        title: p.title,
        description: p.subtitle || p.description,
        url: `/projeler/${p.slug}`,
        tags: [p.client, p.location, p.year, "proje", "mimari", "iç mimari", "project", "architecture"].filter(Boolean) as string[],
        image: p.coverImage
      });
    });

    // Collections
    collections.forEach(c => {
      items.push({
        id: `collection-${c.id}`,
        type: "collection",
        title: c.title,
        description: c.description,
        url: `/koleksiyon/${c.slug}`,
        tags: ["koleksiyon", "collection", "seri", "mobilya", "furniture"],
        image: c.coverImage
      });

      // Products within collections
      if (c.products) {
        c.products.forEach(prod => {
          items.push({
            id: `product-${prod.id}`,
            type: "product",
            title: prod.title,
            description: `${c.title} Koleksiyonu`,
            url: `/koleksiyon/${c.slug}/${prod.slug}`,
            tags: ["ürün", "product", prod.slug, "mobilya", c.title, "koltuk", "masa", "sandalye"], // fuzzy tags
            image: prod.images[0]
          });
        });
      }
    });

    // Workshop
    workshopChapters.forEach(w => {
      items.push({
        id: `workshop-${w.id}`,
        type: "workshop",
        title: w.title,
        description: w.description,
        url: `/atolye#${w.slug}`,
        tags: ["atölye", "zanaat", "üretim", "workshop", "craft", "belgesel", "ahşap", "metal"],
        image: w.videoUrl // Actually we might need a thumbnail, but we can pass videoUrl if needed or undefined
      });
    });

    // Materials
    materials.forEach(m => {
      items.push({
        id: `material-${m.id}`,
        type: "material",
        title: m.name,
        description: m.description,
        url: `/malzemeler#${m.slug}`,
        tags: ["malzeme", "material", "doku", "texture", m.name, m.slug, "ceviz", "meşe", "mermer", "deri", "kumaş"],
        image: m.imageUrl
      });
    });

    // Pages (Static Navigation)
    pages.forEach(p => {
      items.push({
        id: `page-${p.id}`,
        type: "page",
        title: p.title,
        description: p.description,
        url: p.url,
        tags: ["sayfa", "menü", "navigasyon", "hakkımızda", "iletişim", "ana sayfa", "kurumsal"]
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
