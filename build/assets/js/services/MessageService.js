import { HTTPTransport } from '../modules/Api.js';
import { Store } from '../modules/Store.js';
import { SOCKETURL } from './constants.js';
export class MessageService {
    constructor(chatId, props) {
        this.store = new Store();
        this.props = props;
        this.transport = new HTTPTransport('https://ya-praktikum.tech', '/api/v2');
        this.chatId = chatId;
        this.userId = Number(this.store.get('userId'));
        this.getToken(this.chatId).then(({ token }) => {
            this.store.set({ token });
            this.openSocket(token);
        });
    }
    getToken(id) {
        return this.transport.post(`/chats/token/${id}`, {}).then((data) => {
            return data;
        });
    }
    openSocket(token) {
        this.socket = new WebSocket(`${SOCKETURL}${this.userId}/${this.chatId}/${token}`);
        this.initEvents();
    }
    initEvents() {
        this.socket.addEventListener('open', () => {
            this.socket.send(JSON.stringify({
                content: '0',
                type: 'get old',
            }));
        });
        this.socket.addEventListener('message', event => {
            const { messagesCallback } = this.props;
            const data = JSON.parse(event.data);
            const newMessages = Array.isArray(data) ? data : [data];
            const oldMessages = this.store.get('messages')[this.chatId] ? this.store.get('messages')[this.chatId] : [];
            this.store.set({ messages: { [this.chatId]: [...oldMessages, ...newMessages] } });
            if (messagesCallback)
                messagesCallback(this.chatId);
        });
        this.socket.addEventListener('error', event => {
            console.log('Ошибка', event);
        });
    }
    sendMessage(messageSubmit) {
        this.socket.send(JSON.stringify(messageSubmit));
    }
}
//# sourceMappingURL=MessageService.js.map