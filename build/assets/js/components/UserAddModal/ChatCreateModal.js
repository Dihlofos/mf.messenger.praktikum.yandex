import { Block } from '../../modules/Block.js';
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
        let form = document.querySelector('.js-chat-create-form');
        let milk = document.querySelector('.js-chat-create-modal-milk');
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
        let template = `
      <form class="chat-create-modal__form js-chat-create-form">
        <input class="chat-create-modal__input js-focus-visible" id="create-chat" name="create-chat" type="text" placeholder="Название нового чата"/>
        {{{submitButton}}}
      </form>
      <div class="chat-create-modal__milk js-chat-create-modal-milk"></div>
    `;
        return Handlebars.compile(template)(Object.assign(Object.assign({}, this.props), { submitButton: this.submitButton }));
    }
}
//# sourceMappingURL=ChatCreateModal.js.map