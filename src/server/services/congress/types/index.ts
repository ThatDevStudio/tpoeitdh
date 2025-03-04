export interface CongressResponseMeta {
  request: { format: string; contentType: string };
  pagination: {
    next: string;
    count: number;
  };
}

export type CongressResponse<T> = CongressResponseMeta & T;
