import { Block } from '../../modules/Block.js';
import { formConsole } from '../../utils/formConsole.js';
export class ProfileForm extends Block {
    constructor(props) {
        super("div", '', props);
        this._instances.push(this);
    }
    initEvents() {
        let form = this._element.querySelector('form');
        console.log(form);
        form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
            e.preventDefault();
            let errors = [];
            this.props.fieldsInstances.forEach((field) => {
                field.validation();
                if (field.getValidationError())
                    errors.push(field.getValidationError());
            });
            if (this.props.nameInstance.getValidationError())
                errors.push(this.props.nameInstance.getValidationError());
            if (!!!errors.length && form)
                formConsole(form);
        });
    }
    render() {
        const Handlebars = window.Handlebars;
        if (this.props) {
            this.avatar = this.props.avatarInstance.renderToString();
            this.button = this.props.buttonInstance.renderToString();
            this.name = this.props.nameInstance.renderToString();
            this.fields = this.props.fieldsInstances.map((item) => (item.renderToString()));
        }
        const template = `
        <form class="profile__form js-form" method="POST">
          {{{avatar}}}
          {{{name}}}
          <ul class="profile__field-list">
            {{#each fields}}
              <li class="profile__field-item">
                {{{this}}}
              </li>
            {{/each}}
          </ul>
          {{{button}}}
        </form>
      `;
        return Handlebars.compile(template)(Object.assign(Object.assign({}, this.props), { button: this.button, fields: this.fields, avatar: this.avatar, name: this.name }));
    }
}
//# sourceMappingURL=ProfileForm.js.map