import { Block } from '../../modules/Block.js';
export class Button extends Block {
    constructor(props) {
        super('div', '', props);
        this._instances.push(this);
    }
    render() {
        const Handlebars = window.Handlebars;
        const template = `<button class="button js-focus-visible {{mix}}" type="{{type}}">{{text}}</button>`;
        return Handlebars.compile(template)(this.props);
    }
}
//# sourceMappingURL=Button.js.map