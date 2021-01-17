import { Block } from '../../modules';
import { validateField } from '../../utils';
import template from './Field.handlebars';

export type FieldProps = {
  name: string;
  type: string;
  label: string;
  value: string;
  search?: boolean;
  mix: string;
};

export class Field extends Block {
  constructor(props: FieldProps) {
    super('div', 'field js-field', props);
    this._instances.push(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.hydrate();
    }, 0);
  }

  initEvents() {
    const inputElement = this._element?.querySelector('input');
    inputElement?.classList.toggle('is-value', !!inputElement.value.length);

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
    const el = this._element.querySelector('input');
    if (el) {
      el.classList.toggle('is-value', !!el.value.length);
      this.validation();
    }
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
