import { StringIndexed } from '../interface.js';
import { queryStringify } from '../utils/queryStringify.js';

export type RequestOptions = {
  timeout?: number;
  data?: StringIndexed | FormData;
  headers?: Record<string, string>;
};

export class HTTPTransport {
  METHODS: Record<string, string> = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    DELETE: 'DELETE',
  };
  BASEURL = 'https://ya-praktikum.tech';
  API = '/api/v2';

  get = (url: string, options: RequestOptions): Promise<unknown> => {
    return this.request(
      `${this.BASEURL}${this.API}${url}`,
      { ...options },
      this.METHODS.GET
    );
  };

  post = (url: string, options: RequestOptions): Promise<unknown> => {
    return this.request(
      `${this.BASEURL}${this.API}${url}`,
      { ...options },
      this.METHODS.POST
    );
  };

  put = (url: string, options: RequestOptions): Promise<unknown> => {
    return this.request(
      `${this.BASEURL}${this.API}${url}`,
      { ...options },
      this.METHODS.PUT
    );
  };

  delete = (url: string, options: RequestOptions): Promise<unknown> => {
    return this.request(
      `${this.BASEURL}${this.API}${url}`,
      { ...options },
      this.METHODS.DELETE
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

      if (method === this.METHODS.GET && !(data instanceof FormData)) {
        if (data) {
          xhr.send(queryStringify(data));
        } else {
          xhr.send();
        }
      } else {
        if (data instanceof FormData) {
          xhr.send(data);
        } else {
          xhr.send(JSON.stringify(data));
        }
      }
    });
  };
}
