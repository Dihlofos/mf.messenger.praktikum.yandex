import { Block } from '../../modules/Block.js';
import { Button } from '../Button/Button.js';
export declare type ModalProps = {
    title: string;
    deleteButtonInstance: Button;
    cancelButtonInstance: Button;
};
export declare class Modal extends Block {
    deleteButton: string;
    cancelButton: string;
    constructor(props: ModalProps);
    show(): void;
    hide(): void;
    render(): any;
}
