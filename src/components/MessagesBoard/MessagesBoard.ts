import { Block } from '../../modules';
import { ChatCreateModal } from '../ChatCreateModal/ChatCreateModal';
import { Field } from '../Field/Field';
import { MessagesList } from '../MessagesList/MessagesList';
import template from './MessagesBoard.handlebars';

export type MessagesBoardProps = {
  linkText: string;
  linkHref: string;
  messagesListInstance: MessagesList;
  searchFieldInstance: Field;
  chatCreateModalInstance: ChatCreateModal;
};

export class MessagesBoard extends Block {
  messagesList: string;

  searchField: string;

  chatCreateModal: string;

  constructor(props: MessagesBoardProps) {
    super('aside', 'messages-board messenger__board', props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.hydrate();
    }, 0);
  }

  initEvents() {
    const chatCreateModalOpener = document.querySelector('.js-create-chat');
    if (chatCreateModalOpener) {
      chatCreateModalOpener.addEventListener('click', () => {
        this.props.chatCreateModalInstance.show();
      });
    }
  }

  render() {
    if (this.props) {
      this.messagesList = this.props.messagesListInstance.renderToString();
      this.searchField = this.props.searchFieldInstance.renderToString();
      this.chatCreateModal = this.props.chatCreateModalInstance.renderToString();
    }
    return template({
      ...this.props,
      messagesList: this.messagesList,
      searchField: this.searchField,
      chatCreateModal: this.chatCreateModal,
    });
  }
}
