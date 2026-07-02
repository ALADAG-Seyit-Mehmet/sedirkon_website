
import { SearchItem, SearchResultGroup } from "./types";

const FUSE_OPTIONS = {
  includeScore: true,
  shouldSort: true,
  threshold: 0.3, // Typo tolerance (0.0 perfect match, 1.0 anything matches)
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 2,
  keys: [
    { name: "title", weight: 0.6 },
    { name: "tags", weight: 0.3 },
    { name: "description", weight: 0.1 }
  ]
};

// Replace Turkish characters to ensure better matching if needed, 
// though Fuse handles exact unicode if typed. Sometimes normalizing helps.
const normalizeString = (str: string) => {
  return str.toLocaleLowerCase("tr-TR")
    .replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s")
    .replace(/ı/g, "i").replace(/ö/g, "o").replace(/ç/g, "c");
};

export class SearchService {
  private fuse: any = null;
  private items: SearchItem[] = [];

  async init(items: SearchItem[]) {
    this.items = items;
    // Dynamically import fuse.js to reduce main bundle size
    const FuseModule = (await import("fuse.js")).default;
    this.fuse = new FuseModule(items, FUSE_OPTIONS);
  }

  search(query: string): SearchItem[] {
    if (!this.fuse || !query.trim()) return [];
    
    // We pass the raw query. If you want manual normalization you can map items first, 
    // but Fuse is usually good enough with threshold 0.3
    const results = this.fuse.search(query);
    
    // Extract and map score
    return results.map(result => ({
      ...result.item,
      score: result.score
    }));
  }

  groupResults(results: SearchItem[]): SearchResultGroup[] {
    const groups: Record<string, SearchItem[]> = {};

    results.forEach(item => {
      if (!groups[item.type]) groups[item.type] = [];
      groups[item.type].push(item);
    });

    const orderedGroups: SearchResultGroup[] = [];

    // Define order
    const order = ["product", "project", "collection", "material", "workshop", "page", "action"];
    
    order.forEach(type => {
      if (groups[type] && groups[type].length > 0) {
        orderedGroups.push({
          type: type as any,
          title: this.getGroupTitle(type),
          items: groups[type]
        });
      }
    });

    return orderedGroups;
  }

  private getGroupTitle(type: string): string {
    const titles: Record<string, string> = {
      product: "Ürünler",
      project: "Projeler",
      collection: "Koleksiyonlar",
      material: "Malzemeler",
      workshop: "Atölye",
      page: "Sayfalar",
      action: "Komutlar"
    };
    return titles[type] || "Diğer";
  }
}
