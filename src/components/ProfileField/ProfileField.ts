import { Block } from '../../modules';
import validateField from '../../utils/validateField';
import template from './ProfileField.handlebars';

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
    setTimeout(() => {
      this.hydrate();
    }, 0);
  }

  initEvents() {
    const inputElement = this._element?.querySelector('input');

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
    const errorElement = this._element.querySelector('.js-error');
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
    return template(this.props);
  }
}
