import { Block } from '../../modules/Block.js';
export class Tooltip extends Block {
    constructor(props) {
        super("ul", 'tooltip', props);
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
        let template = `
        <ul class="icon-buttons">
            {{#each iconButtons}}
                <li class="icon-buttons__item">
                    <button class="icon-buttons__btn js-focus-visible" type="button">
                        {{{svg}}}
                        <span>{{name}}</span>
                    </button>
                </li>
            {{/each}}
        </ul>`;
        return Handlebars.compile(template)(Object.assign({}, this.props));
    }
}
//# sourceMappingURL=Tooltip.js.map