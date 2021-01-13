export declare type CallbackFn = (...args: any[]) => void;
export declare type SimpleObject = {
    [key: string]: any;
};
export declare type StringIndexed = Record<string, unknown>;
export declare type UserItemProps = {
    avatar: string;
    display_name: string;
    email: string;
    first_name: string;
    id: number;
    login: string;
    phone: string;
    second_name: string;
};
export declare type Message = {
    user_id: number;
    userId?: number;
    chat_id: number;
    content: string;
    time: string;
    id: number;
    mix?: string;
    type?: string;
};
export declare type MessageSubmit = {
    content: string;
    type: string;
};
export declare type groupMessage = {
    date: string;
    messages: Message[];
};
export declare type groupMessagesResult = groupMessage[];
declare global {
    interface Window {
        Handlebars: any;
        messengerType: 'default' | 'tooltips' | 'modal' | 'rename';
    }
}
