import { SimpleObject } from '../interface.js';
import { HTTPTransport } from '../modules/Api.js';
import { Store } from '../modules/Store.js';
export declare class AuthService {
    transport: HTTPTransport;
    props: SimpleObject;
    store: Store;
    constructor(props: SimpleObject);
    signin(): Promise<unknown>;
    signup(): Promise<unknown>;
    logout(): Promise<unknown>;
    getUser(): Promise<SimpleObject>;
}
