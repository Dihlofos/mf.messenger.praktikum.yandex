import { HTTPTransport } from '../modules/Api.js';
export class ChatService {
    constructor() {
        this.avatarDefault = '/assets/images/avatar.png';
        this.transport = new HTTPTransport('https://ya-praktikum.tech', '/api/v2');
    }
    getChats() {
        return this.transport.get('/chats', { data: {} }).then((data) => {
            return data;
        });
    }
    getChatUsers(id) {
        return this.transport
            .get(`/chats/${id}/users`, { data: {} })
            .then((data) => {
            return data.map((item) => (Object.assign(Object.assign({}, item), { avatar: item.avatar
                    ? `${this.transport.baseUrl}${item.avatar}`
                    : this.avatarDefault, display_name: item.display_name ? item.display_name : item.first_name })));
        });
    }
    createChat(data) {
        return this.transport.post('/chats', { data });
    }
    deleteChat(data) {
        return this.transport.delete('/chats', { data });
    }
    putChatUser(data) {
        return this.transport.put('/chats/users', { data });
    }
    putChatAvatar(data) {
        return this.transport.put('/chats/avatar', { data });
    }
    deleteChatUser(data) {
        return this.transport.delete('/chats/users', { data });
    }
}
//# sourceMappingURL=ChatsService.js.map