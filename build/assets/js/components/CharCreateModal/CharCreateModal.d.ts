import { Block } from '../../modules/Block.js';
export declare type ChatProps = {
    mix?: string;
};
export declare class ChatCreaModal extends Block {
    messages: string[];
    constructor(props: ChatProps);
    render(): any;
}
