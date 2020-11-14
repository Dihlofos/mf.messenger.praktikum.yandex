import { Block } from '../../modules/Block.js';
import { ChatCreateModal } from '../ChatCreateModal/ChatCreateModal.js';
import { Field } from '../Field/Field.js';
import { MessagesList } from '../MessagesList/MessagesList.js';
import { MessageBoardTemplate } from './MessagesBoard.template.js';

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
    let chatCreateModalOpener = document.querySelector('.js-create-chat');
    if (chatCreateModalOpener) {
      chatCreateModalOpener.addEventListener('click', () => {
        this.props.chatCreateModalInstance.show();
      });
    }
  }

  render() {
    const Handlebars = window.Handlebars;
    if (this.props) {
      this.messagesList = this.props.messagesListInstance.renderToString();
      this.searchField = this.props.searchFieldInstance.renderToString();
      this.chatCreateModal = this.props.chatCreateModalInstance.renderToString();
    }
    return Handlebars.compile(MessageBoardTemplate)({
      ...this.props,
      messagesList: this.messagesList,
      searchField: this.searchField,
      chatCreateModal: this.chatCreateModal,
    });
  }
}
