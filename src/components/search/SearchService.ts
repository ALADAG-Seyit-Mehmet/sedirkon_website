
import { SearchItem, SearchResultGroup, SearchItemType } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FuseInstance = any;

const FUSE_OPTIONS = {
  includeScore: true,
  shouldSort: true,
  threshold: 0.3,
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

export class SearchService {
  private fuse: FuseInstance = null;
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
    return results.map((result: { item: SearchItem; score?: number }) => ({
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
          type: type as SearchItemType,
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
