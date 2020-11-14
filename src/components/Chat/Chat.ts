import { Block } from '../../modules/Block.js';
import { ChatTemplate } from './Chat.template.js';

export type ChatProps = {
  mix?: string;
  chatGroups: {
    date: string;
    chats: {
      content: string;
      read?: boolean;
      mix?: string;
      time: string;
    }[];
  }[];
};

export class Chat extends Block {
  messages: string[];
  constructor(props: ChatProps) {
    super('main', 'chat', props);
  }

  render() {
    const Handlebars = window.Handlebars;
    return Handlebars.compile(ChatTemplate)({
      ...this.props,
      messages: this.messages,
    });
  }
}
