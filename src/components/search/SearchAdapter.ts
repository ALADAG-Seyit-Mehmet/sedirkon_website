import { SearchItem } from "./types";

export interface SearchAdapter {
  fetchItems(): Promise<SearchItem[]>;
}
