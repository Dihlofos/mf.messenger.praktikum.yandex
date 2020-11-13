import { Block } from '../../modules/Block.js';
export class Error extends Block {
    constructor(props) {
        super('main', 'dark centered-content', props);
    }
    render() {
        const Handlebars = window.Handlebars;
        const template = `
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
//# sourceMappingURL=Error.js.map