import { Block } from '../../modules/Block.js';
import { formDataToObject } from '../../utils/formDataToObject.js';
import { UserService } from '../../services/UserService.js';
import { Router } from '../../modules/Router.js';
import { ProfileFormTemplate } from './ProfileForm.template.js';
export class ProfileForm extends Block {
    constructor(props) {
        super('div', '', props);
        this._instances.push(this);
    }
    componentDidMount() {
        setTimeout(() => {
            this.hydrate();
        }, 0);
    }
    initEvents() {
        var _a;
        let form = (_a = this._element) === null || _a === void 0 ? void 0 : _a.querySelector('form');
        form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
            this.onSubmit(e, form);
        });
    }
    onSubmit(e, form) {
        e.preventDefault();
        let errors = [];
        this.props.fieldsInstances.forEach((field) => {
            field.validation();
            if (field.getValidationError())
                errors.push(field.getValidationError());
        });
        if (this.props.nameInstance.getValidationError())
            errors.push(this.props.nameInstance.getValidationError());
        if (!!!errors.length && form) {
            this.userService = new UserService(formDataToObject(form));
            this.router = new Router('root');
            this.userService.putProfile().then((item) => {
                let isHasError = false;
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
            this.fields = this.props.fieldsInstances.map((item) => item.renderToString());
        }
        return Handlebars.compile(ProfileFormTemplate)(Object.assign(Object.assign({}, this.props), { button: this.button, fields: this.fields, avatar: this.avatar, name: this.name }));
    }
}
//# sourceMappingURL=ProfileForm.js.map