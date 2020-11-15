import { Block } from '../../modules/Block.js';
import { ErrorTemplate } from './Error.template.js';
export class Error extends Block {
    constructor(props) {
        super('main', 'dark centered-content', props);
    }
    render() {
        const Handlebars = window.Handlebars;
        if (Handlebars) {
            return Handlebars.compile(ErrorTemplate)(this.props);
        }
        else {
            return null;
        }
    }
}
//# sourceMappingURL=Error.js.map