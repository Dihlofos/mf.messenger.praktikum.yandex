import { Block } from '../../modules';
import template from './RenameForm.handlebars';

export type RenameFormProps = {
  mix: string;
  value: string;
};

export class RenameForm extends Block {
  constructor(props: RenameFormProps) {
    super('div', 'rename-form', props);
    this._instances.push(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.hydrate();
    }, 0);
  }

  show(): void {
    this.element.classList.add('is-shown');
  }

  hide(): void {
    this.element.classList.remove('is-shown');
  }

  render() {
    return template(this.props);
  }
}
