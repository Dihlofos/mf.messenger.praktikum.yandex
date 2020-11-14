import { Block } from '../../modules/Block.js';
import { ChatCard } from '../ChatCard/ChatCard.js';
import { MessagesListTemplate } from './MessagesList.template.js';

export type MessagesListProps = {
  chatCardInstances: ChatCard[] | null;
};

export class MessagesList extends Block {
  messages: string[];
  constructor(props: MessagesListProps) {
    super('ul', 'messages-list', props);
  }

  render() {
    const Handlebars = window.Handlebars;
    if (!!this.props.chatCardInstances) {
      this.messages = this.props.chatCardInstances.map((message: ChatCard) =>
        message.renderToString()
      );
    }
    return Handlebars.compile(MessagesListTemplate)({
      ...this.props,
      messages: this.messages,
    });
  }
}
