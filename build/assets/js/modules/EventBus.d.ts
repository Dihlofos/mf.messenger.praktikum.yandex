import { CallbackFn } from '../interface';
export declare class EventBus {
    listeners: {
        [key: string]: CallbackFn[];
    };
    constructor();
    on(event: string, callback: CallbackFn): void;
    off(event: string, callback: CallbackFn): void;
    emit(event: string, ...args: any[]): void;
}
