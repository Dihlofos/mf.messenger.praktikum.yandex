import { Block } from '../../modules/Block.js';
import { MessageBoardTemplate } from './MessagesBoard.template.js';
export class MessagesBoard extends Block {
    constructor(props) {
        super('aside', 'messages-board messenger__board', props);
    }
    componentDidMount() {
        setTimeout(() => {
            this.hydrate();
        }, 0);
    }
    initEvents() {
        let chatCreateModalOpener = document.querySelector('.js-create-chat');
        if (chatCreateModalOpener) {
            chatCreateModalOpener.addEventListener('click', () => {
                this.props.chatCreateModalInstance.show();
            });
        }
    }
    render() {
        const Handlebars = window.Handlebars;
        if (this.props) {
            this.messagesList = this.props.messagesListInstance.renderToString();
            this.searchField = this.props.searchFieldInstance.renderToString();
            this.chatCreateModal = this.props.chatCreateModalInstance.renderToString();
        }
        return Handlebars.compile(MessageBoardTemplate)(Object.assign(Object.assign({}, this.props), { messagesList: this.messagesList, searchField: this.searchField, chatCreateModal: this.chatCreateModal }));
    }
}
//# sourceMappingURL=MessagesBoard.js.map