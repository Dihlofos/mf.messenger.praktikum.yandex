import { Block } from '../../modules/Block.js';
import { ChatCreateModal } from '../ChatCreateModal/ChatCreateModal.js';
import { Field } from '../Field/Field.js';
import { MessagesList } from '../MessagesList/MessagesList.js';
export declare type MessagesBoardProps = {
    linkText: string;
    linkHref: string;
    messagesListInstance: MessagesList;
    searchFieldInstance: Field;
    chatCreateModalInstance: ChatCreateModal;
};
export declare class MessagesBoard extends Block {
    messagesList: string;
    searchField: string;
    chatCreateModal: string;
    constructor(props: MessagesBoardProps);
    componentDidMount(): void;
    initEvents(): void;
    render(): any;
}
