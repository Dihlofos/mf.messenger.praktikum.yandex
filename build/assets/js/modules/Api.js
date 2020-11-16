import { sendDataFormatting } from '../utils/sendDataFormatting.js';
export var METHODS;
(function (METHODS) {
    METHODS["GET"] = "GET";
    METHODS["PUT"] = "PUT";
    METHODS["POST"] = "POST";
    METHODS["DELETE"] = "DELETE";
})(METHODS || (METHODS = {}));
export class HTTPTransport {
    constructor(baseUrl, api) {
        this.get = (url, options) => {
            return this.request(`${this.baseUrl}${this.api}${url}`, Object.assign({}, options), METHODS.GET);
        };
        this.post = (url, options) => {
            return this.request(`${this.baseUrl}${this.api}${url}`, Object.assign({}, options), METHODS.POST);
        };
        this.put = (url, options) => {
            return this.request(`${this.baseUrl}${this.api}${url}`, Object.assign({}, options), METHODS.PUT);
        };
        this.delete = (url, options) => {
            return this.request(`${this.baseUrl}${this.api}${url}`, Object.assign({}, options), METHODS.DELETE);
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
                xhr.send(sendDataFormatting(method, data));
            });
        };
        this.baseUrl = baseUrl;
        this.api = api;
    }
}
//# sourceMappingURL=Api.js.map