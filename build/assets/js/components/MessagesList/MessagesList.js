import { Block } from '../../modules/Block.js';
import { MessagesListTemplate } from './MessagesList.template.js';
export class MessagesList extends Block {
    constructor(props) {
        super('ul', 'messages-list', props);
    }
    render() {
        const Handlebars = window.Handlebars;
        if (!!this.props.chatCardInstances) {
            this.messages = this.props.chatCardInstances.map((message) => message.renderToString());
        }
        return Handlebars.compile(MessagesListTemplate)(Object.assign(Object.assign({}, this.props), { messages: this.messages }));
    }
}
//# sourceMappingURL=MessagesList.js.map