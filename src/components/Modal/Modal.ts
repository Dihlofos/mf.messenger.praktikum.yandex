import { Block } from '../../modules';
import { Button } from '../Button/Button';
import template from './Modal.handlebars';

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
    if (this.props) {
      this.deleteButton = this.props.deleteButtonInstance.renderToString();
      this.cancelButton = this.props.cancelButtonInstance.renderToString();
    }
    return template({
      ...this.props,
      deleteButton: this.deleteButton,
      cancelButton: this.cancelButton,
    });
  }
}
