import { Block } from '../../modules/Block.js';
import { RenamteFormTemplate } from './RenanmeForm.template.js';
export class RenameForm extends Block {
    constructor(props) {
        super('div', 'rename-form', props);
        this._instances.push(this);
    }
    componentDidMount() {
        //TODO - как бы избавиться от setTimeout
        setTimeout(() => {
            this.hydrate();
        }, 0);
    }
    show() {
        this.element.classList.add('is-shown');
    }
    hide() {
        this.element.classList.remove('is-shown');
    }
    render() {
        const Handlebars = window.Handlebars;
        return Handlebars.compile(RenamteFormTemplate)(this.props);
    }
}
//# sourceMappingURL=RenameForm.js.map