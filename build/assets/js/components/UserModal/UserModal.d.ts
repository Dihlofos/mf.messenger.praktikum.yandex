import { UserItemProps } from '../../interface.js';
import { Block } from '../../modules/Block.js';
import { ChatService } from '../../services/ChatsService.js';
import { UserService } from '../../services/UserService.js';
export declare type UserModalProps = {
    id: number;
    onUserAdded: (id: number) => void;
    onUserRemoved: (id: number) => void;
};
export declare class UserModal extends Block {
    chatService: ChatService;
    findButton: string;
    userList: UserItemProps[] | null;
    usersInChat: UserItemProps[];
    userService: UserService;
    nothingFound: boolean;
    constructor(props: UserModalProps);
    componentDidMount(): void;
    updateUsers(): void;
    initEvents(): void;
    onUserAddClick: (e: Event) => void;
    onUserRemoveClick: (e: Event) => void;
    show: () => void;
    hide: () => void;
    render(): any;
}
