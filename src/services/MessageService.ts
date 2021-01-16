import { MessageSubmit } from '../interface';
import { HTTPTransport, Store } from '../modules';
import { AuthService } from './index';
import { SOCKETURL } from './constants';

export interface MessageServiceProps {
  messagesCallback?: (chatId: number) => void
}

export default class MessageService {
  transport: HTTPTransport;

  authService: AuthService;

  chatId: number;

  userId: number;

  store: Store;

  socket: WebSocket;

  props: MessageServiceProps;

  constructor(chatId: number, props: MessageServiceProps) {
    this.store = new Store();
    this.props = props;
    this.transport = new HTTPTransport('https://ya-praktikum.tech', '/api/v2');
    this.chatId = chatId;
    this.userId = Number(this.store.get('userId'));

    this.getToken(this.chatId).then(({ token }: Record<string, any>) => {
      this.store.set({ token });
      this.openSocket(token);
    });
  }

  getToken(id: number) {
    return this.transport.post(`/chats/token/${id}`, {}).then((data: Record<string, unknown>) => data);
  }

  openSocket(token: string) {
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

    this.socket.addEventListener('message', (event) => {
      const { messagesCallback } = this.props;
      const data = JSON.parse(event.data);
      const newMessages = Array.isArray(data) ? data : [data];
      const oldMessages = this.store.get('messages')[this.chatId] ? this.store.get('messages')[this.chatId] : [];
      this.store.set({ messages: { [this.chatId]: [...oldMessages, ...newMessages] } });
      if (messagesCallback) messagesCallback(this.chatId);
    });

    this.socket.addEventListener('error', (event) => {
      console.log('Ошибка', event);
    });
  }

  sendMessage(messageSubmit: MessageSubmit) {
    this.socket.send(JSON.stringify(messageSubmit));
  }
}
