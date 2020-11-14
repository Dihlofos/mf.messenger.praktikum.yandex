import { SimpleObject } from '../interface.js';
import { HTTPTransport } from '../modules/Api.js';
export declare class UserService {
    transport: HTTPTransport;
    props: SimpleObject;
    constructor(props: SimpleObject);
    getUser(): Promise<any>;
    putProfile(): Promise<PromiseSettledResult<unknown>[]>;
    putAvatar(): Promise<unknown>;
    putPassword(): Promise<unknown>;
    putProfileBody(): Promise<unknown>;
    postSearch(): Promise<{
        display_name: string;
        avatar: string;
        email: string;
        first_name: string;
        id: number;
        login: string;
        phone: string;
        second_name: string;
    }[]>;
}
