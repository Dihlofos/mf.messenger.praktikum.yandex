export type CallbackFn = (...args: any[]) => void;
export type SimpleObject = { [key: string]: any };
export type StringIndexed = Record<string, unknown>;

export type UserItemProps = {
  avatar: string;
  display_name: string;
  email: string;
  first_name: string;
  id: number;
  login: string;
  phone: string;
  second_name: string;
};

declare global {
  interface Window {
    Handlebars: any;
    messengerType: 'default' | 'tooltips' | 'modal' | 'rename';
  }
}
