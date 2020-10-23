import { Block } from '../../modules/Block.js';
export class MessagesList extends Block {
    constructor(props) {
        super("ul", 'messages-list', props);
    }
    render() {
        const Handlebars = window.Handlebars;
        if (this.props) {
            this.messages = this.props.chatCardInstances.map((message) => (message.renderToString()));
        }
        let template = `
      {{#each messages}}
        {{{this}}}
      {{/each}}`;
        return Handlebars.compile(template)(Object.assign(Object.assign({}, this.props), { messages: this.messages }));
    }
}
//# sourceMappingURL=MessagesList.js.map