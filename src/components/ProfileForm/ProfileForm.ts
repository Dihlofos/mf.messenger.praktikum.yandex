import { Block } from '../../modules/Block.js';
import { Avatar } from '../Avatar/Avatar.js';
import { formConsole } from '../../utils/formConsole.js';
import { Button } from '../Button/Button.js';
import { ProfileField } from '../ProfileField/ProfileField.js';

export type FormProps = {
  avatarInstance: Avatar;
  fieldsInstances: ProfileField[];
  nameInstance: ProfileField;
  buttonInstance: Button;
}

export class ProfileForm extends Block {
    button:Button;
    name: ProfileField;
    fields: ProfileField[];
    avatar: Avatar;

    constructor(props:FormProps) {
      super("div", '', props);
      this._instances.push(this);
    }

    initEvents() {
      let form: HTMLFormElement | null = this._element.querySelector('form');
      console.log(form)
      form?.addEventListener('submit', (e) => {
        e.preventDefault();
        let errors: string[] = [];
        this.props.fieldsInstances.forEach((field:any)=>{
          field.validation();
          if (field.getValidationError()) errors.push(field.getValidationError());
        })
        if (this.props.nameInstance.getValidationError()) errors.push(this.props.nameInstance.getValidationError());
        if (!!!errors.length && form) formConsole(form)
      })
    }

    render() {
      const Handlebars = window.Handlebars;
      if (this.props) {
        this.avatar = this.props.avatarInstance.renderToString();
        this.button = this.props.buttonInstance.renderToString();
        this.name = this.props.nameInstance.renderToString();
        this.fields = this.props.fieldsInstances.map((item:ProfileField)=>(item.renderToString()));
      }
      const template = `
        <form class="profile__form js-form" method="POST">
          {{{avatar}}}
          {{{name}}}
          <ul class="profile__field-list">
            {{#each fields}}
              <li class="profile__field-item">
                {{{this}}}
              </li>
            {{/each}}
          </ul>
          {{{button}}}
        </form>
      `
      return Handlebars.compile(template)({...this.props, button: this.button, fields: this.fields, avatar: this.avatar, name: this.name})
    }
  }
