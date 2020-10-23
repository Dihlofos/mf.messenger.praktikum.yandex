import { Block } from '../../modules/Block.js';
import { ChatCard } from '../ChatCard/ChatCard.js';

export type MessagesListProps = {
  chatCardInstances: ChatCard[]
}

export class MessagesList extends Block {
  messages: ChatCard[];
  constructor(props:MessagesListProps) {
    super("ul", 'messages-list', props);
  }

  render() {
    const Handlebars = window.Handlebars;
    if (this.props) {
      this.messages = this.props.chatCardInstances.map((message:ChatCard)=>(message.renderToString()));
    }

    let template = `
      {{#each messages}}
        {{{this}}}
      {{/each}}`
    return Handlebars.compile(template)({...this.props, messages: this.messages})
  }
}


