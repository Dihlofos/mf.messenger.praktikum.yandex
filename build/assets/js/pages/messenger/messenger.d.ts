import { Block } from '../../modules/Block.js';
import { Chat } from '../../components/Chat/Chat.js';
import { CurrentChat } from '../../components/CurrentChat/CurrentChat.js';
import { Field } from '../../components/Field/Field.js';
import { Sender } from '../../components/Sender/Sender.js';
import { ChatService } from '../../services/ChatsService.js';
export declare class MessengerPage extends Block {
    chatService: ChatService;
    searchField: Field;
    currentChat: CurrentChat | undefined;
    chat: Chat;
    sender: Sender;
    constructor();
    componentDidMount(): void;
    updateChats(): void;
    onChatDeleted(id: number): void;
    render(): string;
}
export default MessengerPage;
