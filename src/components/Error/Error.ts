import { Block } from '../../modules';
import template from './Error.handlebars';

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
    return template(this.props);
  }
}
