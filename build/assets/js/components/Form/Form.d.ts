import { Block } from '../../modules/Block.js';
import { Button } from '../Button/Button.js';
import { Field } from '../Field/Field.js';
export declare type FormProps = {
    title: string;
    fieldInstances: Field[];
    buttonInstance: Button;
    linkText: string;
    linkHref: string;
};
export declare class Form extends Block {
    button: string;
    fields: string;
    constructor(props: FormProps);
    initEvents(): void;
    render(): any;
}
