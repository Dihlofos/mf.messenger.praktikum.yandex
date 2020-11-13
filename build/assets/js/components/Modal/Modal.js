import { Block } from '../../modules/Block.js';
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
        const template = `
        <div class="modal__milk js-milk"></div>
        <div class="modal__box">
            <div class="modal__delete-dialog">
                <h3 class="modal__title">{{title}}</h3>
                <div class="modal__buttons">
                    {{{deleteButton}}}
                    {{{cancelButton}}}
                </div>
            </div>
        </div>
        `;
        return Handlebars.compile(template)(Object.assign(Object.assign({}, this.props), { deleteButton: this.deleteButton, cancelButton: this.cancelButton }));
    }
}
//# sourceMappingURL=Modal.js.map