export declare type CallbackFn = (...args: any[]) => void;
export declare type SimpleObject = {
    [key: string]: any;
};
declare global {
    interface Window {
        Handlebars: any;
        messengerType: 'default' | 'tooltips' | 'modal' | 'rename';
    }
}
