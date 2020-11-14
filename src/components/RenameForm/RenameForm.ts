import { Block } from '../../modules/Block.js';
import { RenamteFormTemplate } from './RenanmeForm.template.js';

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
    //TODO - как бы избавиться от setTimeout
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
    const Handlebars = window.Handlebars;
    return Handlebars.compile(RenamteFormTemplate)(this.props);
  }
}
