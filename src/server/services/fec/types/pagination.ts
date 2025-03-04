export interface PaginatedResponse<T> {
  pagination: {
    count: number;
    is_count_exact: boolean;
    page: number;
    pages: number;
    per_page: number;
  };
  results: T[];
}
