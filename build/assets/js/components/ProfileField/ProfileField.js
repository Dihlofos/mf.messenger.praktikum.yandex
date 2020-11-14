import { Block } from '../../modules/Block.js';
import { validateField } from '../../utils/validateField.js';
import { ProfileFieldTemplate } from './ProfileField.template.js';
export class ProfileField extends Block {
    constructor(props) {
        super('div', 'profile-field js-field', props);
        this._instances.push(this);
    }
    componentDidMount() {
        setTimeout(() => {
            this.hydrate();
        }, 0);
    }
    initEvents() {
        var _a;
        let inputElement = (_a = this._element) === null || _a === void 0 ? void 0 : _a.querySelector('input');
        inputElement === null || inputElement === void 0 ? void 0 : inputElement.addEventListener('focus', () => {
            this.onFocus();
        });
        inputElement === null || inputElement === void 0 ? void 0 : inputElement.addEventListener('blur', () => {
            this.onBlur();
        });
    }
    onFocus() {
        this.validation();
    }
    onBlur() {
        this.validation();
    }
    validation() {
        const element = this._element.querySelector('input');
        let errorElement = this._element.querySelector('.js-error');
        if (errorElement && element) {
            if (validateField(element).length) {
                errorElement.textContent = validateField(element);
            }
            else {
                errorElement.textContent = '';
            }
        }
    }
    getValidationError() {
        const element = this._element.querySelector('input');
        if (element)
            return validateField(element);
        return '';
    }
    render() {
        const Handlebars = window.Handlebars;
        return Handlebars.compile(ProfileFieldTemplate)(this.props);
    }
}
//# sourceMappingURL=ProfileField.js.map