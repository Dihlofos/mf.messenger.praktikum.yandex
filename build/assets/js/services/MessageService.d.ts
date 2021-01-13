import { MessageSubmit } from '../interface.js';
import { HTTPTransport } from '../modules/Api.js';
import { Store } from '../modules/Store.js';
import { AuthService } from './AuthService.js';
export interface MessageServiceProps {
    messagesCallback?: (chatId: number) => void;
}
export declare class MessageService {
    transport: HTTPTransport;
    authService: AuthService;
    chatId: number;
    userId: number;
    store: Store;
    socket: WebSocket;
    props: MessageServiceProps;
    constructor(chatId: number, props: MessageServiceProps);
    getToken(id: number): Promise<Record<string, unknown>>;
    openSocket(token: string): void;
    initEvents(): void;
    sendMessage(messageSubmit: MessageSubmit): void;
}
