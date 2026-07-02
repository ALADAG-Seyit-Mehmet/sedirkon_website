import { SearchItem } from "./types";
import { SearchAdapter } from "./SearchAdapter";

// The Indexer's responsibility is to build the search index from an adapter.
export class SearchIndexer {
  private adapter: SearchAdapter;
  private items: SearchItem[] = [];

  constructor(adapter: SearchAdapter) {
    this.adapter = adapter;
  }

  async buildIndex(): Promise<SearchItem[]> {
    this.items = await this.adapter.fetchItems();
    return this.items;
  }

  getItems(): SearchItem[] {
    return this.items;
  }
}
