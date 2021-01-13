import { groupMessage } from '../../interface.js';
import { Block } from '../../modules/Block.js';
import { Store } from '../../modules/Store.js';
import { MessageService } from '../../services/MessageService.js';
import { groupMessages } from '../../utils/groupMessages.js';
import { ChatTemplate } from './Chat.template.js';

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

  componentDidUpdate() {
    const chat: HTMLElement = this._element;
    setTimeout(() => {
      chat.scrollTop = chat.scrollHeight;
      chat.style.opacity = "1";
    }, 0)
  }

  handleGetMessages = (chatId: number) => {


    this.setProps(
      Object.assign(this.props, {
        messagesGroup: groupMessages(this.store.get('messages')[chatId])
      })
    );


  }

  render() {
    const { messagesGroup } = this.props;
    if (!messagesGroup) return null;
    const Handlebars = window.Handlebars;
    return Handlebars.compile(ChatTemplate)({
      messagesGroup: messagesGroup,
    });
  }
}
