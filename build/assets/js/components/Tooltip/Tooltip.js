import { Block } from '../../modules/Block.js';
export class Tooltip extends Block {
    constructor(props) {
        super('ul', 'tooltip', props);
        this._instances.push(this);
    }
    componentDidMount() {
        //TODO - как бы избавиться от setTimeout
        setTimeout(() => {
            this.hydrate();
        }, 0);
    }
    initEvents() {
        const actives = document.querySelectorAll('.js-icon-button');
        if (actives && this.props.onTooltipClick) {
            actives === null || actives === void 0 ? void 0 : actives.forEach((active) => {
                active.addEventListener('click', this.props.onTooltipClick);
            });
        }
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
                    <button class="js-icon-button icon-buttons__btn js-focus-visible" data-target="{{target}}" type="button">
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