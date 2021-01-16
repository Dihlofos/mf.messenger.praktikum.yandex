import { Block } from '../../modules';
import teamplate from './ChatCard.handlebars';

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
    return teamplate(this.props);
  }
}
