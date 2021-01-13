import { Message } from "../interface";
interface StoreProps {
    token: string | null;
    userId: number | null;
    messages: {
        [key: string]: Message[];
    } | null;
}
export declare class Store {
    store: StoreProps;
    static __instance: Store;
    constructor();
    set(newValue: Record<string, any>): void;
    get(key: keyof StoreProps): any;
}
export {};
