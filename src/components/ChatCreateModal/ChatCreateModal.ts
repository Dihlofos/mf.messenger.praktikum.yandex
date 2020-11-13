import { Block } from '../../modules/Block.js';
import { Button } from '../Button/Button.js';

export type ChatCreateModalProps = {
  onChatCreateSubmit: (event: Event) => void;
  submitButtonInstance: Button;
};

export class ChatCreateModal extends Block {
  submitButton: Button;
  constructor(props: ChatCreateModalProps) {
    super('div', 'chat-create-modal', props);
    this._instances.push(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.hydrate();
    }, 0);
  }

  initEvents() {
    let form: HTMLFontElement | null = document.querySelector(
      '.js-chat-create-form'
    );
    let milk: HTMLElement | null = document.querySelector(
      '.js-chat-create-modal-milk'
    );
    milk?.addEventListener('click', this.hide.bind(this));
    form?.addEventListener('submit', this.props.onChatCreateSubmit);
  }

  show(): void {
    this.element?.classList.add('is-shown');
  }

  hide(): void {
    this.element?.classList.remove('is-shown');
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
    return Handlebars.compile(template)({
      ...this.props,
      submitButton: this.submitButton,
    });
  }
}
