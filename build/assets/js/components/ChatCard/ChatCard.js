import { Block } from '../../modules/Block.js';
import { ChatCardTemplate } from './ChatCard.template.js';
export class ChatCard extends Block {
    constructor(props) {
        super('li', '', props);
        this._instances.push(this);
    }
    componentDidMount() {
        setTimeout(() => {
            this.hydrate();
        }, 0);
    }
    initEvents() {
        var _a;
        (_a = this.element) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            this.props.onChatCardClick(this.props);
        });
    }
    render() {
        const Handlebars = window.Handlebars;
        return Handlebars.compile(ChatCardTemplate)(this.props);
    }
}
//# sourceMappingURL=ChatCard.js.map