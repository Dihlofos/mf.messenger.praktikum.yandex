import { Block } from '../../modules/Block.js';
export declare type FieldProps = {
    name: string;
    type: string;
    label: string;
    value: string;
    search?: boolean;
    mix: string;
};
export declare class Field extends Block {
    constructor(props: FieldProps);
    componentDidMount(): void;
    initEvents(): void;
    onFocus(): void;
    onBlur(): void;
    validation(): void;
    getValidationError(): string;
    render(): any;
}
