export type CallbackFn = (...args: any[])=>void;
export type SimpleObject = {[key:string]: any};

declare global {    interface Window {
    Handlebars:any;
    messengerType: 'default' | 'tooltips' | 'modal' | 'rename';
  }
}
