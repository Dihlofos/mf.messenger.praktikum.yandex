import { Block } from '../../modules/Block.js';

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
    const template: string | undefined = `
        <div class="error">
          <h1 class="error__title">{{errorText}}</h1>
          <p class="error__text">{{errorDescription}}</p>
          <a href="{{backLink}}" class="error__link js-focus-visible">{{backText}}</a>
          {{{button}}}
        </div>
        `;
    return Handlebars.compile(template)(this.props);
  }
}
