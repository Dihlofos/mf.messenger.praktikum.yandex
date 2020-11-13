import { Block } from '../../modules/Block.js';
import { ChatService } from '../../services/ChatsService.js';
import { UserService } from '../../services/UserService.js';
import { formDataToObject } from '../../utils/formDataToObject.js';
import { Button } from '../Button/Button.js';
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
                }, 300);
            }
        };
        this.onUserRemoveClick = (e) => {
            const target = e.target;
            const user = target.closest('.js-user-remove');
            if (!!user && !!this.props.onUserRemoved) {
                this.props.onUserRemoved(Number(user === null || user === void 0 ? void 0 : user.dataset.id));
                setTimeout(() => {
                    this.updateUsers();
                }, 300);
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
        let template = `
      <div class="user-modal__box is-shown">
        <div class="user-modal__col">
          <h4 class="user-modal__title">Собеседники</h4>
          <ul class="user-modal__list">
            {{#each usersInChat}}
              <li class="user-modal__item user-modal__item--remove js-user-remove" data-id="{{id}}" title="Выгнать наглеца из чата">
                <img class="user-modal__avatar" src="{{avatar}}" />
                <span class="user-modal__user">{{display_name}}</span>
              </li>
            {{/each}}
          </ul>
        </div>
        <div class="user-modal__col">
          <h4 class="user-modal__title">Добавить собеседника</h4>
          <form class="user-modal__form js-user-add-form">
          <input class="user-modal__input js-focus-visible" id="login" name="login" type="text" autocomplete="off" placeholder="Введите логин пользователя"/>
          {{{findButton}}}
        </form>
        {{#if userList}}
          <ul class="user-modal__list">
            {{#each userList}}
              <li class="user-modal__item js-user-add" data-id="{{id}}">
                <img class="user-modal__avatar" src="{{avatar}}" />
                <span class="user-modal__user">{{display_name}}</span>
              </li>
            {{/each}}
          </ul>
        {{/if}}
        {{#if nothingFound}}
          <div class="user-modal__nothingFound">Не найдено пользователя с таким логином</div>
        {{/if}}
        </div>


      </div>
      <div class="chat-create-modal__milk js-user-add-milk"></div>
    `;
        return Handlebars.compile(template)(Object.assign(Object.assign({}, this.props), { userInChat: this.usersInChat, findButton: this.findButton }));
    }
}
//# sourceMappingURL=UserModal.js.map