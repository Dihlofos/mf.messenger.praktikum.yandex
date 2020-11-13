import { SimpleObject, UserItemProps } from '../interface.js';
import { HTTPTransport } from '../modules/Api.js';

export class ChatService {
  transport: HTTPTransport;
  avatarDefault: string = '/assets/images/avatar.png';

  constructor() {
    this.transport = new HTTPTransport();
  }

  getChats() {
    return this.transport
      .get('/chats', { data: {} })
      .then((data: XMLHttpRequest) => {
        return JSON.parse(data.response);
      });
  }
  getChatUsers(id: number) {
    return this.transport
      .get(`/chats/${id}/users`, { data: {} })
      .then((data: XMLHttpRequest) => {
        const jsonArray: UserItemProps[] = JSON.parse(data.response);
        return jsonArray.map((item) => ({
          ...item,
          avatar: item.avatar
            ? `${this.transport.BASEURL}${item.avatar}`
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
