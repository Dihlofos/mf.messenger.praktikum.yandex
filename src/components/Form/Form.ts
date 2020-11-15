import { Block } from '../../modules/Block.js';
import { Router } from '../../modules/Router.js';
import { AuthService } from '../../services/AuthService.js';
import { formDataToObject } from '../../utils/formDataToObject.js';
import { Button } from '../Button/Button.js';
import { Field } from '../Field/Field.js';
import { FormTemplate } from './Form.template.js';

export type FormProps = {
  title: string;
  fieldInstances: Field[];
  buttonInstance: Button;
  linkText: string;
  linkHref: string;
  action: string;
  error: string;
};

export class Form extends Block {
  button: string;
  fields: string;
  authService: AuthService;
  router: Router;

  constructor(props: FormProps) {
    super('main', 'dark centered-content', props);
    this._instances.push(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.hydrate();
    }, 0);
  }

  initEvents() {
    const form: HTMLFormElement | null = this._element?.querySelector('form');
    form?.addEventListener('submit', (e: Event) => {
      this.onSubmit(e, form);
    });
  }

  onSubmit(e: Event, form: HTMLFormElement | null) {
    e.preventDefault();
    let errors: string[] = [];
    this.props.fieldInstances.forEach((field: any) => {
      field.validation();
      if (field.getValidationError()) errors.push(field.getValidationError());
    });

    if (!!!errors.length && form) {
      this.authService = new AuthService(formDataToObject(form));
      this.router = new Router('root');

      if (this.props.action === 'signin') {
        this.authService
          .signin()
          .then((_) => {
            this.router.go('/messenger');
          })
          .catch((error) => {
            this.onError(error.reason);
          });
      } else {
        this.authService
          .signup()
          .then((_) => {
            this.router.go('/messenger');
          })
          .catch((error) => {
            this.onError(error.reason);
          });
      }
    }
  }

  onError(error: string) {
    this.setProps({ error });
  }

  render() {
    const Handlebars = window.Handlebars;
    if (this.props) {
      this.button = this.props.buttonInstance.renderToString();
      this.fields = this.props.fieldInstances.map((item: Field) =>
        item.renderToString()
      );
    }
    return Handlebars.compile(FormTemplate)({
      ...this.props,
      button: this.button,
      fields: this.fields,
    });
  }
}
