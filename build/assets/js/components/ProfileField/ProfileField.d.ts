import { Block } from '../../modules/Block.js';
export declare type ProfileFieldProps = {
    name: string;
    type: string;
    label?: string;
    value?: string;
    placeholder?: string;
    nameField?: boolean;
    mix?: string;
};
export declare class ProfileField extends Block {
    constructor(props: ProfileFieldProps);
    componentDidMount(): void;
    initEvents(): void;
    onFocus(): void;
    onBlur(): void;
    validation(): void;
    getValidationError(): string;
    render(): any;
}
