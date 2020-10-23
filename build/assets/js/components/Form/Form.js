import { Block } from '../../modules/Block.js';
import { formConsole } from '../../utils/formConsole.js';
export class Form extends Block {
    constructor(props) {
        super("div", 'form', props);
    }
    initEvents() {
        let form = this._element.querySelector('form');
        form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
            e.preventDefault();
            let errors = [];
            this.props.fieldInstances.forEach((field) => {
                field.validation();
                if (field.getValidationError())
                    errors.push(field.getValidationError());
            });
            if (!!!errors.length && form)
                formConsole(form);
        });
    }
    render() {
        const Handlebars = window.Handlebars;
        if (this.props) {
            this.button = this.props.buttonInstance.renderToString();
            this.fields = this.props.fieldInstances.map((item) => (item.renderToString()));
        }
        const template = `<h1 class="form__title">{{title}}</h1>
        <form class="form__form js-form" method="POST">
            <div class="form__fields">
                {{#each fields}}
                    {{{this}}}
                {{/each}}
            </div>
            <div class="form__buttons">
                {{{button}}}
                <a class="form__link" href="{{linkHref}}">{{linkText}}</a>
            </div>
        </form>`;
        return Handlebars.compile(template)(Object.assign(Object.assign({}, this.props), { button: this.button, fields: this.fields }));
    }
}
//# sourceMappingURL=Form.js.map