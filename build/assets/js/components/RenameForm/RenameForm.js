import { Block } from '../../modules/Block.js';
export class RenameForm extends Block {
    constructor(props) {
        super("div", 'rename-form', props);
        this._instances.push(this);
    }
    show() {
        this.element.classList.add('is-shown');
    }
    hide() {
        this.element.classList.remove('is-shown');
    }
    render() {
        const Handlebars = window.Handlebars;
        const template = `
        <form class="rename-form__form js-form" method="POST">
          <input type="text" name="rename-chat" value="Фотография" />
          <button class="button button--mini rename-form__rename-btn js-focus-visible" type="submit">Сохранить</button>
        </form>
        `;
        return Handlebars.compile(template)(this.props);
    }
}
//# sourceMappingURL=RenameForm.js.map