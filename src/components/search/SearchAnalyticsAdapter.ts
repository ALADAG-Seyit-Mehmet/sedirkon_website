import { SearchItem } from "./types";

export interface SearchAnalyticsAdapter {
  trackSearch(query: string, resultCount: number): void;
  trackSelect(item: SearchItem, query: string, position: number): void;
}

export class NoOpAnalyticsAdapter implements SearchAnalyticsAdapter {
  trackSearch(query: string, resultCount: number): void {
    // Analytics is intentionally disabled by default to respect privacy.
    // Implement a custom adapter (e.g. PostHog, Google Analytics) and replace this.
  }

  trackSelect(item: SearchItem, query: string, position: number): void {
    // No-op
  }
}
