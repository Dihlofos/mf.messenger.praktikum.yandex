import { SimpleObject, UserItemProps } from '../interface';
import { HTTPTransport } from '../modules/Api';

export class ChatService {
  transport: HTTPTransport;
  avatarDefault: string = '/assets/images/avatar.png';

  constructor() {
    this.transport = new HTTPTransport('https://ya-praktikum.tech', '/api/v2');
  }

  getChats() {
    return this.transport.get('/chats', { data: {} }).then((data: string) => {
      return data;
    });
  }
  getChatUsers(id: number) {
    return this.transport
      .get(`/chats/${id}/users`, { data: {} })
      .then((data: UserItemProps[]) => {
        return data.map((item) => ({
          ...item,
          avatar: item.avatar
            ? `${this.transport.baseUrl}${item.avatar}`
            : this.avatarDefault,
          display_name: item.display_name ? item.display_name : item.first_name,
        }));
      });
  }
  createChat(data: SimpleObject) {
    return this.transport.post('/chats', { data });
  }
  deleteChat(data: SimpleObject) {
    return this.transport.delete('/chats', { data });
  }
  putChatUser(data: SimpleObject) {
    return this.transport.put('/chats/users', { data });
  }
  putChatAvatar(data: SimpleObject) {
    return this.transport.put('/chats/avatar', { data });
  }
  deleteChatUser(data: SimpleObject) {
    return this.transport.delete('/chats/users', { data });
  }
}
