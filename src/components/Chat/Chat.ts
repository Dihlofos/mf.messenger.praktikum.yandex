import { groupMessage } from '../../interface';
import { Block, Store } from '../../modules';
import { MessageService } from '../../services';
import { groupMessages } from '../../utils';
import template from './Chat.handlebars';

export type ChatProps = {
  messagesGroup?: groupMessage[];
  mix?: string;
};

export class Chat extends Block {
  store: Store;
  messageService: MessageService;

  constructor(props: ChatProps) {
    super('main', 'chat', props);
    this._instances.push(this);
    this.store = new Store();
  }

  componentDidMount() {
    setTimeout(() => {
      this.hydrate();
    }, 0);
  }

  componentDidUpdate() {
    const chat: HTMLElement = this._element;
    setTimeout(() => {
      chat.scrollTop = chat.scrollHeight;
      chat.style.opacity = '1';
    }, 0);
  }

  handleGetMessages = (chatId: number) => {
    this.setProps({ ...this.props, messagesGroup: groupMessages(this.store.get('messages')[chatId]) })
  }

  render() {
    const { messagesGroup } = this.props;
    if (!messagesGroup) return null;
    return template(this.props);
  }
}
