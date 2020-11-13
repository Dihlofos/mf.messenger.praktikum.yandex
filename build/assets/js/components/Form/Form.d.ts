import { Block } from '../../modules/Block.js';
import { Router } from '../../modules/Router.js';
import { AuthService } from '../../services/AuthService.js';
import { Button } from '../Button/Button.js';
import { Field } from '../Field/Field.js';
export declare type FormProps = {
    title: string;
    fieldInstances: Field[];
    buttonInstance: Button;
    linkText: string;
    linkHref: string;
    action: string;
    error: string;
};
export declare class Form extends Block {
    button: string;
    fields: string;
    authService: AuthService;
    router: Router;
    constructor(props: FormProps);
    componentDidMount(): void;
    initEvents(): void;
    onSubmit(e: Event, form: HTMLFormElement | null): void;
    onError(error: string): void;
    render(): any;
}
