import { Block } from '../../modules/Block.js';
export declare type ButtonProps = {
    text: string;
    type: 'submit' | 'button';
    mix?: string;
};
export declare class Button extends Block {
    constructor(props: ButtonProps);
    render(): any;
}
