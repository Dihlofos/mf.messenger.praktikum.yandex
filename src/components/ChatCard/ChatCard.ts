import { Block } from '../../modules/Block';
import { ChatCardTemplate } from './ChatCard.template';

export type ChatCardProps = {
  id: number;
  onChatCardClick: (chat: ChatCardProps) => void;
  avatar: string;
  title: string;
  text: string;
  fulltime: string;
  time: string;
  unread?: number;
  mix?: string;
};

export class ChatCard extends Block {
  constructor(props: ChatCardProps) {
    super('li', '', props);
    this._instances.push(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.hydrate();
    }, 0);
  }

  initEvents() {
    this.element?.addEventListener('click', () => {
      this.props.onChatCardClick(this.props);
    });
  }

  render() {
    const Handlebars = window.Handlebars;
    return Handlebars.compile(ChatCardTemplate)(this.props);
  }
}
