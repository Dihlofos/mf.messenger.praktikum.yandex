import { Block } from '../../modules/Block';
import { Avatar } from '../Avatar/Avatar';
import { formDataToObject } from '../../utils/formDataToObject';
import { Button } from '../Button/Button';
import { ProfileField } from '../ProfileField/ProfileField';
import { UserService } from '../../services/UserService';
import { Router } from '../../modules/Router';
import { ProfileFormTemplate } from './ProfileForm.template';

export type ProfileFormProps = {
  avatarInstance: Avatar;
  fieldsInstances: ProfileField[];
  nameInstance: ProfileField;
  buttonInstance: Button;
  error: string;
};

export class ProfileForm extends Block {
  button: string;
  name: string;
  fields: string[];
  avatar: string;
  userService: UserService;
  router: Router;

  constructor(props: ProfileFormProps) {
    super('div', '', props);
    this._instances.push(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.hydrate();
    }, 0);
  }

  initEvents() {
    let form: HTMLFormElement | null = this._element?.querySelector('form');
    form?.addEventListener('submit', (e) => {
      this.onSubmit(e, form);
    });
  }

  onSubmit(e: Event, form: HTMLFormElement | null) {
    e.preventDefault();
    let errors: string[] = [];
    this.props.fieldsInstances.forEach((field: any) => {
      field.validation();
      if (field.getValidationError()) errors.push(field.getValidationError());
    });
    if (this.props.nameInstance.getValidationError())
      errors.push(this.props.nameInstance.getValidationError());

    if (!!!errors.length && form) {
      this.userService = new UserService(formDataToObject(form));
      this.router = new Router('root');

      this.userService.putProfile().then((item) => {
        let isHasError: boolean = false;
        item.forEach((promise) => {
          if (promise.status === 'rejected') {
            this.setProps({ error: promise.reason });
            isHasError = true;
          }
        });
        if (!isHasError) {
          this.router.go('/profile');
        }
      });
    }
  }

  render() {
    const Handlebars = window.Handlebars;
    if (this.props) {
      this.avatar = this.props.avatarInstance.renderToString();
      this.button = this.props.buttonInstance.renderToString();
      this.name = this.props.nameInstance.renderToString();
      this.fields = this.props.fieldsInstances.map((item: ProfileField) =>
        item.renderToString()
      );
    }
    return Handlebars.compile(ProfileFormTemplate)({
      ...this.props,
      button: this.button,
      fields: this.fields,
      avatar: this.avatar,
      name: this.name,
    });
  }
}
