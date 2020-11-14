import { Block } from '../../modules/Block.js';
import { ChatService } from '../../services/ChatsService.js';
import { UserService } from '../../services/UserService.js';
import { formDataToObject } from '../../utils/formDataToObject.js';
import { Button } from '../Button/Button.js';
import { UserModalTemplate } from './UserModal.template.js';
export class UserModal extends Block {
    constructor(props) {
        super('div', 'user-modal', props);
        this.userList = null;
        this.nothingFound = false;
        this.onUserAddClick = (e) => {
            const target = e.target;
            const user = target.closest('.js-user-add');
            if (!!user && !!this.props.onUserAdded) {
                this.props.onUserAdded(Number(user === null || user === void 0 ? void 0 : user.dataset.id));
                setTimeout(() => {
                    this.updateUsers();
                }, 0);
            }
        };
        this.onUserRemoveClick = (e) => {
            const target = e.target;
            const user = target.closest('.js-user-remove');
            if (!!user && !!this.props.onUserRemoved) {
                this.props.onUserRemoved(Number(user === null || user === void 0 ? void 0 : user.dataset.id));
                setTimeout(() => {
                    this.updateUsers();
                }, 0);
            }
        };
        this.show = () => {
            var _a;
            //user click add
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.classList.add('is-shown');
            document.addEventListener('click', this.onUserAddClick);
            document.addEventListener('click', this.onUserRemoveClick);
        };
        this.hide = () => {
            var _a;
            //user click remove
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.classList.remove('is-shown');
            document.removeEventListener('click', this.onUserAddClick);
            document.removeEventListener('click', this.onUserRemoveClick);
        };
        this._instances.push(this);
    }
    componentDidMount() {
        this.chatService = new ChatService();
        setTimeout(() => {
            this.hydrate();
        }, 0);
        this.updateUsers();
    }
    updateUsers() {
        this.chatService.getChatUsers(this.props.id).then((item) => {
            this.setProps(Object.assign(this.props, { usersInChat: item }));
        });
    }
    initEvents() {
        const form = document.querySelector('.js-user-add-form');
        let milk = document.querySelector('.js-user-add-milk');
        milk === null || milk === void 0 ? void 0 : milk.addEventListener('click', this.hide);
        //user search result
        if (form) {
            form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => {
                event.preventDefault();
                this.userService = new UserService(formDataToObject(form));
                this.userService.postSearch().then((result) => {
                    if (!result.length)
                        this.nothingFound = true;
                    this.setProps({
                        userList: result,
                        nothingFound: !!!result.length,
                    });
                });
            });
        }
    }
    render() {
        const Handlebars = window.Handlebars;
        this.findButton = new Button({
            text: 'Найти',
            type: 'submit',
        }).renderToString();
        return Handlebars.compile(UserModalTemplate)(Object.assign(Object.assign({}, this.props), { userInChat: this.usersInChat, findButton: this.findButton }));
    }
}
//# sourceMappingURL=UserModal.js.map