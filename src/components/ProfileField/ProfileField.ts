import { Block } from '../../modules/Block.js';
import { validateField } from '../../utils/validateField.js';

export type ProfileFieldProps = {
  name: string;
  type: string;
  label?: string;
  value?: string;
  placeholder?: string;
  nameField?: boolean;
  mix?: string;
};

export class ProfileField extends Block {
  constructor(props: ProfileFieldProps) {
    super('div', 'profile-field js-field', props);
    this._instances.push(this);
  }

  componentDidMount() {
    //TODO - как бы избавиться от setTimeout
    setTimeout(() => {
      this.hydrate();
    }, 0);
  }

  initEvents() {
    let inputElement = this._element?.querySelector('input');

    inputElement?.addEventListener('focus', () => {
      this.onFocus();
    });

    inputElement?.addEventListener('blur', () => {
      this.onBlur();
    });
  }

  onFocus(): void {
    this.validation();
  }

  onBlur(): void {
    this.validation();
  }

  validation(): void {
    const element = this._element.querySelector('input');
    let errorElement = this._element.querySelector('.js-error');
    if (errorElement && element) {
      if (validateField(element).length) {
        errorElement.textContent = validateField(element);
      } else {
        errorElement.textContent = '';
      }
    }
  }

  getValidationError(): string {
    const element = this._element.querySelector('input');
    if (element) return validateField(element);
    return '';
  }

  render() {
    const Handlebars = window.Handlebars;
    return Handlebars.compile(`
      {{#if nameField}}
        <input
        class="profile-field__input profile-field__input--name"
        id="{{name}}"
        type="{{type}}"
        name="{{name}}"
        value="{{value}}">
      {{^}}
        <input
          class="profile-field__input"
          id="{{name}}"
          type="{{type}}"
          name="{{name}}"
          value="{{value}}"
          placeholder="{{placeholder}}">
        <label class="profile-field__label"
          for="{{name}}">{{label}}</label>
      {{/if}}
        <span class="profile-field__error js-error">{{error}}</span>
    `)(this.props);
  }
}
