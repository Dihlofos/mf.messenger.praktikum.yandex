import { Block } from '../../modules/Block.js';
export class ChatCreaModal extends Block {
    constructor(props) {
        super('div', 'chat-create-modal', props);
        this._instances.push(this);
    }
    render() {
        const Handlebars = window.Handlebars;
        let template = `
      <form class="chat-create-modal__form">
        <input class="chat-create-modal__input" id="create-chat" name="create-chat" type="text" placeholder="Название нового чата"/>

      </form>

    `;
        return Handlebars.compile(template)(this.props);
    }
}
//# sourceMappingURL=ChatCreateModal.js.map