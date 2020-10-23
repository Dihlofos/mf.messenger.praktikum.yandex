import { Block } from '../../modules/Block.js';
import { validateField } from '../../utils/validateField.js'

export type FieldProps = {
  name: string;
  type: string;
  label: string;
  value: string;
  search?: boolean;
  mix: string;
}

export class Field extends Block {
  constructor(props:FieldProps) {
    super("div", 'field js-field', props);
    this._instances.push(this);
  }

  initEvents() {
    let inputElement = this._element.querySelector('input');
    inputElement?.classList.toggle('is-value', !!inputElement.value.length);

    inputElement?.addEventListener('focus', () => {
      this.onFocus();
    })

    inputElement?.addEventListener('blur', () => {
      this.onBlur();
    })
  }

  onFocus(): void {
    this.validation();
  }

  onBlur(): void {
    const el = this._element.querySelector('input');
    if (el) {
      el.classList.toggle('is-value', !!el.value.length);
      this.validation()
    }
  }

  validation(): void {
    const element = this._element.querySelector('input');
    let errorElement = this._element.querySelector('.js-error');
    if (errorElement && element) {
      if (validateField(element).length) {
        errorElement.textContent = validateField(element)
      } else {
        errorElement.textContent = '';
      }
    }
  }

  getValidationError():string {
    const element = this._element.querySelector('input');
    if (element) return validateField(element);
    return ''
  }

  render() {
    const Handlebars = window.Handlebars;
    return Handlebars.compile(`
      {{#if search}}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5922 11.4138C10.1603 12.8457 7.83871 12.8457 6.40679 11.4138C4.97486 9.98187 4.97486 7.66027 6.40679 6.22834C7.83871 4.79642 10.1603 4.79642 11.5922 6.22834C13.0242 7.66027 13.0242 9.98187 11.5922 11.4138ZM12.0326 12.7968C10.0724 14.2961 7.25681 14.1494 5.46398 12.3566C3.51136 10.404 3.51136 7.23816 5.46398 5.28553C7.4166 3.33291 10.5824 3.33291 12.535 5.28553C14.3278 7.07828 14.4746 9.8937 12.9754 11.8539L16.5421 15.4206L15.5993 16.3634L12.0326 12.7968Z" fill="#342D09"/>
        </svg>
      {{/if}}
        <input id="{{name}}" type="{{type}}" name="{{name}}" value="{{value}}">
        <label for="{{name}}">{{label}}</label>
        <span class="field__error js-error"></span>
    `)(this.props)
  }
}
