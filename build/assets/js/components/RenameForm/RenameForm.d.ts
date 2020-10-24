import { Block } from '../../modules/Block.js';
export declare type RenameFormProps = {
    mix: string;
};
export declare class RenameForm extends Block {
    constructor(props: RenameFormProps);
    show(): void;
    hide(): void;
    render(): any;
}
