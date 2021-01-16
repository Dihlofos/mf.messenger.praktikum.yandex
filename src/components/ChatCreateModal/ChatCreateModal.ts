import { Block } from '../../modules';
import { Button } from '../Button/Button';
import template from './ChatCreateModal.handlebars';

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
      '.js-chat-create-form',
    );
    const milk: HTMLElement | null = document.querySelector(
      '.js-chat-create-modal-milk',
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
    this.submitButton = this.props.submitButtonInstance.renderToString();
    return template({
      ...this.props,
      submitButton: this.submitButton,
    });
  }
}
