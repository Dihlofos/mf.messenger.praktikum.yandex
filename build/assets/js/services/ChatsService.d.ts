import { SimpleObject } from '../interface.js';
import { HTTPTransport } from '../modules/Api.js';
export declare class ChatService {
    transport: HTTPTransport;
    avatarDefault: string;
    constructor();
    getChats(): Promise<any>;
    getChatUsers(id: number): Promise<{
        avatar: string;
        display_name: string;
        email: string;
        first_name: string;
        id: number;
        login: string;
        phone: string;
        second_name: string;
    }[]>;
    createChat(data: SimpleObject): Promise<unknown>;
    deleteChat(data: SimpleObject): Promise<unknown>;
    putChatUser(data: SimpleObject): Promise<unknown>;
    putChatAvatar(data: SimpleObject): Promise<unknown>;
    deleteChatUser(data: SimpleObject): Promise<unknown>;
}
