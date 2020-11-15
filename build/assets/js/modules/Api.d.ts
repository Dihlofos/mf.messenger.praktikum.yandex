import { StringIndexed } from '../interface.js';
export declare type RequestOptions = {
    timeout?: number;
    data?: StringIndexed | FormData;
    headers?: Record<string, string>;
};
export declare enum METHODS {
    GET = "GET",
    PUT = "PUT",
    POST = "POST",
    DELETE = "DELETE"
}
export declare class HTTPTransport {
    BASEURL: string;
    API: string;
    constructor(BASEURL: string, API: string);
    get: (url: string, options: RequestOptions) => Promise<unknown>;
    post: (url: string, options: RequestOptions) => Promise<unknown>;
    put: (url: string, options: RequestOptions) => Promise<unknown>;
    delete: (url: string, options: RequestOptions) => Promise<unknown>;
    request: (url: string, options: RequestOptions, method: string) => Promise<unknown>;
}
