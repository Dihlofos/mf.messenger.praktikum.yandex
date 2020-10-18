import { Block } from './block.js';
import { ErrorContentProps } from '../interface'

export class ErrorContent extends Block {
    constructor(props:ErrorContentProps) {          
      super("div", props);
    }
  
    render() {
      const Handlebars = window.Handlebars;
      if (document.querySelector("#error-block")) {  
        const contentTemplate : string | undefined = document.querySelector("#error-block")?.innerHTML;            
        let result = Handlebars.compile(contentTemplate)(this.props)             
        return result;          
      }
      return null;      
    }
  }