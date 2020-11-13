import { Block } from '../../modules/Block.js';
import { Button } from '../Button/Button.js';
export declare type ChatCreateModalProps = {
    onChatCreateSubmit: (event: Event) => void;
    submitButtonInstance: Button;
};
export declare class ChatCreateModal extends Block {
    submitButton: Button;
    constructor(props: ChatCreateModalProps);
    componentDidMount(): void;
    initEvents(): void;
    show(): void;
    hide(): void;
    render(): any;
}
