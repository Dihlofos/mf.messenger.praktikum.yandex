import { Block } from '../../modules/Block';
import { ButtonTemplate } from './Button.template';

export type ButtonProps = {
  text: string;
  type: 'submit' | 'button';
  mix?: string;
};

export class Button extends Block {
  constructor(props: ButtonProps) {
    super('div', '', props);
    this._instances.push(this);
  }

  render() {
    const Handlebars = window.Handlebars;
    return Handlebars.compile(ButtonTemplate)(this.props);
  }
}
