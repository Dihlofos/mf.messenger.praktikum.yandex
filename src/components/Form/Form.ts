import { Block } from '../../modules/Block.js';
import { formConsole } from '../../utils/formConsole.js';
import { Button } from '../Button/Button.js';
import { Field } from '../Field/Field.js';

export type FormProps = {
  title: string;
  fieldInstances: Field[];
  buttonInstance: Button;
  linkText: string;
  linkHref: string;
}

export class Form extends Block {
    button:string;
    fields: Field[];
    constructor(props:FormProps) {
      super("div", 'form', props);
    }

    initEvents() {
      let form: HTMLFormElement | null = this._element.querySelector('form');
      form?.addEventListener('submit', (e) => {
        e.preventDefault();
        let errors: string[] = [];
        this.props.fieldInstances.forEach((field:any)=>{
          field.validation();
          if (field.getValidationError()) errors.push(field.getValidationError());
        })

        if (!!!errors.length && form) formConsole(form)
      })
    }

    render() {
      const Handlebars = window.Handlebars;
      if (this.props) {
        this.button = this.props.buttonInstance.renderToString();
        this.fields = this.props.fieldInstances.map((item:Field)=>(item.renderToString()));
      }
      const template = `<h1 class="form__title">{{title}}</h1>
        <form class="form__form js-form" method="POST">
            <div class="form__fields">
                {{#each fields}}
                    {{{this}}}
                {{/each}}
            </div>
            <div class="form__buttons">
                {{{button}}}
                <a class="form__link" href="{{linkHref}}">{{linkText}}</a>
            </div>
        </form>`
      return Handlebars.compile(template)({...this.props, button: this.button, fields: this.fields})
    }
  }
