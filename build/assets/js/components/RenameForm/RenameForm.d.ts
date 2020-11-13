import { Block } from '../../modules/Block.js';
export declare type RenameFormProps = {
    mix: string;
    value: string;
};
export declare class RenameForm extends Block {
    constructor(props: RenameFormProps);
    componentDidMount(): void;
    show(): void;
    hide(): void;
    render(): any;
}
