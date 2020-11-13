import { Block } from '../../modules/Block.js';
import { Button } from '../Button/Button.js';

export type ModalProps = {
  title: string;
  deleteButtonInstance: Button;
  cancelButtonInstance: Button;
};

export class Modal extends Block {
  deleteButton: string;
  cancelButton: string;

  constructor(props: ModalProps) {
    super('div', 'modal', props);
  }

  show(): void {
    this.element.classList.add('is-shown');
  }

  hide(): void {
    this.element.classList.remove('is-shown');
  }

  render() {
    const Handlebars = window.Handlebars;
    if (this.props) {
      this.deleteButton = this.props.deleteButtonInstance.renderToString();
      this.cancelButton = this.props.cancelButtonInstance.renderToString();
    }

    const template = `
        <div class="modal__milk js-milk"></div>
        <div class="modal__box">
            <div class="modal__delete-dialog">
                <h3 class="modal__title">{{title}}</h3>
                <div class="modal__buttons">
                    {{{deleteButton}}}
                    {{{cancelButton}}}
                </div>
            </div>
        </div>
        `;
    return Handlebars.compile(template)({
      ...this.props,
      deleteButton: this.deleteButton,
      cancelButton: this.cancelButton,
    });
  }
}
