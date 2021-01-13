import { Block } from '../../modules/Block.js';
import { Chat } from '../../components/Chat/Chat.js';
import { ChatCardProps } from '../../components/ChatCard/ChatCard.js';
import { CurrentChat } from '../../components/CurrentChat/CurrentChat.js';
import { Field } from '../../components/Field/Field.js';
import { Sender } from '../../components/Sender/Sender.js';
import { ChatService } from '../../services/ChatsService.js';
import { MessageService } from '../../services/MessageService.js';
import { AuthService } from '../../services/AuthService.js';
import { MessageSubmit } from '../../interface.js';
export declare class MessengerPage extends Block {
    chatService: ChatService;
    messageService: MessageService;
    authService: AuthService;
    searchField: Field;
    currentChat: CurrentChat | undefined;
    chat: Chat;
    sender: Sender;
    constructor();
    componentDidMount(): void;
    updateChats(): void;
    onChatDeleted(id: number): void;
    handleMessageSubmit: (message: MessageSubmit) => void;
    handleChatCardClick: (chatCard: ChatCardProps) => void;
    render(): string;
}
export default MessengerPage;
