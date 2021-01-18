import { Block } from '../../modules';
import { Chat } from '../../components/Chat/Chat';
import { ChatCard, ChatCardProps } from '../../components/ChatCard/ChatCard';
import { CurrentChat } from '../../components/CurrentChat/CurrentChat';
import { Field } from '../../components/Field/Field';
import { MessagesBoard } from '../../components/MessagesBoard/MessagesBoard';
import { MessagesList } from '../../components/MessagesList/MessagesList';
import { Messenger } from '../../components/Messenger/Messenger';
import { Sender } from '../../components/Sender/Sender';
import { Tooltip } from '../../components/Tooltip/Tooltip';
import messengerData from './data';
import { ChatsService, MessageService, AuthService } from '../../services';
import { ChatCreateModal } from '../../components/ChatCreateModal/ChatCreateModal';
import { Button } from '../../components/Button/Button';
import { MessageSubmit } from '../../interface';

export class MessengerPage extends Block {
  chatService: ChatsService;
  messageService: MessageService;
  authService: AuthService;
  searchField: Field;
  currentChat: CurrentChat | undefined;
  chat: Chat;
  sender: Sender;

  constructor() {
    super('div', 'page');
    this.props = this._makePropsProxy(messengerData);
  }

  componentDidMount() {
    this.authService = new AuthService({});
    this.chatService = new ChatsService();
    this.authService.getUser();
    this.updateChats();
  }

  updateChats() {
    this.chatService
      .getChats()
      .then((chats) => {
        this.setProps({
          ...this.props,
          chatCardsData: chats,
          currentChatInstance: this.currentChat,
        })
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

    this.chat = new Chat({ mix: 'messenger__chat' });
    this.messageService = new MessageService(chatCard.id, { messagesCallback: this.chat.handleGetMessages });

    this.setProps(
      {
        ...this.props,
        currentChatInstance: this.currentChat,
        chatInstance: this.chat,
      }
    );
  }

  render() {
    const {
      searchFieldData,
      chatCardsData,
      bottomtooltipData,
      chatCreateModalButtonData,
    } = this.props;

    this.searchField = new Field(searchFieldData);

    let chatCards: ChatCard[] | null = null;

    if (chatCardsData?.length > 0) {
      chatCards = chatCardsData.map((item: ChatCardProps) => new ChatCard({
        ...item,
        onChatCardClick: (chatCard: ChatCardProps) => {
          this.handleChatCardClick(chatCard);
        },
      }));
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
    return messenger.renderToString();
  }
}

export default MessengerPage;
