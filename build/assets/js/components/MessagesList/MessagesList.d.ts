import { Block } from '../../modules/Block.js';
import { ChatCard } from '../ChatCard/ChatCard.js';
export declare type MessagesListProps = {
    chatCardInstances: ChatCard[];
};
export declare class MessagesList extends Block {
    messages: string[];
    constructor(props: MessagesListProps);
    render(): any;
}
