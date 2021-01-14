import { Block } from '../../modules/Block';
import { ChatCard } from '../ChatCard/ChatCard';
import { MessagesListTemplate } from './MessagesList.template';

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
