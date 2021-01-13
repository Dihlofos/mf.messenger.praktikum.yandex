import { Block } from '../../modules/Block.js';
import { Store } from '../../modules/Store.js';
import { groupMessages } from '../../utils/groupMessages.js';
import { ChatTemplate } from './Chat.template.js';
export class Chat extends Block {
    constructor(props) {
        super('main', 'chat', props);
        this.handleGetMessages = (chatId) => {
            this.setProps(Object.assign(this.props, {
                messagesGroup: groupMessages(this.store.get('messages')[chatId])
            }));
        };
        this._instances.push(this);
        this.store = new Store();
    }
    componentDidUpdate() {
        const chat = this._element;
        setTimeout(() => {
            chat.scrollTop = chat.scrollHeight;
            chat.style.opacity = "1";
        }, 0);
    }
    render() {
        const { messagesGroup } = this.props;
        if (!messagesGroup)
            return null;
        const Handlebars = window.Handlebars;
        return Handlebars.compile(ChatTemplate)({
            messagesGroup: messagesGroup,
        });
    }
}
//# sourceMappingURL=Chat.js.map