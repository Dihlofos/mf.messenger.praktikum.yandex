import { Block } from '../../modules/Block.js';
export declare type ChatProps = {
    mix?: string;
    chatGroups: {
        date: string;
        chats: {
            content: string;
            read?: boolean;
            mix?: string;
            time: string;
        }[];
    }[];
};
export declare class Chat extends Block {
    messages: string[];
    constructor(props: ChatProps);
    render(): any;
}
