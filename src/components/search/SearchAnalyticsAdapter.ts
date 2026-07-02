import { SearchItem } from "./types";

export interface SearchAnalyticsAdapter {
  trackSearch(query: string, resultCount: number): void;
  trackSelect(item: SearchItem, query: string, position: number): void;
}

export class NoOpAnalyticsAdapter implements SearchAnalyticsAdapter {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  trackSearch(_query: string, _resultCount: number): void {
    // Analytics is intentionally disabled by default to respect privacy.
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  trackSelect(_item: SearchItem, _query: string, _position: number): void {
    // No-op
  }
}
