import { Block } from '../../modules/Block.js';
import { ModalTemplate } from './Modal.template.js';
export class Modal extends Block {
    constructor(props) {
        super('div', 'modal', props);
    }
    show() {
        this.element.classList.add('is-shown');
    }
    hide() {
        this.element.classList.remove('is-shown');
    }
    render() {
        const Handlebars = window.Handlebars;
        if (this.props) {
            this.deleteButton = this.props.deleteButtonInstance.renderToString();
            this.cancelButton = this.props.cancelButtonInstance.renderToString();
        }
        return Handlebars.compile(ModalTemplate)(Object.assign(Object.assign({}, this.props), { deleteButton: this.deleteButton, cancelButton: this.cancelButton }));
    }
}
//# sourceMappingURL=Modal.js.map