import { Block } from '../../modules';
import template from './Button.handlebars';

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
    return template(this.props);
  }
}
