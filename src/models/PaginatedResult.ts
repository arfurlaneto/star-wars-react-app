import { DataItem } from "./DataItem";

export interface PaginatedResult {
  count: number,
  previous: string,
  next: string,
  results: DataItem[]
}
