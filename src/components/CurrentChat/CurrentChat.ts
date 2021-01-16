import { UserItemProps } from '../../interface';
import { Block } from '../../modules';
import { ChatsService } from '../../services';
import { RenameForm } from '../RenameForm/RenameForm';
import { Tooltip } from '../Tooltip/Tooltip';
import { UserModal } from '../UserModal/UserModal';
import currentChatStaticData from './data';
import template from './CurrentChat.handlebars';

export type CurrentChatProps = {
  id: number;
  avatar: string;
  title: string;
  time: string;
  mix?: string;
  users?: UserItemProps[];
  onChatDeleted: (id: number) => void;
};

export class CurrentChat extends Block {
  chatService: ChatsService;

  tooltip: string;

  renameForm: string;

  userAddModal: string;

  tooltipInstance: Tooltip;

  renameFormInstance: RenameForm;

  userAddModalIntance: UserModal;

  users: UserItemProps[];

  constructor(props: CurrentChatProps) {
    super('header', 'current-chat', props);
    this._instances.push(this);
    this.users = this.props.users || [];
  }

  componentDidMount() {
    const { id, title } = this.props;

    this.chatService = new ChatsService();
    this.renameFormInstance = new RenameForm({
      mix: '',
      value: title,
    });

    this.userAddModalIntance = new UserModal({
      id,
      onUserAdded: this.onUserAdded.bind(this),
      onUserRemoved: this.onUserRemoved.bind(this),
    });

    this.tooltipInstance = new Tooltip({
      ...currentChatStaticData.topTooltip,
      onTooltipClick: this.onTooltipClick.bind(this),
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

  onUserAdded(id: number) {
    const data = {
      users: [id],
      chatId: this.props.id,
    };

    this.chatService.putChatUser(data).then(() => {
      this.updateUsers();
    });
  }

  onUserRemoved(id: number) {
    const data = {
      users: [id],
      chatId: this.props.id,
    };

    this.chatService.deleteChatUser(data).then(() => {
      this.updateUsers();
    });
  }

  onTooltipClick(event: Event) {
    const target = event.target as HTMLButtonElement;
    const button = target?.closest('button');
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
    trigger?.addEventListener('click', this.showTooltip);
  }

  hideTooltip = (event: Event) => {
    const target = event.target as HTMLElement;
    const targetbutton = target.closest('.js-current-chat-tooltip-trigger');
    if (!targetbutton && this.tooltipInstance) {
      this.tooltipInstance?.hide();
    }
  };

  showTooltip = () => {
    this.tooltipInstance.show();
  };

  render() {
    this.tooltip = this.tooltipInstance.renderToString();
    this.renameForm = this.renameFormInstance.renderToString();
    this.userAddModal = this.userAddModalIntance.renderToString();
    return template({
      ...this.props,
      tooltip: this.tooltip,
      renameForm: this.renameForm,
      userAddModal: this.userAddModal,
    });
  }
}
