import { Block } from '../../modules/Block.js';
import { ButtonTemplate } from './Button.template.js';
export class Button extends Block {
    constructor(props) {
        super('div', '', props);
        this._instances.push(this);
    }
    render() {
        const Handlebars = window.Handlebars;
        return Handlebars.compile(ButtonTemplate)(this.props);
    }
}
//# sourceMappingURL=Button.js.map