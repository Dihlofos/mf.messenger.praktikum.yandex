import { Block } from '../../modules/Block.js';
import { ErrorTemplate } from './Error.template.js';

export type ErrorProps = {
  errorText: string;
  errorDescription: string;
  backText: string;
  backLink: string;
};

export class Error extends Block {
  constructor(props: ErrorProps) {
    super('main', 'dark centered-content', props);
  }

  render() {
    const Handlebars = window.Handlebars;
    if (Handlebars) {
      return Handlebars.compile(ErrorTemplate)(this.props);
    } else {
      return null;
    }
  }
}
