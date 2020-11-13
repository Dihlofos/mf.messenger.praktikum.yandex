import { UserItemProps } from '../../interface.js';
import { Block } from '../../modules/Block.js';
import { ChatService } from '../../services/ChatsService.js';
import { UserService } from '../../services/UserService.js';
export declare type UserAddModalProps = {
    id: number;
    onUserAdded: (id: number) => void;
};
export declare class UserAddModal extends Block {
    chatService: ChatService;
    findButton: string;
    userList: UserItemProps[] | null;
    usersInChat: UserItemProps[];
    userService: UserService;
    nothingFound: boolean;
    constructor(props: UserAddModalProps);
    componentDidMount(): void;
    initEvents(): void;
    onUserClick: (e: Event) => void;
    show: () => void;
    hide: () => void;
    render(): any;
}
