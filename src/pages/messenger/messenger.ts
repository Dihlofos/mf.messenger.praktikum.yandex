import { Block } from '../../modules/Block.js';
//import { Button } from '../../components/Button/Button.js';
import { Chat } from '../../components/Chat/Chat.js';
import { ChatCard, ChatCardProps } from '../../components/ChatCard/ChatCard.js';
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
import { MessageService } from '../../services/MessageService.js';
import { AuthService } from '../../services/AuthService.js';
import { MessageSubmit } from '../../interface.js';

export class MessengerPage extends Block {
  chatService: ChatService;
  messageService: MessageService;
  authService: AuthService;
  searchField: Field;
  currentChat: CurrentChat | undefined;
  chat: Chat;
  sender: Sender;

  constructor() {
    super('div', 'page');

  }

  componentDidMount() {
    this.authService = new AuthService({});
    this.chatService = new ChatService();
    this.authService.getUser();
    this.updateChats();
  }


  updateChats() {
    this.chatService
      .getChats()
      .then((chats) => {
        this.setProps(
          Object.assign(messengerData, {
            chatCardsData: chats,
          })
        );
        this.setProps(
          Object.assign(this.props, {
            currentChatInstance: this.currentChat,
          })
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }

  onChatDeleted(id: number) {
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

  handleMessageSubmit = (message: MessageSubmit) => {
    this.messageService.sendMessage(message);
  }

  handleChatCardClick = (chatCard: ChatCardProps) => {
    this.currentChat = new CurrentChat({
      id: chatCard.id,
      avatar: chatCard.avatar,
      title: chatCard.title,
      time: '',
      mix: 'messenger__current-chat',
      onChatDeleted: this.onChatDeleted.bind(this),
    });

    this.chat = new Chat({ mix: 'messenger__chat', });
    this.messageService = new MessageService(chatCard.id, { messagesCallback: this.chat.handleGetMessages });

    this.setProps(
      Object.assign(this.props, {
        currentChatInstance: this.currentChat,
        chatInstance: this.chat
      })
    );


  }

  render() {
    const {
      searchFieldData,
      chatCardsData,
      bottomtooltipData,
      chatCreateModalButtonData,
    } = messengerData;

    this.searchField = new Field(searchFieldData);

    let chatCards: ChatCard[] | null = null;

    if (chatCardsData.length > 0) {
      chatCards = chatCardsData.map((item) => {
        return new ChatCard({
          ...item,
          onChatCardClick: (chatCard: ChatCardProps) => {
            this.handleChatCardClick(chatCard)
          },
        });
      });
    }



    const messageList: MessagesList = new MessagesList({
      chatCardInstances: chatCards,
    });

    const chatCreateModal: ChatCreateModal = new ChatCreateModal({
      onChatCreateSubmit: (event: Event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        this.chatService
          .createChat({ title: formData.get('create-chat') })
          .then(() => {
            this.updateChats();
          });
      },
      submitButtonInstance: new Button(chatCreateModalButtonData),
    });

    const messageBoard: MessagesBoard = new MessagesBoard({
      linkText: 'Профиль',
      linkHref: '/profile',
      messagesListInstance: messageList,
      searchFieldInstance: this.searchField,
      chatCreateModalInstance: chatCreateModal,
    });


    const bottomTooltip: Tooltip = new Tooltip(bottomtooltipData);


    this.sender = new Sender({
      tooltipInstance: bottomTooltip,
      onSubmit: this.handleMessageSubmit,
      mix: 'messenger__sender',
    });


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
