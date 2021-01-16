import { StringIndexed } from '../interface';
import { transformApiResult, sendDataFormatting } from '../utils';

export type RequestOptions = {
  timeout?: number;
  data?: StringIndexed | FormData;
  headers?: Record<string, string>;
};

export enum METHODS {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

export default class HTTPTransport {
  baseUrl: string;

  api: string;

  constructor(baseUrl: string, api: string) {
    this.baseUrl = baseUrl;
    this.api = api;
  }

  get = (url: string, options: RequestOptions): Promise<unknown> => this.request(
    `${this.baseUrl}${this.api}${url}`,
    { ...options },
    METHODS.GET,
  );

  post = (url: string, options: RequestOptions): Promise<unknown> => this.request(
    `${this.baseUrl}${this.api}${url}`,
    { ...options },
    METHODS.POST,
  );

  put = (url: string, options: RequestOptions): Promise<unknown> => this.request(
    `${this.baseUrl}${this.api}${url}`,
    { ...options },
    METHODS.PUT,
  );

  delete = (url: string, options: RequestOptions): Promise<unknown> => this.request(
    `${this.baseUrl}${this.api}${url}`,
    { ...options },
    METHODS.DELETE,
  );

  request = (
    url: string,
    options: RequestOptions,
    method: string,
  ): Promise<unknown> => {
    const { data, headers } = options;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.withCredentials = true;

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });
      }

      if (!(data instanceof FormData)) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }

      xhr.onload = function () {
        if (xhr.status !== 200) {
          reject(transformApiResult(xhr.response));
        } else {
          resolve(transformApiResult(xhr.response));
        }
      };
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      xhr.send(sendDataFormatting(method, data));
    });
  };
}
