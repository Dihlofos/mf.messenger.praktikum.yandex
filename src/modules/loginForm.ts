import { Block } from './block.js';
import { LoginFormProps } from '../interface'

export class LoginForm extends Block {
    constructor(props:LoginFormProps) {          
      super("div", props);
    }
  
    render() {
      const Handlebars = window.Handlebars;
      if (document.querySelector("#login-form")) {  
        const contentTemplate : string | undefined = document.querySelector("#login-form")?.innerHTML;            
        let result = Handlebars.compile(contentTemplate)(this.props)             
        return result;          
      }
      return null;      
    }
  }