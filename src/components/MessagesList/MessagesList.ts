import { Block } from '../../modules/Block.js';
import { ChatCard } from '../ChatCard/ChatCard.js';

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

    let template = `
      {{#if messages}}
        {{#each messages}}
          {{{this}}}
        {{/each}}
      {{else}}
        <p class="messages-list__empty">У вас еще нет ни одного чата.</p>
      {{/if}}

      `;
    return Handlebars.compile(template)({
      ...this.props,
      messages: this.messages,
    });
  }
}
