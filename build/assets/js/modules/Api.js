import { queryStringify } from '../utils/queryStringify.js';
export class HTTPTransport {
    constructor() {
        this.METHODS = {
            GET: 'GET',
            PUT: 'PUT',
            POST: 'POST',
            DELETE: 'DELETE',
        };
        this.BASEURL = 'https://ya-praktikum.tech';
        this.API = '/api/v2';
        this.get = (url, options) => {
            return this.request(`${this.BASEURL}${this.API}${url}`, Object.assign({}, options), this.METHODS.GET);
        };
        this.post = (url, options) => {
            return this.request(`${this.BASEURL}${this.API}${url}`, Object.assign({}, options), this.METHODS.POST);
        };
        this.put = (url, options) => {
            return this.request(`${this.BASEURL}${this.API}${url}`, Object.assign({}, options), this.METHODS.PUT);
        };
        this.delete = (url, options) => {
            return this.request(`${this.BASEURL}${this.API}${url}`, Object.assign({}, options), this.METHODS.DELETE);
        };
        this.request = (url, options, method) => {
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
                        }
                        catch (e) {
                            res = xhr.response;
                        }
                        reject(res);
                    }
                    else {
                        resolve(xhr);
                    }
                };
                xhr.onabort = reject;
                xhr.onerror = reject;
                xhr.ontimeout = reject;
                if (method === this.METHODS.GET && !(data instanceof FormData)) {
                    if (data) {
                        xhr.send(queryStringify(data));
                    }
                    else {
                        xhr.send();
                    }
                }
                else {
                    if (data instanceof FormData) {
                        xhr.send(data);
                    }
                    else {
                        xhr.send(JSON.stringify(data));
                    }
                }
            });
        };
    }
}
//# sourceMappingURL=Api.js.map