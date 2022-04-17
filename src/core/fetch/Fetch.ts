import { IFetchOptions, METHODS } from "./types";
import { queryStringify } from "./utils";

export class HTTPTransport<T> {
  private _baseApi: string;

  constructor(baseApi = "") {
    this._baseApi = baseApi;
  }
  get = (url: string, options: IFetchOptions<T> = {}) => {
    return this.request(
      `${url}${queryStringify(options.data)}`,
      { ...options },
      METHODS.GET,
      options.timeout
    );
  };

  put = (url: string, options: IFetchOptions<T> = {}) => {
    return this.request(url, { ...options }, METHODS.PUT, options.timeout);
  };

  post = (url: string, options: IFetchOptions<T> = {}) => {
    return this.request(url, { ...options }, METHODS.POST, options.timeout);
  };

  delete = (url: string, options: IFetchOptions<T> = {}) => {
    return this.request(url, { ...options }, METHODS.DELETE, options.timeout);
  };

  request = (
    url: string,
    options: IFetchOptions<T>,
    method: METHODS,
    timeout = 5000
  ) => {
    const { headers = {}, data } = options;
    let fullUrl = `${process.env.API_ENDPOINT}/${this._baseApi}${url}`;
    if (method === METHODS.GET && data) {
      fullUrl += queryStringify(data);
    }

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, fullUrl);
      Object.entries(headers).forEach(([key, value]) =>
        xhr.setRequestHeader(key, value)
      );

      xhr.onload = () => {
        resolve(xhr);
      };
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;
      xhr.timeout = timeout;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data as unknown as FormData);
      }
    });
  };
}
