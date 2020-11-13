import { Block } from '../../modules/Block.js';
import { ChatService } from '../../services/ChatsService.js';
import { RenameForm } from '../RenameForm/RenameForm.js';
import { Tooltip } from '../Tooltip/Tooltip.js';
import { UserModal } from '../UserModal/UserModal.js';
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
        this.tooltipInstance = new Tooltip({
            mix: 'tooltip--top-right',
            onTooltipClick: this.onTooltipClick.bind(this),
            iconButtons: [
                {
                    name: 'Собеседники',
                    target: 'addUser',
                    svg: '<svg width="22" fill="#40375C" height="22" encoding="UTF-8"?><svg enable-background="new 0 0 512 512"  version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m491.84 156.43c-19.471-45.946-51.936-85.013-92.786-112.64-40.838-27.624-90.162-43.797-143.06-43.79-35.254-2e-3 -68.946 7.18-99.571 20.158-45.945 19.472-85.013 51.935-112.64 92.785-27.624 40.836-43.798 90.161-43.791 143.06-2e-3 35.255 7.181 68.948 20.159 99.573 19.471 45.946 51.937 85.013 92.786 112.64 40.838 27.624 90.162 43.797 143.06 43.79 35.253 2e-3 68.946-7.18 99.571-20.158 45.945-19.471 85.013-51.935 112.64-92.785 27.625-40.837 43.798-90.163 43.791-143.06 2e-3 -35.256-7.181-68.948-20.159-99.573zm-31.428 185.83c-16.851 39.781-45.045 73.723-80.476 97.676-35.443 23.953-78.02 37.926-123.94 37.933-30.619-2e-3 -59.729-6.218-86.255-17.454-39.781-16.851-73.724-45.044-97.677-80.475-23.955-35.442-37.929-78.02-37.936-123.94 2e-3 -30.62 6.219-59.731 17.454-86.257 16.851-39.781 45.045-73.724 80.476-97.676 35.443-23.954 78.021-37.927 123.94-37.934 30.619 2e-3 59.729 6.218 86.255 17.454 39.781 16.85 73.724 45.044 97.677 80.475 23.953 35.443 37.927 78.02 37.934 123.94-2e-3 30.619-6.218 59.73-17.453 86.256z"/><path d="m389.59 239.3h-116.9v-116.9c0-9.222-7.477-16.699-16.699-16.699s-16.699 7.477-16.699 16.699v116.9h-116.9c-9.222 0-16.699 7.477-16.699 16.699s7.477 16.699 16.699 16.699h116.9v116.9c0 9.222 7.477 16.699 16.699 16.699s16.699-7.477 16.699-16.699v-116.9h116.9c9.222 0 16.699-7.477 16.699-16.699s-7.476-16.699-16.699-16.699z"/></svg>',
                },
                // {
                //   name: 'Изменить аватар',
                //   target: 'changeAvatar',
                //   svg:
                //     '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1.5H18C19.3807 1.5 20.5 2.61929 20.5 4V14L14.5194 12.4052C13.5108 12.1362 12.4714 12 11.4275 12H10.5725C9.52864 12 8.48921 12.1362 7.48057 12.4052L1.5 14V4C1.5 2.61929 2.61929 1.5 4 1.5ZM0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V18C22 20.2091 20.2091 22 18 22H4C1.79086 22 0 20.2091 0 18V4ZM8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z" fill="#40375C" /></svg>',
                // },
                {
                    name: 'Удалить чат',
                    target: 'deleteChat',
                    svg: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="10.25" stroke="#40375C" stroke-width="1.5" /></svg>',
                },
            ],
        });
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
            // if (button.dataset.target === 'changeAvatar') {
            //   console.log('changeAvatar');
            // }
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
        const template = `
        <div class="current-chat__wrapper">
          <div class="current-chat__image">
            <img width="34" height="34" src="{{avatar}}" alt="{{title}}_avatar" />
          </div>
          <div class="current-chat__content">
            <h1 class="current-chat__name">{{title}}</h1>
            {{#if users}}
                <p class="current-chat__text">
                  {{#each users}}
                    <span>{{this.display_name}},</span>
                  {{/each}}
                </p>
            {{/if}}
          </div>
          <div class="current-chat__actives">
              {{{tooltip}}}
              <button class="current-chat__btn js-current-chat-tooltip-trigger js-focus-visible" type="button">
                <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1.5" cy="2" r="1.5" fill="#40375C" />
                  <circle cx="1.5" cy="8" r="1.5" fill="#40375C" />
                  <circle cx="1.5" cy="14" r="1.5" fill="#40375C" />
                </svg>
              </button>
          </div>
        </div>
        {{{renameForm}}}
        {{{userAddModal}}}
        `;
        this.tooltip = this.tooltipInstance.renderToString();
        this.renameForm = this.renameFormInstance.renderToString();
        this.userAddModal = this.userAddModalIntance.renderToString();
        return Handlebars.compile(template)(Object.assign(Object.assign({}, this.props), { tooltip: this.tooltip, renameForm: this.renameForm, userAddModal: this.userAddModal }));
    }
}
//# sourceMappingURL=CurrentChat.js.map