/* importing search entry */
import { SearchEntry } from './search-entry.model';

/* export results for accessibility */
export interface SearchResults {
  resultCount: number;
  results: SearchEntry[];
}