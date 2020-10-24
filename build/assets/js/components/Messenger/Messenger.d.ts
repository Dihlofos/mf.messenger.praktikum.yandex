import { Block } from '../../modules/Block.js';
import { Chat } from '../Chat/Chat.js';
import { CurrentChat } from '../CurrentChat/CurrentChat.js';
import { MessagesBoard } from '../MessagesBoard/MessagesBoard.js';
import { Sender } from '../Sender/Sender.js';
export declare type MessengerProps = {
    messagesBoardInstance: MessagesBoard;
    currentChatInstance?: CurrentChat;
    chatInstance?: Chat;
    senderInstance?: Sender;
};
export declare class Messenger extends Block {
    messagesBoard: string;
    currentChat: string;
    chat: string;
    sender: string;
    constructor(props: MessengerProps);
    render(): any;
}
