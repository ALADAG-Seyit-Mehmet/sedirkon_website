export type SearchItemType = "product" | "project" | "collection" | "material" | "page" | "workshop" | "action";

export interface SearchItem {
  id: string;
  type: SearchItemType;
  title: string;
  description?: string;
  url: string;
  tags?: string[]; // Used for keywords/synonyms
  image?: string;
  score?: number;
  // Extra metadata
  actionType?: "scroll" | "copy" | "blank" | "media";
}

export interface SearchResultGroup {
  type: SearchItemType | "recent" | "suggested";
  title: string;
  items: SearchItem[];
}
