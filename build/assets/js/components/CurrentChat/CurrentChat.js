import { Block } from '../../modules/Block.js';
import { ChatService } from '../../services/ChatsService.js';
import { RenameForm } from '../RenameForm/RenameForm.js';
import { Tooltip } from '../Tooltip/Tooltip.js';
import { UserModal } from '../UserModal/UserModal.js';
import { currentChatStaticData } from './data.js';
import { CurrentChatTemplate } from './CurrentChat.template.js';
export class CurrentChat extends Block {
    constructor(props) {
        super('header', 'current-chat', props);
        this.hideTooltip = (event) => {
            var _a;
            const target = event.target;
            const targetbutton = target.closest('.js-current-chat-tooltip-trigger');
            if (!targetbutton && this.tooltipInstance) {
                (_a = this.tooltipInstance) === null || _a === void 0 ? void 0 : _a.hide();
            }
        };
        this.showTooltip = () => {
            this.tooltipInstance.show();
        };
        this._instances.push(this);
        this.users = this.props.users || [];
    }
    componentDidMount() {
        this.chatService = new ChatService();
        this.renameFormInstance = new RenameForm({
            mix: '',
            value: this.props.title,
        });
        this.userAddModalIntance = new UserModal({
            id: this.props.id,
            onUserAdded: this.onUserAdded.bind(this),
            onUserRemoved: this.onUserRemoved.bind(this),
        });
        this.tooltipInstance = new Tooltip(Object.assign(Object.assign({}, currentChatStaticData.topTooltip), { onTooltipClick: this.onTooltipClick.bind(this) }));
        this.updateUsers();
    }
    updateUsers() {
        this.chatService.getChatUsers(this.props.id).then((item) => {
            this.setProps({
                users: item,
                tooltipInstance: this.tooltipInstance,
                userAddModalIntance: this.userAddModalIntance,
            });
        });
    }
    onUserAdded(id) {
        const data = {
            users: [id],
            chatId: this.props.id,
        };
        this.chatService.putChatUser(data).then(() => {
            this.updateUsers();
        });
    }
    onUserRemoved(id) {
        const data = {
            users: [id],
            chatId: this.props.id,
        };
        this.chatService.deleteChatUser(data).then(() => {
            this.updateUsers();
        });
    }
    onTooltipClick(event) {
        const target = event.target;
        const button = target === null || target === void 0 ? void 0 : target.closest('button');
        if (button) {
            if (button.dataset.target === 'renameChat') {
                this.renameFormInstance.show();
            }
            if (button.dataset.target === 'deleteChat') {
                this.props.onChatDeleted(this.props.id);
            }
            if (button.dataset.target === 'addUser') {
                this.userAddModalIntance.show();
            }
        }
    }
    initEvents() {
        const trigger = document.querySelector('.js-current-chat-tooltip-trigger');
        // TODO разобраться с задвоениями кликов
        document.addEventListener('click', this.hideTooltip);
        trigger === null || trigger === void 0 ? void 0 : trigger.addEventListener('click', this.showTooltip);
    }
    render() {
        const Handlebars = window.Handlebars;
        this.tooltip = this.tooltipInstance.renderToString();
        this.renameForm = this.renameFormInstance.renderToString();
        this.userAddModal = this.userAddModalIntance.renderToString();
        return Handlebars.compile(CurrentChatTemplate)(Object.assign(Object.assign({}, this.props), { tooltip: this.tooltip, renameForm: this.renameForm, userAddModal: this.userAddModal }));
    }
}
//# sourceMappingURL=CurrentChat.js.map