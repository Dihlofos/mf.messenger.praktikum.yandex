import { Block } from '../../modules/Block.js';
import { ChatTemplate } from './Chat.template.js';
export class Chat extends Block {
    constructor(props) {
        super('main', 'chat', props);
    }
    render() {
        const Handlebars = window.Handlebars;
        return Handlebars.compile(ChatTemplate)(Object.assign(Object.assign({}, this.props), { messages: this.messages }));
    }
}
//# sourceMappingURL=Chat.js.map