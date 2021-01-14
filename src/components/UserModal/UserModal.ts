import { UserItemProps } from '../../interface';
import { Block } from '../../modules/Block';
import { ChatService } from '../../services/ChatsService';
import { UserService } from '../../services/UserService';
import { formDataToObject } from '../../utils/formDataToObject';
import { Button } from '../Button/Button';
import { UserModalTemplate } from './UserModal.template';

export type UserModalProps = {
  id: number;
  onUserAdded: (id: number) => void;
  onUserRemoved: (id: number) => void;
};

export class UserModal extends Block {
  chatService: ChatService;
  findButton: string;
  userList: UserItemProps[] | null = null;
  usersInChat: UserItemProps[];
  userService: UserService;
  nothingFound: boolean = false;

  constructor(props: UserModalProps) {
    super('div', 'user-modal', props);
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
    const form: HTMLFormElement | null = document.querySelector(
      '.js-user-add-form'
    );

    let milk: HTMLElement | null = document.querySelector('.js-user-add-milk');
    milk?.addEventListener('click', this.hide);

    //user search result
    if (form) {
      form?.addEventListener('submit', (event) => {
        event.preventDefault();
        this.userService = new UserService(formDataToObject(form));
        this.userService.postSearch().then((result) => {
          if (!result.length) this.nothingFound = true;
          this.setProps({
            userList: result,
            nothingFound: !!!result.length,
          });
        });
      });
    }
  }

  onUserAddClick = (e: Event) => {
    const target = e.target as HTMLElement;
    const user: HTMLElement | null = target.closest('.js-user-add');
    if (!!user && !!this.props.onUserAdded) {
      this.props.onUserAdded(Number(user?.dataset.id));
      setTimeout(() => {
        this.updateUsers();
      }, 300);
    }
  };

  onUserRemoveClick = (e: Event) => {
    const target = e.target as HTMLElement;
    const user: HTMLElement | null = target.closest('.js-user-remove');
    if (!!user && !!this.props.onUserRemoved) {
      this.props.onUserRemoved(Number(user?.dataset.id));
      setTimeout(() => {
        this.updateUsers();
      }, 300);
    }
  };

  show = (): void => {
    //user click add
    this.element?.classList.add('is-shown');
    document.addEventListener('click', this.onUserAddClick);
    document.addEventListener('click', this.onUserRemoveClick);
  };

  hide = (): void => {
    //user click remove
    this.element?.classList.remove('is-shown');
    document.removeEventListener('click', this.onUserAddClick);
    document.removeEventListener('click', this.onUserRemoveClick);
  };

  render() {
    const Handlebars = window.Handlebars;
    this.findButton = new Button({
      text: 'Найти',
      type: 'submit',
    }).renderToString();
    return Handlebars.compile(UserModalTemplate)({
      ...this.props,
      userInChat: this.usersInChat,
      findButton: this.findButton,
    });
  }
}
