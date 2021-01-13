import { groupMessage } from '../../interface.js';
import { Block } from '../../modules/Block.js';
import { Store } from '../../modules/Store.js';
import { MessageService } from '../../services/MessageService.js';
export declare type ChatProps = {
    messagesGroup?: groupMessage[];
    mix?: string;
};
export declare class Chat extends Block {
    store: Store;
    messageService: MessageService;
    constructor(props: ChatProps);
    componentDidUpdate(): void;
    handleGetMessages: (chatId: number) => void;
    render(): any;
}
