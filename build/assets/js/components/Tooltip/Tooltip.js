import { Block } from '../../modules/Block.js';
import { TooltipTemplate } from './Tooltip.template.js';
export class Tooltip extends Block {
    constructor(props) {
        super('ul', 'tooltip', props);
        this._instances.push(this);
    }
    componentDidMount() {
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
        return Handlebars.compile(TooltipTemplate)(Object.assign({}, this.props));
    }
}
//# sourceMappingURL=Tooltip.js.map