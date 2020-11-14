import { StringIndexed } from '../interface.js';
import { sendDataFormatting } from '../utils/sendDataFormatting.js';

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

export class HTTPTransport {
  BASEURL: string;
  API: string;
  constructor(BASEURL: string, API: string) {
    this.BASEURL = BASEURL;
    this.API = API;
  }

  get = (url: string, options: RequestOptions): Promise<unknown> => {
    return this.request(
      `${this.BASEURL}${this.API}${url}`,
      { ...options },
      METHODS.GET
    );
  };

  post = (url: string, options: RequestOptions): Promise<unknown> => {
    return this.request(
      `${this.BASEURL}${this.API}${url}`,
      { ...options },
      METHODS.POST
    );
  };

  put = (url: string, options: RequestOptions): Promise<unknown> => {
    return this.request(
      `${this.BASEURL}${this.API}${url}`,
      { ...options },
      METHODS.PUT
    );
  };

  delete = (url: string, options: RequestOptions): Promise<unknown> => {
    return this.request(
      `${this.BASEURL}${this.API}${url}`,
      { ...options },
      METHODS.DELETE
    );
  };

  request = (
    url: string,
    options: RequestOptions,
    method: string
  ): Promise<unknown> => {
    const { data, headers } = options;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.withCredentials = true;

      if (headers) {
        Object.entries(headers).map(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });
      }

      if (!(data instanceof FormData)) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }

      xhr.onload = function () {
        if (xhr.status !== 200) {
          let res;
          try {
            res = JSON.parse(xhr.response);
          } catch (e) {
            res = xhr.response;
          }
          reject(res);
        } else {
          resolve(xhr);
        }
      };
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      xhr.send(sendDataFormatting(method, data));
    });
  };
}
