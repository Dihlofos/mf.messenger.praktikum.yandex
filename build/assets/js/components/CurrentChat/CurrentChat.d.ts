import { UserItemProps } from '../../interface.js';
import { Block } from '../../modules/Block.js';
import { ChatService } from '../../services/ChatsService.js';
import { RenameForm } from '../RenameForm/RenameForm.js';
import { Tooltip } from '../Tooltip/Tooltip.js';
import { UserModal } from '../UserModal/UserModal.js';
export declare type CurrentChatProps = {
    id: number;
    avatar: string;
    title: string;
    time: string;
    mix?: string;
    users?: UserItemProps[];
    onChatDeleted: (id: number) => void;
};
export declare class CurrentChat extends Block {
    chatService: ChatService;
    tooltip: string;
    renameForm: string;
    userAddModal: string;
    tooltipInstance: Tooltip;
    renameFormInstance: RenameForm;
    userAddModalIntance: UserModal;
    users: UserItemProps[];
    constructor(props: CurrentChatProps);
    componentDidMount(): void;
    updateUsers(): void;
    onUserAdded(id: number): void;
    onUserRemoved(id: number): void;
    onTooltipClick(event: Event): void;
    initEvents(): void;
    hideTooltip: (event: Event) => void;
    showTooltip: () => void;
    render(): any;
}
