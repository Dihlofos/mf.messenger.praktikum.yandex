import { Block } from '../../modules/Block.js';
import { MessengerTemplate } from './Messenger.template.js';
export class Messenger extends Block {
    constructor(props) {
        super('div', 'light full-screen', props);
    }
    render() {
        const Handlebars = window.Handlebars;
        if (this.props) {
            this.messagesBoard = this.props.messagesBoardInstance.renderToString();
            if (this.props.currentChatInstance)
                this.currentChat = this.props.currentChatInstance.renderToString();
            if (this.props.chatInstance)
                this.chat = this.props.chatInstance.renderToString();
            if (this.props.senderInstance)
                this.sender = this.props.senderInstance.renderToString();
        }
        return Handlebars.compile(MessengerTemplate)({
            messagesBoard: this.messagesBoard,
            currentChat: this.currentChat,
            chat: this.chat,
            sender: this.sender,
        });
    }
}
//# sourceMappingURL=Messenger.js.map