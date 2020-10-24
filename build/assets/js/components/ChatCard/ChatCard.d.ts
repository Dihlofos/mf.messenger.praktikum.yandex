import { Block } from '../../modules/Block.js';
export declare type ChatCardProps = {
    imageHref: string;
    imageAlt: string;
    name: string;
    text: string;
    fulltime: string;
    time: string;
    unread?: number;
    mix?: string;
};
export declare class ChatCard extends Block {
    constructor(props: ChatCardProps);
    render(): any;
}
