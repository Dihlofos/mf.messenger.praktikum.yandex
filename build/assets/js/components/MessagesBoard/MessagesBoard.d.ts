import { Block } from "../../modules/Block.js";
import { Field } from "../Field/Field.js";
import { MessagesList } from "../MessagesList/MessagesList.js";
export declare type MessagesBoardProps = {
    linkText: string;
    linkHref: string;
    messagesListInstance: MessagesList;
    searchFieldInstance: Field;
};
export declare class MessagesBoard extends Block {
    messagesList: string;
    searchField: string;
    constructor(props: MessagesBoardProps);
    render(): any;
}
