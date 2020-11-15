import { Block } from '../../modules/Block.js';
import { Router } from '../../modules/Router.js';
import { AuthService } from '../../services/AuthService.js';
import { formDataToObject } from '../../utils/formDataToObject.js';
import { FormTemplate } from './Form.template.js';
export class Form extends Block {
    constructor(props) {
        super('main', 'dark centered-content', props);
        this._instances.push(this);
    }
    componentDidMount() {
        setTimeout(() => {
            this.hydrate();
        }, 0);
    }
    initEvents() {
        var _a;
        const form = (_a = this._element) === null || _a === void 0 ? void 0 : _a.querySelector('form');
        form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
            this.onSubmit(e, form);
        });
    }
    onSubmit(e, form) {
        e.preventDefault();
        let errors = [];
        this.props.fieldInstances.forEach((field) => {
            field.validation();
            if (field.getValidationError())
                errors.push(field.getValidationError());
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
            }
            else {
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
    onError(error) {
        this.setProps({ error });
    }
    render() {
        const Handlebars = window.Handlebars;
        if (this.props) {
            this.button = this.props.buttonInstance.renderToString();
            this.fields = this.props.fieldInstances.map((item) => item.renderToString());
        }
        return Handlebars.compile(FormTemplate)(Object.assign(Object.assign({}, this.props), { button: this.button, fields: this.fields }));
    }
}
//# sourceMappingURL=Form.js.map