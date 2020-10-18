import { Block } from './block.js';
import { ButtonProps } from '../interface'

export class Button extends Block {
    constructor(props:ButtonProps) {
      super("div", props);
    }
  
    render() {
      const Handlebars = window.Handlebars;
      let result = Handlebars.compile(`<button class="button {{class}}" type="{{type}}">{{text}}</button>`)(this.props) 
      return result;
    }
  }
  
  
