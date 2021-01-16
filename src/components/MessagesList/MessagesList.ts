import { Block } from '../../modules';
import { ChatCard } from '../ChatCard/ChatCard';
import template from './MessagesList.handlebars';

export type MessagesListProps = {
  chatCardInstances: ChatCard[] | null;
};

export class MessagesList extends Block {
  messages: string[];

  constructor(props: MessagesListProps) {
    super('ul', 'messages-list', props);
  }

  render() {
    if (this.props.chatCardInstances) {
      this.messages = this.props.chatCardInstances.map((message: ChatCard) => message.renderToString());
    }
    return template({
      ...this.props,
      messages: this.messages,
    });
  }
}
