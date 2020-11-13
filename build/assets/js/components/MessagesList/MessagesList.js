import { Block } from '../../modules/Block.js';
export class MessagesList extends Block {
    constructor(props) {
        super('ul', 'messages-list', props);
    }
    render() {
        const Handlebars = window.Handlebars;
        if (!!this.props.chatCardInstances) {
            this.messages = this.props.chatCardInstances.map((message) => message.renderToString());
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
        return Handlebars.compile(template)(Object.assign(Object.assign({}, this.props), { messages: this.messages }));
    }
}
//# sourceMappingURL=MessagesList.js.map