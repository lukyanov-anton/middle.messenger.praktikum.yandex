import { IFetchOptions, METHODS } from "./types";
import { queryStringify } from "./utils";

export class HTTPTransport {
  private _baseApi: string;

  constructor(baseApi = "") {
    this._baseApi = baseApi;
  }
  get<T, U = unknown>(url: string, options: IFetchOptions<T> = {}): Promise<U> {
    return this.request<T, U>(
      `${url}${queryStringify(options.data)}`,
      { ...options },
      METHODS.GET,
      options.timeout
    );
  }

  put<T, U = unknown>(url: string, options: IFetchOptions<T> = {}): Promise<U> {
    return this.request(url, { ...options }, METHODS.PUT, options.timeout);
  }

  post<T, U = unknown>(
    url: string,
    options: IFetchOptions<T> = {}
  ): Promise<U> {
    return this.request(url, { ...options }, METHODS.POST, options.timeout);
  }

  delete<T, U = unknown>(
    url: string,
    options: IFetchOptions<T> = {}
  ): Promise<U> {
    return this.request(url, { ...options }, METHODS.DELETE, options.timeout);
  }

  private request<T, U>(
    url: string,
    options: IFetchOptions<T>,
    method: METHODS,
    timeout = 5000
  ): Promise<U> {
    const { headers = {}, data } = options;
    let fullUrl = `${process.env.API_ENDPOINT}/${this._baseApi}/${url}`;
    if (method === METHODS.GET && data) {
      fullUrl += queryStringify<T>(data);
    }

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, fullUrl);
      Object.entries(headers).forEach(([key, value]) =>
        xhr.setRequestHeader(key, value)
      );

      xhr.onload = () => {
        const { response, status } = xhr;

        let responseData;
        try {
          responseData = JSON.parse(response);
        } catch (err) {
          responseData = response;
        }

        if (status === 200 || (status >= 400 && status < 500)) {
          resolve(responseData);
        } else {
          reject(responseData);
        }
      };
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;
      xhr.timeout = timeout;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }
}
