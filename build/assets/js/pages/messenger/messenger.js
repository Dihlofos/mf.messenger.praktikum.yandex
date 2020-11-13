import { Block } from '../../modules/Block.js';
//import { Button } from '../../components/Button/Button.js';
import { Chat } from '../../components/Chat/Chat.js';
import { ChatCard } from '../../components/ChatCard/ChatCard.js';
import { CurrentChat } from '../../components/CurrentChat/CurrentChat.js';
import { Field } from '../../components/Field/Field.js';
import { MessagesBoard } from '../../components/MessagesBoard/MessagesBoard.js';
import { MessagesList } from '../../components/MessagesList/MessagesList.js';
import { Messenger } from '../../components/Messenger/Messenger.js';
//import { Modal } from '../../components/Modal/Modal.js';
import { Sender } from '../../components/Sender/Sender.js';
import { Tooltip } from '../../components/Tooltip/Tooltip.js';
import { messengerData } from './data.js';
import { ChatService } from '../../services/ChatsService.js';
import { ChatCreateModal } from '../../components/ChatCreateModal/ChatCreateModal.js';
import { Button } from '../../components/Button/Button.js';
export class MessengerPage extends Block {
    constructor() {
        super('div', 'page');
    }
    componentDidMount() {
        this.chatService = new ChatService();
        this.updateChats();
    }
    updateChats() {
        this.chatService
            .getChats()
            .then((chats) => {
            this.setProps(Object.assign(messengerData, {
                chatCardsData: chats,
            }));
            this.setProps(Object.assign(this.props, {
                currentChatInstance: this.currentChat,
            }));
        })
            .catch((e) => {
            console.log(e);
        });
    }
    onChatDeleted(id) {
        this.chatService
            .deleteChat({ chatId: id })
            .then(() => {
            this.currentChat = undefined;
            this.updateChats();
        })
            .catch((e) => {
            console.log('Chat was not deleted:', e);
        });
    }
    render() {
        const { searchFieldData, chatCardsData, bottomtooltipData, chatData, chatCreateModalButtonData, } = messengerData;
        this.searchField = new Field(searchFieldData);
        let chatCards = null;
        if (chatCardsData.length > 0) {
            chatCards = chatCardsData.map((item) => {
                return new ChatCard(Object.assign(Object.assign({}, item), { onChatCardClick: (chatCard) => {
                        this.currentChat = new CurrentChat({
                            id: chatCard.id,
                            avatar: chatCard.avatar,
                            title: chatCard.title,
                            time: '',
                            mix: 'messenger__current-chat',
                            onChatDeleted: this.onChatDeleted.bind(this),
                        });
                        this.setProps(Object.assign(this.props, {
                            currentChatInstance: this.currentChat,
                        }));
                    } }));
            });
        }
        const messageList = new MessagesList({
            chatCardInstances: chatCards,
        });
        const chatCreateModal = new ChatCreateModal({
            onChatCreateSubmit: (event) => {
                event.preventDefault();
                event.stopImmediatePropagation();
                const form = event.target;
                const formData = new FormData(form);
                this.chatService
                    .createChat({ title: formData.get('create-chat') })
                    .then(() => {
                    this.updateChats();
                });
            },
            submitButtonInstance: new Button(chatCreateModalButtonData),
        });
        const messageBoard = new MessagesBoard({
            linkText: 'Профиль',
            linkHref: '/profile',
            messagesListInstance: messageList,
            searchFieldInstance: this.searchField,
            chatCreateModalInstance: chatCreateModal,
        });
        if (chatData) {
            // TODO
            // Пока контент сообщений захардхожен, в дальнейшем надо сделать отдельный комопонент,
            // который будет прогонять код через шаблонизатор
            const bottomTooltip = new Tooltip(bottomtooltipData);
            this.chat = new Chat(chatData);
            this.sender = new Sender({
                tooltipInstance: bottomTooltip,
            });
        }
        const messenger = new Messenger({
            messagesBoardInstance: messageBoard,
            currentChatInstance: this.currentChat ? this.currentChat : undefined,
            chatInstance: this.chat ? this.chat : undefined,
            senderInstance: this.sender ? this.sender : undefined,
        });
        document.title = 'Messenger';
        // const modal = new Modal({
        //   title: 'Вы хотите удалить чат',
        //   deleteButtonInstance: new Button({
        //     text: 'Удалить',
        //     mix: 'button--red modal__button',
        //     type: 'button',
        //   }),
        //   cancelButtonInstance: new Button({
        //     text: 'Отмена',
        //     mix: 'button--grey modal__button',
        //     type: 'button',
        //   }),
        // });
        return messenger.renderToString();
    }
}
export default MessengerPage;
//# sourceMappingURL=messenger.js.map