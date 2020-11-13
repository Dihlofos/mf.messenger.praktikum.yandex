import { Block } from '../../modules/Block.js';
export declare type ChatCardProps = {
    id: number;
    onChatCardClick: (chat: ChatCardProps) => void;
    avatar: string;
    title: string;
    text: string;
    fulltime: string;
    time: string;
    unread?: number;
    mix?: string;
};
export declare class ChatCard extends Block {
    constructor(props: ChatCardProps);
    componentDidMount(): void;
    initEvents(): void;
    render(): any;
}
