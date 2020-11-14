import { Block } from '../../modules/Block.js';
import { Button } from '../Button/Button.js';
import { ChatCreateModalTemplate } from './ChatCreateModal.template.js';

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
    const form: HTMLFontElement | null = document.querySelector(
      '.js-chat-create-form'
    );
    const milk: HTMLElement | null = document.querySelector(
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
    return Handlebars.compile(ChatCreateModalTemplate)({
      ...this.props,
      submitButton: this.submitButton,
    });
  }
}
