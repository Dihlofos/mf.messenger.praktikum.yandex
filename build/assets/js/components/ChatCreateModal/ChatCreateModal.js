import { Block } from '../../modules/Block.js';
import { ChatCreateModalTemplate } from './ChatCreateModal.template.js';
export class ChatCreateModal extends Block {
    constructor(props) {
        super('div', 'chat-create-modal', props);
        this._instances.push(this);
    }
    componentDidMount() {
        setTimeout(() => {
            this.hydrate();
        }, 0);
    }
    initEvents() {
        const form = document.querySelector('.js-chat-create-form');
        const milk = document.querySelector('.js-chat-create-modal-milk');
        milk === null || milk === void 0 ? void 0 : milk.addEventListener('click', this.hide.bind(this));
        form === null || form === void 0 ? void 0 : form.addEventListener('submit', this.props.onChatCreateSubmit);
    }
    show() {
        var _a;
        (_a = this.element) === null || _a === void 0 ? void 0 : _a.classList.add('is-shown');
    }
    hide() {
        var _a;
        (_a = this.element) === null || _a === void 0 ? void 0 : _a.classList.remove('is-shown');
    }
    render() {
        const Handlebars = window.Handlebars;
        this.submitButton = this.props.submitButtonInstance.renderToString();
        return Handlebars.compile(ChatCreateModalTemplate)(Object.assign(Object.assign({}, this.props), { submitButton: this.submitButton }));
    }
}
//# sourceMappingURL=ChatCreateModal.js.map