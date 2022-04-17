export enum METHODS {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
}

export interface IFetchOptions<T> {
  data?: T;
  headers?: Record<string, string>;
  timeout?: number;
}
