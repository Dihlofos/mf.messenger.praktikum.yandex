import { Block } from '../../modules/Block.js';
import { SenderTemplate } from './Sender.template.js';
export class Sender extends Block {
    constructor(props) {
        super('footer', 'sender', props);
        this._instances.push(this);
    }
    componentDidMount() {
        setTimeout(() => {
            this.hydrate();
        }, 0);
    }
    initEvents() {
        var _a, _b;
        const form = (_a = this._element) === null || _a === void 0 ? void 0 : _a.querySelector('form');
        const input = (_b = this._element) === null || _b === void 0 ? void 0 : _b.querySelector('input');
        form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!!!(input === null || input === void 0 ? void 0 : input.value.length)) {
                return false;
            }
            else {
                console.log({
                    message: input === null || input === void 0 ? void 0 : input.value,
                });
            }
        });
    }
    render() {
        const Handlebars = window.Handlebars;
        this.tooltip = this.props.tooltipInstance.renderToString();
        return Handlebars.compile(SenderTemplate)(Object.assign(Object.assign({}, this.props), { tooltip: this.tooltip }));
    }
}
//# sourceMappingURL=Sender.js.map