import { IFetchOptions,METHODS } from "./types";
import {queryStringify} from './utils';
  
  export class HTTPTransport<T> {
    get = (url:string, options:IFetchOptions<T> = {method: METHODS.GET}) => {
      return this.request(
        `${url}${queryStringify(options.data)}`,
        { ...options },
        options.timeout
      );
    };
  
    put = (url:string, options:IFetchOptions<T> = { method: METHODS.PUT}) => {
      return this.request(
        url,
        { ...options },
        options.timeout
      );
    };
  
    post = (url:string, options:IFetchOptions<T> = {method: METHODS.POST}) => {
      return this.request(
        url,
        { ...options },
        options.timeout
      );
    };
  
    delete = (url:string, options:IFetchOptions<T> = {method: METHODS.DELETE}) => {
      return this.request(
        url,
        { ...options },
        options.timeout
      );
    };
  

    request = (url:string, options:IFetchOptions<T>, timeout = 5000) => {
      const { method, headers = {}, data } = options;
  
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
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