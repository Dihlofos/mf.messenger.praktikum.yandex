import { Block } from '../../modules/Block.js';

export type ErrorProps = {
  errorText: string,
  errorDescription: string,
  backText: string,
  backLink: string,
}

export class Error extends Block {
    constructor(props:ErrorProps) {          
      super("div", 'error', props);
    }
  
    render() {
      const Handlebars = window.Handlebars;
      const template : string | undefined = `        
          <h1 class="error__title">{{errorText}}</h1>
          <p class="error__text">{{errorDescription}}</p>
          <a href="{{backLink}}" class="error__link js-focus-visible">{{backText}}</a>
          {{{button}}}
        `;            
      return Handlebars.compile(template)(this.props);      
    }
  }